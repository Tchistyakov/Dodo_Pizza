

// Modal Window for Pizza // open and create

export function openModal(event) {
    // console.log(event.currentTarget)
    let obj = pizza.find(el => el.id == event?.currentTarget.id)
   
    let modal = document.createElement('div')
    modal.className = 'modal-layout'
    modal.id = 'modal-layout'
    modal.innerHTML = modalPizza
    modal.getElementsByClassName('clouse-wind')[0].addEventListener('click', clouseModal)
    document.getElementById('mod').append(modal)
}