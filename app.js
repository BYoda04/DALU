
const toggle = document.getElementById('toggle')
const menu = document.getElementById('menu')
const bag = document.getElementById('bag')
const bagShopping = document.getElementById('bag-shopping')
const close = document.getElementById('close')
const counter = document.getElementById('counter')

toggle.onclick = () => {
    menu.classList.toggle('active')
}

bag.onclick = () => {
    bagShopping.classList.toggle('active')
}


close.onclick = () => {
    bagShopping.classList.remove('active')
}