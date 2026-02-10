//cart functionality
let cart = JSON.parse(localStorage.getItem('watchCart')) || [];

updateCartUI();

function addToCart(name, price, image) {
  const product = { name, price, image };
  cart.push(product);

  localStorage.setItem('watchCart', JSON.stringify(cart));
  
  updateCartUI();
  alert(`${name} added to cart!`);
}

function updateCartUI() {
  const cartCountElement = document.getElementById("cartCount");
  if (cartCountElement) {
    cartCountElement.innerText = cart.length;
  }
  const cartDisplay = document.getElementById("cartItemsList");
  if (cartDisplay) {
    renderCart();
  }
}

function renderCart() {
  const cartDisplay = document.getElementById("cartItemsList");
  if (cart.length === 0) {
    cartDisplay.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartDisplay.innerHTML = cart.map((item, index) => `
    <div class="cart-item" style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px; border-bottom: 1px solid #333; padding-bottom: 10px;">
      <img src="${item.image}" style="height: 80px; width: 80px; object-fit: contain; background: white; border-radius: 5px;">
      <div>
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <button onclick="removeFromCart(${index})" style="color: red; background: none; border: none; cursor: pointer; padding: 0;">Remove</button>
      </div>
    </div>
  `).join('');
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('watchCart', JSON.stringify(cart));
  updateCartUI();
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Checkout successful!");
    cart = [];
    localStorage.removeItem('watchCart');
    updateCartUI();
  }
}

//slider logic

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 3000);

function showSlide(index){
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide(){
  currentSlide=(currentSlide+1)%slides.length;
  showSlide(currentSlide);
  resetAutoSlide();
}

function resetAutoSlide(){
  clearInterval(slideInterval);
  slideInterval=setInterval(nextSlide,3000);
}
