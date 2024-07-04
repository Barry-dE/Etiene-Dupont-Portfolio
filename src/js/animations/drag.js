export default class Drag {
  constructor(element) {
    this.element = element;
    this.currentPane = null;
    this.offsetX = 0;
    this.offsetY = 0;
    this.zIndex = 1;
    this.isDragging = false;

    this.init();
  }

  init() {
    this.element.forEach((pane) => {
      pane.addEventListener("mousedown", this.mouseDown.bind(this, pane));
    });
  }

  mouseDown(pane, e) {
    if (pane.getAttribute("data-animation") === "drag") {
      this.currentPane = pane;

      this.offsetX = e.pageX - pane.offsetLeft;
      this.offsetY = e.pageY - pane.offsetTop;

      this.zIndex += 1;
      pane.style.zIndex = this.zIndex;
      pane.style.position = "absolute";

      this.isDragging = true;
      this.addEventListener();
    }
  }

  mouseMove(e) {
    if (this.isDragging && this.currentPane) {
      requestAnimationFrame(() => {
        this.currentPane.style.left = e.pageX - this.offsetX + "px";
        this.currentPane.style.top = e.pageY - this.offsetY + "px";
      });
    }
  }

  mouseUp() {
    this.isDragging = false;
    this.removeEventListener();
    this.currentPane = null;
  }

  addEventListener() {
    document.addEventListener("mousemove", this.mouseMove.bind(this));
    document.addEventListener("mouseup", this.mouseUp.bind(this));
  }

  removeEventListener() {
    document.removeEventListener("mousemove", this.mouseMove.bind(this));
    document.removeEventListener("mouseup", this.mouseUp.bind(this));
  }
}
