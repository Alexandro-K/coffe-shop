// Toggle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

// Hamburger Menu Onclick
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
}

// Toggle class active search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box')

// Search Icon Onclick
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// Toggle class active shopping cart
const shoppingCart = document.querySelector('.shopping-cart');

// Shopping Cart Onclick
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}

// Click outside element
const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');
const shoppingCartButton = document.querySelector('#shopping-cart-button');

document.addEventListener('click', (e) => {
    if(!hamburger.contains(e.target)){
        navbarNav.classList.remove('active');
    }
    if(!searchButton.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
    if(!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)){
        shoppingCart.classList.remove('active');
    }
})

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');

// Delegasi event ke .products
// disini kita mencari elemen yang sudah pasti ada di luar yaitu elemen parentnya
document.querySelector('.products').addEventListener('click', function(e) {
  const target = e.target.closest('.item-detail-button');
  if (target) {
    e.preventDefault();
    itemDetailModal.style.display = 'flex';
  }
});

// Close Modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// Click outside modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};
