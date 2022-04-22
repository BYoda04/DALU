
const toggle = document.getElementById('toggle')
const menu = document.getElementById('menu')
const bag = document.getElementById('bag')
const bagShopping = document.getElementById('bag-shopping')
const cerrar = document.getElementById('close')
const cardProduct = document.getElementById('card-product')
const remover = document.getElementById('remove')
const cardsProducts = document.getElementById('cards-products')
const showAll = document.getElementById('show-all')
const cardsContainer = document.getElementById('cards-container')

toggle.onclick = () => {
    menu.classList.toggle('active')
}

bag.onclick = () => {
    bagShopping.classList.toggle('active')
}


cerrar.onclick = () => {
    bagShopping.classList.remove('active')
}

showAll.onclick = () => {
    cardsProducts.classList.toggle('disable')
    localStorage.clear()
}

cardsContainer.addEventListener('click', event => {4

    /* <div class="card-product" id="card-product">
        <div><img src="img/women-card.png"></div>
            <div>
                <h2>Women Hoddie</h2>
                    <div class="stock-container">
                            <ion-icon name="remove-outline"></ion-icon>
                            <span>1</span>
                            <ion-icon name="add-outline"></ion-icon>
                    </div>
                </div>
                <div class="remove" id="remove"><ion-icon name="bag-remove-outline"></ion-icon></div>
        </div> */

    /* remover.onclick = () => {
            cardProduct.classList.add('disable')
        } */

    /*{name:, items:, img:,}*/ 

    const identify = event.target
    const producto = event.path
    const textProducto = producto[6].innerText

    if (identify.matches('ion-icon')) {
        const nameProductoArray = textProducto.split(' ')
        const nameProduct = `${nameProductoArray[0]} ${nameProductoArray[1]}`
        console.log(producto[6]);
    }

})