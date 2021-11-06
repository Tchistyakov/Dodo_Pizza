import myId from '../generator_id/generator_id.js'

export const pizza = [
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

export const kombo = [
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

export const snack = [
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

export let desert = [
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

export let beverage = [
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

export const newpop = [
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