const gridContainer = document.getElementById("grid-container");

gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";

const slider = document.querySelector(".slider");

function createGrid(gridDimension = 16) {
  for (let index = 0; index < gridDimension ** 2; index++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "red";
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
