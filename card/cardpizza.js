import {pizza} from '../array/array.js'
import { openModal } from '../modalwindow/modalwindow.js'

function pizzas() {
    for (let i = 1; i < pizza.length; i++) {
        let card = `
    <figure class="card_image_big">
        <img class="card_image_small" src="${pizza[i].src}" alt="${pizza[i].name}">
    </figure>
    <div class="card_des_col">
        <div>
            <h3 class="card_name">${pizza[i].name}</h3>
            <p class="card_descript">${pizza[i].description}</p>
        </div>
        <div class="card_footer">
            <h4 class="card_price">от ${pizza[i].cost}&#8381</h4>
            <button class="button_to-collect button_to-collect_secondary" id='${pizza[i].id}'>
                <p class="button-cart_text button-cart_text_secondary">Выбрать</p>
                <p class="button-cart_text_small button-cart_text_secondary">от ${pizza[i].cost}&#8381</p>
            </button>
        </div>
    </div>`
        
        let pizzaCard = document.createElement('div')
        pizzaCard.className = 'menu__card menu__card_small'
        pizzaCard.innerHTML = card
        pizzaCard.getElementsByTagName('button')[0].addEventListener('click', openModal)
        document.getElementById('pizza').append(pizzaCard)
    }
}

export default pizzas