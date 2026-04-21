let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartBtn = document.querySelector('.cart-btn');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartModal = document.getElementById('cart-modal');

function updateCart() {
  cartCount.textContent = cart.length;
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    cartItems.innerHTML += `
      <div>
        ${item.name} - $${item.price}
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });
}

function showCart() {
  cartModal.style.display = 'block';
}

function closeCart() {
  cartModal.style.display = 'none';
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Init
updateCart();