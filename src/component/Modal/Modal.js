import React, { useState } from "react";
import DB from "../../main/BD/DB";
import Topping from "./Topping";
import Button from "../Button/Button";
import Delete from "./Delete";
import Back from "./Back";
import "./Modal.css";

function Modal({ clouseModal, card, toppings }) {
  const [sizePizza, setSizePizza] = useState("medium");
  const [dough, setDough] = useState("traditional");

  let ingrArr = card.ingridients.map((item) => (
    <span>
      {item.ingr}
      {item.delete == true ? <Delete /> : null}
    </span>
  ));

  function smallSizePizza() {
    if (dough == "thin") {
      setSizePizza("small");
      setDough("traditional");
    } else {
      setSizePizza("small");
    }
  }
  console.log(toppings);
  return (
    <div className="modal-layout">
      <div class="product_card" id="modal-pizza">
        {/* <Button onClick={clouseModal}>Закрыть</Button> */}
        <figure class="product_card_left">
          <img src={card.src} class="product_cart_img" />
          <figure class="elips">
            <img src="../pictures/svg/Ellipse.svg" />
          </figure>
        </figure>
        <div class="product_card_right">
          <h3 class="section-name">{card.name}</h3>
          <p class="card_descript">30 см, традиционное тесто, 480 г</p>
          <p class="card_topping">{ingrArr}</p>
          <div class="product_size">
            <input
              type="radio"
              id="sizeSmall"
              name="size"
              value="sizeSmall"
              checked={sizePizza == "small"}
              onChange={() => smallSizePizza()}
            ></input>
            <label for="sizeSmall" className="size-select size-select_font">
              Маленькая
            </label>

            <input
              type="radio"
              id="sizeMedium"
              name="size"
              value="sizeMedium"
              checked={sizePizza == "medium"}
              onChange={() => setSizePizza("medium")}
            ></input>
            <label for="sizeMedium" className="size-select size-select_font">
              Средняя
            </label>

            <input
              type="radio"
              id="sizeBig"
              name="size"
              value="sizeBig"
              checked={sizePizza == "big"}
              onChange={() => setSizePizza("big")}
            ></input>
            <label for="sizeBig" className="size-select size-select_font">
              Большая
            </label>
          </div>

          <div class="product_size">
            <input
              type="radio"
              id="traditional"
              name="dough"
              value="traditional"
              checked={dough == "traditional"}
            ></input>
            <label
              for="traditional"
              className="size-select size-select_dough size-select_font"
              onClick={() => setDough("traditional")}
            >
              Традиционное
            </label>

            <input
              type="radio"
              id="thin"
              name="dough"
              value="thin"
              checked={dough == "thin"}
              disabled={sizePizza == "small"}
              onChange={() => setDough("thin")}
            ></input>
            <label
              for="thin"
              className="size-select size-select_dough size-select_font"
            >
              Тонкое
            </label>
          </div>
          <h2 class="card_price">Добавить в пиццу</h2>
          <div class="img-topping">
            {DB.toppings.map((elem) => (
              <Topping topping={elem}/>
            ))}
          </div>
          <Button size="big" className="btn_position_big">
            Добавить в корзину за {card.cost}₽
          </Button>
          {/* <button class="modal-btn button-cart">
            <p class="button-cart_text">Добавить в корзину за {card.cost}₽</p>
          </button> */}
        </div>
        <div class="clouse-wind" onClick={clouseModal}>
          <img src="../pictures/svg/close.svg" alt="закрыть" />
        </div>
      </div>
    </div>
  );
}

export default Modal;

///// Topings /////

{
  /* <span class="underline span">
  Ветчина
  <Back />
  <Delete />
</span>
, сыр чеддер,
<span class="underline span">
  сладкий перец
  <Delete />
</span>
,моцарелла, томатный соус,
<span class="strike span">чеснок&nbsp;</span>,
<span class="underline span">
  итальянские травы
  <Delete />
</span> */
}
