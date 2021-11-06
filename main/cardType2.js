import { Pizzas } from "../array/pizzas.js"

//  Кнопка "Выбрать"

export function cardPizzas() {
    let arr = await Pizzas()

    for(let i in arr) {
        let card = `
    <figure class="card_image_big">
        <img class="card_image_small" src="${arr[i].src}" alt="${arr[i].name}">
    </figure>
    <div class="card_des_col">
        <div>
            <h3 class="card_name">${arr[i].name}</h3>
            <p class="card_descript">${arr[i].description}</p>
        </div>
        <div class="card_footer">
            <h4 class="card_price">от ${arr[i].cost}&#8381</h4>
            <button class="button_to-collect button_to-collect_secondary" id='${arr[i]._id}'>
                <p class="button-cart_text button-cart_text_secondary">Выбрать</p>
                <p class="button-cart_text_small button-cart_text_secondary">от ${arr[i].cost}&#8381</p>
            </button>
        </div>
    </div>
    `
    let card = document.createElement('div')

    card.className = 'menu__card menu__card_small'
    card.innerHTML = await cardPizzas()
    card.getElementsByTagName('button')[0].addEventListener('click', openModal)
    document.getElementById('pizza').append(card)
    }
}