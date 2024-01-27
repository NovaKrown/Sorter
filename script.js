const main = document.querySelector("#main");
const start = document.querySelector(".button");
start.addEventListener("click", sort);

let numArr = [];

let vw = innerWidth / 100;
let vh = innerHeight / 100;

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
  let content = `<p>${n}</p>`;
  newElement.classList.add("box");

  if (n <= 16) {
    newElement.classList.add("text-pink");
    newElement.classList.add("border-pink");
  }

  if (n >= 17 && n <= 32) {
    newElement.classList.add("text-blue");
    newElement.classList.add("border-blue");
  }

  if (n >= 33 && n <= 48) {
    newElement.classList.add("text-yellow");
    newElement.classList.add("border-yellow");
  }

  if (n >= 49 && n <= 64) {
    newElement.classList.add("text-purple");
    newElement.classList.add("border-purple");
  }

  newElement.style.width = width;
  newElement.style.height = height;
  newElement.innerHTML = content;
  main.appendChild(newElement);
};

const init = () => {
  numArr.map((el) => printToScreen(el));
  dialog.close();
};

function sort() {
  main.innerHTML = "";

  generateNumbers(64);
  randomizeArray(numArr);
  init();
}

const dialog = document.querySelector("dialog");
dialog.showModal();
