const main = `
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
`


export default main