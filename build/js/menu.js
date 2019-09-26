const menuLinks = document.querySelectorAll(".menu__navigation-link");
const mainMenu = document.querySelector(".main-menu").innerHTML;
const startersMenu = document.querySelector(".starters-menu").innerHTML;
let menuContainer = document.querySelector(".menu__container");

export default function showMenu() {
  menuLinks.forEach(element => {
    menuContainer.innerHTML = startersMenu;
    element.addEventListener("click", (e) => {
      e.preventDefault();
      let menuLinksActive = document.querySelector(".menu__navigation-link--active");

      menuContainer.classList.remove("menu__list--active");
      menuLinksActive.classList.remove("menu__navigation-link--active");

      element.classList.add("menu__navigation-link--active");

      if (element.classList.contains("menu__navigation-link--main")) {
        menuContainer.innerHTML = mainMenu;
      }

      if (element.classList.contains("menu__navigation-link--starters")) {
        menuContainer.innerHTML = startersMenu;
      }

      if (element.classList.contains("menu__navigation-link--deserts")) {
        menuContainer.innerHTML = "Wait a second, we have no data yet, we will contact the chef";

        setTimeout(() => {
          menuContainer.innerHTML = "Unfortunately our chef is now on vacation, when he returns we will update this section"
        }, 500);
      }

      if (element.classList.contains("menu__navigation-link--drinks")) {
        menuContainer.innerHTML = "Sorry, our guests drink a lot, we do not have time to update this section";
      }
    });
  });
}