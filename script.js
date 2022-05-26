function main() {
  const menuButton = document.querySelector("#menu-icon");
  menuButton.addEventListener("click", revealMenu);
}

// ensure that the DOM loads before we call our script
document.addEventListener("DOMContentLoaded", main);

function revealMenu(evt) {
  const contentBox = document.querySelector(".content");
  const navMenu = document.querySelector(".nav-links");
  const menuSize = window.getComputedStyle(navMenu).getPropertyValue("width")

  console.log(menuSize);
  if (contentBox.style.left == 0 || contentBox.style.left == "0px") {
    contentBox.style.left = menuSize;
    contentBox.style.width = (parseInt(window.innerWidth)-parseInt(menuSize)) + "px";
  } else if (contentBox.style.left == menuSize){
    contentBox.style.left = "0";
    contentBox.style.width = "100%";
  }
}
