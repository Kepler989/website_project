let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cartCount").innerText = cartCount;
  alert("Item added to cart!");
}

function addToWishlist() {
  alert("Added to wishlist ❤️");
}

function applyCoupon() {
  const coupon = document.getElementById("couponInput").value;
  const msg = document.getElementById("couponMsg");

  if (coupon === "WATCH10") {
    msg.innerText = "Coupon applied! 10% discount 🎉";
    msg.style.color = "green";
  } else {
    msg.innerText = "Invalid coupon ❌";
    msg.style.color = "red";
  }
}

function checkout() {
  if (cartCount === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Checkout successful (demo)");
  }
}


//slider:

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
