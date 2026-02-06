// new things -- create element--appendchild--style.background--
// for loop -- math.floor.random---

const containerEl = document.querySelector(".container");
// we have two things.. containerEl and colorContainerEl which holds colros

// for loop just like in C 
// creteElement cretas div

for (let index = 0; index < 30; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  // below line says the colorContainerEl to stay at inside the containerEl at the end
  containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");


// we need to do 2 things 1. add colors 2. generate those colors


generateColors();

function generateColors() {
  colorContainerEls.forEach((colorContainerEl) => {
    const newColorCode = randomColor();
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorContainerEl.innerText = "#" + newColorCode;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}