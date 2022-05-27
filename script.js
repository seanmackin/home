function main() {
  const menuButton = document.querySelector("#menu-icon");
  menuButton.addEventListener("click", revealMenu);
}

// ensure that the DOM loads before we call our script
document.addEventListener("DOMContentLoaded", main);

function revealMenu(evt) {
  const contentBox = document.querySelector(".content");
  const navMenu = document.querySelector(".nav-links");
  // size of elements in px measurements
  const menuSize = parseInt(window.getComputedStyle(navMenu).getPropertyValue("width"));
  const totalWidth = parseInt(window.innerWidth);
  // all this work is to make sure that changes to the css rule track as percentages so changes in window size dont
  // fuck up the rendering of the page, unfortunately getting access to that is difficult so we compute it from the
  // copmuted sizes and round to the nearest integer (as we wont use non-integer inputs in the css for the nav links width)
  if (contentBox.style.left == 0 || contentBox.style.left == "0px") {
    contentBox.style.left = Math.round(100 * menuSize / totalWidth) + "%" ;
    contentBox.style.width = Math.round(100 * (totalWidth-menuSize)/totalWidth)+ "%";
  } else if (contentBox.style.left == Math.round(100 * menuSize / totalWidth) + "%"){
    contentBox.style.left = "0";
    contentBox.style.width = "100%";
  }
}
