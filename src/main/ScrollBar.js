import Card_XS from "./Card_XS"

function ScrollBar({ sectionName, sectionArr }) {
  let newArr = sectionArr.map((card) => (
    <Card_XS
      // name={card.name}
      // src={card.src}
      // cost={card.cost}
      datacard={card}
    />
  ));
  return (
    <section className="main__new-and-pop">
      <h2 className="section-name">{sectionName}</h2>
      <div className="new-and-pop__bar_small">
        <div className="new-and-pop__bar scrollbar" id="new-and-pop">
          {newArr}
        </div>
      </div>
    </section>
  );
}

export default ScrollBar;
