const $form = document.querySelector('.js-form')
const $input = document.querySelector('.js-input')
const $list = document.querySelector('.js-list')

$form.addEventListener('submit', addItem)

const ITEMS = [
    // {value: '123', isCompleted: true}
]

function addItem(e) {
    e.preventDefault()

    ITEMS.push({ value: $input.value })

    $input.value = null

    draw()
}

window.markComplete = function(index)  {
    ITEMS[index].isCompleted = true

    draw()
}

function draw() {
    $list.innerHTML = ''

    ITEMS.forEach(item => {
        $list.innerHTML += `<li class="${item.isCompleted ? 'is__completed' : ''}">${item.value}</li>`
    })
}

 
draw()