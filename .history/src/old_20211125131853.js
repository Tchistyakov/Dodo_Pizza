// Generate random id for array 

const myId = (string) => {
    let result = string + "-"
    let num = parseInt(Math.random()*(10**6))
    result = result + num
    return result
}

let pizza = [
    {
        src: 'pictures/kombo_m/image_3.jpg',
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
        <button class="button_to-collect" onclick='openModal(event)' id='${pizza[0].id}'>
            <p class="button-cart_text">Собрать</p>
            <p class="button-cart_text_small">от ${pizza[0].cost}&#8381</p>
        </button>
    </div>
</div>
`

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
        <button class="button_to-collect button_to-collect_secondary" id='${pizza[i].id}' onclick='openModal(event)'>
            <p class="button-cart_text button-cart_text_secondary">Выбрать</p>
            <p class="button-cart_text_small button-cart_text_secondary">от ${pizza[i].cost}&#8381</p>
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
        id: myId('kombo'),
    },
    {
        src: 'pictures/kombo_m/kombo.jpg',
        name: '2 пиццы',
        description: 'Самое популярное комбо из 2 пицц 30 см. Большой выбор',
        cost: '899',
        id: myId('kombo'),
    },
    {
        src: 'pictures/kombo_m/kombo.jpg',
        name: '2 пиццы и закуска',
        description: '2 пиццы 25 см и закуска на выбор. Для компании из 2–4 человек',
        cost: '799',
        id: myId('kombo'),
    },
    {
        src: 'pictures/kombo_m/kombo.jpg',
        name: 'Пицца и 2 закуски',
        description: 'Пицца 30 см и 2 закуски на выбор. Для компании из 2–4 человек',
        cost: '799',
        id: myId('kombo'),
    },
    {
        src: 'pictures/kombo_m/image_1.jpg',
        name: 'Комбо за 999 ₽',
        description: '3 пиццы 30 см на тонком тесте по суперцене. Выбор пицц ограничен',
        cost: '999',
        id: myId('kombo'),
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
                <button class="button_to-collect" onclick='openOtherModal(event)' id='${kombo[i].id}'>
                    <p class="button-cart_text">Собрать</p>
                    <p class="button-cart_text_small">от ${kombo[i].cost}&#8381</p>
                </button>
            </div>
        </div>`
    
    let pizzaCard = document.createElement('div')
    pizzaCard.className = 'menu__card menu__card_small'
    pizzaCard.id = myId('kombo')
    pizzaCard.innerHTML = card
    document.getElementById('kombo').append(pizzaCard)
}  


let snack = [
    {
        src: 'pictures/snack_m/image_3.jpg',
        name: 'Томатный суп с гренками',
        description: 'Горячий суп с пшеничными гренками на основе фирменного соуса из итальянских томатов',
        cost: '99', 
        id: myId('snack'),
    },
    {
        src: 'pictures/snack_m/image_3.jpg',
        name: 'Томатный суп с митболами',
        description: 'Горячий суп c митболами из говядины и маслинами на основе фирменного соуса из итальянских томатов',
        cost: '149', 
        id: myId('snack'),
    },
    {
        src: 'pictures/snack_m/image_4.jpg',
        name: 'Додстер',
        description: 'Легендарная горячая закуска с цыпленком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке',
        cost: '159', 
        id: myId('snack'),
    },
    {
        src: 'pictures/snack_m/image_5.jpg',
        name: 'Острый Додстер',
        description: 'Горячая закуска с острым цыпленком, перцем халапеньо, солеными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке',
        cost: '159', 
        id: myId('snack'),
    },
    {
        src: 'pictures/snack_m/image_6.jpg',
        name: 'Додстер Чипотле',
        description: 'Горячая закуска с пикантным соусом чипотле из копченых перчиков, цыпленком, томатами, моцареллой в тонкой пшеничной лепешке',
        cost: '159', 
        id: myId('snack'),
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
        <button class="button_to-collect button_to-collect_secondary" id='${snack[i].id}' onclick='openOtherModal(event)'>
            <p class="button-cart_text button-cart_text_secondary">В корзину</p>
            <p class="button-cart_text_small button-cart_text_secondary">от ${snack[i].cost}&#8381</p>
        </button>
    </div>
</div>`
    
    let pizzaCard = document.createElement('div')
    pizzaCard.className = 'menu__card menu__card_small menu__card_snack'
    pizzaCard.id = myId('snack')
    pizzaCard.innerHTML = card
    document.getElementById('snack').append(pizzaCard)
}

let desert = [
    {
        src: 'pictures/desert_m/image_1.jpg',
        name: 'Яблочный пирог',
        description: 'Десерт из песочного теста с яблочной начинкой. Может содержать изюм',
        cost: '99', 
        id: myId('desert'),
    },
    {
        src: 'pictures/desert_m/image_2.jpg',
        name: 'Чизкейк Нью-Йорк',
        description: 'Классический американский творожный десерт',
        cost: '149', 
        id: myId('desert'),
    },
    {
        src: 'pictures/desert_m/image_3.jpg',
        name: 'Фонданы, 2 шт',
        description: 'Два десерта с хрустящей корочкой и топлёной шоколадной начинкой',
        cost: '159', 
        id: myId('desert'),
    },
    {
        src: 'pictures/desert_m/image_4.jpg',
        name: 'Молочный коктейль с печеньем Орео',
        description: 'Напиток из молока и мороженого с добавлением дробленого печенья «Орео»',
        cost: '159', 
        id: myId('desert'),
    },
    {
        src: 'pictures/desert_m/image_4.jpg',
        name: 'Классический молочный коктейль',
        description: 'Напиток из молока и мороженого',
        cost: '159', 
        id: myId('desert'),
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
        <button class="button_to-collect button_to-collect_secondary" id='${desert[i].id}' onclick='openOtherModal(event)'>
            <p class="button-cart_text button-cart_text_secondary">В корзину</p>
            <p class="button-cart_text_small button-cart_text_secondary">от ${desert[i].cost}&#8381</p>
        </button>
    </div>
</div>`
    
    let pizzaCard = document.createElement('div')
    pizzaCard.className = 'menu__card menu__card_small menu__card_desert'
    pizzaCard.id = myId('desert')
    pizzaCard.innerHTML = card
    document.getElementById('desert').append(pizzaCard)
}

let beverage = [
    {
        src: 'pictures/beverage_m/Cola.jpg',
        name: '2 Coca-Cola по суперцене',
        description: 'Две классические Coca-Cola по 0,5 литров по выгодной цене, 0,5 л',
        cost: '99', 
        id: myId('beverage'),
    },
    {
        src: 'pictures/beverage_m/image_2.jpg',
        name: 'Coca-Cola Orange',
        description: '0,5 л',
        cost: '149', 
        id: myId('beverage'),
    },
    {
        src: 'pictures/beverage_m/image_3.jpg',
        name: 'Coca-Cola Zero',
        description: '0,5 л',
        cost: '159', 
        id: myId('beverage'),
    },
    {
        src: 'pictures/beverage_m/image_4.jpg',
        name: 'Coca-Cola',
        description: '0,5 л',
        cost: '159', 
        id: myId('beverage'),
    },
    {
        src: 'pictures/beverage_m/image_5.jpg',
        name: 'Coca-Cola Vanilla',
        description: '0,5 л',
        cost: '159', 
        id: myId('beverage'),
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
        <button class="button_to-collect button_to-collect_secondary" id='${beverage[i].id}' onclick='openOtherModal(event)'>
            <p class="button-cart_text button-cart_text_secondary">В корзину</p>
            <p class="button-cart_text_small button-cart_text_secondary">от ${beverage[i].cost}&#8381</p>
        </button>
    </div>
</div>`
    
    let pizzaCard = document.createElement('div')
    pizzaCard.className = 'menu__card menu__card_small menu__card_beverage'
    pizzaCard.id = myId('beverage')
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

// Modal Window for Pizza // open and creat

function openModal(event) {
    let obj = pizza.find(el => el.id == event.currentTarget.id)
    const modalPizza = `
        <div class="product_card" id="modal-pizza">
            <figure class="product_card_left">
                <img src="${obj.src}" alt="${obj.name}" class="product_cart_img">
                <figure class="elips">
                    <img src="pictures/svg/Ellipse.svg" alt="elips">
                </figure>
            </figure>
            <div class="product_card_right">
                <h3 class="section-name">${obj.name}</h3>
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
                        <p class="topping-name">Сырный бортик</p>
                        <p class="cart_text_small">599 ₽</p>
                    </figure>
                    <figure class="topping-card">
                        <img src="pictures/topping_s/image_11.png" alt="Шампиньоны" class="topping-img">
                        <p class="topping-name">Шампиньоны</p>
                        <p class="cart_text_small">39 ₽</p>
                    </figure>
                    <figure class="topping-card">
                        <img src="pictures/topping_s/image_12.png" alt="Цыпленок" class="topping-img">
                        <p class="topping-name">Цыпленок</p>
                        <p class="cart_text_small">59 ₽</p>
                    </figure>
                    <figure class="topping-card">
                        <img src="pictures/topping_s/image_13.png" alt="Брынза" class="topping-img">
                        <p class="topping-name">Брынза</p>
                        <p class="cart_text_small"></p>
                    </figure>
                    <figure class="topping-card">
                        <img src="pictures/topping_s/image_14.png" alt="Острый халапенью" class="topping-img">
                        <p class="topping-name">Острый халапенью</p>
                        <p class="cart_text_small"></p>
                    </figure>
                    <figure class="topping-card">
                        <img src="pictures/topping_s/image_15.png" alt="Острый цыпленок" class="topping-img">
                        <p class="topping-name">Острый цыпленок</p>
                        <p class="cart_text_small"></p>
                    </figure>
                </div>
                <button class="modal-btn button-cart">
                    <p class="button-cart_text">Добавить в корзину за ${obj.cost} ₽</p>
                </button>
            </div>
            <div class="clouse-wind" onclick='clouseModal()'>
                <img src="pictures/svg/close.svg" alt="закрыть">
            </div>
        </div>   
        `
    let modal = document.createElement('div')
    modal.className = 'modal-layout'
    modal.id = 'modal-layout'
    modal.innerHTML = modalPizza
    document.getElementById('mod').append(modal)
}

// Modal Window for other product [kombo, snack, desert, beverage]
// open and creat

function openOtherModal(event) {
    const other = kombo.concat(snack, desert, beverage)
    let obj = other.find(el => el.id == event.currentTarget.id)
    const modalOther = `
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
            <div class="clouse-wind" onclick='clouseModal()'>
                <img src="pictures/svg/close.svg" alt="закрыть">
            </div>
        </div>
    `
    let modal = document.createElement('div')
    modal.className = 'modal-layout'
    modal.id = 'modal-layout'
    modal.innerHTML = modalOther
    document.getElementById('mod').append(modal)
}

// Modal Window // clouse and remove

function clouseModal() {
    let el = document.getElementById('modal-layout')
    el.remove()
}


/// HTML 

`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap" rel="stylesheet">
    <title>Dodo Pizza</title>
</head>
<body class="body" id="root"> 
    <header class="main-header">
        <div class="main-header__static-menu">
            <div class="main-header__static-menu_column-1">
                <figure class="static-menu__logotype"> <!--Для desktop версии-->
                    <img src="pictures/logo.svg" alt="logotype">
                </figure>
                <figure class="static-menu__logotype_small"> <!--Для мобилной версии-->
                    <img src="pictures/logo_small.jpg" alt="logotype">
                </figure>
                <nav class="static-menu__navigation static-menu__navigation_small scrollbar">
                    <ul class="navigation-list">
                        <li class="navigation-list_element navigation-list_element_small"><a href="#pizza">Пицца</a></li>
                        <li class="navigation-list_element navigation-list_element_small"><a href="#kombo">Комбо</a></li>
                        <li class="navigation-list_element navigation-list_element_small"><a href="#snack">Закуски</a></li>
                        <li class="navigation-list_element navigation-list_element_small"><a href="#desert">Десерты</a></li>
                        <li class="navigation-list_element navigation-list_element_small"><a href="#beverage">Напитки</a></li>
                        <li class="navigation-list_element navigation-list_element_small"><a href="#">Другие товары</a></li>
                    </ul>
                </nav>
            </div>    
            <div class="main-header__static-menu_column-2">
                <div class="static-menu__contact-tel">
                    <p  class="contact-tel_number">8 800 302-00-60</p>
                    <p  class="contact-tel_text">Звонок бесплатный</p>
                </div>
                <div class="static-menu__cart"> 
                    <button class="button-cart"><p class="button-cart_text">Корзина</p></button>
                </div>
            </div>
        </div>
    </header>
    <main class="main">
        <figure class="main__slider"> <!--desktop version-->
            <img class="main__slider_image" src="pictures/slide_1.png" alt="this is slider">
        </figure>
        <figure class="main__slider_small"> <!--mobile version-->
            <img class="main__slider_image" src="pictures/slide_s.png" alt="this is slider">
        </figure>
        
        <section class="main__new-and-pop">
            <h2 class="section-name">Новое и популярное</h2>
            <div class="new-and-pop__bar_small">
                <div class="new-and-pop__bar scrollbar" id="new-and-pop">
                </div>
            </div>
        </section>
        
        <section class="main__pizza main__pizza_small">
            <h2 class="section-name section-name_pizza">Пицца</h2>
            <div class="pizza_menu" id="pizza">
            </div>
        </section>
        
        <section class="main__kombo main__pizza">
            <h2 class="section-name">Комбо</h2>
            <div class="pizza_menu" id="kombo">
            </div>
        </section>
        
        <section class="main__snacks main__pizza">
            <h2 class="section-name">Закуски</h2>
            <div class="pizza_menu" id="snack">
            </div>
        </section>
        
        <section class="main__deserts main__pizza">
            <h2 class="section-name">Десерты</h2>
            <div class="pizza_menu" id="desert">
            </div>
        </section>
        
        <section class="main__beverages main__pizza">
            <h2 class="section-name">Напитки</h2>
            <div class="pizza_menu" id="beverage">
            </div>
        </section>
    </main>
    <footer class="main-footer">
        <div class="footer_row-1">
            <div class="footer-list">
                <ul class="footer-list_ul">
                    <li class="footer__text footer__text_size18"><b><a href="">Додо Пицца</a></b></li>
                    <li class="footer__text footer__text_size18 text_opacity07"><a href="">О нас</a></li>
                    <li class="footer__text footer__text_size18 text_opacity07"><a href="">Додо-книга</a></li>
                    <li class="footer__text footer__text_size18 text_opacity07"><a href="">Блог «Сила ума»</a></li>
                    <li class="footer__text footer__text_size18 text_opacity07"><a href="">Додо ИС</a></li>
                </ul>
            </div>
            <div class="footer-list">
                <ul class="footer-list_ul">
                    <li class="footer__text footer__text_size18"><b><a href="">Работа</a></b></li>
                    <li class="footer__text footer__text_size18 text_opacity07"><a href="">В пицерии</a></li>
                    <li class="footer__text footer__text_size18 text_opacity07"><a href="">В контакт центре</a></li>
                </ul>
            </div>
            <div class="footer-list">
                <ul class="footer-list_ul">
                    <li class="footer__text footer__text_size18"><b><a href="">Партнерам</a></b></li>
                    <li class="footer__text footer__text_size18 text_opacity07"><a href="">Франшиза</a></li>
                    <li class="footer__text footer__text_size18 text_opacity07"><a href="">Инвестиции</a></li>
                    <li class="footer__text footer__text_size18 text_opacity07"><a href="">Поставщикам</a></li>
                    <li class="footer__text footer__text_size18 text_opacity07"><a href="">Предложить помещение</a></li>
                </ul>
            </div>
            <div class="footer-list">
                <ul class="footer-list_ul">
                    <li class="footer__text footer__text_size18"><b><a href="">Это интересно</a></b></li>
                    <li class="footer__text footer__text_size18 text_opacity07"><a href="">Экскурсии и мастер-классы</a></li>
                    <li class="footer__text footer__text_size18 text_opacity07"><a href="">Корпоративные заказы</a></li>
                </ul>
            </div>
            <hr class="footer_line-1">
            <div class="footer-contacts">
                <div>
                    <a href=""><img src="pictures/trimmy-google-play.png" alt="Приложение Googl Play"></a>
                    <a href=""><img src="pictures/trimmy-apple-store.png" alt="Приложение App Store"></a>
                </div>
                <p class="footer__text footer__text_size26 footer__text_number"><b>8-800-302-00-60</b></p>
                <p class="footer__text footer__text_size15 text_opacity05 footer__text_number">Звонок бесплатный</p>
                <p class="footer__text footer__text_size15 text_opacity09 footer__text_mail"><a href="">feedback@dodopizza.com</a></p>
            </div>
        </div>
        <div class="footer_row-2">
            <div class="footer-info">
                <p class="footer__text footer__text_size26"><b>1 396 362 874 ₽</b></p>
                <p class="footer__text footer__text_size16 text_opacity07">Выручка российской сети в этом месяце. <br>В прошлом — 2 460 305 416 ₽</p>
            </div>
            <div class="footer-info">
                <p class="footer__text footer__text_size26"><b>688 пиццерий</b></p>
                <p class="footer__text footer__text_size16 text_opacity07">в 14 странах, включая Китай, <br>США и Великобританию</p>
            </div>
        </div>
        <hr class="footer_line-2">
        <div class="footer_row-3">
            <div class="footer-logotype">
                <img src="pictures/logofooter.png" alt="ДОДО ПИЦЦА">
            </div>
            <div class="footer-help">
                <span class="footer__text footer__text_size16 text_opacity07"><a href="">Правовая информация</a></span>
                <span class="footer__text footer__text_size16 text_opacity07"><a href="">Калорийность и состав</a></span>
                <span class="footer__text footer__text_size16 text_opacity07"><a href="">Помощь</a></span>
            </div>
            <div class="footer-social">
                <a href=""><img src="pictures/social/fb.png" alt="Faceook"></a>
                <a href=""><img src="pictures/social/inst.png" alt="Instagram"></a>
                <a href=""><img src="pictures/social/ok.png" alt="Odnoklassniki"></a>
                <a href=""><img src="pictures/social/vk.png" alt="VK"></a>
                <a href=""><img src="pictures/social/youtube.png" alt="You Tube"></a>
            </div>
        </div>
    </footer>
    <div id="mod"></div>
    <script src="script.js"></script>
    <!-- <script type="module">
        import app from './index.js'
        app()
    </script> -->
    <!-- <script type="module">
        import openModal from './modalwindow/modalwindow.js'
        openModal(event)
    </script> -->
    <!-- <script>
        function openModal(event) {
            console.log('ghbfdf')
        } onclick='openModal(event)'
    </script> -->
</body>
</html>
`