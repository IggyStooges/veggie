const menuLinks = document.querySelectorAll(".menu__navigation-link");
const menuItems = document.querySelectorAll(".menu__navigation-item");

menuLinks.forEach(element => {
  element.addEventListener('click', (e) => {
    menuItems.forEach(item => {
      item.classList.remove("menu__navigation-item--active");
    });
    e.preventDefault();
    if (!element.parentNode.classList.contains("menu__navigation-item--active")) {
      element.parentNode.classList.add("menu__navigation-item--active");
    }
  })
});