// let cardObj = { table:
//     `<figure class="card_image_big">
//         <img class="card_image_small" src="${arr[i].src}" alt="${arr[i].name}">
//     </figure>
//     <div class="card_des_col">
//         <div>
//             <h3 class="card_name">${arr[i].name}</h3>
//             <p class="card_descript">${arr[i].description}</p>
//         </div>
//         <div class="card_footer">
//             <h4 class="card_price">от ${arr[i].cost}&#8381</h4>
//             <button class="button_to-collect">
//                 <p class="button-cart_text">Собрать</p>
//                 <p class="button-cart_text_small">от ${arr[i].cost}&#8381</p>
//             </button>
//         </div>
//     </div>`
// }

// let cardEmpty = [
//     cardObj
// ]

let pizza = [
    {
        src: 'pictures/kombo_m/image 3.jpg',
        name: 'Пицца из половинок',
        description: 'Соберите свою пиццу 35 см с двумя разными вкусами',
        cost: '600'
    },
    {
        src: 'pictures/pizza_m/image_3.jpg',
        name: 'Пепперони-сердце',
        description: 'Пикантная пепперони, моцарелла, томатный соус',
        cost: '625'
    },
    {
        src: 'pictures/pizza_m/image_4.jpg',
        name: 'Пирог-сердце',
        description: 'Ананасы, брусника, сгущенное молоко',
        cost: '625'
    },
    {
        src: 'pictures/pizza_m/image_5.jpg',
        name: 'Чиззи чеддер',
        description: 'Ветчина, сыр чеддер, сладкий перец, моцарелла, томатный соус, чеснок, итальянские травы',
        cost: '625'
    },
    {
        src: 'pictures/pizza_m/image_6.jpg',
        name: 'Цыпленок блю чиз',
        description: 'Цыпленок, сыр блю чиз, томаты, моцарелла, соус альфредо',
        cost: '445'
    },
    {
        src: 'pictures/pizza_m/image_7.jpg',
        name: 'Нежный лосось',
        description: 'Лосось, томаты черри, соус песто, моцарелла, соус альфредо',
        cost: '495'
    },
    {
        src: 'pictures/pizza_m/image_8.jpg',
        name: 'Сырная',
        description: 'Увеличенная порция моцареллы, сыры чеддер и пармезан, соус альфредо',
        cost: '245'
    },
    {
        src: 'pictures/pizza_m/image_9.jpg',
        name: 'Пепперони фреш',
        description: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус',
        cost: '245',
    },
]

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
        <button class="button_to-collect">
            <p class="button-cart_text">Собрать</p>
            <p class="button-cart_text_small">от ${pizza[0].cost}&#8381</p>
        </button>
    </div>
</div>`

let half = document.createElement('div')
half.className = 'menu__card menu__card_small'
half.innerHTML = onese
document.getElementById('pizza').append(half)

for (let i = 1; i < pizza.length; i++) {
    let card = `
<figure class="card_image_big">
    <img class="card_image_small" src="${pizza[i].src}" alt="${pizza[i].name}">
</figure>
<div class="card_des_col">
    <div>
        <h3 class="card_name">${pizza[i].name}</h3>
        <p class="card_descript">${pizza[i].description}</p>
    </div>
    <div class="card_footer">
        <h4 class="card_price">от ${pizza[i].cost}&#8381</h4>
        <button class="button_to-collect button_to-collect_secondary">
            <p class="button-cart_text button-cart_text_secondary">Выбрать</p>
            <p class="button-cart_text_small button-cart_text_secondary">от ${pizza[i].cost}&#8381</p>
        </button>
    </div>
</div>`
    
    let pizzaCard = document.createElement('div')
    pizzaCard.className = 'menu__card menu__card_small'
    pizzaCard.innerHTML = card
    document.getElementById('pizza').append(pizzaCard)
}

let kombo = [
    {
        src: 'pictures/kombo_m/kombo.jpg',
        name: 'Комбо за 599 ₽',
        description: 'Наш хит «Аррива!» или другая пицца 25 см, Додстер, напиток и соус.',
        cost: '599',
    },
    {
        src: 'pictures/kombo_m/kombo.jpg',
        name: '2 пиццы',
        description: 'Самое популярное комбо из 2 пицц 30 см. Большой выбор',
        cost: '899',
    },
    {
        src: 'pictures/kombo_m/kombo.jpg',
        name: '2 пиццы и закуска',
        description: '2 пиццы 25 см и закуска на выбор. Для компании из 2–4 человек',
        cost: '799',
    },
    {
        src: 'pictures/kombo_m/kombo.jpg',
        name: 'Пицца и 2 закуски',
        description: 'Пицца 30 см и 2 закуски на выбор. Для компании из 2–4 человек',
        cost: '799',
    },
    {
        src: 'pictures/kombo_m/image_1.jpg',
        name: 'Комбо за 999 ₽',
        description: '3 пиццы 30 см на тонком тесте по суперцене. Выбор пицц ограничен',
        cost: '999',
    },
]


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
        <button class="button_to-collect">
            <p class="button-cart_text">Собрать</p>
            <p class="button-cart_text_small">от ${kombo[0].cost}&#8381</p>
        </button>
    </div>
</div>`
    
    let pizzaCard = document.createElement('div')
    pizzaCard.className = 'menu__card menu__card_small'
    pizzaCard.innerHTML = card
    document.getElementById('kombo').append(pizzaCard)
}

let snack = [
    {
        src: 'pictures/snack_m/image_3.jpg',
        name: 'Томатный суп с гренками',
        description: 'Горячий суп с пшеничными гренками на основе фирменного соуса из итальянских томатов',
        cost: '99', 
    },
    {
        src: 'pictures/snack_m/image_3.jpg',
        name: 'Томатный суп с митболами',
        description: 'Горячий суп c митболами из говядины и маслинами на основе фирменного соуса из итальянских томатов',
        cost: '149', 
    },
    {
        src: 'pictures/snack_m/image_4.jpg',
        name: 'Додстер',
        description: 'Легендарная горячая закуска с цыпленком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке',
        cost: '159', 
    },
    {
        src: 'pictures/snack_m/image_5.jpg',
        name: 'Острый Додстер',
        description: 'Горячая закуска с острым цыпленком, перцем халапеньо, солеными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке',
        cost: '159', 
    },
    {
        src: 'pictures/snack_m/image_6.jpg',
        name: 'Додстер Чипотле',
        description: 'Горячая закуска с пикантным соусом чипотле из копченых перчиков, цыпленком, томатами, моцареллой в тонкой пшеничной лепешке',
        cost: '159', 
    },
    
]

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
        <button class="button_to-collect button_to-collect_secondary">
            <p class="button-cart_text button-cart_text_secondary">В корзину</p>
            <p class="button-cart_text_small button-cart_text_secondary">от ${snack[0].cost}&#8381</p>
        </button>
    </div>
</div>`
    
    let pizzaCard = document.createElement('div')
    pizzaCard.className = 'menu__card menu__card_small menu__card_snack'
    pizzaCard.innerHTML = card
    document.getElementById('snack').append(pizzaCard)
}

let desert = [
    {
        src: 'pictures/desert_m/image_1.jpg',
        name: 'Яблочный пирог',
        description: 'Десерт из песочного теста с яблочной начинкой. Может содержать изюм',
        cost: '99', 
    },
    {
        src: 'pictures/desert_m/image_2.jpg',
        name: 'Чизкейк Нью-Йорк',
        description: 'Классический американский творожный десерт',
        cost: '149', 
    },
    {
        src: 'pictures/desert_m/image_3.jpg',
        name: 'Фонданы, 2 шт',
        description: 'Два десерта с хрустящей корочкой и топлёной шоколадной начинкой',
        cost: '159', 
    },
    {
        src: 'pictures/desert_m/image_4.jpg',
        name: 'Молочный коктейль с печеньем Орео',
        description: 'Напиток из молока и мороженого с добавлением дробленого печенья «Орео»',
        cost: '159', 
    },
    {
        src: 'pictures/desert_m/image_4.jpg',
        name: 'Классический молочный коктейль',
        description: 'Напиток из молока и мороженого',
        cost: '159', 
    },
]

for (let i = 0; i < desert.length; i++) {
    let card = `
<figure class="card_image_big">
    <img class="card_image_small" src="${desert[i].src}" alt="${desert[i].name}">
</figure>
<div class="card_des_col card_des_desert">
    <div>
        <h3 class="card_name">${desert[i].name}</h3>
        <p class="card_descript">${desert[i].description}</p>
    </div>
    <div class="card_footer">
        <h4 class="card_price">от ${desert[i].cost}&#8381</h4>
        <button class="button_to-collect button_to-collect_secondary">
            <p class="button-cart_text button-cart_text_secondary">В корзину</p>
            <p class="button-cart_text_small button-cart_text_secondary">от ${desert[0].cost}&#8381</p>
        </button>
    </div>
</div>`
    
    let pizzaCard = document.createElement('div')
    pizzaCard.className = 'menu__card menu__card_small menu__card_desert'
    pizzaCard.innerHTML = card
    document.getElementById('desert').append(pizzaCard)
}

let beverage = [
    {
        src: 'pictures/beverage_m/cola.jpg',
        name: '2 Coca-Cola по суперцене',
        description: 'Две классические Coca-Cola по 0,5 литров по выгодной цене, 0,5 л',
        cost: '99', 
    },
    {
        src: 'pictures/beverage_m/image_2.jpg',
        name: 'Coca-Cola Orange',
        description: '0,5 л',
        cost: '149', 
    },
    {
        src: 'pictures/beverage_m/image_3.jpg',
        name: 'Coca-Cola Zero',
        description: '0,5 л',
        cost: '159', 
    },
    {
        src: 'pictures/beverage_m/image_4.jpg',
        name: 'Coca-Cola',
        description: '0,5 л',
        cost: '159', 
    },
    {
        src: 'pictures/beverage_m/image_5.jpg',
        name: 'Coca-Cola Vanilla',
        description: '0,5 л',
        cost: '159', 
    },
]

for (let i = 0; i < beverage.length; i++) {
    let card = `
<figure class="card_image_big">
    <img class="card_image_small" src="${beverage[i].src}" alt="${beverage[i].name}">
</figure>
<div class="card_des_col card_des_beverage">
    <div>
        <h3 class="card_name">${beverage[i].name}</h3>
        <p class="card_descript">${beverage[i].description}</p>
    </div>
    <div class="card_footer">
        <h4 class="card_price">от ${beverage[i].cost}&#8381</h4>
        <button class="button_to-collect button_to-collect_secondary">
            <p class="button-cart_text button-cart_text_secondary">В корзину</p>
            <p class="button-cart_text_small button-cart_text_secondary">от ${beverage[0].cost}&#8381</p>
        </button>
    </div>
</div>`
    
    let pizzaCard = document.createElement('div')
    pizzaCard.className = 'menu__card menu__card_small menu__card_beverage'
    pizzaCard.innerHTML = card
    document.getElementById('beverage').append(pizzaCard)
}


for (let i = 0; i < newpop.length; i++) {
    let card = `
    <div class="new-and-pop_card">
                        <div class="bar-card_image_small">
                            <img src="pictures/cezar_small.jpg">
                        </div>
                        <div class="card_small_description">
                            <p class="card-small_name">Цезарь</p>
                            <p class="card_price">от 445&#8381</p>
                        </div>
                    </div>`
}