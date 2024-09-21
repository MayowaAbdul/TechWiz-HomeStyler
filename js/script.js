let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const contactForm = document.querySelector(".contact--form");
const formFields = document.querySelectorAll(".form--field");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      // active sections for animation on scroll
      sec.classList.add("show-animate");
    }
    // if want to animation that repeats on scroll use this
    else {
      sec.classList.remove("show-animate");
    }
  });

  // sticky navbar
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  // animation footer on scroll
  let footer = document.querySelector("footer");

  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};


document.addEventListener("DOMContentLoaded", function () {
  const productContainers = document.querySelectorAll('.product-container');

  productContainers.forEach((container, index) => {
      const wishlistBtn = container.querySelector('.wishlist');
      const addToCartBtn = container.querySelector('.add-to-cart');
      const cartMessage = container.querySelector('.cart-message');
      const buyNowBtn = container.querySelector('.buy-now');

      // Check localStorage for wishlist state
      const isInWishlist = localStorage.getItem(`wishlist_product_${index}`) === 'true';
      wishlistBtn.classList.toggle('active', isInWishlist);
      wishlistBtn.innerText = isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist';

      wishlistBtn.addEventListener('click', function () {
          wishlistBtn.classList.toggle('active');
          const isActive = wishlistBtn.classList.contains('active');
          wishlistBtn.innerText = isActive ? 'Remove from Wishlist' : 'Add to Wishlist';
          localStorage.setItem(`wishlist_product_${index}`, isActive);
      });

      addToCartBtn.addEventListener('click', function () {
          addToCartBtn.disabled = true; // Disable the button
          cartMessage.style.display = 'block';
          setTimeout(() => {
              cartMessage.style.display = 'none';
              addToCartBtn.disabled = false; // Re-enable the button
          }, 2000);
      });

      buyNowBtn.addEventListener('click', function () {
        alert("Redirecting to the purchase page");
      });
  });
});


const pages = {
  "About": "about.html",
  "Bathroom": "bathroom.html",
  "BathroomDesigns": "bathroom2.html",
  "Bedroom": "bedroom.html",
  "Decor": "decor.html",
  "Furniture": "furniture.html",
  "Kitchen": "kitchen.html",
  "KitchenDesigns": "kitchen2.html",
  "KitchenDesigns": "kitchen2.html",
  "Lighting": "lighting.html",
  "LivingRoom": "livingroom.html",
  "Contact": "contact.html"
};

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Function to filter search results
function filterSearch() {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = '';
  if (query) {
      const filteredResults = Object.keys(pages).filter(item =>
          item.toLowerCase().includes(query)
      );
      
      filteredResults.forEach(result => {
          const li = document.createElement('li');
          li.textContent = result;
          li.onclick = () => goToPage(result);
          searchResults.appendChild(li);
      });
  }
}

// Function to navigate to the page when pressing enter
searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
      const firstResult = searchResults.firstChild;
      if (firstResult) {
          goToPage(firstResult.textContent);
      }
  }
});

// Function to navigate to the selected page
function goToPage(pageName) {
  const url = pages[pageName];
  if (url) {
      window.location.href = url;
  }
}

// Function to toggle hamburger menu on small screens
function toggleMenu() {
  const navbarLinks = document.getElementById('navbar-links');
  if (navbarLinks.style.display === 'flex') {
      navbarLinks.style.display = 'none';
  } else {
      navbarLinks.style.display = 'flex';
  }
}