const container = document.querySelectorAll(".container")[0];
const main = document.querySelectorAll(".main")[0];
const left = document.querySelectorAll(".left")[0];
const right = document.querySelectorAll(".right")[0];

const totalSlide = main.children.length;

let x = 0;
const changeSlide = () => {
  for (let i = 0; i < totalSlide; i++) {
    if (x === i) {
      main.children[i].classList.remove("d-none");
    } else {
      main.children[i].classList.add("d-none");
    }
  }
};
changeSlide();

const siFunc = () => {
  x = x === totalSlide ? 0 : x;
  bulletFinc();
  changeSlide();
  x++;
};

let slideTime = setInterval(siFunc, 2000);

container.addEventListener("mouseover", () => {
  x = x !== 0 ? --x : 0;
  clearInterval(slideTime);
});

container.addEventListener("mouseout", () => {
  slideTime = setInterval(siFunc, 2000);
});

left.addEventListener("click", () => {
  x = x === 0 ? totalSlide - 1 : --x;
  console.log(x);
  changeSlide();
});

right.addEventListener("click", () => {
  x = x === totalSlide - 1 ? 0 : ++x;
  console.log(x);
  changeSlide();
});

if (totalSlide > 0) {
  const ul = document.createElement("ul");
  ul.classList.add("bullet");
  for (let i = 0; i < totalSlide; i++) {
    ul.innerHTML += `<li>${i + 1}</li>`;
  }
  container.appendChild(ul);
}

const bullet = document.querySelectorAll(".bullet")[0];

const bulletFinc = () => {
  for (let i = 0; i < bullet.children.length; i++) {
    if (x === i) {
      bullet.children[i].classList.add("activeBullet");
    } else {
      bullet.children[i].classList.remove("activeBullet");
    }
  }
};
bulletFinc();

bullet.addEventListener("click", (e) => {
  x = e.target.innerHTML - 1;
  changeSlide();
  bulletFinc();
});
