const manu = document.querySelector("#manu");
const row2 = document.querySelectorAll(".row")[1];

manu.addEventListener("mouseover", (e) => {
  if (manu === e.target.parentNode) {
    const manuHoverIndex = Array.from(e.target.parentNode.children).indexOf(
      e.target
    );
    row2.children[manuHoverIndex].style.background = "#B8D0EB";
  }
});

manu.addEventListener("mouseout", (e) => {
  if (manu === e.target.parentNode) {
    const manuHoverIndex = Array.from(e.target.parentNode.children).indexOf(
      e.target
    );
    row2.children[manuHoverIndex].style.background = "#B8D0EB";
  }
});

manu.addEventListener("click", (e) => {
  const manuClickIndex = Array.from(e.target.parentNode.children).indexOf(
    e.target
  );
  const detailsList = Array.from(row2.children);

  for (let i = 0; i < detailsList.length; i++) {
    if (i === manuClickIndex) {
      manu.children[i].classList.add("active");
      row2.children[i].classList.remove("d-none");
    } else {
      manu.children[i].classList.remove("active");
      row2.children[i].classList.add("d-none");
    }
  }
});

const title = document.querySelectorAll(".title");
const details = document.querySelectorAll(".details");

for (let i = 0; i < title.length; i++) {
  title[i].addEventListener("click", (e) => {
    for (let j = 0; j < title.length; j++) {
      if (i === j) {
        e.target.classList.toggle("active");
        e.target.classList.toggle("plus");
        e.target.classList.toggle("minus");
        details[i].classList.toggle("d-none");
      } else {
        title[j].classList.remove("active", "minus");
        title[j].classList.add("plus");
        details[j].classList.add("d-none");
      }
    }
  });
}