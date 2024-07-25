import gsap from "gsap";

export default function Lines() {
  gsap.fromTo(
    ".awards__divider",
    {
      scaleX: 0,
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      scaleX: 1,
      ease: "power3.inOut",
      duration: 4,
      delay: 1,
      stagger: {
        amount: 1,
      },
    }
  );
}
