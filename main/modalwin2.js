const modalwin2 = () =>{
    return  `
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
}

export default modalwin2