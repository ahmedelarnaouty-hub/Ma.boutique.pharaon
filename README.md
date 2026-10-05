const products = [
  {
    id: 1,
    name: "Luna Silk Dress",
    tag: "Dresses",
    category: "dresses",
    price: 540,
    description: "Lightweight elegance with a sculpted silhouette and graceful movement.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Noura Leather Tote",
    tag: "Accessories",
    category: "accessories",
    price: 310,
    description: "A timeless statement piece crafted for everyday refinement.",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Aurelia Heels",
    tag: "Shoes",
    category: "shoes",
    price: 420,
    description: "Sculptural comfort meets luxury finishing and elegant proportions.",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Sahara Satin Set",
    tag: "Dresses",
    category: "dresses",
    price: 610,
    description: "Elevated tailoring and fluid texture for polished special occasions.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Pharaon Gold Charm",
    tag: "Accessories",
    category: "accessories",
    price: 180,
    description: "A refined everyday statement with soft gold finishes and luxe detailing.",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Maison Leather Boots",
    tag: "Shoes",
    category: "shoes",
    price: 470,
    description: "Structured, confident, and beautifully finished for any season.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
];

const productGrid = document.getElementById("product-grid");
const cartCount = document.getElementById("cart-count");
const year = document.getElementById("year");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const newsletterForm = document.querySelector(".newsletter-form");
const cartDrawer = document.querySelector(".cart-drawer");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartButton = document.querySelector(".cart-btn");
const closeCartButton = document.querySelector(".close-cart");
const filterButtons = document.querySelectorAll(".filter-btn");

const state = {
  currentFilter: "all",
  cart: [],
};

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existing = state.cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }

  renderCart();
  renderProducts();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  renderCart();
  renderProducts();
}

function getCartCount() {
  return state.cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
  return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function renderProducts() {
  if (!productGrid) return;

  const filteredProducts =
    state.currentFilter === "all"
      ? products
      : products.filter((product) => product.category === state.currentFilter);

  productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image" style="background-image: url('${product.image}')" aria-label="${product.name}"></div>
          <div class="product-body">
            <span class="product-tag">${product.tag}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-meta">
              <span class="price">AED ${product.price}</span>
              <button type="button" data-product-id="${product.id}">Add to cart</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  const buttons = productGrid.querySelectorAll("button[data-product-id]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(Number(button.dataset.productId));
    });
  });

  cartCount.textContent = getCartCount();
}

function renderCart() {
  if (!cartItemsContainer || !cartTotal) return;

  cartCount.textContent = getCartCount();

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    cartTotal.textContent = "AED 0";
    return;
  }

  cartItemsContainer.innerHTML = state.cart
    .map(
      (item) => `
        <div class="cart-item">
          <div class="cart-item-thumb" style="background-image: url('${item.image}')"></div>
          <div class="cart-item-info">
            <strong>${item.name}</strong>
            <span>${item.quantity} × AED ${item.price}</span>
          </div>
          <button class="remove-item" data-remove-id="${item.id}" type="button">Remove</button>
        </div>
      `
    )
    .join("");

  cartTotal.textContent = `AED ${getCartTotal()}`;

  const removeButtons = cartItemsContainer.querySelectorAll(".remove-item");
  removeButtons.forEach((button) => {
    button.addEventListener("click", () => removeFromCart(Number(button.dataset.removeId)));
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

if (cartButton && cartDrawer) {
  cartButton.addEventListener("click", () => {
    cartDrawer.classList.add("open");
  });
}

if (closeCartButton && cartDrawer) {
  closeCartButton.addEventListener("click", () => {
    cartDrawer.classList.remove("open");
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.currentFilter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
    renderProducts();
  });
});

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = newsletterForm.querySelector("button");
    const input = newsletterForm.querySelector("input");
    if (!button || !input) return;

    button.textContent = "Subscribed";
    button.disabled = true;
    input.value = "";
  });
}

renderProducts();
renderCart();

window.addEventListener("click", (event) => {
  if (cartDrawer && cartDrawer.classList.contains("open") && !cartDrawer.contains(event.target) && !cartButton.contains(event.target)) {
    cartDrawer.classList.remove("open");
  }
});

