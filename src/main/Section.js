import Card from "./Card";

function Section({
  sectionArr,
  sectionName,
  btnType,
  btnSize,
  btnText,
  setCard,
  toppings,
}) {
  let newArr = sectionArr.map((card) => (
    <Card
      setCard={setCard}
      name={card.name}
      src={card.src}
      description={card.description}
      cost={card.cost}
      ingridients={card.ingridients}
      toppings={toppings}
      btnType={card.btnText ? undefined : btnType}
      btnSize={btnSize}
      btnText={card.btnText || btnText}
    />
  ));
  console.log(toppings)
  return (
    <section className="main__pizza main__pizza_small">
      <h2 className="section-name section-name_pizza">{sectionName}</h2>
      <div className="pizza_menu">{newArr}</div>
    </section>
  );
}

export default Section;
