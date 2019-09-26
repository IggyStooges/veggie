const menuLinks = document.querySelectorAll(".menu__navigation-link");
const mainMenu = document.querySelector(".main-menu").innerHTML;
const startersMenu = document.querySelector(".starters-menu").innerHTML;
let menuList = document.querySelector(".menu__list");

menuList.innerHTML = startersMenu;

menuLinks.forEach(element => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    let menuLinksActive = document.querySelector(".menu__navigation-link--active");
    menuLinksActive.classList.remove("menu__navigation-link--active");
    element.classList.add("menu__navigation-link--active");
    if (element.classList.contains('menu__navigation-link--main')) {
      menuList.innerHTML = mainMenu;
    }
    if (element.classList.contains('menu__navigation-link--starters')) {
      menuList.innerHTML = startersMenu;
    }
    if (element.classList.contains('menu__navigation-link--deserts')) {
      menuList.innerHTML = "Wait a second, we have no data yet, we will contact the chef";
      
      setTimeout(() => {
        menuList.innerHTML = "Unfortunately our chef is now on vacation, when he returns we will update this section"
      }, 2000);
    }
  });
});