const hamburgerIcon = document.querySelector(".header__hamburger-icon");
const hamburgerNav = document.querySelector(".header__nav-mobile");
let hamburgerStateCounter = 0;

hamburgerIcon.addEventListener("click", () => {
  if (hamburgerStateCounter === 0) {
    hamburgerStateCounter = 1;
    hamburgerIcon.style.opacity = "75%";
    hamburgerNav.style.display = "flex";
  } else {
    hamburgerStateCounter = 0;
    hamburgerIcon.style.opacity = "";
    hamburgerNav.style.display = "";
  }
});
