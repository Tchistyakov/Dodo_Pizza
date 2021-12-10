function Card_XS({datacard}) {

  return (
    <div className="new-and-pop_card">
      <div class="bar-card_image_small">
        <img src={datacard.src} />
      </div>
      <div class="card_small_description">
        <p class="card-small_name">{datacard.name}</p>
        <p class="card_price">от {datacard.cost}₽</p>
      </div>
    </div>
  );
}

export default Card_XS;
