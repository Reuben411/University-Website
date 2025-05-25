    //JavaScript for Toggle Menu//


     //   let navLinks = document.getElementById("navLinks");

     //   function hideMenu(){
     //       navLinks.style.right = "-200px";
     //   }
       //         function showMenu(){
     //       navLinks.style.right = "0";
      //  };


function showMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.style.display = "block";
  navLinks.style.right = "0"; // Shows the menu (adjust based on your CSS)
}

function hideMenu() {
  const navLinks = document.getElementById("navLinks");
  //navLinks.style.right = "-200px"; // Hides the menu (adjust based on your CSS)
    navLinks.style.display = "none"; // Or set 'right: -100%' for sliding menus

}

// Optional: Close menu when clicking a nav link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", hideMenu);
});


