import {snack} from '../array/array.js'
import { openOtherModal } from '../modalwindow/modalwindow.js'

function snacks() {
    for (let i = 0; i < snack.length; i++) {
        let card = `
            <figure class="card_image_big">
                <img class="card_image_small" src="${snack[i].src}" alt="${snack[i].name}">
            </figure>
            <div class="card_des_col card_des_snack">
                <div>
                    <h3 class="card_name">${snack[i].name}</h3>
                    <p class="card_descript">${snack[i].description}</p>
                </div>
                <div class="card_footer">
                    <h4 class="card_price">от ${snack[i].cost}&#8381</h4>
                    <button class="button_to-collect button_to-collect_secondary" id='${snack[i].id}' onclick='openOtherModal(event)'>
                        <p class="button-cart_text button-cart_text_secondary">В корзину</p>
                        <p class="button-cart_text_small button-cart_text_secondary">от ${snack[i].cost}&#8381</p>
                    </button>
                </div>
            </div>
            `

        let pizzaCard = document.createElement('div')
        pizzaCard.className = 'menu__card menu__card_small menu__card_snack'
        pizzaCard.innerHTML = card
        pizzaCard.getElementsByTagName('button')[0].addEventListener('click', openOtherModal)
        document.getElementById('snack').append(pizzaCard)
    }
}

export default snacks