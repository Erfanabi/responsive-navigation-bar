const navLink = document.querySelectorAll(".nav__link");
const navSvg = document.getElementById("nav__svg");

for (let item of navLink) {
  // add & remove class active-link
  item.addEventListener("click", function () {
    navLink.forEach((item) => {
      item.classList.remove("active-link");
    });

    item.classList.add("active-link");

    // change svg background
    if (item == navLink[0]) {
      navSvg.style.left = "5px";
    }
    if (item == navLink[1]) {
      navSvg.style.left = "60px";
    }
    if (item == navLink[2]) {
      navSvg.style.left = "116px";
    }
    if (item == navLink[3]) {
      navSvg.style.left = "174px";
    }
    if (item == navLink[4]) {
      navSvg.style.left = "229px";
    }
  });
}
