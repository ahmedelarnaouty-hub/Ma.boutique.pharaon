const products = [
  {
    id: 1,
    name: "Luna Silk Dress",
    tag: "Dresses",
    category: "dresses",
    price: 540,
    description: "Lightweight elegance with a sculpted silhouette and graceful movement.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Noura Leather Tote",
    tag: "Accessories",
    category: "accessories",
    price: 310,
    description: "A timeless statement piece crafted for everyday refinement.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Aurelia Heels",
    tag: "Shoes",
    category: "shoes",
    price: 420,
    description: "Sculptural comfort meets luxury finishing and elegant proportions.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Sahara Satin Set",
    tag: "Dresses",
    category: "dresses",
    price: 610,
    description: "Refined tailoring and fluid texture for polished occasions.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Pharaon Gold Charm",
    tag: "Accessories",
    category: "accessories",
    price: 180,
    description: "A refined detail piece with soft gold finishing and timeless appeal.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Maison Leather Boots",
    tag: "Shoes",
    category: "shoes",
    price: 470,
    description: "Structured, confident, and beautifully finished for any season.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
];

const CART_KEY = "boutiqueCart";

function getCart() {
  const saved = localStorage.getItem(CART_KEY);
  return saved ? JSON.parse(saved) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(productId) {
  const cart = getCart();
  const product = products.find((item) => item.id === productId);

  if (!product) return;

  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  updateCartBadges();
  renderCartPage();
  renderProducts();
}

function removeFromCart(productId) {
  const cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
  updateCartBadges();
  renderCartPage();
  renderProducts();
}

function getCartCount() {
  return getCart().reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
  return getCart().reduce((total, item) => total + item.price * item.quantity, 0);
}

function updateCartBadges() {
  const badges = document.querySelectorAll(".nav-cart-count");
  const count = getCartCount();
  badges.forEach((badge) => {
    badge.textContent = count;
  });
}

function renderFeaturedHome() {
  const container = document.getElementById("featured-products");
  if (!container) return;

  const featured = products.slice(0, 3);
  container.innerHTML = featured
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image" style="background-image:url('${product.image}')" aria-label="${product.name}"></div>
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

  bindProductButtons();
}

function renderShopProducts() {
  const container = document.getElementById("shop-products");
  if (!container) return;

  const activeFilter = document.querySelector(".filter-btn.active")?.dataset.filter || "all";
  const filteredProducts =
    activeFilter === "all" ? products : products.filter((product) => product.category === activeFilter);

  container.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image" style="background-image:url('${product.image}')" aria-label="${product.name}"></div>
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

  bindProductButtons();
}

function bindProductButtons() {
  const buttons = document.querySelectorAll("button[data-product-id]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => addToCart(Number(button.dataset.productId)));
  });
}

function renderCartPage() {
  const cartList = document.getElementById("cart-list");
  const subtotal = document.getElementById("subtotal");
  const total = document.getElementById("total");

  if (!cartList) return;

  const cart = getCart();

  if (!cart.length) {
    cartList.innerHTML = '<div class="empty-state">Your cart is empty. <a href="products.html">Continue shopping</a></div>';
    if (subtotal) subtotal.textContent = "AED 0";
    if (total) total.textContent = "AED 25";
    return;
  }

  cartList.innerHTML = cart
    .map(
      (item) => `
        <article class="cart-item">
          <div class="cart-item-thumb" style="background-image:url('${item.image}')"></div>
          <div class="cart-item-info">
            <strong>${item.name}</strong>
            <span>${item.quantity} × AED ${item.price}</span>
          </div>
          <button type="button" class="remove-item" data-remove-id="${item.id}">Remove</button>
        </article>
      `
    )
    .join("");

  const subtotalValue = getCartTotal();
  const shipping = subtotalValue > 0 ? 25 : 0;
  const totalValue = subtotalValue + shipping;

  if (subtotal) subtotal.textContent = `AED ${subtotalValue}`;
  if (total) total.textContent = `AED ${totalValue}`;

  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", () => removeFromCart(Number(button.dataset.removeId)));
  });
}

function initFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
      renderShopProducts();
    });
  });
}

function initNewsletterForm() {
  const form = document.querySelector(".newsletter-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    if (button) {
      button.textContent = "Subscribed";
      button.disabled = true;
    }
    form.reset();
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you! Your message has been received.");
    form.reset();
  });
}

function initMenuToggle() {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (!menuButton || !nav) return;

  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

function initYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

function initCheckoutButton() {
  const button = document.querySelector(".checkout-btn");
  if (!button) return;

  button.addEventListener("click", () => {
    alert("Checkout is ready for integration with your payment backend.");
  });
}

renderFeaturedHome();
renderShopProducts();
renderCartPage();
initFilters();
initNewsletterForm();
initContactForm();
initMenuToggle();
initYear();
initCheckoutButton();
updateCartBadges();

































