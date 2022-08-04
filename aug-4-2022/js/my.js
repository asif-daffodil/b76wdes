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
