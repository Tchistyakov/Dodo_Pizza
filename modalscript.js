// function modal_open() {
//     console.log('open')
//     document.getElementById('modal-pizza').style = 'display: flex;'
//     document.getElementById('modal-layout').style = 'display: flex;'
// }

// function modal_clouse() {
//     console.log('clouse')
//     document.getElementById('modal-pizza').style = 'display: none;'
//     document.getElementById('modal-layout').style = 'display: none;'
// }

// function openModal() {
//     let modal = `
    
//         <div class="product_card" id="modal-pizza">
//             <figure class="product_card_left">
//                 <img src="pictures/pizza_xl/image_1.png" alt="Чиззи чеддер" class="product_cart_img">
//                 <figure class="elips">
//                     <img src="pictures/svg/Ellipse 6.svg" alt="elips">
//                 </figure>
//             </figure>
//             <div class="product_card_right">
//                 <h3 class="section-name">Чиззи чеддер</h3>
//                 <p class="card_descript">30 см, традиционное тесто, 480 г</p>
//                 <p class="card_topping">
//                     <span class="underline span">Ветчина 
//                         <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <circle cx="7" cy="7" r="6.75" fill="white" stroke="#727171" stroke-width="0.5" />
//                             <path d="M9 5L5 9M9 9L5 5" stroke="#727171" />
//                         </svg>
//                     </span>, сыр чеддер, 
//                     <span class="underline span">сладкий перец 
//                         <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <circle cx="7" cy="7" r="6.75" fill="white" stroke="#727171" stroke-width="0.5" />
//                             <path d="M9 5L5 9M9 9L5 5" stroke="#727171" />
//                         </svg>
//                     </span>,моцарелла, томатный соус, 
//                     <span class="strike span">чеснок&nbsp;
//                         <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <circle cx="7" cy="7" r="6.75" fill="white" stroke="#727171" stroke-width="0.5" />
//                             <path d="M7.00001 6.01967V5.16667C6.9999 5.10079 6.9803 5.03643 6.94367 4.98167C6.90704 
//                                 4.92692 6.85502 4.88424 6.79418 4.859C6.73333 4.83376 6.66637 4.8271 6.60174 4.83986C6.53712 
//                                 4.85261 6.47771 4.88421 6.43101 4.93067L4.33334 7L6.43101 9.069C6.46189 9.10006 6.49861 9.12471 
//                                 6.53906 9.14153C6.5795 9.15835 6.62287 9.16701 6.66668 9.16701C6.71048 9.16701 6.75385 9.15835 
//                                 6.79429 9.14153C6.83474 9.12471 6.87146 9.10006 6.90234 9.069C6.93331 9.03807 6.95788 9.00133 
//                                 6.97464 8.96089C6.9914 8.92045 7.00002 8.87711 7.00001 8.83333V8.00367C7.91668 8.02633 8.91834 
//                                 8.19233 9.66668 9.33333V9C9.66668 7.45567 8.50001 6.18567 7.00001 6.01967Z" fill="#727171" />
//                         </svg>
//                     </span>, 
//                     <span class="underline span">итальянские травы
//                         <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <circle cx="7" cy="7" r="6.75" fill="white" stroke="#727171" stroke-width="0.5" />
//                             <path d="M9 5L5 9M9 9L5 5" stroke="#727171" />
//                         </svg>
//                     </span>
//                 </p>
//                 <div class="product_size">
//                     <div class="size-select size-select_font"><p>Маленькая</p></div>
//                     <div class="size-select size-select_font"><p>Средняя</p></div>
//                     <div class="size-select size-select_font"><p>Большая</p></div>
//                 </div>
//                 <div class="product_size">
//                     <div class="size-select size-select_dough size-select_font"><p>Традиционное</p></div>
//                     <div class="size-select size-select_dough size-select_font"><p>Тонкое</p></div>
//                 </div>
//                 <h2 class="card_price">Добавить в пиццу</h2>
//                 <div class="img-topping">
//                     <figure class="topping-card">
//                         <img src="pictures/topping_s/image_10.png" alt="" class="topping-img">
//                         <svg class="topping-img-pass" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path class="pass-fill" d="M11.6505 2.37695C10.4262 1.15265 8.76565 0.464844 7.03423 0.464844C5.30281 0.464844 3.6423 1.15265 2.418 2.37695C1.1937 3.60125 0.505898 5.26175 0.505898 6.99318C0.505898 8.7246 1.1937 10.3851 2.418 11.6094C3.6423 12.8337 5.30281 13.5215 7.03423 13.5215C8.76565 13.5215 10.4262 12.8337 11.6505 11.6094C12.8748 10.3851 13.5626 8.7246 13.5626 6.99318C13.5626 5.26175 12.8748 3.60125 11.6505 2.37695ZM7.03423 12.6465C3.91704 12.6465 1.38091 10.1104 1.38091 6.99318C1.38091 3.87593 3.91699 1.33985 7.03423 1.33985C10.1515 1.33985 12.6875 3.87593 12.6875 6.99318C12.6875 10.1104 10.1515 12.6465 7.03423 12.6465Z"/>
//                             <path class="pass-fill" d="M6.0503 8.36192L4.04292 6.35456L3.42421 6.97327L6.0503 9.59936L10.6304 5.01931L10.0116 4.4006L6.0503 8.36192Z"/>
//                         </svg>
//                         <p class="topping-name">Сырный бортик</p>
//                         <p class="cart_text_small">599 ₽</p>
//                     </figure>
//                     <figure class="topping-card">
//                         <img src="pictures/topping_s/image_11.png" alt="Шампиньоны" class="topping-img">
//                         <svg class="topping-img-pass" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path class="pass-fill" d="M11.6505 2.37695C10.4262 1.15265 8.76565 0.464844 7.03423 0.464844C5.30281 0.464844 3.6423 1.15265 2.418 2.37695C1.1937 3.60125 0.505898 5.26175 0.505898 6.99318C0.505898 8.7246 1.1937 10.3851 2.418 11.6094C3.6423 12.8337 5.30281 13.5215 7.03423 13.5215C8.76565 13.5215 10.4262 12.8337 11.6505 11.6094C12.8748 10.3851 13.5626 8.7246 13.5626 6.99318C13.5626 5.26175 12.8748 3.60125 11.6505 2.37695ZM7.03423 12.6465C3.91704 12.6465 1.38091 10.1104 1.38091 6.99318C1.38091 3.87593 3.91699 1.33985 7.03423 1.33985C10.1515 1.33985 12.6875 3.87593 12.6875 6.99318C12.6875 10.1104 10.1515 12.6465 7.03423 12.6465Z"/>
//                             <path class="pass-fill" d="M6.0503 8.36192L4.04292 6.35456L3.42421 6.97327L6.0503 9.59936L10.6304 5.01931L10.0116 4.4006L6.0503 8.36192Z"/>
//                         </svg>
//                         <p class="topping-name">Шампиньоны</p>
//                         <p class="cart_text_small">39 ₽</p>
//                     </figure>
//                     <figure class="topping-card">
//                         <img src="pictures/topping_s/image_12.png" alt="Цыпленок" class="topping-img">
//                         <svg class="topping-img-pass" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path class="pass-fill" d="M11.6505 2.37695C10.4262 1.15265 8.76565 0.464844 7.03423 0.464844C5.30281 0.464844 3.6423 1.15265 2.418 2.37695C1.1937 3.60125 0.505898 5.26175 0.505898 6.99318C0.505898 8.7246 1.1937 10.3851 2.418 11.6094C3.6423 12.8337 5.30281 13.5215 7.03423 13.5215C8.76565 13.5215 10.4262 12.8337 11.6505 11.6094C12.8748 10.3851 13.5626 8.7246 13.5626 6.99318C13.5626 5.26175 12.8748 3.60125 11.6505 2.37695ZM7.03423 12.6465C3.91704 12.6465 1.38091 10.1104 1.38091 6.99318C1.38091 3.87593 3.91699 1.33985 7.03423 1.33985C10.1515 1.33985 12.6875 3.87593 12.6875 6.99318C12.6875 10.1104 10.1515 12.6465 7.03423 12.6465Z"/>
//                             <path class="pass-fill" d="M6.0503 8.36192L4.04292 6.35456L3.42421 6.97327L6.0503 9.59936L10.6304 5.01931L10.0116 4.4006L6.0503 8.36192Z"/>
//                         </svg>
//                         <p class="topping-name">Цыпленок</p>
//                         <p class="cart_text_small">59 ₽</p>
//                     </figure>
//                     <figure class="topping-card">
//                         <img src="pictures/topping_s/image_13.png" alt="Брынза" class="topping-img">
//                         <svg class="topping-img-pass" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path class="pass-fill" d="M11.6505 2.37695C10.4262 1.15265 8.76565 0.464844 7.03423 0.464844C5.30281 0.464844 3.6423 1.15265 2.418 2.37695C1.1937 3.60125 0.505898 5.26175 0.505898 6.99318C0.505898 8.7246 1.1937 10.3851 2.418 11.6094C3.6423 12.8337 5.30281 13.5215 7.03423 13.5215C8.76565 13.5215 10.4262 12.8337 11.6505 11.6094C12.8748 10.3851 13.5626 8.7246 13.5626 6.99318C13.5626 5.26175 12.8748 3.60125 11.6505 2.37695ZM7.03423 12.6465C3.91704 12.6465 1.38091 10.1104 1.38091 6.99318C1.38091 3.87593 3.91699 1.33985 7.03423 1.33985C10.1515 1.33985 12.6875 3.87593 12.6875 6.99318C12.6875 10.1104 10.1515 12.6465 7.03423 12.6465Z"/>
//                             <path class="pass-fill" d="M6.0503 8.36192L4.04292 6.35456L3.42421 6.97327L6.0503 9.59936L10.6304 5.01931L10.0116 4.4006L6.0503 8.36192Z"/>
//                         </svg>
//                         <p class="topping-name">Брынза</p>
//                         <p class="cart_text_small"></p>
//                     </figure>
//                     <figure class="topping-card">
//                         <img src="pictures/topping_s/image_14.png" alt="Острый халапенью" class="topping-img">
//                         <svg class="topping-img-pass" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path class="pass-fill" d="M11.6505 2.37695C10.4262 1.15265 8.76565 0.464844 7.03423 0.464844C5.30281 0.464844 3.6423 1.15265 2.418 2.37695C1.1937 3.60125 0.505898 5.26175 0.505898 6.99318C0.505898 8.7246 1.1937 10.3851 2.418 11.6094C3.6423 12.8337 5.30281 13.5215 7.03423 13.5215C8.76565 13.5215 10.4262 12.8337 11.6505 11.6094C12.8748 10.3851 13.5626 8.7246 13.5626 6.99318C13.5626 5.26175 12.8748 3.60125 11.6505 2.37695ZM7.03423 12.6465C3.91704 12.6465 1.38091 10.1104 1.38091 6.99318C1.38091 3.87593 3.91699 1.33985 7.03423 1.33985C10.1515 1.33985 12.6875 3.87593 12.6875 6.99318C12.6875 10.1104 10.1515 12.6465 7.03423 12.6465Z"/>
//                             <path class="pass-fill" d="M6.0503 8.36192L4.04292 6.35456L3.42421 6.97327L6.0503 9.59936L10.6304 5.01931L10.0116 4.4006L6.0503 8.36192Z"/>
//                         </svg>
//                         <p class="topping-name">Острый халапенью</p>
//                         <p class="cart_text_small"></p>
//                     </figure>
//                     <figure class="topping-card">
//                         <img src="pictures/topping_s/image_15.png" alt="Острый цыпленок" class="topping-img">
//                         <svg class="topping-img-pass" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path class="pass-fill" d="M11.6505 2.37695C10.4262 1.15265 8.76565 0.464844 7.03423 0.464844C5.30281 0.464844 3.6423 1.15265 2.418 2.37695C1.1937 3.60125 0.505898 5.26175 0.505898 6.99318C0.505898 8.7246 1.1937 10.3851 2.418 11.6094C3.6423 12.8337 5.30281 13.5215 7.03423 13.5215C8.76565 13.5215 10.4262 12.8337 11.6505 11.6094C12.8748 10.3851 13.5626 8.7246 13.5626 6.99318C13.5626 5.26175 12.8748 3.60125 11.6505 2.37695ZM7.03423 12.6465C3.91704 12.6465 1.38091 10.1104 1.38091 6.99318C1.38091 3.87593 3.91699 1.33985 7.03423 1.33985C10.1515 1.33985 12.6875 3.87593 12.6875 6.99318C12.6875 10.1104 10.1515 12.6465 7.03423 12.6465Z"/>
//                             <path class="pass-fill" d="M6.0503 8.36192L4.04292 6.35456L3.42421 6.97327L6.0503 9.59936L10.6304 5.01931L10.0116 4.4006L6.0503 8.36192Z"/>
//                         </svg>
//                         <p class="topping-name">Острый цыпленок</p>
//                         <p class="cart_text_small"></p>
//                     </figure>
//                 </div>
//                 <button class="modal-btn button-cart"><p class="button-cart_text">Добавить в корзину за 625 ₽</p></button>
//             </div>
//             <div class="clouse-wind" onclick='clouseModal()'>
//                 <img src="pictures/svg/close.svg" alt="закрыть">
//             </div>
//         </div>
    
//     `
//     let mdl = document.createElement('div')
//     mdl.className = 'modal-layout'
//     mdl.id = 'modal-layout'
//     mdl.innerHTML = modal
//     document.body.append(modal);

// }

// <div class="modal-layout" id="modal-layout"></div>
