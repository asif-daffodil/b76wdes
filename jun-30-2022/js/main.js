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
