const emailNavBar = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

emailNavBar.addEventListener("click", toggleMenu);

function toggleMenu(){
    // if(!desktopMenu.classList.contains("inactive")){
    //     desktopMenu.classList.add("inactive");
    // }else{
    //     desktopMenu.classList.remove("inactive");
    // }

    //Mejor práctica
    desktopMenu.classList.toggle("inactive");
}