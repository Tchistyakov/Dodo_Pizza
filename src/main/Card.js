import Button from "../component/Button/Button";

function Card(props) {
  return (
    <div className="menu__card menu__card_small">
      <figure className="card_image_big">
        <img className="card_image_small" src={props.src} alt={props.name} />
      </figure>
      <div className="card_des_col">
        <div>
          <h3 className="card_name">{props.name}</h3>
          <p className="card_descript">{props.description}</p>
        </div>
        <div className="card_footer">
          <h4 className="card_price">от {props.cost}₽</h4>
          <Button
            type={props.btnType}
            size={props.btnSize}
            cost={props.cost}
            toppings={props.toppings}
            setCard={() => props.setCard(props)}
          >
            {props.btnText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;

// pizza
// button_to-collect button_to-collect_secondary
// button-cart_text button-cart_text_secondary        выбрать
// button-cart_text_small button-cart_text_secondary

// kombo
// button_to-collect
// button-cart_text         собрать
// button-cart_text_small

// snack
// button_to-collect button_to-collect_secondary
// button-cart_text button-cart_text_secondary        в корзину
// button-cart_text_small button-cart_text_secondary

// desert
// button_to-collect button_to-collect_secondary
// button-cart_text button-cart_text_secondary          в корзину
// button-cart_text_small button-cart_text_secondary

// beverage
// button_to-collect button_to-collect_secondary
// button-cart_text button-cart_text_secondary         в корзину
// button-cart_text_small button-cart_text_secondary
