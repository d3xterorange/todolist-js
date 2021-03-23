const addTaskBtn = document.querySelector('.todolist__addTask');
const taskList = document.querySelector('.todolist__list');
const inputTask = document.querySelector('.todolist__inputField');
const item = document.querySelector('.todolist__item');
const selectedFilter = document.querySelector('.todolist__filter');
let arrTodo = [];

console.log(arrTodo);

addTaskBtn.addEventListener('click', addItem)
inputTask.addEventListener('keydown', function(e){
    if (e.code == 'Enter') addItem();
})

taskList.addEventListener('click', doneItem);
selectedFilter.addEventListener('click', filterList)


function addItem(e){
    todoItem = document.createElement('li');
    arrTodo.push(inputTask.value);
    todoItem.innerText = arrTodo.pop();
    todoItem.classList.add('todolist__item');
    taskList.appendChild(todoItem);
    inputTask.value='';
}

function doneItem(e){
    const item = e.target;
    if (item.classList[0] == 'todolist__item') item.classList.toggle('done');
}

function filterList(e){
    const todolist = taskList.childNodes;
    todolist.forEach(function(item){
       switch(e.target.value){
            case 'all': {
                item.style.display = 'list-item';
                break;
            }
            case 'done':{
                if (item.classList.contains('done')){
                item.style.display = 'list-item';
                } else {
                item.style.display = 'none';
                }
                break;
            }
            case 'undone': {
                if (!item.classList.contains('done')){
                item.style.display = 'list-item';
                } else {
                item.style.display = 'none';
                }
                break;
            }
       }
    })
}