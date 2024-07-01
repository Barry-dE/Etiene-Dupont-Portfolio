function draggable() {
  const panes = document.querySelectorAll(".hobbies__pane");
  let currentPane = null;
  let offsetX = 0;
  let offsetY = 0;
  let zIndex = 1;

  panes.forEach((pane) => {
    pane.addEventListener("mousedown", (e) => {
      if (pane.getAttribute("data-animation") === "drag") {
        currentPane = pane;

        offsetX = e.pageX - pane.offsetLeft;
        offsetY = e.pageY - pane.offsetTop;

        zIndex += 1;
        pane.style.zIndex = zIndex;
        pane.style.position = "absolute";

        const drag = (e) => {
          if (currentPane) {
            currentPane.style.left = e.pageX - offsetX + "px";
            currentPane.style.top = e.pageY - offsetY + "px";
          }
        };

        const mouseUp = () => {
          document.removeEventListener("mousemove", drag);
          document.removeEventListener("mouseup", mouseUp);
          currentPane = null;
        };

        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", mouseUp);
      }
    });
  });
}

export default draggable;
