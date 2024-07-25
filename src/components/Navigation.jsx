import { useEffect, useRef } from "react";

import gsap from "gsap";

function Navigation() {
  const dotRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      dotRef.current,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        duration: 0.5,
      }
    );
  }, []);

  return (
    <nav className="navigation">
      <div className="navigation__wrapper">
        <div className="naviagtion__logo">
          <a className=".navigation__logo__text" href="/">
            <p>Étienne</p>
          </a>
        </div>
        <div className="navigation__marquee">
          <div className="navigation__marquee__content">
            <span ref={dotRef} className="navigation__marquee__svg"></span>
            <div className="navigation__marquee__text">Available for work</div>
          </div>
        </div>
        <div className="navigation__gallery">
          <a
            className="navigation__link"
            href="
          "
          >
            Works
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
