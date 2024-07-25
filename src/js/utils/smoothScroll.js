import Lenis from "lenis";

function smoothScroll() {
  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wrapper: document.querySelector(".content"),
  });

  function animate(time) {
    lenis.raf(time);
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

export default smoothScroll;
