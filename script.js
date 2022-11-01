const gridContainer = document.querySelector(".container");

const slider = document.querySelector(".slider");

for (let index = 0; index < 256; index++) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  grid.addEventListener("mouseover", () => {
    grid.style.backgroundColor = "red";
  });
  gridContainer.appendChild(grid);
}
