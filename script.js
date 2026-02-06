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
