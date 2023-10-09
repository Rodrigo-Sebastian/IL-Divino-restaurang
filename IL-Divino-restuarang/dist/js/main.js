//HAMBURGER & NAVIGATION//
//Variabler//
var hamburgerMenu = document.querySelector(".hamburger__nav");
var responsiveNav = document.getElementById("activeNav");

//Funktion//
hamburgerMenu.addEventListener("click", function(){
    hamburgerMenu.classList.toggle("active");
    responsiveNav.classList.toggle("active");
    document.querySelector(".hamburger__sked__logo").classList.toggle("active");
    document.querySelector(".hamburger__gaffel__logo").classList.toggle("active");
});

