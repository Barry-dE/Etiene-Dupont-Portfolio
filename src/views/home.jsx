import bgImage from "/hero-image-use.jpg";

const description = [
  "Bienvenue! Welcome to the artistic realm of Étienne Dupont, where every click of the shutter tells a unique story. Dive into my portfolio, and uncover my creative journey. Let’s create timeless memories together.",
];

const title = {
  title: "Étienne — Photographer",
};

export default function Home() {
  return (
    <section className="home">
      <div className="home__wrapper">
        <figure className="home__media">
          <img
            src={bgImage}
            alt="A picture of a person holding a camera"
            className="home__media__image"
            width={200}
          />
        </figure>

        <div className="home__text">
          <div className="home__text__wrapper">
            <p className="home__text__description">{description[0]}</p>
            <div className="home__text__title__content">
              <div className="home__text__title__wrapper">
                <svg
                  viewBox="0 0 112 112"
                  xmlns="http://www.w3.org/2000/svg"
                  role="presentation"
                  aria-hidden="true"
                  width={100}
                >
                  <path
                    d="m111.547 59.968-50.391-1.406 36.64 34.531-5.155 5.157L58.11 61.61 59.516 112h-7.188l1.407-50.39-34.532 36.64-5.156-5.157 36.64-34.53-50.39 1.405v-7.187l50.39 1.641-36.64-34.61 5.156-5.078 34.532 36.641L52.328.985h7.188l-1.406 50.39 34.53-36.64 5.157 5.077-36.641 34.61 50.39-1.407z"
                    fill="#fff"
                    fillRule="nonzero"
                  />
                </svg>
                <h1 className="home__text__title">{title.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
