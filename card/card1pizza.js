import { cardHalfPizza } from '../main/cardType1.js'
import { openModal } from '../modalwindow/modalwindow.js'


export async function card1pizza() {
    
    let half = document.createElement('div')

    half.className = 'menu__card menu__card_small'
    half.innerHTML = await cardHalfPizza()
    half.getElementsByTagName('button')[0].addEventListener('click', openModal)
    document.getElementById('pizza').append(half)
}

