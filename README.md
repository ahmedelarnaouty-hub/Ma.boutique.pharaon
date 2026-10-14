# Ma.boutique.pharaon

Site vitrine et boutique en ligne de Ma.boutique.pharaon : mode de luxe, accessoires et chaussures.

## Pages

- `index.html` : page d'accueil
- `products.html` : boutique avec filtres par catégorie
- `cart.html` : panier
- `about.html` : à propos
- `contact.html` : contact

## Fichiers

- `style.css` : styles de tout le site
- `script.js` : catalogue des produits, panier (sauvegardé dans le navigateur), filtres et formulaires

## Modifier les produits

Les produits sont définis dans le tableau `products` en haut de `script.js`.
Chaque produit utilise un identifiant de photo Unsplash (`image`) et une photo de secours (`fallback`)
affichée automatiquement si la première ne se charge pas.

## Lancer le site en local

Ouvrez `index.html` dans un navigateur, ou lancez un petit serveur :

```bash
python3 -m http.server 8000
```

puis rendez-vous sur http://localhost:8000.
