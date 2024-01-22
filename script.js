const main = document.querySelector("#main");
const start = document.querySelector(".button");
const input = document.querySelector(".input");
start.addEventListener("click", sort);

let numArr = [];

let vw = innerWidth / 100;
let vh = innerWidth / 100;

const generateNumbers = (maxNum) => {
  numArr = [];
  for (let i = 0; i < maxNum; i++) {
    numArr.push(i);
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
  const newElement = document.createElement("p");
  newElement.classList.add("box");
  newElement.textContent = `${n}`;
  main.appendChild(newElement);
  //   console.log("cha");
};

// printToScreen("p");

// console.log(numArr);
console.log(start);

const init = () => {
  numArr.map((el) => printToScreen(el));
  //   console.log("looop");
};

function sort() {
  if (input.value < 2 || input.value > 1000) {
    console.log(input.value);
    alert("Between 2-1000");
    return;
  } else {
    main.innerHTML = "";
    console.log(input.value);
    console.log("wooo");
    generateNumbers(input.value);
    // console.log(numArr);
    randomizeArray(numArr);
    // console.log(numArr);
    init();
  }
}
