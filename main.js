const emailNavBar = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const hamburguerMenuMobile = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const carritoCompra = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

emailNavBar.addEventListener("click", toggleMenu);
hamburguerMenuMobile.addEventListener("click", toggleMenuMobile)
carritoCompra.addEventListener("click", toggleCarritoAside);

function toggleMenu(){

    // if(!desktopMenu.classList.contains("inactive")){
    //     desktopMenu.classList.add("inactive");
    // }else{
    //     desktopMenu.classList.remove("inactive");
    // }

    //Mejor práctica
    desktopMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
    mobileMenu.classList.add("inactive");

}

function toggleMenuMobile(){
    mobileMenu.classList.toggle("inactive");
    aside.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}

function toggleCarritoAside(){
    aside.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Space Boy',
    price: 190,
    img: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=400'
});
productList.push({
    name: 'Game Boy',
    price: 120,
    img: 'https://images.pexels.com/photos/2708981/pexels-photo-2708981.jpeg?auto=compress&cs=tinysrgb&w=400'
});

function renderProducts(arr){
    for (product of arr){
        const htmlCards = `<div class="product-card">
        <img src=${product.img} alt="">
        <div class="product-info">
          <div>
            <p>${product.price}</p>
            <p>${product.name}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>`
    
      const cardsContainer = document.querySelector('.cards-container');
      cardsContainer.innerHTML += htmlCards;
    }
}

renderProducts(productList);