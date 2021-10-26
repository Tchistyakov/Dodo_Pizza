import {pizza} from './../array/array.js'

import { openModal } from '../modalwindow/modalwindow.js'


let onese = `
<figure class="card_image_big">
    <img class="card_image_small" src="${pizza[0].src}" alt="${pizza[0].name}">
</figure>
<div class="card_des_col">
    <div>
        <h3 class="card_name">${pizza[0].name}</h3>
        <p class="card_descript">${pizza[0].description}</p>
    </div>
    <div class="card_footer">
        <h4 class="card_price">от ${pizza[0].cost}&#8381</h4>
        <button class="button_to-collect" id='${pizza[0].id}'>
            <p class="button-cart_text">Собрать</p>
            <p class="button-cart_text_small">от ${pizza[0].cost}&#8381</p>
        </button>
    </div>
</div>
`

let half = document.createElement('div')

half.className = 'menu__card menu__card_small'
half.innerHTML = onese
half.getElementsByTagName('button')[0].addEventListener('click', openModal)


export default half