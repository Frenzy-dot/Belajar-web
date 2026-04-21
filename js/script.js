let cart = 0;
    const cartBtn = document.querySelector('.cart-btn');
    const buyBtns = document.querySelectorAll('.buy-btn');
    
    buyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        cart++;
        cartBtn.textContent = `Cart (${cart})`;
        btn.textContent = 'Added ✓';
        btn.style.background = 'var(--accent)';
        btn.style.color = '#000';
        setTimeout(() => {
          btn.textContent = '+ Add to Cart';
          btn.style.background = '#222';
          btn.style.color = 'var(--text)';
        }, 1500);
      });
    });