import highlightWords from "./Highlight";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function Preloader() {
  const textTypeLine = [
    "Doesn't sleep, just ships",
    "One sec honey, i need to ship this first",
    "Aaaaaaaaaah I'm gonna ship",
    "Just finished shipping alpha, starts shipping expansion",
    "Could retire, works 14h/d for fun",
    "Doesn't sleep, just ships",
    "One sec honey, i need to ship this first",
    "Aaaaaaaaaah I'm Gonna ship",
    "Just finished shipping alpha, starts shipping expansion",
    "Could retire, works 15h/d for fun",
  ];

  const wordsToHighlight = {
    alpha: "highlight-alpha",
    ship: "highlight-ship",
  };

  const quote = {
    text: "The Shippooooor.",
  };

  return (
    <section className="preloader">
      <div className="preloader_wrapper">
        <div
          className="preloader__text__type"
          data-type="transition"
          aria-hidden="true"
        >
          {textTypeLine.map((text, index) => {
            return (
              <p className="preloader__text__type__line" key={index + 1}>
                {highlightWords(text, wordsToHighlight)}
              </p>
            );
          })}
        </div>
      </div>
      <div className="preloader__content">
        <article className="preloader__text__article">
          <p className="preloader__text__quote">{quote.text}</p>
        </article>
      </div>
      <div className="preloader__number">
        <p className="preloader__number__text">0%</p>
      </div>
    </section>
  );
}
