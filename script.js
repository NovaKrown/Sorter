const main = document.querySelector("#main");
const randomButton = document.querySelector("#random");
const selectionButton = document.querySelector("#selection");
const bubbleButton = document.querySelector("#bubble");
randomButton.addEventListener("click", refresh);

let numArr = [];
let copy = [...numArr];
let active = "false";
let timeout = [];

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
  newElement.setAttribute("num", `${n}`);
  main.appendChild(newElement);
};

function refresh() {
  if (timeout.length) {
    console.log("no!");
    timeout.forEach((el) => clearTimeout(el));
    // active = "false";
    timeout = [];
    return;
  }

  generateNumbers(64);
  randomizeArray(numArr);
  copy = [...numArr];

  main.innerHTML = "";
  numArr.map((el) => printToScreen(el));
}

refresh();

selectionButton.addEventListener("click", selection);

function selection() {
  if (timeout.length) {
    console.log("no!");
    timeout.forEach((el) => clearTimeout(el));
    // active = "false";
    timeout = [];
    return;
  }
  console.log("Selection Sort!");

  // if (active == "false") {
  // active = "true";
  let acc = copy[0];
  for (let i = 0; i < copy.length; i++) {
    timeout[i] = setTimeout(() => {
      acc = copy[i];
      for (let j = i + 1; j < copy.length; j++) {
        if (copy[j] > acc) {
          acc = copy[j];
        }
      }
      const index = copy.indexOf(acc);
      copy.splice(index, 1);
      copy.unshift(acc);

      let duplicate = [...copy];
      main.innerHTML = "";
      duplicate.map((el) => printToScreen(el));
    }, i * 100);
  }
}

bubbleButton.addEventListener("click", bubble);

function bubble() {
  if (timeout.length) {
    console.log("no!");
    timeout.forEach((el) => clearTimeout(el));
    // active = "false";
    timeout = [];
    return;
  }

  // if (active == "false") {
  // active = "true";
  console.log("Bubble Sort!");

  for (let i = 0; i < copy.length - 1; i++) {
    // let data = `[num='${copy[i]}']`;
    // const num1 = document.querySelector(data);
    // num1.classList.add("focus");

    timeout[i] = setTimeout(() => {
      for (let j = 0; j < copy.length - 1; j++) {
        if (copy[j] > copy[j + 1]) {
          [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
        }
      }

      let duplicate = [...copy];
      main.innerHTML = "";
      duplicate.map((el) => printToScreen(el));
    }, i * 100);
  }
  // }
}

if (timeout.length) {
  console.log(timeout);
}

if (!timeout.length) {
  console.log("biscuit");
}
