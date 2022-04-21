
const toggle = document.getElementById('toggle')
const menu = document.getElementById('menu')
const bag = document.getElementById('bag')
const bagShopping = document.getElementById('bag-shopping')
const cerrar = document.getElementById('close')
const cardProduct = document.getElementById('card-product')
const remover = document.getElementById('remove')
const cardsProducts = document.getElementById('cards-products')
const showAll = document.getElementById('show-all')

toggle.onclick = () => {
    menu.classList.toggle('active')
}

bag.onclick = () => {
    bagShopping.classList.toggle('active')
}


cerrar.onclick = () => {
    bagShopping.classList.remove('active')
}

remover.onclick = () => {
    cardProduct.classList.add('disable')
}

showAll.onclick = () => {
    cardsProducts.classList.add('disable')
}