:root {
  --bg: #f7f1ec;
  --panel: #fffaf7;
  --card: #ffffff;
  --text: #1d1a1a;
  --muted: #625b5a;
  --accent: #b98966;
  --accent-deep: #8d6248;
  --sage: #c6c1b8;
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
input {
  font: inherit;
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
  color: var(--text);
}

.nav-links {
  display: flex;
  gap: 26px;
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

.cart-btn,
.btn {
  border: none;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cart-btn {
  background: var(--text);
  color: white;
  padding: 0.82rem 1.2rem;
  font-weight: 600;
}

.cart-btn span {
  display: inline-grid;
  place-items: center;
  min-width: 24px;
  min-height: 24px;
  border-radius: 50%;
  background: var(--accent);
  color: white;
  font-size: 0.8rem;
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 42px;
  padding: 72px 0 46px;
}

.hero-copy h1 {
  font-size: clamp(3.2rem, 5vw, 5.2rem);
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

.btn {
  padding: 1rem 1.5rem;
  font-weight: 600;
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

.btn:hover,
.cart-btn:hover {
  transform: translateY(-1px);
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
  backdrop-filter: blur(6px);
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

.collection,
.story,
.journal,
.newsletter {
  padding: 96px 0 0;
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
  cursor: pointer;
}

.story {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
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

.journal-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.journal-card {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid var(--line);
  border-radius: 26px;
  overflow: hidden;
}

.journal-thumb {
  height: 260px;
  background-size: cover;
  background-position: center;
}

.thumb-one {
  background-image: url("https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80");
}

.thumb-two {
  background-image: url("https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80");
}

.thumb-three {
  background-image: url("https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80");
}

.journal-body {
  padding: 22px 20px 24px;
}

.journal-body span {
  display: inline-block;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-deep);
  margin-bottom: 10px;
}

.journal-body h3 {
  font-size: clamp(1.7rem, 2vw, 2.2rem);
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

.site-footer {
  background: #201b1a;
  color: rgba(255, 255, 255, 0.8);
  padding: 42px 0 18px;
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
  cursor: pointer;
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
  .footer-grid,
  .product-grid,
  .journal-grid,
  .testimonial-grid {
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

  .cart-btn {
    margin-left: auto;
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

  .hero-copy h1 {
    max-width: 100%;
  }

  .product-image {
    height: 280px;
  }

  .footer-bottom {
    flex-direction: column;
  }
}
