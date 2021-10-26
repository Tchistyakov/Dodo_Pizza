import {kombo} from '../array/array.js'
import { openOtherModal } from '../modalwindow/modalwindow.js'

function combos() {
    for (let i = 0; i < kombo.length; i++) {
        let card = `
    <figure class="card_image_big">
        <img class="card_image_small" src="${kombo[i].src}" alt="${kombo[i].name}">
    </figure>
    <div class="card_des_col">
        <div>
            <h3 class="card_name">${kombo[i].name}</h3>
            <p class="card_descript">${kombo[i].description}</p>
        </div>
        <div class="card_footer">
            <h4 class="card_price">от ${kombo[i].cost}&#8381</h4>
            <button class="button_to-collect" id='${kombo[i].id}'>
                <p class="button-cart_text">Собрать</p>
                <p class="button-cart_text_small">от ${kombo[i].cost}&#8381</p>
            </button>
        </div>
    </div>`
        
        let pizzaCard = document.createElement('div')
        pizzaCard.className = 'menu__card menu__card_small'
        pizzaCard.innerHTML = card
        pizzaCard.getElementsByTagName('button')[0].addEventListener('click', openOtherModal)
        document.getElementById('kombo').append(pizzaCard)
    }
}

export default combos