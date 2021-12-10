import Section from "./Section";
import Slider from "./Slider";
import ScrollBar from "./ScrollBar";
import DB from "./BD/DB";

function Main(props) {
  console.log(DB.toppings)
  return (
    <main className="main">
      <Slider classSize="main__slider" />
      <Slider classSize="main__slider_small" />

      <ScrollBar sectionName="Новое и популярное" sectionArr={DB.newpop} />

      <Section
        sectionName="Пицца"
        sectionArr={DB.pizza}
        btnText="Выбрать"
        btnType="secondary"
        setCard={props.setCard}
      />
      <Section
        sectionName="Комбо"
        sectionArr={DB.kombo}
        btnText="Собрать"
        setCard={props.setCard}
      />
      <Section
        sectionName="Закуски"
        sectionArr={DB.snack}
        btnText="В корзину"
        btnType="secondary"
        setCard={props.setCard}
      />
      <Section
        sectionName="Десерты"
        sectionArr={DB.desert}
        btnText="В корзину"
        btnType="secondary"
        setCard={props.setCard}
      />
      <Section
        sectionName="Напитки"
        sectionArr={DB.beverage}
        btnText="В корзину"
        btnType="secondary"
        setCard={props.setCard}
      />
    </main>
  );
}

export default Main;

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
