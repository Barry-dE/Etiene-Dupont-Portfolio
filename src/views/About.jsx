import aboutImg from "/kim-becker-EoCwQ5PerAs-unsplash.jpg";
import Hobbies from "./Hobbies";
const about = {
  personalStoryTitle: " Journey & Creative Philosophy",
  personalStoryDescription: [
    `From wandering the picturesque streets of Paris with my
              grandfather’s vintage camera to honing my craft at the École des
              Beaux-Arts, my journey has been a tapestry of experiences and
              inspirations.`,
    `Collaborating with renowned artists across Europe has shaped my
              unique style, characterized by meticulous attention to detail and
              a narrative-driven approach.`,
    `I believe in the transformative power of photography. Each image I
              create is a carefully crafted piece of art, designed to evoke
              emotion and capture the essence of the moment.`,
    `My goal is to tell compelling stories through my lens, whether
              it’s a candid smile or a majestic landscape.`,
  ],
};

function About() {
  return (
    <section className="about">
      <div className="about__wrapper">
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
            <p data-animation="title">{about.personalStoryTitle}</p>
          </div>
          <article className="about__personal__story__description">
            {about.personalStoryDescription.map((text, index) => {
              return (
                <p data-animation="title" key={index}>
                  {text}
                </p>
              );
            })}
          </article>
        </div>
      </div>
      <Hobbies />
    </section>
  );
}

export default About;
