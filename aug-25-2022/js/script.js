const date = document.querySelectorAll(".date")[0];
const week = document.querySelectorAll(".week")[0];
const time = document.querySelectorAll(".time")[0];
const d = new Date();
const months = [
  "Jan",
  "Frb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
date.innerHTML =
  d.getDate() + "/" + months[d.getMonth()] + "/" + d.getFullYear();

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
days.map((ds) => {
  const myElement = document.createElement("div");
  if (days[d.getDay()] === ds) {
    myElement.classList.add("active");
  }
  myElement.innerText = ds;
  console.log(myElement);
  week.appendChild(myElement);
});
// week.innerHTML = days[d.getDay()];
let a, t;
const inputTime = (d) => {
  if (d.getHours() < 12) {
    a = "Am";
    t = d.getHours();
  } else if (d.getHours() === 12) {
    a = "Pm";
    t = d.getHours();
  } else {
    a = "Pm";
    t = d.getHours() - 12;
  }
  time.innerHTML =
    ("0" + t).slice(-2) +
    ":" +
    ("0" + d.getMinutes()).slice(-2) +
    ":" +
    ("0" + d.getSeconds()).slice(-2) +
    " " +
    a;
};
inputTime(d);
setInterval(() => {
  const d = new Date();
  inputTime(d);
}, 1000);
