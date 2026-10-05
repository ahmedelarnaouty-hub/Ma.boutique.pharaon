:root {
  --bg: #f7f1ec;
  --panel: #fffaf7;
  --card: #ffffff;
  --text: #1d1a1a;
  --muted: #625b5a;
  --accent: #b98966;
  --accent-deep: #8d6248;
  --line: rgba(24, 18, 17, 0.08);
  --shadow: 0 18px 40px rgba(32, 22, 17, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--accent-deep);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

h1,
h2,
h3,
h4,
.brand {
  font-family: "Cormorant Garamond", serif;
  line-height: 1.05;
  margin: 0;
}

p {
  margin: 0;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(247, 241, 236, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 74px;
  gap: 20px;
}

.brand {
  font-size: clamp(2rem, 2vw, 2.8rem);
  letter-spacing: 0.02em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
  color: var(--muted);
  font-size: 0.96rem;
}

.nav-links a {
  position: relative;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

.nav-links a:hover::after,
.nav-links a:focus-visible::after {
  transform: scaleX(1);
}

.nav-cart-count {
  display: inline-grid;
  place-items: center;
  min-width: 22px;
  min-height: 22px;
  padding: 2px 6px;
  border-radius: 999px;
  background: var(--accent);
  color: white;
  font-size: 0.72rem;
  margin-left: 6px;
}

.btn {
  border: none;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  font-weight: 600;
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: var(--accent);
  color: white;
  box-shadow: 0 12px 30px rgba(185, 137, 102, 0.25);
}

.btn-secondary {
  background: transparent;
  border: 1px solid rgba(24, 18, 17, 0.15);
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 42px;
  padding: 72px 0 46px;
}

.hero-copy h1,
.page-hero h1 {
  font-size: clamp(3.1rem, 5vw, 5.2rem);
  margin-bottom: 18px;
  max-width: 560px;
}

.lead {
  max-width: 540px;
  color: var(--muted);
  font-size: 1.08rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
}

.hero-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 36px;
}

.hero-metrics div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.hero-metrics strong {
  font-size: 1.6rem;
  font-weight: 700;
}

.hero-metrics span {
  color: var(--muted);
  font-size: 0.83rem;
}

.hero-visual {
  position: relative;
  min-height: 620px;
}

.image-card {
  position: absolute;
  inset: 0 40px 0 0;
  background-size: cover;
  background-position: center;
  border-radius: 32px;
  box-shadow: var(--shadow);
}

.main-card {
  background-image: url("https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80");
}

.floating-card {
  position: absolute;
  right: 0;
  bottom: 38px;
  background: rgba(255, 253, 251, 0.84);
  border: 1px solid rgba(24, 18, 17, 0.08);
  border-radius: 20px;
  padding: 16px 18px;
  box-shadow: var(--shadow);
}

.floating-card p {
  color: var(--muted);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.floating-card strong {
  display: block;
  margin-top: 6px;
  font-family: "Cormorant Garamond", serif;
  font-size: 2rem;
}

.featured-strip {
  background: rgba(255, 255, 255, 0.55);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.strip-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  padding: 22px 0;
}

.strip-grid > div {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
}

.strip-grid span {
  font-weight: 700;
}

.strip-grid small {
  color: var(--muted);
}

.section-block,
.story,
.newsletter,
.main-page {
  padding-top: 70px;
  padding-bottom: 20px;
}

.section-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 26px;
}

.section-header h2,
.testimonials h2,
.newsletter h2,
.story-copy h2 {
  font-size: clamp(2.4rem, 4vw, 3.4rem);
}

.text-link {
  color: var(--accent-deep);
  font-weight: 600;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.product-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 14px 28px rgba(36, 26, 20, 0.04);
}

.product-image {
  height: 320px;
  background-size: cover;
  background-position: center;
}

.product-body {
  padding: 20px 20px 24px;
}

.product-tag {
  display: inline-block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent-deep);
  margin-bottom: 8px;
}

.product-body h3 {
  font-size: clamp(2rem, 2vw, 2.4rem);
  margin-bottom: 8px;
}

.product-body p {
  color: var(--muted);
  margin-bottom: 18px;
}

.product-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.price {
  font-weight: 700;
  font-size: 1.08rem;
}

.product-meta button {
  background: var(--text);
  color: white;
  border: none;
  border-radius: 999px;
  padding: 0.72rem 1rem;
  font-weight: 600;
}

.story {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.story-page {
  padding-top: 0;
}

.story-image {
  min-height: 520px;
  border-radius: 30px;
  background-image: url("https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=80");
  background-size: cover;
  background-position: center;
  box-shadow: var(--shadow);
}

.story-copy {
  display: grid;
  gap: 18px;
}

.story-copy p {
  color: var(--muted);
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 14px 0 0;
  display: grid;
  gap: 10px;
  color: var(--text);
  font-weight: 600;
}

.check-list li::before {
  content: "✓";
  color: var(--accent-deep);
  margin-right: 10px;
}

.testimonials {
  padding: 96px 0 0;
  background: rgba(255, 255, 255, 0.38);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  margin-top: 30px;
  padding-bottom: 96px;
}

.testimonial-grid blockquote {
  margin: 0;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 26px 22px;
  color: var(--muted);
  box-shadow: 0 12px 24px rgba(32, 22, 17, 0.04);
}

.testimonial-grid footer {
  margin-top: 18px;
  color: var(--text);
  font-weight: 700;
}

.newsletter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 96px;
}

.newsletter-form {
  display: flex;
  gap: 12px;
  width: min(520px, 100%);
}

.newsletter-form input {
  flex: 1;
  min-height: 54px;
  padding: 0 18px;
  border: 1px solid rgba(24, 18, 17, 0.14);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.8);
}

.page-hero {
  margin-bottom: 32px;
}

.small-hero {
  padding-top: 40px;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 20px 0 30px;
}

.filter-btn {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.5);
  color: var(--text);
  padding: 0.7rem 1rem;
  border-radius: 999px;
  font-weight: 600;
}

.filter-btn.active {
  background: var(--text);
  color: white;
  border-color: var(--text);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin: 48px 0 30px;
}

.values-grid article,
.contact-card,
.contact-form,
.order-summary,
.cart-item {
  background: rgba(255, 255, 255, 0.52);
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: 0 14px 28px rgba(36, 26, 20, 0.04);
}

.values-grid article {
  padding: 24px;
}

.values-grid h3 {
  margin-bottom: 10px;
  font-size: 2.2rem;
}

.values-grid p,
.contact-card p,
.contact-card li,
.contact-form label {
  color: var(--muted);
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 28px;
  margin-top: 20px;
}

.contact-card,
.contact-form {
  padding: 24px;
}

.contact-card ul {
  padding-left: 20px;
  margin: 18px 0 0;
}

.contact-form {
  display: grid;
  gap: 16px;
}

.contact-form label {
  display: grid;
  gap: 8px;
  font-weight: 600;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid rgba(24, 18, 17, 0.12);
  border-radius: 16px;
  padding: 0.9rem 1rem;
  background: rgba(255, 255, 255, 0.8);
}

.cart-layout {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 28px;
}

.cart-list {
  display: grid;
  gap: 16px;
}

.cart-item {
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 14px;
}

.cart-item-thumb {
  width: 90px;
  min-width: 90px;
  height: 90px;
  border-radius: 18px;
  background-size: cover;
  background-position: center;
}

.cart-item-info {
  flex: 1;
}

.cart-item-info strong {
  display: block;
  font-size: 1.2rem;
}

.cart-item-info span {
  color: var(--muted);
}

.remove-item {
  border: none;
  background: transparent;
  color: var(--accent-deep);
  font-weight: 700;
}

.order-summary {
  padding: 24px;
  height: fit-content;
}

.order-summary h3 {
  font-size: 2.2rem;
  margin-bottom: 18px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  color: var(--muted);
}

.total-row {
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid var(--line);
  color: var(--text);
  font-weight: 700;
}

.checkout-btn {
  width: 100%;
  margin-top: 18px;
}

.site-footer {
  background: #201b1a;
  color: rgba(255, 255, 255, 0.8);
  padding: 42px 0 18px;
  margin-top: 60px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.site-footer .brand {
  color: white;
  display: inline-block;
  margin-bottom: 12px;
}

.site-footer h4 {
  font-size: 1.6rem;
  margin-bottom: 12px;
  color: white;
}

.site-footer p {
  margin-bottom: 6px;
}

.footer-bottom {
  margin-top: 30px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  justify-content: space-between;
  gap: 18px;
  color: rgba(255, 255, 255, 0.7);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  border: none;
  background: transparent;
  padding: 4px;
}

.menu-toggle span {
  width: 26px;
  height: 2px;
  background: var(--text);
  display: block;
}

@media (max-width: 900px) {
  .hero,
  .story,
  .newsletter,
  .contact-grid,
  .cart-layout,
  .footer-grid,
  .product-grid,
  .testimonial-grid,
  .values-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 48px;
  }

  .nav {
    position: relative;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(100% + 8px);
    display: none;
    flex-direction: column;
    background: rgba(255, 250, 247, 0.98);
    border: 1px solid var(--line);
    border-radius: 18px;
    padding: 18px 20px;
    box-shadow: var(--shadow);
  }

  .nav-links.open {
    display: flex;
  }

  .newsletter {
    align-items: flex-start;
  }

  .newsletter-form {
    flex-direction: column;
  }
}

@media (max-width: 600px) {
  .strip-grid {
    grid-template-columns: 1fr;
  }

  .section-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .product-image {
    height: 280px;
  }

  .footer-bottom {
    flex-direction: column;
  }
}

























