import Drag from "../js/animations/drag";

import { useEffect } from "react";

function Hobbies() {
  useEffect(() => {
    const pane = document.querySelectorAll(".hobbies__draggable__card");
    new Drag(pane);
  });

  const data = {
    numbers: ["01", "02"],
    media: [
      { src: "/noise.gif", alt: "An image taken by Etiene" },
      {
        src: "/jakob-owens-pFU8tWNKtIs-unsplash.jpg",
        alt: "An image of a landscape",
      },
    ],
    text: "It's about more than just taking pictures—it's about seeing the world in unique ways, capturing moments that tell a story, and finding beauty in unexpected places. My approach involves playing with light and composition to bring out the emotions and essence of each scene. Through my lens, I strive to create images that not only capture a moment but also inspire and evoke feelings in those who view them. This creative process allows me to turn everyday scenes into compelling visual narratives, showcasing the world from a fresh and imaginative perspective.",
  };

  return (
    <section className="hobbies">
      <div className="hobbies__wrapper">
        <div className="hobbies__content">
          {data.media.map((mediaItem, index) => (
            <div
              className={`hobbies__draggable__card  ${
                index === 0 ? "first-card" : index === 1 ? "second-card" : ""
              }`}
              key={index}
              data-animation="drag"
            >
              <div className="hobbies___draggable__card__frame">
                <div className="hobbies__draggable__card__frame__header">
                  <span></span>
                  <span></span>
                </div>
                <figure className="hobbies__draggable__card__frame__media">
                  <img
                    src={mediaItem.src}
                    alt={mediaItem.alt}
                    className="hobbies__draggable__card__frame__media__image"
                  />
                </figure>
                <div className="hobbies__draggable__card__frame__numbers">
                  <p>{data.numbers[index]}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="hobbies__draggable__card__frame__text">
            <p className="hobbies__draggable__card__frame__text__text">
              {data.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hobbies;
