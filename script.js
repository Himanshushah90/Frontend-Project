var nav = document.querySelector(".ham-nav");
var ham = document.querySelector(".menu-button");
var cross = document.querySelector(".cross");
var state = "off";

function showMenu() {
  nav.style.display = "block";
  nav.style.animation = "slideFromLeft 1.5s ease forwards";
  nav.style.opacity = "0%";
  ham.style.display = "none";
  cross.style.display = "block";
  state = "on";
}

function hideMenu() {
  nav.style.display = "none";
  nav.style.animation = "slideFromLeft 1.5s ease forwards";
  nav.style.opacity = "0%";
  cross.style.display = "none";
  ham.style.display = "block";
  state = "off";
}

function handleMenu() {
  // Check if window width is 768px or greater
  if (window.innerWidth <= 768) {
    ham.addEventListener("click", showMenu);
    cross.addEventListener("click", hideMenu);
  } else {
    // If width is less than 768px, remove event listeners
    ham.removeEventListener("click", showMenu);
    cross.removeEventListener("click", hideMenu);
  }
}

// Initial check on page load
handleMenu();

// Update the event listeners when the window is resized
window.addEventListener("resize", handleMenu);
