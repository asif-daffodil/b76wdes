const myDiv = document.getElementById("myDiv");
const myClass = document.getElementsByClassName("myClass");

myDiv.innerHTML = "I lives in Dhaka";
myClass[0].innerHTML = "I am a man!";
myClass[1].innerHTML = "I am a programer";
myClass[2].innerHTML = "I am Bangladeshi";

// console.log(myClass);

const dhaka = document.querySelector("#dhaka");
dhaka.innerHTML = "<b>I live in Dhaka</b>";

// console.log(myDiv, dhaka);

const bd = document.querySelectorAll(".bd");
// console.log(bd, myClass);
bd[0].textContent = "Ami vaat khai na";
bd[1].textContent = "Ami burger khai";

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

btn1.addEventListener("click", () => {
  bd[0].textContent = "Button e click porse!";
});
btn2.addEventListener("click", () => {
  bd[0].textContent = "Button e click porenai!";
});

bd[0].addEventListener("mouseover", () => {
  bd[0].textContent = "Ami vaat khai na";
});

const yName = document.querySelector("#yName");
const err = document.querySelector("#err");
const fSubmit = document.querySelector("#fSubmit");
const showName = document.querySelector("#showName");

fSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  if (yName.value.length === 0) {
    err.textContent = "Please provide the name";
    showName.textContent = "";
  } else {
    err.textContent = "";
    showName.textContent = yName.value;
    yName.value = "";
  }
});

const sumForm = document.querySelector("#sumForm");
const errSum = document.querySelector("#errSum");
const showSum = document.querySelector("#showSum");

sumForm.addEventListener("submit", (e) => {
  e.preventDefault();
  showSum.textContent = "";
  const num1 = document.querySelector("#num1").value;
  const num2 = document.querySelector("#num2").value;
  if (num1.length === 0 || num2.length === 0) {
    errSum.textContent = "Please provide all the numbers";
  } else if (!parseInt(num1) || !parseInt(num2)) {
    errSum.textContent = "Invalid numbers";
  } else {
    errSum.textContent = "";
    showSum.textContent = +num1 + +num2;
  }
});
