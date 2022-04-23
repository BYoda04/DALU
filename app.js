
/*HTML IDENTIFY*/ 

const toggle = document.getElementById('toggle')
const menu = document.getElementById('menu')
const bag = document.getElementById('bag')
const bagShopping = document.getElementById('bag-shopping')
const cerrar = document.getElementById('close')
const cardsProducts = document.getElementById('cards-products')
const showAll = document.getElementById('show-all')
const cardsContainer = document.getElementById('cards-container')
const counter = document.getElementById('counter')



let carrito = []
let cardsProductsArray = cardsProducts.children


/*VALUE*/

let carritoObject
let counterProductsArray
let counterProducts
let nameProduct
let srcLink
let stockTotal
let producto
let containerImagen
let identidad

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
    cardsProducts.innerHTML = ""
    counter.innerHTML = 0
    localStorage.clear()
    carrito = []
}

/*SAVES LOCAL STORAGE*/

let save = JSON.parse(localStorage.getItem('carrito'))


/*ADD BAG SHOPPING*/


const addBagShopping = (img, name, cantidad) => {


    if (cardsProductsArray[0] !== undefined) {

        let validar =true

        for (let i = 0; i < cardsProductsArray.length; i++) {
        
            let proob = cardsProductsArray[i].firstElementChild
            let proob2 = proob.firstElementChild
            let proob3 = proob2.src 
        
            if (proob3 === img) {   
                
                let into = producto[6].children
                let into2 = into[1].children
                let into3 = into2[0].children

                for (let i = 0; i < into3.length; i++) {
                    
                    let into4 = into3[i].children
                    let into5 = into4[0].children
                    let into6 = into5[0].src

                    if (into6 === proob3) {
                        
                        const counterItem = document.querySelectorAll('.counter-item')

                        if (parseInt(counterItem[i].innerHTML) < stockTotal) {
                            counterItem[i].innerHTML = parseInt(counterItem[i].innerHTML) + 1
                        }


                    }

                }
                
                validar = false
                }
        }

        if (validar) {

            cardsProducts.innerHTML += `
            <div class="card-product">
                <div><img src="${img}"></div>
                    <div>
                        <h2>${name}</h2>
                        <div class="stock-container">
                                <p class='minun'>&#45;</p>
                                <span class='counter-item'>${cantidad}</span>
                                <p class='plus'>&#43;</p>
                        </div>
                    </div>
                    <div class="remove">
                        <p class='x'>X</p>
                    </div>
            </div>
            `

        }

    } else {
        
        cardsProducts.innerHTML += `
        <div class="card-product">
            <div><img src="${img}"></div>
                <div>
                    <h2>${name}</h2>
                    <div class="stock-container">
                            <p class='minun'>&#45;</p>
                            <span class='counter-item'>${cantidad}</span>
                            <p class='plus'>&#43;</p>
                    </div>
                </div>
                <div class="remove">
                    <p class='x'>X</p>
                </div>
        </div>
        `

        
        

    }

}

/*BUTTON CARDS FUNCTION*/

const buttonsCards = (img, identidad) => {


    if (identidad === '-') {

        for (let i = 0; i < cardsProductsArray.length; i++) {

            let proob = cardsProductsArray[i].firstElementChild
            let proob2 = proob.firstElementChild
            let proob3 = proob2.src 

            if (proob3 === img) {

                const counterItem = document.querySelectorAll('.counter-item')
                
                if (parseInt(counterItem[i].innerHTML) > 1) {
                    counterItem[i].innerHTML = parseInt(counterItem[i].innerHTML) - 1
                }

                for (let i = 0; i < carrito.length; i++) {
                    
                    if (carrito[i].img === img) {
                        if (carrito[i].stock > 1) {
                            carrito[i].stock --
                        }

                        else{
                            alert(`!The minimum quantity is one!`)
                        }
                    }

                }

            }

        }


    } else if (identidad === '+') {


        for (let i = 0; i < cardsProductsArray.length; i++) {

            let proob = cardsProductsArray[i].firstElementChild
            let proob2 = proob.firstElementChild
            let proob3 = proob2.src 

            if (proob3 === img) {

                const counterItem = document.querySelectorAll('.counter-item')
                
                if (parseInt(counterItem[i].innerHTML) < stockTotal) {
                    counterItem[i].innerHTML = parseInt(counterItem[i].innerHTML) + 1
                }

                for (let i = 0; i < carrito.length; i++) {
                    
                    if (carrito[i].img === img) {
                        if (carrito[i].stock < stockTotal) {
                            carrito[i].stock ++
                        }
                        else{
                            alert(`Sorry we no longer have more units`)
                        }
                    }

                }

            }

        }

       
    } else if (identidad === 'x') {


        for (let i = 0; i < cardsProductsArray.length; i++) {

            let proob = cardsProductsArray[i].firstElementChild
            let proob2 = proob.firstElementChild
            let proob3 = proob2.src 

            if (proob3 === img) {

                const cardProduct = document.querySelectorAll('.card-product')

                cardProduct[i].remove()

                carrito.splice(i,1)

                console.log(carrito);

            }

        }

        
    }

    counter.innerHTML = carrito.length

    localStorage.setItem('carrito', JSON.stringify(carrito))

}




/*CARDS SAVE*/

if (save !== null) {
 
    for (let i = 0; i < save.length; i++) {
    
        carrito.push(save[i])
    
    }

    for (let i = 0; i < carrito.length; i++) {

        addBagShopping(carrito[i].img, carrito[i].name, carrito[i].stock)

    }

    counter.innerHTML = carrito.length

}


/*ADD CARRITO*/
/*DINAMYC OBJECT*/

const agregarProducto = (name, img) =>{

    /*LOCCAL STORAGE SAVE*/ 

    let i = 0 
    let cantidad

    if (carrito.length !== 0) {

        let validar =true
        
        for ( i ; i < carrito.length; i++) {
            if (carrito[i].name === name) {

                if (carrito[i].stock < stockTotal) {
                    carrito[i].stock ++
                }
                cantidad = carrito[i].stock
                validar = false

            }
        }

        if (validar) {

            carrito.push(
                {
                    name : name,
                    stock : 1,
                    img: img,
                }
            )

            cantidad = carrito[i].stock

        }

    } else {
        carrito.push(
            {
                name : name,
                stock : 1,
                img: img,
            }
        )

        cantidad = carrito[i].stock

    }

    counter.innerHTML = carrito.length

    localStorage.setItem('carrito', JSON.stringify(carrito))

    addBagShopping(img, name, cantidad)

}


/*BUTTONS CARDS*/

cardsProducts.addEventListener('click', event => {

    const identify = event.target
    const carta = event.path

    if (identify.matches('.minun')) {

        const cartaContainer = carta[3].children
        const cartaImagen = cartaContainer[0].children
        containerImagen = cartaImagen[0].src
        identidad = '-'


        const body = carta[6].children
        const intoBody = body[2].children
        const intoBody2 = intoBody[2].children
        const intoBody3 = intoBody2[1].children
        
        for (let i = 0; i < intoBody3.length; i++) {
            const intoBody4 = intoBody3[i].children
            const intoBody5 = intoBody4[0].children
            const intoBody6 = intoBody5[0].src

            if (intoBody6 === containerImagen) {

                const intoDescription = intoBody4[1].children
                const intoDescription2 = intoDescription[0].children
                const intoDescription3 = intoDescription2[1].children
                stockTotal = parseInt(intoDescription3[0].innerText)

                console.log(stockTotal);
                
            }

        }

    }

    if (identify.matches('.plus')) {

        const cartaContainer = carta[3].children
        const cartaImagen = cartaContainer[0].children
        containerImagen = cartaImagen[0].src
        identidad = '+'

        const body = carta[6].children
        const intoBody = body[2].children
        const intoBody2 = intoBody[2].children
        const intoBody3 = intoBody2[1].children
        
        for (let i = 0; i < intoBody3.length; i++) {
            const intoBody4 = intoBody3[i].children
            const intoBody5 = intoBody4[0].children
            const intoBody6 = intoBody5[0].src

            if (intoBody6 === containerImagen) {

                const intoDescription = intoBody4[1].children
                const intoDescription2 = intoDescription[0].children
                const intoDescription3 = intoDescription2[1].children
                stockTotal = parseInt(intoDescription3[0].innerText)

                console.log(stockTotal);
                
            }

        }

    }

    if (identify.matches('.x')) {

        const cartaContainer = carta[2].children
        const cartaImagen = cartaContainer[0].children
        containerImagen = cartaImagen[0].src
        identidad = 'x'

    }


    buttonsCards(containerImagen, identidad)

})






/*AD PRODUCT*/ 

cardsContainer.addEventListener('click', event => {

    const identify = event.target
    producto = event.path
    const textProducto = producto[2].innerText

    if (identify.matches('.agree')) {

        const nameProductoArray = textProducto.split(' ')

        /*NAME PRODUCT*/ 
        nameProduct = `${nameProductoArray[0]} ${nameProductoArray[1]}`

        /*STOCK PRODUCT*/
        const stockProduct = `${nameProductoArray[3]}`
        const stockProductArray = stockProduct.split(`\n`)
        stockTotal = parseInt(stockProductArray[0])
        
        /*IMG PRODUCT*/
        const getDiv = producto[2]
        const getDivImg = getDiv.firstElementChild
        const getLinkImg = getDivImg.firstElementChild
        srcLink = getLinkImg.src

        agregarProducto(nameProduct, srcLink)

    }


})



