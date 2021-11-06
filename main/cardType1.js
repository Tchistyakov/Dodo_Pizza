import { Pizzas } from "../array/pizzas.js"


//  Кнопка "Собрать"

export async function cardHalfPizza() {
    let arr = await Pizzas()
    return `
    <figure class="card_image_big">
        <img class="card_image_small" src="${arr[0].src}" alt="${arr[0].name}">
    </figure>
    <div class="card_des_col">
        <div>
            <h3 class="card_name">${arr[0].name}</h3>
            <p class="card_descript">${arr[0].description}</p>
        </div>
        <div class="card_footer">
            <h4 class="card_price">от ${arr[0].cost}&#8381</h4>
            <button class="button_to-collect" id='${arr[0]._id}'>
                <p class="button-cart_text">Собрать</p>
                <p class="button-cart_text_small">от ${arr[0].cost}&#8381</p>
            </button>
        </div>
    </div>
    `
}

// export default cardType1

