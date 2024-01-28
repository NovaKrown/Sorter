const main = document.querySelector("#main");
const randomButton = document.querySelector("#random");
const selectionButton = document.querySelector("#selection");
const bubbleButton = document.querySelector("#bubble");
randomButton.addEventListener("click", refresh);

let numArr = [];
let copy = [...numArr];
let active = "false";

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
  if (active == "true") {
    console.log("no!");
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
  if (active == "true") {
    console.log("no!");
    return;
  }

  let acc = copy[0];

  for (let i = 0; i < copy.length; i++) {
    setTimeout(() => {
      acc = copy[i];
      for (let j = i + 1; j < copy.length; j++) {
        active = "true";

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
    }, i * 600);
  }

  active = "false";
}

bubbleButton.addEventListener("click", bubble);

function bubble() {
  if (active == "true") {
    console.log("no!");
    return;
  }

  if (active == "false") {
    console.log("bonk!");
    console.log(active);
    console.log(active);
    for (let i = 0; i < copy.length - 1; i++) {
      // let data = `[num='${copy[i]}']`;
      // const num1 = document.querySelector(data);
      // num1.classList.add("focus");

      setTimeout(() => {
        active = "true";
        for (let j = 0; j < copy.length - 1; j++) {
          if (copy[j] > copy[j + 1]) {
            [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
          }
        }

        let duplicate = [...copy];
        main.innerHTML = "";
        duplicate.map((el) => printToScreen(el));
      }, i * 600);
    }

    active = "false";
  }
}
