import Drag from "./animations/drag";

export default class Init {
  constructor() {
    this.createDrag();
  }

  createPreloader() {}

  smoothScroll() {}

  createAnimations() {}

  createDrag() {
    const pane = document.querySelectorAll(".hobbies__draggable__card");
    this.drag = new Drag(pane);
  }

  createSectionParallax() {}
}
