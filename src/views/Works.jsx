import image from "/gallery-3.jpg";

function Works() {
  return (
    <section className="works">
      <div className="works__wrapper">
        <h2 className="works__text">Selected Works</h2>
        <div className="works__media card  card--1" id="1">
          <img width={500} src={image} alt="" />
        </div>
        <div className="works__media card card--2" id="2">
          <img width={500} src={image} alt="" />
        </div>
        <div className="works__media card card--3" id="3">
          <img width={500} src={image} alt="" />
        </div>
      </div>
      <div className="works__outro">
        <h2>Outro</h2>
      </div>
    </section>
  );
}

export default Works;
