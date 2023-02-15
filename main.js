const emailNavBar = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const hamburguerMenuMobile = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const carritoCompra = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

const productDetailButtonClose = document.querySelector(".product-detail-close");

const productDetailPrice = document.querySelector('#product_price');
const productDetailImg = document.querySelector('#img_product');

emailNavBar.addEventListener("click", toggleMenu);
hamburguerMenuMobile.addEventListener("click", toggleMenuMobile)
carritoCompra.addEventListener("click", toggleCarritoAside);
productDetailButtonClose.addEventListener("click", closeProductDetailAside);

function toggleMenu(){

    // if(!desktopMenu.classList.contains("inactive")){
    //     desktopMenu.classList.add("inactive");
    // }else{
    //     desktopMenu.classList.remove("inactive");
    // }

    //Mejor práctica
    desktopMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailContainer.classList.add('inactive');

}

function toggleMenuMobile(){
    mobileMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.add('inactive');
}

function toggleCarritoAside(){
    shoppingCartContainer.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside(event) {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');

  productDetailImg.setAttribute("src", event.target.src);
  productDetailPrice.innerText = event.target.nextElementSibling.innerText; 
}


function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
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

/*PRODUCT CARD*/
/* <div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div> */

function renderProducts(arr){
    for (product of arr){
      //   const htmlCards = `<div class="product-card">
      //   <img src=${product.img} alt="">
      //   <div class="product-info">
      //     <div>
      //       <p>${product.price}</p>
      //       <p>${product.name}</p>
      //     </div>
      //     <figure>
      //       <img src="./icons/bt_add_to_cart.svg" alt="">
      //     </figure>
      //   </div>
      // </div>`
    
      // const cardsContainer = document.querySelector('.cards-container');
      // cardsContainer.innerHTML += htmlCards;
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.img);
      productImg.addEventListener('click', openProductDetailAside)
    
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
    
      const productInfoDiv = document.createElement('div');
    
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
      const productName = document.createElement('p');
      productName.innerText = product.name;
    
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
    
      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
      productInfoFigure.appendChild(productImgCart);
    
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
    
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
    
      cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);