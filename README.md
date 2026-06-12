# Griffin Gear — Chaminade College School Store

Grade 11 Entrepreneurship ISU — an e-commerce website for the Chaminade school store.

## How to open
Double-click **`index.html`** to open the site in any web browser. No internet or
install required — all pages, styles, scripts and images are local.

(Optional dev preview: `npx serve .` then visit the printed URL.)

## Pages (6 total — exceeds the 5-page minimum)
| File | Page | Rubric requirement |
|------|------|--------------------|
| `index.html` | Home | Business info, logo, slogan, mission, payment methods, featured products, promotion, school-spirit message, nav links |
| `privacy.html` | Privacy & Security | Privacy policy, secure payments, passwords, cookies, data storage, third parties, safe-shopping tips |
| `about.html` | About the Store | Store history, target market, customer-service policy (returns, exchanges, hours, contact) |
| `products.html` | Products/Services | 17 products with photo, description, price, features & benefits |
| `order.html` | **Page of Choice — Option A: Order Form** | Name, email, product, quantity, payment + live total |
| `feedback.html` | **Page of Choice — Option D: Customer Feedback** | Review form, star ratings, survey, testimonials |

Every page (except Home) links back to the Home page in the nav, footer, and a
"← Back to Home" link.

## Products (17 — all carry an official Chaminade logo)
**Apparel:** T-Shirt, Crewneck Sweater, Varsity Jacket, Jogging Pants, Athletic
Shorts, Crew Socks. **Accessories:** Baseball Hat, Stainless Water Bottle, Key
Chain, Phone Case, Backpack, **Embroidered Patch Pack (all three logos)**.
**Stationery:** Griffin Notebook, Stationery Set. **Footwear & Gear:** Running
Shoes (green & gold), Football (green & gold).

Product photography uses the photorealistic images supplied by the user
(`assets/img/products-photo/*.jpg`). The 10 items from the collection flat-lay
were cropped out; socks, phone case, backpack, water bottle, notebook and the
stationery set use the standalone photos. `build-from-provided.js` documents how
the images were processed.

## Branding
- Colours: Chaminade green `#15693B` + gold `#F2C014`, used consistently sitewide.
- Three official logos used throughout: the **crest** (logo-1), the **griffin**
  (logo-2), and the **eagle** (logo-3).

## Folder structure
```
chaminade-school-store/
├── index.html  privacy.html  about.html  products.html  order.html  feedback.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js              (mobile nav, live order total, form confirmations)
│   └── img/
│       ├── logo-1.png  logo-2.png  logo-3.png  favicon.png
│       └── products-photo/     (17 photorealistic product images, .jpg)
└── build-from-provided.js      (how the provided photos were cropped/processed — reference only)
```
