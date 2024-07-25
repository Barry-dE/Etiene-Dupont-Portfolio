import homeImage from "/gallery-4.jpg";

const title = {
  name: "Étienne ",
  surname: "Dupont",
};

export default function Home() {
  return (
    <section className="home">
      <div className="home__wrapper">
        <div className="home__card">
          <div className="home__card__image">
            <div className="home__card__draggable">Photographer</div>
            <div className="home__card__draggable">Creative</div>
            <div className="home__card__draggable">Artist</div>
            <div className="home__card__draggable">Art Director</div>
            <div className="home__card__draggable">Writer</div>
            <div className="home__card__draggable">Traveller</div>
          </div>
        </div>
        <div className="home__text">
          <div className="home__text__wrapper">
            <figure className="home__text__media">
              <img
                src={homeImage}
                alt=""
                className="home__text__media__image"
              />
            </figure>

            <div className="home__text__title__content">
              <h1 className="home__text__title">{title.name}</h1>
              <h1 className="home__text__title">{title.surname}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
