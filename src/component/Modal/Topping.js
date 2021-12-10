function Topping({topping}) {
  return (
    <figure class="topping-card">
      <img
        src={topping.img}
        alt={topping.name}
        className="topping-img"
      />
      <p className="topping-name">{topping.name}</p>
      <p className="cart_text_small">{topping.cost}₽</p>
    </figure>
  );
}

export default Topping