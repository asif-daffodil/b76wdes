const nav = document.querySelectorAll("nav");
const navcontroll = document.querySelector("#navcontroll");
const submenu = document.querySelectorAll(".submenu");

nav[0].addEventListener("click", (e) => {
  hideSubManu();
  let checkDisplay = e.target.nextElementSibling;
  if (checkDisplay.style.display !== "flex") {
    checkDisplay.style.display = "flex";
    navcontroll.style.display = "block";
  } else {
    checkDisplay.style.display = "none";
    navcontroll.style.display = "none";
  }
});

navcontroll.addEventListener("click", () => {
  hideSubManu();
  navcontroll.style.display = "none";
});

const hideSubManu = () => {
  for (let i = 0; i < submenu.length; i++) {
    submenu[i].style.display = "none";
  }
};
