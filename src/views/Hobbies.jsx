import world from "/world-svgrepo-com.png";

function Hobbies() {
  const textParts = ["Seeing the", " w", "", "rld in", "unique ways."];

  const paragraphs = [
    "It's about more than just taking pictures. It's about seeing the world in unique ways, capturing moments that tell a story, and finding beauty in unexpected places. My approach involves playing with light and composition to bring out the emotions and essence of each scene.",
    "This creative process allows me to turn everyday scenes into compelling visual narratives, showcasing the world from a fresh and imaginative perspective. Through my lens, I strive to create images that not only capture a moment but also inspire and evoke feelings in those who view them.",
  ];

  return (
    <section className="hobbies">
      <div className="hobbies__wrapper">
        <div className="hobbies__text">
          {textParts.map((part, index) => (
            <span key={index}>
              {index === 2 ? (
                <figure className="hobbies__media">
                  <img
                    className="hobbies__media__image"
                    width={300}
                    src={world}
                    alt="A picture of the world"
                  />
                </figure>
              ) : (
                part
              )}
            </span>
          ))}
        </div>
        <div className="hobbies__text__paragraph">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="hobbies__text__paragraph__paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hobbies;
