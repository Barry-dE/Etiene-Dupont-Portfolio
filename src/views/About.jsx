import aboutImage1 from "/jakayla-toney-EdwBSWshC-U-unsplash.jpg";

const about = {
  personalStoryTitle: "Creative Philosophy",
  personalStoryDescription: [
    `From wandering the picturesque streets of Paris with my grandfather’s vintage camera to honing my craft at the École des Beaux-Arts, my journey has been a tapestry of experiences and inspirations. Collaborating with renowned artists across Europe has shaped my unique style, characterized by meticulous attention to detail and a narrative-driven approach.`,
    `I believe in the transformative power of photography. Each image I create is a carefully crafted piece of art, designed to evoke emotion and capture the essence of the moment. My goal is to tell compelling stories through my lens, whether it’s a candid smile or a majestic landscape.`,
  ],
  images: aboutImage1,
};

function About() {
  return (
    <section className="about">
      <div className="about__wrapper">
        <div className="about__text__content">
          <div className="about__title">
            <h2 className="about__title__title">{about.personalStoryTitle}</h2>
          </div>
          <div className="about__title__description">
            {about.personalStoryDescription.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </div>
        <div className="about__image__content">
          <figure className="about__media">
            <img
              width={200}
              src={about.images}
              alt={""}
              className="about__media__image"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default About;
