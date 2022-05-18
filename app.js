const openNavMenu = document.querySelector(".open-nav-menu");
const closeNavMenu = document.querySelector(".close-nav-menu");
const navMenu = document.querySelector(".nav-menu");
const menuOverlay = document.querySelector(".menu-overlay");
mediaSize = 991;

const toggleNav = () => {
  navMenu.classList.toggle("open");
  document.body.classList.toggle("hidden-scrolling");
  menuOverlay.classList.toggle("active");
};

const collapseSubMenu = () => {
  navMenu
    .querySelector(".menu-item-has-children.active .sub-menu")
    .removeAttribute("style");
  navMenu
    .querySelector(".menu-item-has-children.active")
    .classList.remove("active");
};

openNavMenu.addEventListener("click", toggleNav);
closeNavMenu.addEventListener("click", toggleNav);
// close the navMenu by clicking outside the menu
menuOverlay.addEventListener("click", toggleNav);

navMenu.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize) {
    const menuHasChildren = e.target.parentElement;
// 3. If menuHasChildren is already expanded, collapse it
    if (menuHasChildren.classList.contains("active")) {
      collapseSubMenu();
    } 
    else {
      // 1. collapse existing expanded menuItemHasChildren
      if (navMenu.querySelector(".menu-item-has-children.active")) {
        collapseSubMenu();
      }
      // 2. Expand new menuItemHasChildren
      menuHasChildren.classList.add("active");
      const subMenu = menuHasChildren.querySelector(".sub-menu");
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
  }
});
const resizeFix =()=>{
    if (navMenu.classList.contains("open")){
        toggleNav();
    }
    if (navMenu.querySelector(".menu-item-has-children.active")) {
        collapseSubMenu();
    }
}

window.addEventListener("resize",()=>{
    if (this.innerWidth > mediaSize){
        resizeFix();
    }
})
