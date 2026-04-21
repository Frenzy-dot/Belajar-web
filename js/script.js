console.log('JS loaded!');

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartBtn = document.querySelector('.cart-btn');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartModal = document.getElementById('cart-modal');

// Add to Cart
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('Add to Cart clicked!');
    const id = btn.dataset.id;
    const name = btn.dataset.name;
    const price = parseInt(btn.dataset.price);

    const item = { id, name, price };
    cart.push(item);
    updateCart();
  });
});

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