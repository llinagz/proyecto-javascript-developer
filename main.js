const emailNavBar = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileMenu = document.querySelector(".mobile-menu");
const hamburguerMenuMobile = document.querySelector(".menu");

emailNavBar.addEventListener("click", toggleMenu);
hamburguerMenuMobile.addEventListener("click", toggleMenuMobile)

function toggleMenu(){
    // if(!desktopMenu.classList.contains("inactive")){
    //     desktopMenu.classList.add("inactive");
    // }else{
    //     desktopMenu.classList.remove("inactive");
    // }

    //Mejor práctica
    desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile(){
    mobileMenu.classList.toggle("inactive");
}