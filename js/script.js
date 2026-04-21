document.addEventListener('DOMContentLoaded', () => {
  let cart = [];
  try {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (Array.isArray(storedCart)) {
      cart = storedCart;
    }
  } catch (e) {
    cart = [];
    localStorage.removeItem('cart');
  }

  const cartBtn = document.querySelector('.cart-btn');
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cart-items');
  const cartModal = document.getElementById('cart-modal');

  // Add to Cart
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const name = btn.dataset.name;
      const price = parseInt(btn.dataset.price);

      const item = { id, name, price };
      cart.push(item);
      updateCart();
    });
  });

  function updateCart() {
    if (cartCount) cartCount.textContent = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
  }

  function renderCart() {
    if (!cartItems) return;
    cartItems.innerHTML = '';
    if (cart.length === 0) {
      cartItems.innerHTML = '<p>Cart kosong</p>';
      return;
    }
    cart.forEach((item, index) => {
      cartItems.innerHTML += `
        <div class="cart-item">
          <span>${item.name} - $${item.price}</span>
          <button onclick="removeItem(${index})">Remove</button>
        </div>
      `;
    });
  }

  window.showCart = function() {
    if (cartModal) cartModal.style.display = 'block';
  }

  window.closeCart = function() {
    if (cartModal) cartModal.style.display = 'none';
  }

  window.removeItem = function(index) {
    cart.splice(index, 1);
    updateCart();
  }

  // Init
  updateCart();
});