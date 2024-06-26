export default class Drag {
  constructor(element) {
    this.element = element;
    this.cameraPosition = 1;
  }

  changeZIndex() {}

  addEventListener() {
    // select all the panes
    //listen for a click event on each pane element
    this.element.addEventListener("mousedown", () => {
      this.changeZIndex + -1;
      this.element.style.zIndex = this.cameraPosition;
    });
    //
  }
}
