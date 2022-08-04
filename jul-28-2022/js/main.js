const manu = document.querySelector("#manu");
const row2 = document.querySelectorAll(".row")[1];

manu.addEventListener("mouseover", (e) => {
  if (manu === e.target.parentNode) {
    const manuHoverIndex = Array.from(e.target.parentNode.children).indexOf(
      e.target
    );
    row2.children[manuHoverIndex].style.background = "#ccc";
  }
});

manu.addEventListener("mouseout", (e) => {
  if (manu === e.target.parentNode) {
    const manuHoverIndex = Array.from(e.target.parentNode.children).indexOf(
      e.target
    );
    row2.children[manuHoverIndex].style.background = "#ccc";
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
