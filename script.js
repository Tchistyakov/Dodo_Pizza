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

const myId = (string) => {
    let result = string + "-"
    let num = parseInt(Math.random()*(10**6))
    result = result + num
    return result
}

let pizza = [
    {
        src: 'pictures/kombo_m/image 3.jpg',
        name: 'Пицца из половинок',
        description: 'Соберите свою пиццу 35 см с двумя разными вкусами',
        cost: '600',
        id: myId('pizza'),
    },
    {
        src: 'pictures/pizza_m/image_3.jpg',
        name: 'Пепперони-сердце',
        description: 'Пикантная пепперони, моцарелла, томатный соус',
        cost: '625',
        id: myId('pizza'),
    },
    {
        src: 'pictures/pizza_m/image_4.jpg',
        name: 'Пирог-сердце',
        description: 'Ананасы, брусника, сгущенное молоко',
        cost: '625',
        id: myId('pizza'),
    },
    {
        src: 'pictures/pizza_m/image_5.jpg',
        name: 'Чиззи чеддер',
        description: 'Ветчина, сыр чеддер, сладкий перец, моцарелла, томатный соус, чеснок, итальянские травы',
        cost: '625',
        id: myId('pizza'),
    },
    {
        src: 'pictures/pizza_m/image_6.jpg',
        name: 'Цыпленок блю чиз',
        description: 'Цыпленок, сыр блю чиз, томаты, моцарелла, соус альфредо',
        cost: '445',
        id: myId('pizza'),
    },
    {
        src: 'pictures/pizza_m/image_7.jpg',
        name: 'Нежный лосось',
        description: 'Лосось, томаты черри, соус песто, моцарелла, соус альфредо',
        cost: '495',
        id: myId('pizza'),
    },
    {
        src: 'pictures/pizza_m/image_8.jpg',
        name: 'Сырная',
        description: 'Увеличенная порция моцареллы, сыры чеддер и пармезан, соус альфредо',
        cost: '245',
        id: myId('pizza'),
    },
    {
        src: 'pictures/pizza_m/image_9.jpg',
        name: 'Пепперони фреш',
        description: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус',
        cost: '245',
        id: myId('pizza'),
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
        <button class="button_to-collect" onclick='openModal()' id='${pizza[0].id}'>
            <p class="button-cart_text">Собрать</p>
            <p class="button-cart_text_small">от ${pizza[0].cost}&#8381</p>
        </button>
    </div>
</div>`

let half = document.createElement('div')
half.className = 'menu__card menu__card_small'
half.id = myId('pizza')
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
        <button class="button_to-collect button_to-collect_secondary" id='${pizza[i].id}'>
            <p class="button-cart_text button-cart_text_secondary" onclick='openModal()'>Выбрать</p>
            <p class="button-cart_text_small button-cart_text_secondary" onclick=modal_open()>от ${pizza[i].cost}&#8381</p>
        </button>
    </div>
</div>`
    
    let pizzaCard = document.createElement('div')
    pizzaCard.className = 'menu__card menu__card_small'
    pizzaCard.id = myId('pizza')
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
    pizzaCard.id = 'kombo' + i
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
    pizzaCard.id = 'snack' + i
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
    pizzaCard.id = 'desert' + i
    pizzaCard.innerHTML = card
    document.getElementById('desert').append(pizzaCard)
}

let beverage = [
    {
        src: 'pictures/beverage_m/Cola.jpg',
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
    pizzaCard.id = 'beverage' + i
    pizzaCard.innerHTML = card
    document.getElementById('beverage').append(pizzaCard)
}

// creat array 'new and pop slidebar'

let newpop = [
    {
        src: 'pictures/pizza_s/cezar_small.jpg',
        name: 'Цезарь',
        description: 'Классическая пицца с курицей, овощами и сыром',
        cost: '445', 
    },
    {
        src: 'pictures/pizza_s/nezh-losos_small.jpg',
        name: 'Нежный лосось',
        description: 'Классическая пицца с филе северноморского лосося',
        cost: '495', 
    },
    {
        src: 'pictures/pizza_s/karbonara_small.jpg',
        name: 'Карбонара',
        description: 'Классическая пицца с курицей и сырным соусом',
        cost: '395', 
    },
    {
        src: 'pictures/pizza_s/twopizza_small.jpg',
        name: 'Две пиццы',
        description: 'Выгодное предложение, две пиццы на выбор',
        cost: '899', 
    },
]

for (let i = 0; i < newpop.length; i++) {
    let card = `
    <div class="bar-card_image_small">
        <img src="${newpop[i].src}">
    </div>
    <div class="card_small_description">
        <p class="card-small_name">${newpop[i].name}</p>
        <p class="card_price">от ${newpop[i].cost}&#8381</p>
    </div>`
    
let pizzaCard = document.createElement('div')
pizzaCard.className = 'new-and-pop_card'
pizzaCard.id = 'newpop' + i
pizzaCard.innerHTML = card
document.getElementById('new-and-pop').append(pizzaCard)
}

const modwin = `
        <div class="product_card" id="modal-pizza">
            <figure class="product_card_left">
                <img src="pictures/pizza_xl/image_1.png" alt="Чиззи чеддер" class="product_cart_img">
                <figure class="elips">
                    <img src="pictures/svg/Ellipse 6.svg" alt="elips">
                </figure>
            </figure>
            <div class="product_card_right">
                <h3 class="section-name">Чиззи чеддер</h3>
                <p class="card_descript">30 см, традиционное тесто, 480 г</p>
                <p class="card_topping">
                    <span class="underline span">Ветчина 
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7" cy="7" r="6.75" fill="white" stroke="#727171" stroke-width="0.5" />
                            <path d="M9 5L5 9M9 9L5 5" stroke="#727171" />
                        </svg>
                    </span>, сыр чеддер, 
                    <span class="underline span">сладкий перец 
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7" cy="7" r="6.75" fill="white" stroke="#727171" stroke-width="0.5" />
                            <path d="M9 5L5 9M9 9L5 5" stroke="#727171" />
                        </svg>
                    </span>,моцарелла, томатный соус, 
                    <span class="strike span">чеснок&nbsp;
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7" cy="7" r="6.75" fill="white" stroke="#727171" stroke-width="0.5" />
                            <path d="M7.00001 6.01967V5.16667C6.9999 5.10079 6.9803 5.03643 6.94367 4.98167C6.90704 
                                4.92692 6.85502 4.88424 6.79418 4.859C6.73333 4.83376 6.66637 4.8271 6.60174 4.83986C6.53712 
                                4.85261 6.47771 4.88421 6.43101 4.93067L4.33334 7L6.43101 9.069C6.46189 9.10006 6.49861 9.12471 
                                6.53906 9.14153C6.5795 9.15835 6.62287 9.16701 6.66668 9.16701C6.71048 9.16701 6.75385 9.15835 
                                6.79429 9.14153C6.83474 9.12471 6.87146 9.10006 6.90234 9.069C6.93331 9.03807 6.95788 9.00133 
                                6.97464 8.96089C6.9914 8.92045 7.00002 8.87711 7.00001 8.83333V8.00367C7.91668 8.02633 8.91834 
                                8.19233 9.66668 9.33333V9C9.66668 7.45567 8.50001 6.18567 7.00001 6.01967Z" fill="#727171" />
                        </svg>
                    </span>, 
                    <span class="underline span">итальянские травы
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7" cy="7" r="6.75" fill="white" stroke="#727171" stroke-width="0.5" />
                            <path d="M9 5L5 9M9 9L5 5" stroke="#727171" />
                        </svg>
                    </span>
                </p>
                <div class="product_size">
                    <div class="size-select size-select_font"><p>Маленькая</p></div>
                    <div class="size-select size-select_font"><p>Средняя</p></div>
                    <div class="size-select size-select_font"><p>Большая</p></div>
                </div>
                <div class="product_size">
                    <div class="size-select size-select_dough size-select_font"><p>Традиционное</p></div>
                    <div class="size-select size-select_dough size-select_font"><p>Тонкое</p></div>
                </div>
                <h2 class="card_price">Добавить в пиццу</h2>
                <div class="img-topping">
                    <figure class="topping-card">
                        <img src="pictures/topping_s/image_10.png" alt="" class="topping-img">
                        <svg class="topping-img-pass" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="pass-fill" d="M11.6505 2.37695C10.4262 1.15265 8.76565 0.464844 7.03423 0.464844C5.30281 0.464844 3.6423 1.15265 2.418 2.37695C1.1937 3.60125 0.505898 5.26175 0.505898 6.99318C0.505898 8.7246 1.1937 10.3851 2.418 11.6094C3.6423 12.8337 5.30281 13.5215 7.03423 13.5215C8.76565 13.5215 10.4262 12.8337 11.6505 11.6094C12.8748 10.3851 13.5626 8.7246 13.5626 6.99318C13.5626 5.26175 12.8748 3.60125 11.6505 2.37695ZM7.03423 12.6465C3.91704 12.6465 1.38091 10.1104 1.38091 6.99318C1.38091 3.87593 3.91699 1.33985 7.03423 1.33985C10.1515 1.33985 12.6875 3.87593 12.6875 6.99318C12.6875 10.1104 10.1515 12.6465 7.03423 12.6465Z"/>
                            <path class="pass-fill" d="M6.0503 8.36192L4.04292 6.35456L3.42421 6.97327L6.0503 9.59936L10.6304 5.01931L10.0116 4.4006L6.0503 8.36192Z"/>
                        </svg>
                        <p class="topping-name">Сырный бортик</p>
                        <p class="cart_text_small">599 ₽</p>
                    </figure>
                    <figure class="topping-card">
                        <img src="pictures/topping_s/image_11.png" alt="Шампиньоны" class="topping-img">
                        <svg class="topping-img-pass" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="pass-fill" d="M11.6505 2.37695C10.4262 1.15265 8.76565 0.464844 7.03423 0.464844C5.30281 0.464844 3.6423 1.15265 2.418 2.37695C1.1937 3.60125 0.505898 5.26175 0.505898 6.99318C0.505898 8.7246 1.1937 10.3851 2.418 11.6094C3.6423 12.8337 5.30281 13.5215 7.03423 13.5215C8.76565 13.5215 10.4262 12.8337 11.6505 11.6094C12.8748 10.3851 13.5626 8.7246 13.5626 6.99318C13.5626 5.26175 12.8748 3.60125 11.6505 2.37695ZM7.03423 12.6465C3.91704 12.6465 1.38091 10.1104 1.38091 6.99318C1.38091 3.87593 3.91699 1.33985 7.03423 1.33985C10.1515 1.33985 12.6875 3.87593 12.6875 6.99318C12.6875 10.1104 10.1515 12.6465 7.03423 12.6465Z"/>
                            <path class="pass-fill" d="M6.0503 8.36192L4.04292 6.35456L3.42421 6.97327L6.0503 9.59936L10.6304 5.01931L10.0116 4.4006L6.0503 8.36192Z"/>
                        </svg>
                        <p class="topping-name">Шампиньоны</p>
                        <p class="cart_text_small">39 ₽</p>
                    </figure>
                    <figure class="topping-card">
                        <img src="pictures/topping_s/image_12.png" alt="Цыпленок" class="topping-img">
                        <svg class="topping-img-pass" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="pass-fill" d="M11.6505 2.37695C10.4262 1.15265 8.76565 0.464844 7.03423 0.464844C5.30281 0.464844 3.6423 1.15265 2.418 2.37695C1.1937 3.60125 0.505898 5.26175 0.505898 6.99318C0.505898 8.7246 1.1937 10.3851 2.418 11.6094C3.6423 12.8337 5.30281 13.5215 7.03423 13.5215C8.76565 13.5215 10.4262 12.8337 11.6505 11.6094C12.8748 10.3851 13.5626 8.7246 13.5626 6.99318C13.5626 5.26175 12.8748 3.60125 11.6505 2.37695ZM7.03423 12.6465C3.91704 12.6465 1.38091 10.1104 1.38091 6.99318C1.38091 3.87593 3.91699 1.33985 7.03423 1.33985C10.1515 1.33985 12.6875 3.87593 12.6875 6.99318C12.6875 10.1104 10.1515 12.6465 7.03423 12.6465Z"/>
                            <path class="pass-fill" d="M6.0503 8.36192L4.04292 6.35456L3.42421 6.97327L6.0503 9.59936L10.6304 5.01931L10.0116 4.4006L6.0503 8.36192Z"/>
                        </svg>
                        <p class="topping-name">Цыпленок</p>
                        <p class="cart_text_small">59 ₽</p>
                    </figure>
                    <figure class="topping-card">
                        <img src="pictures/topping_s/image_13.png" alt="Брынза" class="topping-img">
                        <svg class="topping-img-pass" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="pass-fill" d="M11.6505 2.37695C10.4262 1.15265 8.76565 0.464844 7.03423 0.464844C5.30281 0.464844 3.6423 1.15265 2.418 2.37695C1.1937 3.60125 0.505898 5.26175 0.505898 6.99318C0.505898 8.7246 1.1937 10.3851 2.418 11.6094C3.6423 12.8337 5.30281 13.5215 7.03423 13.5215C8.76565 13.5215 10.4262 12.8337 11.6505 11.6094C12.8748 10.3851 13.5626 8.7246 13.5626 6.99318C13.5626 5.26175 12.8748 3.60125 11.6505 2.37695ZM7.03423 12.6465C3.91704 12.6465 1.38091 10.1104 1.38091 6.99318C1.38091 3.87593 3.91699 1.33985 7.03423 1.33985C10.1515 1.33985 12.6875 3.87593 12.6875 6.99318C12.6875 10.1104 10.1515 12.6465 7.03423 12.6465Z"/>
                            <path class="pass-fill" d="M6.0503 8.36192L4.04292 6.35456L3.42421 6.97327L6.0503 9.59936L10.6304 5.01931L10.0116 4.4006L6.0503 8.36192Z"/>
                        </svg>
                        <p class="topping-name">Брынза</p>
                        <p class="cart_text_small"></p>
                    </figure>
                    <figure class="topping-card">
                        <img src="pictures/topping_s/image_14.png" alt="Острый халапенью" class="topping-img">
                        <svg class="topping-img-pass" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="pass-fill" d="M11.6505 2.37695C10.4262 1.15265 8.76565 0.464844 7.03423 0.464844C5.30281 0.464844 3.6423 1.15265 2.418 2.37695C1.1937 3.60125 0.505898 5.26175 0.505898 6.99318C0.505898 8.7246 1.1937 10.3851 2.418 11.6094C3.6423 12.8337 5.30281 13.5215 7.03423 13.5215C8.76565 13.5215 10.4262 12.8337 11.6505 11.6094C12.8748 10.3851 13.5626 8.7246 13.5626 6.99318C13.5626 5.26175 12.8748 3.60125 11.6505 2.37695ZM7.03423 12.6465C3.91704 12.6465 1.38091 10.1104 1.38091 6.99318C1.38091 3.87593 3.91699 1.33985 7.03423 1.33985C10.1515 1.33985 12.6875 3.87593 12.6875 6.99318C12.6875 10.1104 10.1515 12.6465 7.03423 12.6465Z"/>
                            <path class="pass-fill" d="M6.0503 8.36192L4.04292 6.35456L3.42421 6.97327L6.0503 9.59936L10.6304 5.01931L10.0116 4.4006L6.0503 8.36192Z"/>
                        </svg>
                        <p class="topping-name">Острый халапенью</p>
                        <p class="cart_text_small"></p>
                    </figure>
                    <figure class="topping-card">
                        <img src="pictures/topping_s/image_15.png" alt="Острый цыпленок" class="topping-img">
                        <svg class="topping-img-pass" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="pass-fill" d="M11.6505 2.37695C10.4262 1.15265 8.76565 0.464844 7.03423 0.464844C5.30281 0.464844 3.6423 1.15265 2.418 2.37695C1.1937 3.60125 0.505898 5.26175 0.505898 6.99318C0.505898 8.7246 1.1937 10.3851 2.418 11.6094C3.6423 12.8337 5.30281 13.5215 7.03423 13.5215C8.76565 13.5215 10.4262 12.8337 11.6505 11.6094C12.8748 10.3851 13.5626 8.7246 13.5626 6.99318C13.5626 5.26175 12.8748 3.60125 11.6505 2.37695ZM7.03423 12.6465C3.91704 12.6465 1.38091 10.1104 1.38091 6.99318C1.38091 3.87593 3.91699 1.33985 7.03423 1.33985C10.1515 1.33985 12.6875 3.87593 12.6875 6.99318C12.6875 10.1104 10.1515 12.6465 7.03423 12.6465Z"/>
                            <path class="pass-fill" d="M6.0503 8.36192L4.04292 6.35456L3.42421 6.97327L6.0503 9.59936L10.6304 5.01931L10.0116 4.4006L6.0503 8.36192Z"/>
                        </svg>
                        <p class="topping-name">Острый цыпленок</p>
                        <p class="cart_text_small"></p>
                    </figure>
                </div>
                <button class="modal-btn button-cart"><p class="button-cart_text">Добавить в корзину за 625 ₽</p></button>
            </div>
            <div class="clouse-wind" onclick='clouseModal()'>
                <img src="pictures/svg/close.svg" alt="закрыть">
            </div>
        </div>   
        `

function openModal() {
    console.log('open')
    
    let mood = document.createElement('div')
    mood.className = 'modal-layout'
    mood.id = 'modal-layout'
    mood.innerHTML = modwin
    document.getElementById('mod').append(mood)
}

function clouseModal() {
    console.log('clouse')
    let el = document.getElementById('modal-layout')
    el.remove()
}
