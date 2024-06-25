import aboutImg from "/john-daniel-sudario-vnktcKBrFdc-unsplash.jpg";
function About() {
  return (
    <section className="about">
      <div className="about__wrapper">
        <div className="about__text">
          <div className="about__text__title">
            <span className="about__text__bracket about__text__bracket--right">
              &#91;
            </span>
            <span className="about__text__titles__inner">My story</span>
            <span className="about__text__bracket about__text__bracket--left">
              &#93;
            </span>
          </div>
        </div>
        <div className="about__gallery">
          <figure className="about__gallery__media">
            <img
              src={aboutImg}
              alt=" A picture of the picturesque streets"
              className="about__gallery__media__image"
              height={100}
            />
          </figure>
        </div>

        <div className="about__personal__story">
          <div className="about__personal__story__title">
            <p> Journey & Creative Philosophy</p>
          </div>
          <article className="about__personal__story__description">
            <p>
              From wandering the picturesque streets of Paris with my
              grandfather’s vintage camera to honing my craft at the École des
              Beaux-Arts, my journey has been a tapestry of experiences and
              inspirations.
            </p>

            <p>
              Collaborating with renowned artists across Europe has shaped my
              unique style, characterized by meticulous attention to detail and
              a narrative-driven approach.
            </p>

            <p>
              I believe in the transformative power of photography. Each image I
              create is a carefully crafted piece of art, designed to evoke
              emotion and capture the essence of the moment.
            </p>

            <p>
              My goal is to tell compelling stories through my lens, whether
              it’s a candid smile or a majestic landscape.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;

//  Artistic Journey**
// From wandering the picturesque streets of Paris with my grandfather’s vintage camera to honing my craft at the École des Beaux-Arts, my journey has been a tapestry of experiences and inspirations. Collaborating with renowned artists across Europe has shaped my unique style, characterized by meticulous attention to detail and a narrative-driven approach.

// Creative Philosophy
// I believe in the transformative power of photography. Each image I create is a carefully crafted piece of art, designed to evoke emotion and capture the essence of the moment. My goal is to tell compelling stories through my lens, whether it’s a candid smile or a majestic landscape.
