import "./Button.css";

function Button({
  type = "primary",
  size = "primary",
  children,
  text = "button-cart_text_secondary",
  cost,
  setCard,
}) {
  return (
    <button
      type="button"
      className={`btn_${type} btn_size_${size}`}
      onClick={() => setCard()}
    >
      <span
        className={
          type === "primary" ? `button-cart_text` : `button-cart_text ${text}`
        }
      >
        {children}
      </span>
      <span
        className={
          type === "primary"
            ? `button-cart_text_small`
            : `button-cart_text_small ${text}`
        }
      >
        от {cost}₽
      </span>
    </button>
  );
}

export default Button;

{
  /* <span className="button-cart_text button-cart_text_secondary">
{props.btnText}
</span>
<span className="button-cart_text_small button-cart_text_secondary">
от {props.cost}₽
</span> */
}

// Задание:
//    Написать компонент кнопки из проекта DoDo пиццы
//    Кнопка может быть одним из трех типов: primary (по умолчанию), secondary, light
//    Кнопка может быть либо большой (48px по высоте), либо маленькой
//    (40px на десктопе и 32px на мобильном устройстве), по умолчанию маленькая
// Макет:
//    https://www.figma.com/file/oSOvGO9Embcc1wYeNyU6bm/Dodo-Pizza-base?node-id=946%3A316
// Примеры использования:
//    <Button size="big">Добавить в корзину за 625 ₽</Button>
//    <Button type="secondary">Выбрать</Button>
//    <Button type="light" onClick={() => console.log("BACK")}>Назад в корзину</Button>
