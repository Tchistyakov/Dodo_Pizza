import {newpop} from '../array/array.js';

function popnew() {
    for (let i = 0; i < newpop.length; i++) {
        let card = `
        <div class="bar-card_image_small">
            <img src="${newpop[i].src}">
        </div>
        <div class="card_small_description">
            <p class="card-small_name">${newpop[i].name}</p>
            <p class="card_price">от ${newpop[i].cost}&#8381</p>
        </div>
        `
        
    let pizzaCard = document.createElement('div')
    pizzaCard.className = 'new-and-pop_card'
    pizzaCard.innerHTML = card
    document.getElementById('new-and-pop').append(pizzaCard)
    }
}

export default popnew