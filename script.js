const main = document.querySelector("#main");
const randomButton = document.querySelector("#random");
const selectionButton = document.querySelector("#selection");
randomButton.addEventListener("click", refresh);

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

function refresh() {
  generateNumbers(64);
  randomizeArray(numArr);

  main.innerHTML = "";
  numArr.map((el) => printToScreen(el));
}

refresh();

selectionButton.addEventListener("click", selection);

let copy = [...numArr];

function selection() {
  let sorted = [];
  let acc = copy[0];

  for (let i = 0; i < copy.length; i++) {
    setTimeout(() => {
      acc = copy[i];
      for (let j = i + 1; j < copy.length; j++) {
        const element = copy[j];
        // console.log(j, element);

        if (copy[j] > acc) {
          acc = copy[j];
        }
      }
      // console.log(acc);
      // setTimeout(() => {
      // console.log(i);
      const index = copy.indexOf(acc);
      copy.splice(index, 1);
      copy.unshift(acc);
      // }, 10);
      // console.log(index);
      // console.log(copy);
      // delayPrint();

      let duplicate = [...copy];
      main.innerHTML = "";
      duplicate.map((el) => printToScreen(el));
    }, i * 300);
  }

  // for (let i = 0; i < copy.length; i++) {
  //   for (let j = 1; j < copy.length; j++) {
  //     if (copy[j] < acc) {
  //       acc = copy[j];
  //     }
  //   }
  //   sorted.push(acc);
  //   const index = copy.indexOf(acc);
  //   copy.splice(index, 1);
  // }
  // console.log(sorted);
}

function delayPrint() {
  let duplicate = [...copy];
  setTimeout(() => {
    main.innerHTML = "";
    duplicate.map((el) => printToScreen(el));
  }, 5000);
}
