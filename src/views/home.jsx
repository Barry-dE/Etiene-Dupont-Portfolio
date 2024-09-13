import homeImage from "/henrique-hanemann-cDBDcfcwR1w-unsplash.jpg";

const title = {
  name: "Étienne ",
  surname: "Dupont",
};

export default function Home() {
  return (
    <section className="home">
      <div className="home__wrapper">
        <figure className="home__media">
          <img
            src={homeImage}
            alt="An image of Etienne"
            className="home__media__image"
          />
        </figure>

        <div className="hero__text">
          <p className="hero__text__description">
            Passionate photographer based in France, capturing the beauty of
            everyday moments and stunning landscapes. Specializing in portrait,
            travel, and street photography, I bring a unique perspective to each
            shot
          </p>
        </div>

        <div className="hero__services">
          <p className="hero__services__item">Portraitist.</p>
          <p className="hero__services__item">Traveler.</p>
          <p className="hero__services__item">Storyteller.</p>
        </div>
      </div>
    </section>
  );
}
