import {beverage} from '../array/array.js'
import { openOtherModal } from '../modalwindow/modalwindow.js'

function beverages() {
    for (let i = 0; i < beverage.length; i++) {
        let card = `
    <figure class="card_image_big">
        <img class="card_image_small" src="${beverage[i].src}" alt="${beverage[i].name}">
    </figure>
    <div class="card_des_col card_des_beverage">
        <div>
            <h3 class="card_name">${beverage[i].name}</h3>
            <p class="card_descript">${beverage[i].description}</p>
        </div>
        <div class="card_footer">
            <h4 class="card_price">от ${beverage[i].cost}&#8381</h4>
            <button class="button_to-collect button_to-collect_secondary" id='${beverage[i].id}'>
                <p class="button-cart_text button-cart_text_secondary">В корзину</p>
                <p class="button-cart_text_small button-cart_text_secondary">от ${beverage[i].cost}&#8381</p>
            </button>
        </div>
    </div>`
        
        let pizzaCard = document.createElement('div')
        pizzaCard.className = 'menu__card menu__card_small menu__card_beverage'
        pizzaCard.innerHTML = card
        pizzaCard.getElementsByTagName('button')[0].addEventListener('click', openOtherModal)
        document.getElementById('beverage').append(pizzaCard)
    }
}

export default beverages