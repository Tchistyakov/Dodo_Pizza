function cardType3() {
    return let `
    <figure class="card_image_big">
        <img class="card_image_small" src="${arr[i].src}" alt="${arr[i].name}">
    </figure>
    <div class="card_des_col card_des_snack">
        <div>
            <h3 class="card_name">${arr[i].name}</h3>
            <p class="card_descript">${arr[i].description}</p>
        </div>
        <div class="card_footer">
            <h4 class="card_price">от ${arr[i].cost}&#8381</h4>
            <button class="button_to-collect button_to-collect_secondary" id='${arr[i]._id}'>
                <p class="button-cart_text button-cart_text_secondary">В корзину</p>
                <p class="button-cart_text_small button-cart_text_secondary">от ${arr[i].cost}&#8381</p>
            </button>
        </div>
    </div>
    `
}

export default cardType3

//  Кнопка "В корзину"