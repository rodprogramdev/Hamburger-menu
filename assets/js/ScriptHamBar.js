const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

//When we click the hamburger we want to activate the class to create x and show menu
hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})