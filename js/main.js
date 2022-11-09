/*=============== ELEMENTS ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const load = document.getElementById("load");
const sections = document.querySelectorAll("section[id]");
const scrollUpEl = document.getElementById("scroll-up");
const header = document.getElementById("header");
const linkProducts = document.querySelectorAll(".products__item");
const navLink = document.querySelectorAll(".nav__link");

/*=============== FUNCTIONS ===============*/

// Loader
function loader() {
  setTimeout(() => {
    load.style.display = "none";
  }, 2500);
}

// Show Menu
function showMenu() {
  if (navToggle) {
    navMenu.classList.add("show-menu");
  }
}

// Hide Menu
function hideMenu() {
  if (navClose) {
    navMenu.classList.remove("show-menu");
  }
}

// On mobile, on link click remove the menu
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Change header background on scroll
function scrollHeader() {
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

// MixUp Filter Products
let mixerProducts = mixitup(".products__content", {
  selectors: {
    target: ".products__card",
  },
  animation: {
    duration: 300,
  },
});

/* Default filter products */
mixerProducts.filter(".delicacies");

/* Link active products */
function activeProducts() {
  linkProducts.forEach((l) => l.classList.remove("active-product"));
  this.classList.add("active-product");
}
linkProducts.forEach((l) => l.addEventListener("click", activeProducts));

// Show Scroll Up
function scrollUp() {
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 350) scrollUpEl.classList.add("show-scroll");
  else scrollUpEl.classList.remove("show-scroll");
}

// On scroll set link to active
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

/*=============== EVENT LISTENERS ===============*/
window.addEventListener("load", loader);
window.addEventListener("scroll", () => {
  scrollActive();
  scrollUp();
  scrollHeader();
});
navToggle.addEventListener("click", showMenu);
navClose.addEventListener("click", hideMenu);
