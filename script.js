const main = document.querySelector("#main");
const start = document.querySelector(".button");
// const input = document.querySelector(".input");
start.addEventListener("click", sort);

let numArr = [];

let vw = innerWidth / 100;
let vh = innerHeight / 100;

console.log(innerHeight);
console.log(innerHeight * 0.9);

const generateNumbers = (maxNum) => {
  numArr = [];
  for (let i = 0; i < maxNum; i++) {
    numArr.push(i + 1);
  }
};

const randomizeArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const printToScreen = (n) => {
  const newElement = document.createElement("div");
  let width = `${document.querySelector("#main").clientWidth / 9}px`;
  let height = `${document.querySelector("#main").clientHeight / 10}px`;
  let style = () => {
    if (vh > vw) {
      return "width: 85%";
    } else {
      return "height: 85%";
    }
  };

  console.log(style());

  let content = `<div class="box-number" style="${style()}"><p>${n}</p></div>`;

  newElement.classList.add("box");
  newElement.style.width = width;
  newElement.style.height = height;
  newElement.innerHTML = content;
  main.appendChild(newElement);
};

console.log(start);

const init = () => {
  numArr.map((el) => printToScreen(el));
  dialog.close();
};

function sort() {
  // if (input.value < 2 || input.value > 1000) {
  //   console.log(input.value);
  //   alert("Between 2-1000");
  //   return;
  // } else
  {
    main.innerHTML = "";
    // console.log(input.value);
    // console.log("wooo");

    // generateNumbers(input.value);
    generateNumbers(64);
    randomizeArray(numArr);
    init();
  }
}

const dialog = document.querySelector("dialog");
dialog.showModal();
