const gridContainer = document.getElementById("grid-container");

gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";

const slider = document.querySelector(".slider");

function createGrid(gridDimension = 16) {
  for (let index = 0; index < gridDimension ** 2; index++) {
    const grid = document.createElement("div");
    let hold;
    grid.classList.add("grid");

    gridContainer.addEventListener("dragstart", () => {
      return false;
    });

    gridContainer.addEventListener("mousedown", () => {
      hold = true;
    });

    gridContainer.addEventListener("mouseup", () => {
      hold = false;
    });

    grid.addEventListener("mousedown", () => {
      grid.style.backgroundColor = "red";
    });

    grid.addEventListener("mouseenter", () => {
      if (hold === true) {
        grid.style.backgroundColor = "red";
      }
    });

    gridContainer.appendChild(grid);
  }
}

createGrid();

slider.addEventListener("change", (event) => {
  const gridDimension = event.target.value;

  const grid = document.querySelectorAll(".grid");
  grid.forEach((node) => {
    node.parentNode.removeChild(node);
  });

  gridContainer.style.gridTemplateColumns = `repeat(${event.target.value}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${event.target.value}, 1fr)`;

  createGrid(gridDimension);
});
