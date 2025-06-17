const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
let menuOpen = false;

hamburger.addEventListner('click', () =>{
  if (menuOpen == false) {
    navlinks.style.display = "block";
    menuOpen = true;
  }
  else if (menuOpen == true) {
    navlinks.style.display = "none";
    menuOpen = false ;
  }
});