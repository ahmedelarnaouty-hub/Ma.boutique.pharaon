const UNSPLASH = "https://images.unsplash.com/photo-";
const IMAGE_WIDTHS = [480, 800, 1200, 1600, 2000];

const products = [
  {
    id: 1,
    name: "Robe en soie Luna",
    tag: "Robes",
    category: "dresses",
    price: 540,
    description: "Une élégance légère, une silhouette sculptée et un tombé tout en grâce.",
    image: "1595777457583-95e059d581b8",
    fallback: "1496747611176-843222e1e57c",
  },
  {
    id: 2,
    name: "Cabas en cuir Noura",
    tag: "Accessoires",
    category: "accessories",
    price: 310,
    description: "Une pièce intemporelle, façonnée pour un raffinement de tous les jours.",
    image: "1548036328-c9fa89d128fa",
    fallback: "1584917865442-de89df76afd3",
  },
  {
    id: 3,
    name: "Escarpins Aurelia",
    tag: "Chaussures",
    category: "shoes",
    price: 420,
    description: "Un confort sculptural, des finitions luxueuses et des proportions élégantes.",
    image: "1515347619252-60a4bf4fff4f",
    fallback: "1543163521-1bf539c55dd2",
  },
  {
    id: 4,
    name: "Ensemble satin Sahara",
    tag: "Robes",
    category: "dresses",
    price: 610,
    description: "Une coupe raffinée et une matière fluide pour les grandes occasions.",
    image: "1566174053879-31528523f8ae",
    fallback: "1524504388940-b1c1722653e1",
  },
  {
    id: 5,
    name: "Bijou doré Pharaon",
    tag: "Accessoires",
    category: "accessories",
    price: 180,
    description: "Un détail précieux aux reflets d'or doux, d'un charme intemporel.",
    image: "1515562141207-7a88fb7ce338",
    fallback: "1617038220319-276d3cfab638",
  },
  {
    id: 6,
    name: "Bottines en cuir Maison",
    tag: "Chaussures",
    category: "shoes",
    price: 470,
    description: "Structurées, affirmées et finement travaillées, pour toutes les saisons.",
    image: "1608256246200-53e635b5b65f",
    fallback: "1543163521-1bf539c55dd2",
  },
];

const CART_KEY = "boutiqueCart";

const priceFormatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "AED",
  maximumFractionDigits: 0,
});

function formatPrice(value) {
  return priceFormatter.format(value);
}

function imageUrl(photoId, width) {
  return `${UNSPLASH}${photoId}?auto=format&fit=crop&w=${width}&q=85`;
}

function imageSrcset(photoId) {
  return IMAGE_WIDTHS.map((width) => `${imageUrl(photoId, width)} ${width}w`).join(", ");
}

// Swap to the fallback photo if the primary one fails, then to a neutral placeholder.
function handleImageError(img) {
  const fallback = img.dataset.fallback;
  if (fallback && !img.dataset.fallbackUsed) {
    img.dataset.fallbackUsed = "true";
    img.srcset = imageSrcset(fallback);
    img.src = imageUrl(fallback, 1200);
    return;
  }
  img.removeAttribute("srcset");
  img.removeAttribute("src");
  img.classList.add("img-missing");
}

function initImageFallbacks(root = document) {
  root.querySelectorAll("img[data-fallback]").forEach((img) => {
    if (img.dataset.fallbackBound) return;
    img.dataset.fallbackBound = "true";
    img.addEventListener("error", () => handleImageError(img));
    if (img.complete && img.naturalWidth === 0 && img.currentSrc) handleImageError(img);
  });
}

function getCart() {
  try {
    const saved = localStorage.getItem(CART_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {
    // Storage unavailable (private mode): the cart simply won't persist.
  }
}

function addToCart(productId) {
  const cart = getCart();
  const product = products.find((item) => item.id === productId);

  if (!product) return;

  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: product.id, quantity: 1 });
  }

  saveCart(cart);
  updateCartBadges();
  renderCartPage();
  showToast(`${product.name} a été ajouté au panier`);
}

function removeFromCart(productId) {
  const cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
  updateCartBadges();
  renderCartPage();
}

// Cart entries store only id + quantity; product details always come from the catalog.
function getCartLines() {
  return getCart()
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter(Boolean);
}

function getCartCount() {
  return getCartLines().reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
  return getCartLines().reduce((total, item) => total + item.price * item.quantity, 0);
}

function updateCartBadges() {
  const count = getCartCount();
  document.querySelectorAll(".nav-cart-count").forEach((badge) => {
    badge.textContent = count;
  });
}

function productCard(product) {
  return `
    <article class="product-card">
      <div class="product-media">
        <img
          src="${imageUrl(product.image, 1200)}"
          srcset="${imageSrcset(product.image)}"
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 400px"
          alt="${product.name}"
          loading="lazy"
          decoding="async"
          width="1200"
          height="1500"
          data-fallback="${product.fallback}"
        />
        <span class="product-badge">${product.tag}</span>
      </div>
      <div class="product-body">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-meta">
          <span class="price">${formatPrice(product.price)}</span>
          <button type="button" data-product-id="${product.id}">Ajouter au panier</button>
        </div>
      </div>
    </article>
  `;
}

function renderProductGrid(container, list) {
  container.innerHTML = list.map(productCard).join("");
  bindProductButtons(container);
  initImageFallbacks(container);
}

function renderFeaturedHome() {
  const container = document.getElementById("featured-products");
  if (!container) return;
  renderProductGrid(container, products);
}

function renderShopProducts() {
  const container = document.getElementById("shop-products");
  if (!container) return;

  const activeFilter = document.querySelector(".filter-btn.active")?.dataset.filter || "all";
  const filteredProducts =
    activeFilter === "all" ? products : products.filter((product) => product.category === activeFilter);

  renderProductGrid(container, filteredProducts);
}

function bindProductButtons(root) {
  root.querySelectorAll("button[data-product-id]").forEach((button) => {
    button.addEventListener("click", () => addToCart(Number(button.dataset.productId)));
  });
}

function renderCartPage() {
  const cartList = document.getElementById("cart-list");
  const subtotal = document.getElementById("subtotal");
  const total = document.getElementById("total");

  if (!cartList) return;

  const cart = getCartLines();

  if (!cart.length) {
    cartList.innerHTML =
      '<div class="empty-state">Votre panier est vide. <a href="products.html">Continuer mes achats</a></div>';
    if (subtotal) subtotal.textContent = formatPrice(0);
    if (total) total.textContent = formatPrice(25);
    return;
  }

  cartList.innerHTML = cart
    .map(
      (item) => `
        <article class="cart-item">
          <img
            class="cart-item-thumb"
            src="${imageUrl(item.image, 240)}"
            srcset="${imageUrl(item.image, 240)} 1x, ${imageUrl(item.image, 480)} 2x"
            alt="${item.name}"
            width="90"
            height="90"
            data-fallback="${item.fallback}"
          />
          <div class="cart-item-info">
            <strong>${item.name}</strong>
            <span>${item.quantity} × ${formatPrice(item.price)}</span>
          </div>
          <button type="button" class="remove-item" data-remove-id="${item.id}">Retirer</button>
        </article>
      `
    )
    .join("");

  initImageFallbacks(cartList);

  const subtotalValue = getCartTotal();
  const shipping = subtotalValue > 0 ? 25 : 0;

  if (subtotal) subtotal.textContent = formatPrice(subtotalValue);
  if (total) total.textContent = formatPrice(subtotalValue + shipping);

  cartList.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", () => removeFromCart(Number(button.dataset.removeId)));
  });
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("visible"), 2600);
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
      button.textContent = "Inscription confirmée";
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
    alert("Merci ! Votre message a bien été reçu.");
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
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

function initHeaderShadow() {
  const header = document.querySelector(".topbar");
  if (!header) return;
  const update = () => header.classList.toggle("scrolled", window.scrollY > 12);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

function initYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

function initCheckoutButton() {
  const button = document.querySelector(".checkout-btn");
  if (!button) return;

  button.addEventListener("click", () => {
    alert("Le paiement sera bientôt disponible.");
  });
}

renderFeaturedHome();
renderShopProducts();
renderCartPage();
initImageFallbacks();
initFilters();
initNewsletterForm();
initContactForm();
initMenuToggle();
initHeaderShadow();
initReveal();
initYear();
initCheckoutButton();
updateCartBadges();
