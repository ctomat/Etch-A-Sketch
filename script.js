const gridContainer = document.getElementById("grid-container");

gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";

const slider = document.querySelector(".slider");
const slideCounter = document.querySelector(".slide-counter");
const colorPicker = document.querySelector("#color-picker");

let gridDimension = 16;
let brushColor = "#DBA39A";
let colorModeEnable = true;
let rainbowModeEnable = false;
let eraserEnable = false;

const buttons = {
  colorMode: document.querySelector("#color-mode"),
  rainbowMode: document.querySelector("#rainbow-mode"),
  eraser: document.querySelector("#eraser"),
  clear: document.querySelector("#clear"),
};

colorPicker.addEventListener(
  "input",
  (event) => (brushColor = event.target.value)
);

buttons.colorMode.addEventListener("click", () => {
  buttons.rainbowMode.classList.remove("button-press");
  buttons.colorMode.classList.add("button-press");
  buttons.eraser.classList.remove("button-press");
  colorModeEnable = true;
  rainbowModeEnable = false;
  eraserEnable = false;
});

buttons.rainbowMode.addEventListener("click", () => {
  buttons.rainbowMode.classList.add("button-press");
  buttons.colorMode.classList.remove("button-press");
  buttons.eraser.classList.remove("button-press");
  colorModeEnable = false;
  rainbowModeEnable = true;
  eraserEnable = false;
});

buttons.eraser.addEventListener("click", () => {
  buttons.rainbowMode.classList.remove("button-press");
  buttons.colorMode.classList.remove("button-press");
  buttons.eraser.classList.add("button-press");
  colorModeEnable = false;
  rainbowModeEnable = false;
  eraserEnable = true;
});

function createGrid(gridDimension = 16) {
  for (let index = 0; index < gridDimension ** 2; index++) {
    const grid = document.createElement("div");
    let hold;
    grid.classList.add("grid");

    grid.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });

    gridContainer.addEventListener("mousedown", () => {
      hold = true;
    });

    gridContainer.addEventListener("mouseup", () => {
      hold = false;
    });

    grid.addEventListener("mousedown", () => {
      if (colorModeEnable) {
        grid.style.backgroundColor = brushColor;
      }

      if (rainbowModeEnable) {
        grid.style.backgroundColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
      }

      if (eraserEnable) {
        grid.style.backgroundColor = "white";
      }
    });

    grid.addEventListener("mousemove", () => {
      if (!hold) {
        return;
      }

      if (colorModeEnable) {
        grid.style.backgroundColor = brushColor;
        return;
      }

      if (rainbowModeEnable) {
        grid.style.backgroundColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
      }

      if (eraserEnable) {
        grid.style.backgroundColor = "white";
      }
    });

    gridContainer.appendChild(grid);
  }
}

function clearGrid() {
  const grid = document.querySelectorAll(".grid");
  grid.forEach((node) => {
    node.parentNode.removeChild(node);
  });

  gridContainer.style.gridTemplateColumns = `repeat(${gridDimension}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridDimension}, 1fr)`;
}

createGrid();

slider.addEventListener("input", (event) => {
  slideCounter.textContent = `${event.target.value} x ${event.target.value}`;
});

slider.addEventListener("change", (event) => {
  gridDimension = event.target.value;

  clearGrid(gridDimension);
  createGrid(gridDimension);
});

buttons.clear.addEventListener("click", () => {
  clearGrid(gridDimension);
  createGrid(gridDimension);
});
