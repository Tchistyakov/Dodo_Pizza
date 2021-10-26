import { pizza } from "../array/array.js"
import { kombo } from "../array/array.js"
import { snack } from "../array/array.js"
import { desert } from "../array/array.js"
import { beverage } from "../array/array.js"


// Modal Window for Pizza // open and create

export function openModal(event) {
    // console.log(event.currentTarget)
    let obj = pizza.find(el => el.id == event?.currentTarget.id)
    const modalPizza = `
        <div class="product_card" id="modal-pizza">
            <figure class="product_card_left">
                <img src="${obj.src}" alt="${obj.name}" class="product_cart_img">
                <figure class="elips">
                    <img src="pictures/svg/Ellipse.svg" alt="elips">
                </figure>
            </figure>
            <div class="product_card_right">
                <h3 class="section-name">${obj.name}</h3>
                <p class="card_descript">30 см, традиционное тесто, 480 г</p>
                <p class="card_topping">
                    <span class="underline span">Ветчина 
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7" cy="7" r="6.75" fill="white" stroke="#727171" stroke-width="0.5" />
                            <path d="M9 5L5 9M9 9L5 5" stroke="#727171" />
                        </svg>
                    </span>, сыр чеддер, 
                    <span class="underline span">сладкий перец 
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7" cy="7" r="6.75" fill="white" stroke="#727171" stroke-width="0.5" />
                            <path d="M9 5L5 9M9 9L5 5" stroke="#727171" />
                        </svg>
                    </span>,моцарелла, томатный соус, 
                    <span class="strike span">чеснок&nbsp;
                    </span>, 
                    <span class="underline span">итальянские травы
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7" cy="7" r="6.75" fill="white" stroke="#727171" stroke-width="0.5" />
                            <path d="M9 5L5 9M9 9L5 5" stroke="#727171" />
                        </svg>
                    </span>
                </p>
                <div class="product_size">
                    <div class="size-select size-select_font"><p>Маленькая</p></div>
                    <div class="size-select size-select_font"><p>Средняя</p></div>
                    <div class="size-select size-select_font"><p>Большая</p></div>
                </div>
                <div class="product_size">
                    <div class="size-select size-select_dough size-select_font"><p>Традиционное</p></div>
                    <div class="size-select size-select_dough size-select_font"><p>Тонкое</p></div>
                </div>
                <h2 class="card_price">Добавить в пиццу</h2>
                <div class="img-topping">
                    <figure class="topping-card">
                        <img src="pictures/topping_s/image_10.png" alt="" class="topping-img">
                        <p class="topping-name">Сырный бортик</p>
                        <p class="cart_text_small">599 ₽</p>
                    </figure>
                    <figure class="topping-card">
                        <img src="pictures/topping_s/image_11.png" alt="Шампиньоны" class="topping-img">
                        <p class="topping-name">Шампиньоны</p>
                        <p class="cart_text_small">39 ₽</p>
                    </figure>
                    <figure class="topping-card">
                        <img src="pictures/topping_s/image_12.png" alt="Цыпленок" class="topping-img">
                        <p class="topping-name">Цыпленок</p>
                        <p class="cart_text_small">59 ₽</p>
                    </figure>
                    <figure class="topping-card">
                        <img src="pictures/topping_s/image_13.png" alt="Брынза" class="topping-img">
                        <p class="topping-name">Брынза</p>
                        <p class="cart_text_small"></p>
                    </figure>
                    <figure class="topping-card">
                        <img src="pictures/topping_s/image_14.png" alt="Острый халапенью" class="topping-img">
                        <p class="topping-name">Острый халапенью</p>
                        <p class="cart_text_small"></p>
                    </figure>
                    <figure class="topping-card">
                        <img src="pictures/topping_s/image_15.png" alt="Острый цыпленок" class="topping-img">
                        <p class="topping-name">Острый цыпленок</p>
                        <p class="cart_text_small"></p>
                    </figure>
                </div>
                <button class="modal-btn button-cart">
                    <p class="button-cart_text">Добавить в корзину за ${obj.cost} ₽</p>
                </button>
            </div>
            <div class="clouse-wind">
                <img src="pictures/svg/close.svg" alt="закрыть">
            </div>
        </div>   
        `
    let modal = document.createElement('div')
    modal.className = 'modal-layout'
    modal.id = 'modal-layout'
    modal.innerHTML = modalPizza
    modal.getElementsByClassName('clouse-wind')[0].addEventListener('click', clouseModal)
    document.getElementById('mod').append(modal)
}

// Modal Window for other product [kombo, snack, desert, beverage]
// open and create

export function openOtherModal(event) {
    const other = kombo.concat(snack, desert, beverage)
    let obj = other.find(el => el.id == event?.currentTarget.id)
    const modalOther = `
    <div class="product-cart">
            <div class="cart-left">
                <img src="${obj.src}" alt="${obj.name}" class="product_cart_img2">
            </div>
            <div class="cart-right">
                <h3 class="section-name h3_font">${obj.name}</h3>
                <p class="card_descript">${obj.description}</p>
                <p class="cart_desc_small">${obj.description}</p>
                <button class="modal-btn modal-btn2 button-cart"><p class="button-cart_text">Добавить в корзину за ${obj.cost}₽</p></button>
            </div>
            <div class="clouse-wind">
                <img src="pictures/svg/close.svg" alt="закрыть">
            </div>
        </div>
    `
    let modal = document.createElement('div')
    modal.className = 'modal-layout'
    modal.id = 'modal-layout'
    modal.innerHTML = modalOther
    modal.getElementsByClassName('clouse-wind')[0].addEventListener('click', clouseModal)
    document.getElementById('mod').append(modal)
}

// Modal Window // clouse and remove

export function clouseModal() {
    let el = document.getElementById('modal-layout')
    el.remove()
}

