const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

//When we click the hamburger we want to activate the class to create x and show menu
hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

/**
 
 when we click on the menu we will close the menu 
 We will use query selectorAll
 */

 document.querySelectorAll(".navLink").forEach(e => e.addEventListener("click", () =>{
    hamburger.classList.remove("active") // remove the active class
    navMenu.classList.remove("active")
 } ))