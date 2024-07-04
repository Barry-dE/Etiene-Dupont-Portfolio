// import { useCallback, useEffect, useRef } from "react";
import bgImage from "/hero-image-use.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const description = [
  "Hi, welcome to my little corner. I'm Étienne Dupont, a photographer and creative, residing somewhere in France. Let’s create timeless memories together.",
];

const title = {
  title: "Étienne — Photographer",
};

export default function Home() {
  // const firstText = useRef(null);
  // const secondText = useRef(null);
  // const slider = useRef(null);
  // const xPercent = useRef(0);
  // const direction = useRef(-1);

  // const animate = useCallback(() => {
  //   if (xPercent.current < -100) {
  //     xPercent.current = 0;
  //     console.log(xPercent);
  //   } else if (xPercent.current > 0) {
  //     xPercent.current = -100;
  //   }

  //   gsap.set(firstText.current, {
  //     xPercent: xPercent.current,
  //     duration: 5,
  //     ease: "power3.inOut",
  //   });

  //   gsap.set(secondText.current, {
  //     xPercent: xPercent.current,
  //     duration: 5,
  //     ease: "power3.inOut",
  //   });

  //   xPercent.current += 0.1 * direction.current;
  //   requestAnimationFrame(animate);
  // }, []);

  // useEffect(() => {
  //   const element = document.querySelector(".content");
  //   ScrollTrigger.create({
  //     trigger: element,
  //     start: 0,
  //     end: window.innerHeight,
  //     scrub: 0.25,
  //     onUpdate: (self) => {
  //       direction.current = self.direction * -1;
  //     },
  //     x: "-500px",
  //   });

  //   requestAnimationFrame(animate);
  // }, [animate]);

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
                <div className="home__text__title__slider">
                  <h1 className="home__text__title">{title.title}</h1>
                </div>
                <div className="home__text__title__slider">
                  <h1 className="home__text__title">{title.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
