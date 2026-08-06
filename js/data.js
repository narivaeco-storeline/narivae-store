/**
 * NARIVAE Ethnic Wear - Store Data & Admin State Manager
 * Full Dynamic Schema with Multi-WebP Image Support, Dynamic Nav & Reviews
 */

const DEFAULT_STORE_DATA = {
  "branding": {
    "siteName": "NARIVAE",
    "tagline": "ROYAL ETHNIC ELEGANCE",
    "logoText": "narivae",
    "logoSubtext": "",
    "logoImageUrl": "",
    "whatsappNumber": "918511414656",
    "announcementText": "✨ FESTIVE SALE IS LIVE! ENJOY FREE SHIPPING ACROSS INDIA + EXTRA 10% OFF ON WHATSAPP ORDERS ✨",
    "contactEmail": "support.narivae@gmail.com",
    "contactPhone": "+91 8511414656",
    "instagramUrl": "https://instagram.com",
    "facebookUrl": "https://facebook.com",
    "pinterestUrl": "https://pinterest.com",
    "copyrightText": "© 2026 NARIVAE Ethnic Wear. All Rights Reserved. Hostable on GitHub Pages.",
    "footerBio": "Authentic Indian ethnic wear, suit sets, and flared Anarkalis designed to celebrate grace and luxury. Handcrafted with love."
  },
  "navigation": [
    {
      "id": "nav-1",
      "name": "Home",
      "link": "index.html"
    },
    {
      "id": "nav-2",
      "name": "Suit Sets",
      "link": "index.html#catalog",
      "filter": "Suit Sets"
    },
    {
      "id": "nav-3",
      "name": "Anarkalis",
      "link": "index.html#catalog",
      "filter": "Anarkalis"
    },
    {
      "id": "nav-4",
      "name": "Tunics & Tops",
      "link": "index.html#catalog",
      "filter": "Tunics"
    },
    {
      "id": "nav-5",
      "name": "Sarees & Lehengas",
      "link": "index.html#catalog",
      "filter": "Sarees"
    },
    {
      "id": "nav-6",
      "name": "Festive Sale",
      "link": "index.html#catalog",
      "filter": "Sale",
      "badge": "HOT"
    }
  ],
  "sections": {
    "hotSellingTitle": "Selling hot!",
    "hotSellingSubtext": "Grab yours before it's gone",
    "hotSellingBtnText": "SHOP NOW",
    "catalogTitle": "Curated Ethnic Collection",
    "catalogSubtext": "Handcrafted traditional fits, premium fabrics & artisanal detailing",
    "bestsellersTitle": "BEST SELLERS",
    "bestsellersSubtext": "Our most coveted ethnic wear silhouettes",
    "topSellingTitle": "TOP SELLING PRODUCTS",
    "topSellingSubtext": "Trending designs handpicked by our fashion stylists",
    "amazingDealsTitle": "AMAZING DEALS",
    "amazingDealsSubtext": "Limited period festive discounts on luxury suit sets",
    "allProductsTitle": "ALL PRODUCTS",
    "allProductsSubtext": "Browse the complete NARIVAE ethnic wear collection",
    "reviewsTitle": "CUSTOMER FEEDBACK",
    "reviewsSubtext": "Real customer photos & honest reviews from our ethnic couture lovers",
    "trustBadge1": "✨ 100% Authentic Craft",
    "trustBadge2": "🚚 Free Express Shipping",
    "trustBadge3": "🔄 7 Days Easy Replacement"
  },
  "heroSlides": [
    {
      "id": "hero-1",
      "type": "image",
      "mediaUrl": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=80",
      "headline": "Royal Festive Collection '26",
      "subheadline": "Handcrafted Silk Anarkalis, Zari Suit Sets & Timeless Ethnic Elegance",
      "badgeText": "NEW ARRIVALS",
      "buttonText": "EXPLORE COLLECTION",
      "buttonLink": "#catalog"
    },
    {
      "id": "hero-2",
      "type": "image",
      "mediaUrl": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1920&q=80",
      "headline": "The Art of Chanderi Silk",
      "subheadline": "Exquisite Embroidery & Metallic Cutdana Handwork",
      "badgeText": "EXCLUSIVE CRAFT",
      "buttonText": "SHOP SUIT SETS",
      "buttonLink": "#catalog"
    }
  ],
  "promoBanner": {
    "title": "GRAB UP TO 60% OFF ON FESTIVE SUITS",
    "subtitle": "Use Code FESTIVE10 for an additional 10% instant discount on WhatsApp!",
    "imageUrl": "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1600&q=80",
    "buttonText": "CLAIM DISCOUNT ON WHATSAPP",
    "buttonLink": "https://wa.me/918511414656?text=Hi%20NARIVAE!%20I%20want%20to%20claim%20the%20FESTIVE10%20discount%20code!"
  },
  "customerReviews": [
    {
      "id": "rev-1",
      "name": "Simran K.",
      "status": "Verified Buyer",
      "rating": 5,
      "comment": "The fit of this Anarkali suit set is absolute perfection! The flare and zari handwork look so regal in person. Received so many compliments at my friend's sangeet!",
      "imageUrl": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80"
    },
    {
      "id": "rev-2",
      "name": "Ananya R.",
      "status": "Verified Buyer",
      "rating": 5,
      "comment": "Super smooth WhatsApp ordering process! Shipped within 2 days and the fabric quality is premium silk. 10/10 recommend NARIVAE!",
      "imageUrl": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80"
    },
    {
      "id": "rev-3",
      "name": "Divya M.",
      "status": "Verified Buyer",
      "rating": 5,
      "comment": "The sequence embroidery on the purple set is subtle yet glowing under evening lights. Exactly as shown in the picture!",
      "imageUrl": "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=80"
    }
  ],
  "products": [
    {
      "id": "prod-sblnkb62",
      "sku": "SBLNKB62",
      "title": "Pure Romanshimmer Chanderi Silk Fabric Fully Flair Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2400,
      "originalPrice": 4200,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": true,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1pe_bxVdgACYBqwm7qNCNLXOB-AtTfkaP&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1pe_bxVdgACYBqwm7qNCNLXOB-AtTfkaP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rTw_o92pbCN91P_SfNQCvLGXri1YeIS6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1L4NDazh2X7AmuGEA4gF4XTQHBozZM_Gh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1E9z8awMezhXOmz1x3GBKt-L5z0OIkxUB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VrymhV2Jep4HHblHGWNoMgweuMWNEK7D&sz=w1000",
        "https://drive.google.com/thumbnail?id=1z_hP_Lv6OMoYzN_9xo2uCibTqhEi3LYL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xz6DjTmRYQnra0Ycis4_v1xORmDZ1f0A&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ELojp6qMGEqaYHtVBOnV392UGGC2DPJs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1M7nJO61ftyVzqpo_iHVGhVsX1WmIyxWy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Bc4xIPcvF4YgtqjCh18MkmuM08mXqGoL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JMfGYYSzEZgA9l1n5OrVbQvW3jA6Tvgl&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1i_RQavLg4PwKbKNjiGMln9koHUlwzsoh",
      "description": "Crafted in heavy pure roman shimmer chanderi silk fabric, this anarkali brings together premium fabric and refined detailing. 4 mtr fully flair anarkali gown, styled with 2.2 mtr pure roman shimmer chanderi silk fabric handwork beads work and embroidery jari work fancy boader, kurta length 48 49 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE ROMAN SHIMMER CHANDERI SILK FABRIC"
        },
        {
          "label": "Silhouette",
          "value": "4 MTR FULLY FLAIR ANARKALI GOWN"
        },
        {
          "label": "Dupatta",
          "value": "2.2 MTR PURE ROMAN SHIMMER CHANDERI SILK FABRIC HANDWORK BEADS WORK AND EMBROIDERY JARI WORK FANCY BOADER"
        },
        {
          "label": "Length",
          "value": "48 49 inch approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE ROMAN SHIMMER CHANDERI SILK FABRIC",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb74",
      "sku": "SBLNKB74",
      "title": "Pure Romanshimmer Chanderi Silk Fabric Kurta Fully Flare Lahenga Saree",
      "category": "Sarees",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": true,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=16rU6gOB8njaaSWGcX80ED_36AjEJBlqo&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=16rU6gOB8njaaSWGcX80ED_36AjEJBlqo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dcG9tTOdDBUVIZ0FnmymlkusHip7x0gZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Nwv_6orB-o0JgOdDU1t4gO2fKTG6RTT1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1D581ITBn3luN2dcSN_ezTjjf5QQcmGCe&sz=w1000",
        "https://drive.google.com/thumbnail?id=1J66TmH-Ud8re7RVZh4nZc9nu_WJPK3QT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1x230odvimKOGqz639xBDN4sLZoZjYNqM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HZZ_PBMEYN3hHmzJD5ytJ-rs2UsNuSu0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tyiQ1TSrvl59JulcBBM_Pqtq83VudVyk&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZlITy_tSuV7DThosxO7jKSErYYL_H3N-&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1DTLUivD4P2TtWn5TFIRp9NhXFUxBPAUS",
      "description": "Crafted in heavy pure roman shimmer chanderi silk fabric length 36 inch approx, this saree brings together premium fabric and refined detailing. Featuring fancy embroidery sequence,dori and jari work, pure roman shimmer silk 4 meter fully flare lahenga fully sttiched free size, styled with 2.2 meter pure tabby organja silk embroidery sequence and jari work fancy boader lace work. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE ROMAN SHIMMER CHANDERI SILK FABRIC LENGTH 36 INCH approx"
        },
        {
          "label": "Work & Detailing",
          "value": "FANCY EMBROIDERY SEQUENCE,DORI AND JARI WORK"
        },
        {
          "label": "Silhouette",
          "value": "PURE ROMAN SHIMMER SILK 4 METER FULLY FLARE LAHENGA FULLY STTICHED FREE SIZE"
        },
        {
          "label": "Dupatta",
          "value": "2.2 METER PURE TABBY ORGANJA SILK EMBROIDERY SEQUENCE AND JARI WORK FANCY BOADER LACE WORK"
        },
        {
          "label": "Sizes",
          "value": "KURTA INNER"
        }
      ],
      "fabric": "HEAVY PURE ROMAN SHIMMER CHANDERI SILK FABRIC LENGTH 36 INCH approx",
      "sleeveLength": "Full Sleeves",
      "pattern": "FANCY EMBROIDERY SEQUENCE,DORI AND JARI WORK",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb75",
      "sku": "SBLNKB75",
      "title": "Pure Blooming Vichitra Silk Fabric Fully Flare Gown,with Dupatta Anarkali",
      "category": "Anarkalis",
      "price": 2500,
      "originalPrice": 4350,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": true,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1CS6dXbb8DnPZHbwLVT8Uf1l9c3wm1JNn&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1CS6dXbb8DnPZHbwLVT8Uf1l9c3wm1JNn&sz=w1000",
        "https://drive.google.com/thumbnail?id=19qjXfCDFjgSHvYiXE_CHtDb7QJGXIiIa&sz=w1000",
        "https://drive.google.com/thumbnail?id=1c_63x2LcEbxbK8UHEgruge73Fawti6AK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qMbQEGf-O2i2ZZow16BrEQRMsd73wjrn&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UMEAjPOzBX3DGatfajOhTkUR3B_VnnmE&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zdy7I8bvWUgCu28zBeVg4G4egiZ7NyxX&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1xrleN6DrGq0Mjt0TE1GbGtp0WYHYt9xB",
      "description": "Crafted in heavy pure blooming vichitra silk fabric with full kali pattern anarkali, this anarkali brings together premium fabric and refined detailing. 3.50 to 3.80 meter fully flare anarkali gown, kurta length 48 49 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE BLOOMING VICHITRA SILK FABRIC WITH FULL KALI PATTERN ANARKALI"
        },
        {
          "label": "Silhouette",
          "value": "3.50 TO 3.80 METER FULLY FLARE ANARKALI GOWN"
        },
        {
          "label": "Length",
          "value": "48 49 INCH approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED WITH BOTTOM LACE WORK"
        }
      ],
      "fabric": "HEAVY PURE BLOOMING VICHITRA SILK FABRIC WITH FULL KALI PATTERN ANARKALI",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb76",
      "sku": "SBLNKB76",
      "title": "Fully Flare Kali Pattern Canvas Patta Anarklai Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2500,
      "originalPrice": 4350,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": true,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "RED,BLACK",
      "mainImage": "https://drive.google.com/thumbnail?id=1qNum5ICIZfiX0wl4fqMU9evArw0cCC3o&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1qNum5ICIZfiX0wl4fqMU9evArw0cCC3o&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tRch2JgNhJTAGwArWtC2Q0aYVzQ4EU5b&sz=w1000",
        "https://drive.google.com/thumbnail?id=191XXf-KsPgExjTsjujAdwKpwX1tVTV4b&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jSruYAXmcdRcaBUrK355eQQLC_rjC3mU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DpnU51eQz_MyNrItmPrZEZj3VQnTKEE6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UPXeSfUuXAEGVHhTuo-pqczg8qR244oi&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gi-Q2CEYy2lgOfwW6JMWXnwMlClQwaDP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1oBhcE40c6S6K8MUfxTl6rwhMXKBmzlT6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KCEhvuk_gz0WbTq2M1OGkqb4bSIzMtqI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1miOEwx29-Ws4y0ibrLYUfLbTcbIfqzgc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bioEPKIKxh3zHo8VVdUfr5L9evKOd6oj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HP4o5YzrOA6kfMLCzbkvQI3Vu6X94emH&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1K6ye5_Y6PKV4vdt1G7YNQBGE807qVeQn",
      "description": "Crafted in heavy pure soft fox georgette lukhnowi sequence & thread work, this anarkali brings together premium fabric and refined detailing. 4 meter approx flare with kali cut attached complete with canvas patta, styled with 2.2 meter pure soft fox georgette duppta ruffle style, kurta length 48 49 inch approx. Available in: RED,BLACK. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT FOX GEORGETTE LUKHNOWI SEQUENCE & THREAD WORK"
        },
        {
          "label": "Silhouette",
          "value": "4 METER approx FLARE WITH KALI CUT ATTACHED COMPLETE WITH CANVAS PATTA"
        },
        {
          "label": "Dupatta",
          "value": "2.2 METER PURE SOFT FOX GEORGETTE DUPPTA RUFFLE STYLE"
        },
        {
          "label": "Length",
          "value": "48 49 INCH approx"
        },
        {
          "label": "Available Colors",
          "value": "RED,BLACK"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT FOX GEORGETTE LUKHNOWI SEQUENCE & THREAD WORK",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb77",
      "sku": "SBLNKB77",
      "title": "Pure Fox Georgette Fabric Top Dupatta Set,sharara Tunic",
      "category": "Tunics",
      "price": 2800,
      "originalPrice": 4800,
      "discount": "42% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": true,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=12eZS-bA3caZjCINKfhIX-g1QrV_az-56&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=12eZS-bA3caZjCINKfhIX-g1QrV_az-56&sz=w1000",
        "https://drive.google.com/thumbnail?id=17wjP09AJlxAeTh04I5qjygH44r2OJoc1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mLfxE1q2FWgljsgyJAF4M79BOk2EtS2a&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EH-7DJSsg00QoKfB1boG0X5rnsZFuqF9&sz=w1000",
        "https://drive.google.com/thumbnail?id=151FTDGTPr84M038_D-FqtsmQkrI_1kb4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1YhX-ooNUqGUaR9Q9Lx2AB9I4b_1nScix&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HNbKOx56m7F2EYJbAuQQ_hxu0TKRnNAI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1roRpkqteGqb6j0zjQQZ30jkGJdQfeUhP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FfghxSeqrWTI10FtAmZP_QVgX0wNMNWb&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1ZWy4nPJRCfNAfm6wCdbyQGNLjcyncN4_",
      "description": "Crafted in heavy pure fox georgette fabric with fancy embroidery dori,jari,sequence and thread work, this tunic brings together premium fabric and refined detailing. Styled with set,sharara, kurta length 38 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE FOX GEORGETTE FABRIC WITH FANCY EMBROIDERY DORI,JARI,SEQUENCE AND THREAD WORK"
        },
        {
          "label": "Dupatta",
          "value": "SET,SHARARA"
        },
        {
          "label": "Length",
          "value": "38 inch approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE FOX GEORGETTE FABRIC WITH FANCY EMBROIDERY DORI,JARI,SEQUENCE AND THREAD WORK",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb25",
      "sku": "SBLNKB25",
      "title": "Pure Soft Organja Silk Fabric Fully Flair Kali Pattern Canvas Patta ,pent Anarkali",
      "category": "Anarkalis",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": true,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "RED,RUST PURPLE,PINK,YELLOW,LIRIL,BLACK,CREAM",
      "mainImage": "https://drive.google.com/thumbnail?id=1t7WZ1gMQ9PG08aPr4UNT-DIjhx2CHDK6&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1t7WZ1gMQ9PG08aPr4UNT-DIjhx2CHDK6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZrKs4haag-_c-YF5CEoWDQqYFMZxvMLi&sz=w1000",
        "https://drive.google.com/thumbnail?id=1H4oMRJQFTi1hekR2BoQG6jbex1xE0l3t&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WQlLEd8R4_y2iuKesY2z9FsN3aCVp1fi&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ddOTeszYRjEXMEboKduNjycAyt_7d76-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VlN9qi46b69iO5xsP6w3LnJ1UMuRTKsT&sz=w1000",
        "https://drive.google.com/thumbnail?id=19Ettdfbr6bA4u45GhPfTvef2iTg6qHw_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iwE6tWRCNQRFhtPAHgWGPW9j6naWU1VL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1I6U-lLdvohKW9OTieEsbz0UPtZElbGVe&sz=w1000",
        "https://drive.google.com/thumbnail?id=1A3Fe1Mbak6E7rf5lcq5Bj6PRmQIo0Pl9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1w7Xb2_W-wDq3ml624_xcuY-ieFnWK2B1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JKyFpgj-fgZG_AEqoIErIr3QfPvW2iV_&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/18c5AXKoFm5jkRX4kXPMOnB0X1UveRwyB",
      "description": "Crafted in heavy pure soft organja silk print, this anarkali brings together premium fabric and refined detailing. Featuring front on fancy badla jari work flower position outing work, 4 mtr approx flair with kali cut attached complete with canvas patta, styled with 2.3 mtr pure soft organja silk with boader gota patti lace work, kurta length 48 49 inch approx. Available in: RED,RUST PURPLE,PINK,YELLOW,LIRIL,BLACK,CREAM. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT ORGANJA SILK PRINT"
        },
        {
          "label": "Work & Detailing",
          "value": "FRONT ON FANCY BADLA JARI WORK FLOWER POSITION OUTING WORK"
        },
        {
          "label": "Silhouette",
          "value": "4 MTR approx FLAIR WITH KALI CUT ATTACHED COMPLETE WITH CANVAS PATTA"
        },
        {
          "label": "Dupatta",
          "value": "2.3 MTR PURE SOFT ORGANJA SILK WITH BOADER GOTA PATTI LACE WORK"
        },
        {
          "label": "Length",
          "value": "48 49 INCH approx"
        },
        {
          "label": "Available Colors",
          "value": "RED,RUST PURPLE,PINK,YELLOW,LIRIL,BLACK,CREAM"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT ORGANJA SILK PRINT",
      "sleeveLength": "Full Sleeves",
      "pattern": "FRONT ON FANCY BADLA JARI WORK FLOWER POSITION OUTING WORK",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb51",
      "sku": "SBLNKB51",
      "title": "Pure Soft Fox Georgette Most Trendy Padding Fabric Fully Flare Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": true,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "DARKPINK,ONIONPINK",
      "mainImage": "https://drive.google.com/thumbnail?id=1uVZSZeaDPIGSH7NTgIYn4FXX78V6UudQ&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1uVZSZeaDPIGSH7NTgIYn4FXX78V6UudQ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1kEHQfSGATt-P9QVsG7vhgNl2D634NtQc&sz=w1000",
        "https://drive.google.com/thumbnail?id=18k4IvS14ORIS0xe7w72k8_97szQgThkB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1u2G4o2r93mSzeEK6i5npMAM42wcWZiFr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AuVf66lHlhIWyUUTga-9HMN2hKmbzXF9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_pjO9kcg1VkxULKdPHlpGbCoUp2yuUq6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EcUSe9ZvFSr6BvcSa8snrUV3D96FoLBQ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TeXvGDChAsPSzugutki_F5ufJRLUyiWf&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Fb_Nk_DtNIDwHUDrmW8ZGdmatbeysvUh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_fWgFkZr0yuk7OfNwH7A6eA5bBmI2Dop&sz=w1000",
        "https://drive.google.com/thumbnail?id=1v5c9ZPaVkTnTXIlEUyHTE7Utd0tiqRhW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Kk99A7gQ2ezDmjpGkadLSYMUbpiPPCDd&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1LK6uWHlGwCkxbULfHvNnDjm7aqyIxMZx",
      "description": "Crafted in heavy pure soft fox georgette colourfull padding, this anarkali brings together premium fabric and refined detailing. 6.5 meter approx fully flare, styled with 2.3 meter pure soft fox georgette colorfull padding with boader fancy lace work, kurta length 48 49 inch approx. Available in: DARKPINK,ONIONPINK. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT FOX GEORGETTE COLOURFULL PADDING"
        },
        {
          "label": "Silhouette",
          "value": "6.5 meter approx fully flare"
        },
        {
          "label": "Dupatta",
          "value": "2.3 METER PURE SOFT FOX GEORGETTE COLORFULL PADDING WITH BOADER FANCY LACE WORK"
        },
        {
          "label": "Length",
          "value": "48 49 inch approx"
        },
        {
          "label": "Available Colors",
          "value": "DARKPINK,ONIONPINK"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT FOX GEORGETTE COLOURFULL PADDING",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb300",
      "sku": "SBLKB300",
      "title": "Crunchy Silk Fabric Embroidery Sequence Jari Work,top Set,bell Bottom Pent Tunic",
      "category": "Tunics",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": true,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "OFFWHITE,WINE",
      "mainImage": "https://drive.google.com/thumbnail?id=1Vl7CEc4vaIso5CLKvCDKhpwZ76mnGlKu&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1Vl7CEc4vaIso5CLKvCDKhpwZ76mnGlKu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1P_IH83Sj9OHnfp2kaUuIHMUuH9wU8Qn6&sz=w1000",
        "https://drive.google.com/thumbnail?id=183V7dJy65Zv8cvliilg_eIJbTiPNwlmi&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JMV0358NlgSbjt8VqLY_KHGjgP3I5C1D&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MtV-x7khfoIlI3gW9j4_i_Bpvy7NuntG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1oW2qL0_majaVo1U4jIW3NQKz636HqYjm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QucxsNV2Jw_O6pGDEPl8wtykSRSKij6n&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UY5JrdC0Ux0UT-4WvusB595ylRleExnM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZUwyZrpgrDjkrrdGJMsv0rAPxLE1sZmJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1oWaj_bUL4KIHutiq0XUQrqjAlVUl_UYW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dOr8OJ9uDxs5HIIXQzIwKOqY08Hv6ukc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1CxkptldZ77y3fPGQ5swJ13Ro7U0NZ2Q6&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1alVcsNC4yuVsITWVcfx5j-btb4m41xIq",
      "description": "Crafted in crunchy silk fabric with embroidery sequence and jari work with back side fancy dori pattern, this tunic brings together premium fabric and refined detailing. Styled with 2.2 meter crunchy embroidery sequence and jari work boader fancy lace work. Available in: OFFWHITE,WINE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "CRUNCHY SILK FABRIC WITH EMBROIDERY SEQUENCE AND JARI WORK WITH BACK SIDE FANCY DORI PATTERN"
        },
        {
          "label": "Dupatta",
          "value": "2.2 METER CRUNCHY EMBROIDERY SEQUENCE AND JARI WORK BOADER FANCY LACE WORK"
        },
        {
          "label": "Bottom",
          "value": "PENT"
        },
        {
          "label": "Available Colors",
          "value": "OFFWHITE,WINE"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "CRUNCHY SILK FABRIC WITH EMBROIDERY SEQUENCE AND JARI WORK WITH BACK SIDE FANCY DORI PATTERN",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb301",
      "sku": "SBLKB301",
      "title": "Crunchy Silk Fabric Embroidery Sequence Jari Work,top Set,bell Bottom Pent Tunic",
      "category": "Tunics",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1I7DtAZJEf3q8HVe7u9pLpJgQbJr5tw2U&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1I7DtAZJEf3q8HVe7u9pLpJgQbJr5tw2U&sz=w1000",
        "https://drive.google.com/thumbnail?id=16AcsBCxtG8kJxWw7ufX2CyZCY2ezlkxF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1O452atVsglQrWN08ikQAuLPANmyvh92l&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wmmm310d5x_1uUobJ_7_8n49_52HAkcP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VfNML6J4w7Q1XuFbGgD6yEsx2UBfDIzI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Cd4NleUcSIuvfekcbDFS85o_UP20k-9U&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JP1UQJsxTIA2ZftqlDDVGYtXzIEjrvzj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sBbKdbf4JM6unKEcfrhDxwdUx3jPXvIU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MQAbZMfob7-JsGCyfARQDXbYeR0uBVwu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cEE4hjv1DWDOmiZmDGSPRafMjN4EN8yE&sz=w1000",
        "https://drive.google.com/thumbnail?id=1XL5vFf8lhxla-1Z7DYVZ5hhlRnpTc7Nw&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Dv0hxiPp5PNetE41YBr-nxg_jzzL2lUj&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1d931GZNcm8NppheeR-GlLh1F7VzpjXoX?usp=drive_link",
      "description": "Crafted in crunchy silk fabric with embroidery sequence and jari work with back side fancy dori pattern, this tunic brings together premium fabric and refined detailing. Styled with 2.2 meter crunchy embroidery sequence and jari work boader fancy lace work. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "CRUNCHY SILK FABRIC WITH EMBROIDERY SEQUENCE AND JARI WORK WITH BACK SIDE FANCY DORI PATTERN"
        },
        {
          "label": "Dupatta",
          "value": "2.2 METER CRUNCHY EMBROIDERY SEQUENCE AND JARI WORK BOADER FANCY LACE WORK"
        },
        {
          "label": "Bottom",
          "value": "PENT"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "CRUNCHY SILK FABRIC WITH EMBROIDERY SEQUENCE AND JARI WORK WITH BACK SIDE FANCY DORI PATTERN",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb297",
      "sku": "SBLKB297",
      "title": "Eid 🌙 Special Farshi Salwar Suit Crunchy Silk Fabric Siroski Work,top Set,salwar Tunic",
      "category": "Tunics",
      "price": 1660,
      "originalPrice": 3090,
      "discount": "46% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "LAVENDER, PINK,SKY",
      "mainImage": "https://drive.google.com/thumbnail?id=1gdJmB7MgjtyLuInP5UEQFdqewHD-wfkQ&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1gdJmB7MgjtyLuInP5UEQFdqewHD-wfkQ&sz=w1000",
        "https://drive.google.com/thumbnail?id=12XYTM8TM3BImYoVCNFQjxF82A_u27Xmr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GrG_pI80IyOZYAYqz6YvgP6T-iZPrJpA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Kw3teMUUQZ_KTXlHCLyr1Gz-ZYAwAA4-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vzjSEgZNFIfXAVp9KUuW6y8y-gzytu-n&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KaOIUfdHh8YJ00LsXfNYriuXK7W-Icvq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SHK1ndEhEWlfaNkVEq0MUCeq5TsPAKp8&sz=w1000",
        "https://drive.google.com/thumbnail?id=13MiZG2OmptKn3dNPZZDeSTz0KSxJU2My&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hxEPwoPMcEi_L2wY_oUU9g4RdXTZCDVN&sz=w1000",
        "https://drive.google.com/thumbnail?id=11MZhyv1QxG35cwG3tOusaZEK1xObEff0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Skd8gi2md4mTr8IvJKrGoXFsysWU2oqu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_lRGGo6x8M2lDY52Fpf1BWxWpPpwyR3r&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1cKfjdf7_gT1TXAfH3-cchRBaDqytMXs4",
      "description": "Crafted in crunchy silk fabric with siroski work,with fancy lace work, this tunic brings together premium fabric and refined detailing. Styled with 2.2 mtr crunchy silk with siroski work,boader fancy lace work. Available in: LAVENDER, PINK,SKY. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "CRUNCHY SILK FABRIC WITH SIROSKI WORK,WITH FANCY LACE WORK"
        },
        {
          "label": "Dupatta",
          "value": "2.2 MTR CRUNCHY SILK WITH SIROSKI WORK,BOADER FANCY LACE WORK"
        },
        {
          "label": "Available Colors",
          "value": "LAVENDER, PINK,SKY"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "CRUNCHY SILK FABRIC WITH SIROSKI WORK,WITH FANCY LACE WORK",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb291",
      "sku": "SBLKB291",
      "title": "Georgette Anarkali Gown Duppta Anarkali",
      "category": "Anarkalis",
      "price": 1800,
      "originalPrice": 3300,
      "discount": "45% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "MAUVEPINK,WINE YELLOW",
      "mainImage": "https://drive.google.com/thumbnail?id=1ps_EZ8G8rpqsde-Tnb00CLqaITj7yBFP&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1ps_EZ8G8rpqsde-Tnb00CLqaITj7yBFP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qJAgXzeBac6ydQZIRk8tnYuyXszMKioV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jh3LB-J5pfFKsGrExs2PnGM3qWB84pSW&sz=w1000",
        "https://drive.google.com/thumbnail?id=15xZFe5TmBMm_B3u-PyShWUzuRIEAoE7x&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xY0SnhPogyOgBOlqsYyyKClhdMUapaHm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1weZObz9j5xFQ0_teh7INyKvLBOEYatpE&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yj3j1m2Goqeyn0ftR58g38iIJPRob_Iq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Iz50J7z4dpqAhDjDiHnj1PcKYHzYOmpR&sz=w1000",
        "https://drive.google.com/thumbnail?id=1C_rM8NXOzlE07svU2OrJxqH_a-l7yHDi&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TJuBjqPaTGvAl7rTFgCOWl4muUySH3gz&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Q4BEs5vN01ZUcPbEyWA7GeR3-n-K0L33&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mYHQxku2vl3AedPmPG1erujpVJXPGo6T&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1WyBJWN5xQyY25qHZw5rSqQFgXDoay7pl",
      "description": "Crafted in heavy pure fox blooming georgette 7 meter plus flare, this anarkali brings together premium fabric and refined detailing. Available in: MAUVEPINK,WINE YELLOW. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE FOX BLOOMING GEORGETTE 7 METER PLUS FLARE"
        },
        {
          "label": "Available Colors",
          "value": "MAUVEPINK,WINE YELLOW"
        },
        {
          "label": "Sizes",
          "value": "XS(34) S(36) M(38) L(40) XL(42) AND XXL(44) FULLY STTICHED COMPLETE"
        },
        {
          "label": "Weight",
          "value": "800 gram"
        }
      ],
      "fabric": "HEAVY PURE FOX BLOOMING GEORGETTE 7 METER PLUS FLARE",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb299",
      "sku": "SBLKB299",
      "title": "Pure Fox Georgette Fabric Fully Flare Anarkali Koti,dupatta Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=15sJdNT0DVwyfMq1F7xl8d_qq-tVw1ImK&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=15sJdNT0DVwyfMq1F7xl8d_qq-tVw1ImK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1q-DEmin4r2X6LN6US55LIBm4GSPiVgQl&sz=w1000",
        "https://drive.google.com/thumbnail?id=1IESIllbBgmTcdjwpNghF0fgL6MQ-W3sT&sz=w1000",
        "https://drive.google.com/thumbnail?id=11L4u7wbtoyXeM2lbUzZZfGkVxcUoGJkI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yL7cyGiICzAHM26Y5BF3KwvqgSxskUx8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1pEW2anf5JfFqhe9RbKZw6kPg7xDuPvNC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HEO_J3kHGi6BrgA3zN5_Wl0hiN58SYRA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1G5lmZcMLTTUHPl1OvvKE5zeGajj2m6BC&sz=w1000",
        "https://drive.google.com/thumbnail?id=12yDCHMr3JKV0-5xJIq4t8IkkFnqWZf5j&sz=w1000",
        "https://drive.google.com/thumbnail?id=1G4a6AYYKXsuYtEFXgluVjzZqML7632_w&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1nepXCGrChSMNVhbnYD-K2noGDKkAniAA",
      "description": "Crafted in heavy pure fox georgette fabric, this anarkali brings together premium fabric and refined detailing. 4 meter fully flair anarkali gown, styled with set,pent, kurta length 48 49 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE FOX GEORGETTE FABRIC"
        },
        {
          "label": "Silhouette",
          "value": "4 METER FULLY FLAIR ANARKALI GOWN"
        },
        {
          "label": "Dupatta",
          "value": "SET,PENT"
        },
        {
          "label": "Length",
          "value": "48 49 inch approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE FOX GEORGETTE FABRIC",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb293",
      "sku": "SBLKB293",
      "title": "Pure Romansilk Chanderi Fabric Fully Flare Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "RUST",
      "mainImage": "https://drive.google.com/thumbnail?id=1UPbNoquNpkgiYvI7KWZ0x-gmKKEetK9-&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1UPbNoquNpkgiYvI7KWZ0x-gmKKEetK9-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qPAaLGv0AjowmhjfZqTD5bFhtpKWnXS2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jjRzmYD3WetyiJbc1gI00ii1_RPDzuVW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yD0AogoCI-v3uomgm17TamxhERpw1G-k&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rF8COU3c_UzI3dtSaF5o7xW819SIQ2-f&sz=w1000",
        "https://drive.google.com/thumbnail?id=14lFyQX2iijV5Utl1zoBi2vUC1Quqe6yz&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Lu8uTobDwCNv0t-VcOEuxqUm3i4UqgHO&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LgCu33WjKSU85d4Ol3A1zvFokA0pPQUx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hDtkDtVx3QH4QNLdfdYFGBQ2S1AIdErj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Px6TW54V-_OzY7dc43AQlAhtZIumCGng&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FqR06pC8WyRA2yo60bg4yCMGd9Gp4AHw&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cOhr-9_TXme7Cu-VvzT5HIhvGfxjTXHR&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1fMnHV_fVPlPlNRaZ4X5U6tVMcM1FiYnW",
      "description": "Crafted in heavy pure romansilk chanderi fabric, this anarkali brings together premium fabric and refined detailing. 4 meter plus fully flare, kurta length 48 inch approx. Available in: RUST. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE ROMANSILK CHANDERI FABRIC"
        },
        {
          "label": "Silhouette",
          "value": "4 meter plus fully flare"
        },
        {
          "label": "Length",
          "value": "48 inch approx"
        },
        {
          "label": "Available Colors",
          "value": "RUST"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE ROMANSILK CHANDERI FABRIC",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb298",
      "sku": "SBLKB298",
      "title": "Beautiful Pure Chinon Silk Fabric Straight Fit Kurta Set,trousers Suit Set",
      "category": "Suit Sets",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1b2Js14KTQUNuWD1kwPld9ByNK6dVGHGP&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1b2Js14KTQUNuWD1kwPld9ByNK6dVGHGP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1alW0kbYpV443PPOr2Ko2FC8F-bNZyhs_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iMZb-Yzxufi1FhpmGWWqHAKdPQHGbo3u&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qgOlmtjU0uZuv08DLs_v8_jX69wQGWRq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1pKkyKDL3ffcas7Mqyl9H3VdsBmKo2DSR&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DMbYPGtOMBQLwD_W5VYjO7R1WQ36ekPz&sz=w1000",
        "https://drive.google.com/thumbnail?id=16IpRJKoe4nVPlRH1HPXwOS4aOZFu09A5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FV9j1O_3BWgzfwb2rJwUwoXlxusV860c&sz=w1000",
        "https://drive.google.com/thumbnail?id=1y_EadLfnNY4sxfKZ8LAbsq5Wjb0wp_CJ&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1YOFdl3Wc8JOOzgATdbcN81EZ2K7iPe7h",
      "description": "Crafted in pure chinon silk fabric with beautiful embroidery sequence,jari work on yoke,sleeves,bottom work, this suit set brings together premium fabric and refined detailing. Styled with 2.2 meter pure chinon silk fabric with embroidery sequence,jari work boader fancy lace work, kurta length 40 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "PURE CHINON SILK FABRIC WITH BEAUTIFUL EMBROIDERY SEQUENCE,JARI WORK ON YOKE,SLEEVES,BOTTOM WORK"
        },
        {
          "label": "Dupatta",
          "value": "2.2 METER PURE CHINON SILK FABRIC WITH EMBROIDERY SEQUENCE,JARI WORK BOADER FANCY LACE WORK"
        },
        {
          "label": "Length",
          "value": "40 INCH approx"
        },
        {
          "label": "Bottom",
          "value": "WORK"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED WITH FANCY EMBROIDERY SEQUENCE AND JARI WORK"
        }
      ],
      "fabric": "PURE CHINON SILK FABRIC WITH BEAUTIFUL EMBROIDERY SEQUENCE,JARI WORK ON YOKE,SLEEVES,BOTTOM WORK",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb279",
      "sku": "SBLKB279",
      "title": "Beautiful Pure Chinon Silk Fabric Straight Fit Kurta Set,trousers Suit Set",
      "category": "Suit Sets",
      "price": 1860,
      "originalPrice": 3390,
      "discount": "45% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1lq5KYSaZzdYSJ8LE7_-r0LWKF3JL3D_l&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1lq5KYSaZzdYSJ8LE7_-r0LWKF3JL3D_l&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AyUZtQsXi1nAMg-oeU6znIeiKxrQp6wE&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rgwMYRIE-jErhXq3d-LN8V7s1CGsj6Sy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xyBrp2P5PFhbMQTfRrK3LfgIpDrg6vRw&sz=w1000",
        "https://drive.google.com/thumbnail?id=11veRuFw-1DVnpHRJH2X-621rWUGb8Acl&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mwnp9-9dFdaGBOehbXB1vVjb8K_k65O1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1D2iPkFdWJ1sJvzJ-XJakFfaR1rUMQjad&sz=w1000",
        "https://drive.google.com/thumbnail?id=1D2zh0wHshg2--W5OXrcQjf7Vn6r4etcG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JZkZE1Cdr44G3SGa3gAmw7hxZPVxLcUg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eAiqBQHYek7A0fMIxvDlAg9YGUMlUMTV&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1bca8KSxPMq-hXMsNBg4hXu3Wj3kOi2DJ",
      "description": "Crafted in pure chinon silk fabric with beautiful embroidery sequence,jari work on yoke,sleeves,bottom work, this suit set brings together premium fabric and refined detailing. Styled with 2.2 mtr pure chinon silk fabric with embroidery sequence,jari work boader fancy lace work, kurta length 40 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "PURE CHINON SILK FABRIC WITH BEAUTIFUL EMBROIDERY SEQUENCE,JARI WORK ON YOKE,SLEEVES,BOTTOM WORK"
        },
        {
          "label": "Dupatta",
          "value": "2.2 MTR PURE CHINON SILK FABRIC WITH EMBROIDERY SEQUENCE,JARI WORK BOADER FANCY LACE WORK"
        },
        {
          "label": "Length",
          "value": "40 INCH approx"
        },
        {
          "label": "Bottom",
          "value": "WORK"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "PURE CHINON SILK FABRIC WITH BEAUTIFUL EMBROIDERY SEQUENCE,JARI WORK ON YOKE,SLEEVES,BOTTOM WORK",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb264",
      "sku": "SBLKB264",
      "title": "Pure Fox Georgette Laheriya Print Fabric Fully Flair Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 1800,
      "originalPrice": 3300,
      "discount": "45% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "RAMA, ROYALBLUE,RANIPINK BLACK,BOTTLEGREEN",
      "mainImage": "https://drive.google.com/thumbnail?id=1vIdljDby1N0MNQjQ-6mH0Onb7W93eWnK&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1vIdljDby1N0MNQjQ-6mH0Onb7W93eWnK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PNDdPyW9vEnfYJityGlmBuO3ZpwN35tX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JO33fGNlK3wEgx8ZtgYG2ylbuGB6a0ys&sz=w1000",
        "https://drive.google.com/thumbnail?id=1aGSs8wfgWFKZ15jzIC1TjxSGGN-6XGdw&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KeXOdo5QuL4xK17qRQwHJU3W3y0GPVap&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PFZ1x4jDoI8MTKht76wuFXtRFKSiv3VF&sz=w1000",
        "https://drive.google.com/thumbnail?id=121-BN8yVC6e-fqDnlO7k840QwitBrFOG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ee51cak-5vGyEk4n7h6mdSv3cwOLRWDR&sz=w1000",
        "https://drive.google.com/thumbnail?id=1a0GYHy0r9Nt2YFAycbwoS2c4E5R7fBoH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dmPJcOcr8YNoOvsxwQtLl-zix_T7VN8y&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hc1zu0KOULldNxThnjBOWIW3uy6zZJFI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1m3KzTQw0z0SYk4xaqMNU-WQrw2bNb_Al&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1n2BzLBDjoCj-iKhsfLua0vDiHUeHVpfj",
      "description": "Crafted in heavy pure fox georgette laheriya print, this anarkali brings together premium fabric and refined detailing. Styled with 2.3 mtr pure fox laheriya print with boader triangle lace work, kurta length 48 inch approx. Available in: RAMA, ROYALBLUE,RANIPINK BLACK,BOTTLEGREEN. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE FOX GEORGETTE LAHERIYA PRINT"
        },
        {
          "label": "Dupatta",
          "value": "2.3 MTR PURE FOX LAHERIYA PRINT WITH BOADER TRIANGLE LACE WORK"
        },
        {
          "label": "Length",
          "value": "48 inch approx"
        },
        {
          "label": "Available Colors",
          "value": "RAMA, ROYALBLUE,RANIPINK BLACK,BOTTLEGREEN"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE FOX GEORGETTE LAHERIYA PRINT",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb296",
      "sku": "SBLKB296",
      "title": "Pure Soft Crunchy Silk Fabric Top,sharara Dupatta Tunic",
      "category": "Tunics",
      "price": 2800,
      "originalPrice": 4800,
      "discount": "42% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1WXAGCcikFyHsbxYBUgrgA6ihFa6fYcaW&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1WXAGCcikFyHsbxYBUgrgA6ihFa6fYcaW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nLQxPDBGvIlSVXQAlghQdAejumCHKk40&sz=w1000",
        "https://drive.google.com/thumbnail?id=12E-AbfDWJe_uZ9q0bK3hP60X8DYgl1YN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bN8-o4C1zRQNJttmQ2vTihu81IeZoECC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cOwHOLh19Sr45cfUc72xK_wNIZh2B516&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BeSiXV8WbNzb4K7VJEKkwBsswNLRuykU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qXqTQYV0FxujOp41LFF7Mm75pZ2DaoM_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1g6-4S4qI_CjT5Qw_ENPolPqzTYqPBzoR&sz=w1000",
        "https://drive.google.com/thumbnail?id=1f_7mhhCg5vMTd5N-cSEzI8t44I9K3cNM&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1v3CSuNFiMxa0_PCHVVQCEk4HebGkPS7g",
      "description": "Crafted in heavy pure soft crunchy silk fabric with fancy embroidery dori,jari work, this tunic brings together premium fabric and refined detailing. Styled with set, kurta length 36 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT CRUNCHY SILK FABRIC WITH FANCY EMBROIDERY DORI,JARI WORK"
        },
        {
          "label": "Dupatta",
          "value": "SET"
        },
        {
          "label": "Length",
          "value": "36 inch approx"
        },
        {
          "label": "Bottom",
          "value": "WITH DUPATTA SET"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT CRUNCHY SILK FABRIC WITH FANCY EMBROIDERY DORI,JARI WORK",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb295",
      "sku": "SBLKB295",
      "title": "Pure Soft Crunchy Silk Fabric Top,sharara Dupatta Tunic",
      "category": "Tunics",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "TEALBLUE,DARKRANI",
      "mainImage": "https://drive.google.com/thumbnail?id=1LCmaISVhPx8GyXlJtbrdMevT6JDQ4bYh&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1LCmaISVhPx8GyXlJtbrdMevT6JDQ4bYh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1P5ffRREj3tV1Qz-1DvmRfjcjeqWIHQUg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DxUkhzUz99pfbzRpgbkE8J0HQXyN5TjF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jhAYR1yZjLbqFaSvprynX6FRNsSD0PzJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Av7J4NXTFQ92lSClcYriCj7tKhZD4o_A&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yMX8rvt2oAnFOFhXtqtiFPF2HuiFaGgI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1uMMQSIh15jhigNOuOir2719fIC1C3Q-V&sz=w1000",
        "https://drive.google.com/thumbnail?id=18s2T5ClJ20HUQrk59ewM2xI4noQxJD53&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QJJhpCWvGKHWA5qwrrzrwUyMfsnAzFqu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1X71rV4RONz6C1pO7yH1_mZUYVNV2z3y1&sz=w1000",
        "https://drive.google.com/thumbnail?id=14XkRO9poqvimSBXBwUBrfM3z0Ru7zYQD&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sJUtTFztT3IXKMGFPQusPiVJDJhcqWaw&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1bdcmJ5NS5OWB8rd00Dgf3ph--arLf-kB",
      "description": "Crafted in heavy pure soft crunchy silk fabric with fancy embroidery sequence,thread and jari work, this tunic brings together premium fabric and refined detailing. Styled with set, kurta length 38 inch approx. Available in: TEALBLUE,DARKRANI. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT CRUNCHY SILK FABRIC WITH FANCY EMBROIDERY SEQUENCE,THREAD AND JARI WORK"
        },
        {
          "label": "Dupatta",
          "value": "SET"
        },
        {
          "label": "Length",
          "value": "38 inch approx"
        },
        {
          "label": "Bottom",
          "value": "WITH DUPATTA SET"
        },
        {
          "label": "Available Colors",
          "value": "TEALBLUE,DARKRANI"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT CRUNCHY SILK FABRIC WITH FANCY EMBROIDERY SEQUENCE,THREAD AND JARI WORK",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb294",
      "sku": "SBLKB294",
      "title": "Pure Roman Shimmer Silk Fabric Fully Flare Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2500,
      "originalPrice": 4350,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=12CLYTG4MytmbRjVqg4LxLzRYSmVHoyCC&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=12CLYTG4MytmbRjVqg4LxLzRYSmVHoyCC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1pQ-rEclNjDX_rMnnhYRb7iP2CyFJfgnc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1s_4Xj9LsRIRaFrilXd-yhpU8j_k0kB5k&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iRZtpGrE6Uu9N0HIf46u23jiX3IjM3-n&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VbAC9QE3HRHvTz-zfkzPL_guJVDPXbXZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SPLuX_AxY8FQfF_PJcC36RuCJJf9hsD0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eJMpoRCYr9ZuAj0JGgJjWE5VfcMOPoAI&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1lV9C95cXkmhZVkshNrDv8NvKg_N_OKrv",
      "description": "Crafted in heavy pure roman shimmer, this anarkali brings together premium fabric and refined detailing. 4 meter full flare full kali pattern anarkali, styled with backside fancy neck work, kurta length 48 49 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE ROMAN SHIMMER"
        },
        {
          "label": "Silhouette",
          "value": "4 METER FULL FLARE FULL KALI PATTERN ANARKALI"
        },
        {
          "label": "Dupatta",
          "value": "BACKSIDE FANCY NECK WORK"
        },
        {
          "label": "Length",
          "value": "48 49 inch approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE ROMAN SHIMMER",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb292",
      "sku": "SBLKB292",
      "title": "Fox Georgette Floral Print Anarkali Gown Duppta Anarkali",
      "category": "Anarkalis",
      "price": 1700,
      "originalPrice": 3150,
      "discount": "46% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1g9U2Ncb26znMAa-o2oo_Vj6-moHHLY_d&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1g9U2Ncb26znMAa-o2oo_Vj6-moHHLY_d&sz=w1000",
        "https://drive.google.com/thumbnail?id=1IN919T2h1xA-sng0jkq4wVt_MQHKGWLn&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_THpWVLTlzhd01mD3PkdxHraAylVhzXW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cATWmaeLeUWr4c_bD9FtyVJKLzKXTTc3&sz=w1000",
        "https://drive.google.com/thumbnail?id=1a4eCpcCo81TboFNyfQFUc83VgPtkCLtO&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HCi9S_5NzmlbXTX43jlpjVW23bpNU8up&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bodxhyLDPAVWHWjIo3X16ow0kw5snHQA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bnSh-S0klEG-3eRnccfNV2sd-b_VcnXI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Kv8U5yGLVKYmWbptwgCbvnReAp5PL9dS&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/17vYIQ3opsnBtAX3WcPFTkLgdBZ6M7p4W",
      "description": "Crafted in heavy pure fox georgette floral print 7 meter plus flare anarkali, this anarkali brings together premium fabric and refined detailing. Styled with 2.2 meter pure fox georgette floral printed boader fancy lace triangle work. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE FOX GEORGETTE FLORAL PRINT 7 METER PLUS FLARE ANARKALI"
        },
        {
          "label": "Dupatta",
          "value": "2.2 METER PURE FOX GEORGETTE FLORAL PRINTED BOADER FANCY LACE TRIANGLE WORK"
        },
        {
          "label": "Sizes",
          "value": "XS(34) S(36) M(38) L(40) XL(42) AND XXL(44) FULLY STTICHED COMPLETE"
        },
        {
          "label": "Weight",
          "value": "800 gram"
        }
      ],
      "fabric": "HEAVY PURE FOX GEORGETTE FLORAL PRINT 7 METER PLUS FLARE ANARKALI",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb285",
      "sku": "SBLKB285",
      "title": "Pure Romansilk Chanderi Fabric Fully Flare Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 1860,
      "originalPrice": 3390,
      "discount": "45% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "RAMA, BLACK,YELLOW,MAHENDI,MAROON,RANIPINK",
      "mainImage": "https://drive.google.com/thumbnail?id=1cFNomvVXHKRZ_s-x0aeJ6kgtmF15TgVx&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1cFNomvVXHKRZ_s-x0aeJ6kgtmF15TgVx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZtKQi8Tkx3RCASuuxSQ-jtw6YFpGsxhk&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VixVDIwUxwKpbf9HWDAfQUVK_yG8FmGS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VSGUbmmZG5lL88ArNugngvQx6zYfF_us&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jGDsHbcP6ljHA0UyWWhzBuXx6JTl-6Ip&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BeOrzKUkw6EKe2F55yPmskm4l_h6Wkz4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1r0KKcANheJcE5YeeiPBlKOGkh0TtjYV-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1COCONbEcb_1HNi4Q88vLa09AXeMaQRXb&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BBLV0aOPIaGwCoKZVZjn95_hOGRbYEvI&sz=w1000",
        "https://drive.google.com/thumbnail?id=112oghqd3m1GCu76OaSWvrq-K736ZdBZv&sz=w1000",
        "https://drive.google.com/thumbnail?id=1riP1Fjsp6CcH3fggAc-fFy8Tckq6i3on&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Oj7hU5_ruRYQlcLKzfiNI5v1UvNoIiHf&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1rioilYyqrMtljgD_pB54-ldh7tPrK2Yl",
      "description": "Crafted in heavy pure romansilk chanderi fabric, this anarkali brings together premium fabric and refined detailing. 4 meter plus fully flare, kurta length 48 inch approx. Available in: RAMA, BLACK,YELLOW,MAHENDI,MAROON,RANIPINK. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE ROMANSILK CHANDERI FABRIC"
        },
        {
          "label": "Silhouette",
          "value": "4 meter plus fully flare"
        },
        {
          "label": "Length",
          "value": "48 inch approx"
        },
        {
          "label": "Available Colors",
          "value": "RAMA, BLACK,YELLOW,MAHENDI,MAROON,RANIPINK"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE ROMANSILK CHANDERI FABRIC",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb273",
      "sku": "SBLKB273",
      "title": "Upcoming Festival Season Beautiful Pure Blooming Rangoli Silk Fabric Straight Fit Kurta Suit Set",
      "category": "Suit Sets",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "WINE,MAROON",
      "mainImage": "https://drive.google.com/thumbnail?id=1HUFII_vjUiyGzZJknrCa5vpwW-JAVfbr&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1HUFII_vjUiyGzZJknrCa5vpwW-JAVfbr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Uo0NDZ9M6ywyca88F1kvPzfaEiTZI86Z&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UtumVVAHkiJ3HAlxI25e5zL-x-6-Qmrr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VWIO1y-btMl99QZh4jVS9wsUR358xIyH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NEwFqbSsxT7Qq1Gh9mssOy7PcECiSHX8&sz=w1000",
        "https://drive.google.com/thumbnail?id=14k5qVkC21s3qbT56kPkGIlJJyZ4mf6Gx&sz=w1000",
        "https://drive.google.com/thumbnail?id=11PLFA6hynGP1H1wZ3cImDopk3zAferoP&sz=w1000",
        "https://drive.google.com/thumbnail?id=10b8OE6Sh8Rtg70WdCNqz8TNAEJ0L31E8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1uaktNEMW_hOt0Ol27UG-gm3xzdUKifj7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iTIRcJMHBuzYHW-I2xdpYSR8ZUo0lNA3&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FypUcoercpIgQHx8x94SHJrOyLzGpoRC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ACFqifT6GSRb9niMIdIKfqxPm63WotxC&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1YL-Rj2niys2fd0PxThm2lCqgJssPAzia",
      "description": "Crafted in pure blooming rangoli silk fabric with beautiful embroidery sequence and thread work on yoke,sleeves,bottom lace work,round neckline, this suit set brings together premium fabric and refined detailing. Styled with 2.2 meter pure blooming rangoli silk fabric with embroidery sequence and thread work,boader fancy lace work, kurta length 42 43 inch approx. Available in: WINE,MAROON. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "PURE BLOOMING RANGOLI SILK FABRIC WITH BEAUTIFUL EMBROIDERY SEQUENCE AND THREAD WORK ON YOKE,SLEEVES,BOTTOM LACE WORK,ROUND NECKLINE"
        },
        {
          "label": "Dupatta",
          "value": "2.2 METER PURE BLOOMING RANGOLI SILK FABRIC WITH EMBROIDERY SEQUENCE AND THREAD WORK,BOADER FANCY LACE WORK"
        },
        {
          "label": "Length",
          "value": "42 43 INCH approx"
        },
        {
          "label": "Bottom",
          "value": "LACE WORK,ROUND NECKLINE"
        },
        {
          "label": "Available Colors",
          "value": "WINE,MAROON"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "PURE BLOOMING RANGOLI SILK FABRIC WITH BEAUTIFUL EMBROIDERY SEQUENCE AND THREAD WORK ON YOKE,SLEEVES,BOTTOM LACE WORK,ROUND NECKLINE",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb261",
      "sku": "SBLKB261",
      "title": "Pure Soft Organja Silk Fabric Fully Flair Kali Pattern Canvas Patta ,pent Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "BLACK,PINK,WINE,RAMA",
      "mainImage": "https://drive.google.com/thumbnail?id=1VlJnDx8geQMrZ2STAaze0T69WIZQTp2r&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1VlJnDx8geQMrZ2STAaze0T69WIZQTp2r&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cFmRrf5qV6ZWvUdCFIcoM9mt8T_UQOwd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MWpiagj5ZNmrJ4obLFNd7uFIm4scTnFp&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NClFLqKXBrGV-kZ7qHgluSlGzDFlp1sX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1a9nSsGuT0-YPy7FGz2nKPxfQGlfBeV0q&sz=w1000",
        "https://drive.google.com/thumbnail?id=1kjKyBXqsabax-xA4jYiEUQyjbSVfBue5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1w8MBz-N5hC1UrA27bDCACkiHqqxOLfik&sz=w1000",
        "https://drive.google.com/thumbnail?id=18jH5SQoimHdW8bW66n16VK756Xde0lpb&sz=w1000",
        "https://drive.google.com/thumbnail?id=15wTzSc45XswqVuDsDNWFWsjucv_Pzya4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zjrhAjfkuZIXZK5RivNtjPTSJ55HZneH&sz=w1000",
        "https://drive.google.com/thumbnail?id=15tl48JEsOvrsaDeDrdNUT_3O9cLxFa3L&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lx56Cz2j6LhvpZiHQxaCajbC8_nBfC94&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1ZSQv-lVRDBAiBjZl3DgRpFamLATPHeO3",
      "description": "Crafted in heavy pure soft organja silk print, this anarkali brings together premium fabric and refined detailing. 4 mtr approx flair with kali cut attached complete with canvas patta, styled with 2.3 mtr pure soft organja silk with boader gota patti lace work, kurta length 48 49 inch approx. Available in: BLACK,PINK,WINE,RAMA. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT ORGANJA SILK PRINT"
        },
        {
          "label": "Silhouette",
          "value": "4 MTR approx FLAIR WITH KALI CUT ATTACHED COMPLETE WITH CANVAS PATTA"
        },
        {
          "label": "Dupatta",
          "value": "2.3 MTR PURE SOFT ORGANJA SILK WITH BOADER GOTA PATTI LACE WORK"
        },
        {
          "label": "Length",
          "value": "48 49 INCH approx"
        },
        {
          "label": "Available Colors",
          "value": "BLACK,PINK,WINE,RAMA"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        },
        {
          "label": "Weight",
          "value": "900 GRAM approx"
        }
      ],
      "fabric": "HEAVY PURE SOFT ORGANJA SILK PRINT",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb290",
      "sku": "SBLKB290",
      "title": "Pure Roman Chanderi Silk Fabric Fully Flare Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2400,
      "originalPrice": 4200,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1qj_zB2GfUil5XeZAqUdtFpDNjiMfLBaN&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1qj_zB2GfUil5XeZAqUdtFpDNjiMfLBaN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TlAbTxWQOzP5MTXN2mwX6o_JcXWxL3CL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HiYO9bZwFfpA7JLevAmZkRi0jO6HKBXQ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NV2ZlU4Ro3W0nkDcSjNL4iM-MXMUhz5O&sz=w1000",
        "https://drive.google.com/thumbnail?id=1S9oXFzXgzb24_1tppg95eBuy4mlj7vm5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZK0XcqsHjvTHKnr0xxk7XPlmaaIeHpqQ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eLSVfT9Dypi6xK9wlE1WtYw0gd55wL0l&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ywE8ZVRTZJYEeBgiOOQdc-wDqZ3VG0Dd&sz=w1000",
        "https://drive.google.com/thumbnail?id=17o1RkiUED2wMIjm09OC1IXlCj0brKeb8&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1FYAN-swmpbIbBXop7a9ifB2TYZGNvL5d",
      "description": "Crafted in heavy pure roman chanderi silk fabric, this anarkali brings together premium fabric and refined detailing. 4 meter full flare anarkali gown, styled with 2.2 meter pure roman chanderi silk fabric beads work and embroidery work fancy boader work, kurta length 48 49 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE ROMAN CHANDERI SILK FABRIC"
        },
        {
          "label": "Silhouette",
          "value": "4 METER FULL FLARE ANARKALI GOWN"
        },
        {
          "label": "Dupatta",
          "value": "2.2 METER PURE ROMAN CHANDERI SILK FABRIC BEADS WORK AND EMBROIDERY WORK FANCY BOADER WORK"
        },
        {
          "label": "Length",
          "value": "48 49 inch approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE ROMAN CHANDERI SILK FABRIC",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb289",
      "sku": "SBLKB289",
      "title": "Pure Roman Chanderi Silk Fabric Fully Flare Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2400,
      "originalPrice": 4200,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1kZEhuCB2YD_mV9NwivmACguO_b2Yzy05&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1kZEhuCB2YD_mV9NwivmACguO_b2Yzy05&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tocE_CMLBUTc9SFgVAbqYKVKgSjvuVlc&sz=w1000",
        "https://drive.google.com/thumbnail?id=15YyISnRUOP4L1cOBqFzL1rzVZFbK8IJX&sz=w1000",
        "https://drive.google.com/thumbnail?id=10L4Z2-16yA9KbO_eKYpUxYAybmewIoK7&sz=w1000",
        "https://drive.google.com/thumbnail?id=121OgyUKUGd07tFE0_sH-ItX63_pYnLBA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Ip8DjTn_IuWPKNaRUgVQhN6FjBOfbW33&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QHqO44ZTSjdWenaQZDQav0EuM7bibc10&sz=w1000",
        "https://drive.google.com/thumbnail?id=16_oGX2_gLMN3ewI3MbCczrFT48p7_JAU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qWLezvOIg9HxOU-eNgI8d9gGV0UwQOQD&sz=w1000",
        "https://drive.google.com/thumbnail?id=1XVZTf7VfVTYImu-nC2dnA4PmYVvs5otS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1kVlKs1h8KhPjoVo2_oR4ODKErz8ftVeq&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1Iv5GjcfUeBymW-4L4BXjA0o67EZnru6o",
      "description": "Crafted in heavy pure roman chanderi silk fabric, this anarkali brings together premium fabric and refined detailing. 4 mtr full flare anarkali gown, styled with 2.2 mtr pure roman chanderi silk fabric beads work and embroidery work fancy boader work, kurta length 48 49 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE ROMAN CHANDERI SILK FABRIC"
        },
        {
          "label": "Silhouette",
          "value": "4 MTR FULL FLARE ANARKALI GOWN"
        },
        {
          "label": "Dupatta",
          "value": "2.2 MTR PURE ROMAN CHANDERI SILK FABRIC BEADS WORK AND EMBROIDERY WORK FANCY BOADER WORK"
        },
        {
          "label": "Length",
          "value": "48 49 inch approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE ROMAN CHANDERI SILK FABRIC",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb288",
      "sku": "SBLKB288",
      "title": "Pure Roman Chanderi Silk Fabric Fully Flare Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2400,
      "originalPrice": 4200,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1sOFD7Z8DhKUOYIeWmNuAs9ssctlSRV6b&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1sOFD7Z8DhKUOYIeWmNuAs9ssctlSRV6b&sz=w1000",
        "https://drive.google.com/thumbnail?id=1m6NQevMJw85a6-q5ngqVpRp93yEeUhVP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UMGFznL5k9ZQOaGXusSsklkKpwHZtmaJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1i3OrgNptdF7DUNnSU-TAlgPOzUe6oWT_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1fdnf1V-RbDdqFsOJODHlCtuO4LJg-O5p&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DL8IiIRJKQAmjM30v6qhEkqgwzdYZMxD&sz=w1000",
        "https://drive.google.com/thumbnail?id=1n5t-o0JdeiqWEV6NpevlXx0rZVyuTevv&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_o9bgqFZ5DT6mIp_z4wQKWwc4qOeD0Gu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1aR4ntGns5djjrO_m1A9zd4UZxLeMqU_f&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZpuPouqUr7LLBGzkM6TlAQ43M6u57c4P&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1OR8mV8JLOlwg2Hq5nHtw_Vky4fWRF4xc",
      "description": "Crafted in heavy pure roman shimmer chanderi silk fabric, this anarkali brings together premium fabric and refined detailing. 4 mtr full flare anarkali gown, styled with 2.2 mtr pure roman chanderi silk fabric handwork beads work and embroidery jari work fancy boader, kurta length 48 49 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE ROMAN SHIMMER CHANDERI SILK FABRIC"
        },
        {
          "label": "Silhouette",
          "value": "4 MTR FULL FLARE ANARKALI GOWN"
        },
        {
          "label": "Dupatta",
          "value": "2.2 MTR PURE ROMAN CHANDERI SILK FABRIC HANDWORK BEADS WORK AND EMBROIDERY JARI WORK FANCY BOADER"
        },
        {
          "label": "Length",
          "value": "48 49 inch approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE ROMAN SHIMMER CHANDERI SILK FABRIC",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb287",
      "sku": "SBLKB287",
      "title": "Crunchy Silk Fabric Siroski Work,fully Flair Kali Pattern Canvas Patta Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1DjIXfVU9AFYAZ_UBnOmMaioNyWFbcLud&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1DjIXfVU9AFYAZ_UBnOmMaioNyWFbcLud&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TG6fxWtlrj_BrgpV26RywddlV8ssH5Bx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1CGP9ZnWHVuUW4LFka82Sqk6gv9eDrQYB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tKX40pNZz0y4Hqa-y9_TpsCJ50OIOcXc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1OCLyMUhzjvBh8sXFctuBnJbN16ppRcsu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jMx94bBVB3g3lX2FqYUmtW1bWVf0x7Pg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1d_I3q_wALbVM3ePOZk-XfmS2dyS0EnGW&sz=w1000",
        "https://drive.google.com/thumbnail?id=105UfaP4tyfxElgT1C1HS8RnL-8qewAmT&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1Y_LxEw5YISOmsbGA4TNQj9AhuurllrIx",
      "description": "Crafted in crunchy silk fabric with siroski work, this anarkali brings together premium fabric and refined detailing. 4 mtr approx flair with kali cut attached complete with canvas patta, styled with 2.3 mtr crunchy silk with siroski work,boader fancy lace work, kurta length 48 49 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "CRUNCHY SILK FABRIC WITH SIROSKI WORK"
        },
        {
          "label": "Silhouette",
          "value": "4 MTR approx FLAIR WITH KALI CUT ATTACHED COMPLETE WITH CANVAS PATTA"
        },
        {
          "label": "Dupatta",
          "value": "2.3 MTR CRUNCHY SILK WITH SIROSKI WORK,BOADER FANCY LACE WORK"
        },
        {
          "label": "Length",
          "value": "48 49 INCH approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "CRUNCHY SILK FABRIC WITH SIROSKI WORK",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb262",
      "sku": "SBLKB262",
      "title": "Pure Orange Chiffon Floral Print Fabric Fully Flair Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 1800,
      "originalPrice": 3300,
      "discount": "45% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "PINK,SKY",
      "mainImage": "https://drive.google.com/thumbnail?id=1Q-dUgnmTaLM-NOHRR_Ghcxm_seu1PZuv&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1Q-dUgnmTaLM-NOHRR_Ghcxm_seu1PZuv&sz=w1000",
        "https://drive.google.com/thumbnail?id=130_83zOAPghWCHrsaq0qMPtX0_VpwW5I&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iPv8H-rkR_dFWpkqSu2cZeyhpzVcQy-9&sz=w1000",
        "https://drive.google.com/thumbnail?id=19XPZLjjHaok83XTUZZuv1KRaWBD9TJLr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1l6gSo9bpLixqexTbeif7NN55Qnfiw83Y&sz=w1000",
        "https://drive.google.com/thumbnail?id=12U49LP7JX293AEQJGm0MD9z1v-Eq9jD_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1A8KgabxwbYSZzMi6aEm4LnLO3MWSKm7k&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bvO75oOJUFFsc1xTemZsFBxa5dT0LtFI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-o8xsVpB10UQzmdpXi7dYERd6patgxRi&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lD_0ePyi-Oi2gJoP3-GSMJpYYH9Cz-hA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vT3pAaK2_kD2gnZWFu8q6RDxFzmiEegF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eklrDNaTfpCOEzkOsvLDtfE_Hbjy4xN9&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/169jVmn7mjE-FYpW4WT6begqwM_796A8b",
      "description": "Crafted in heavy orange chiffon floral print, this anarkali brings together premium fabric and refined detailing. Styled with 2.3 mtr orange chiffon floral print with boader triangle lace work, kurta length 48 inch approx. Available in: PINK,SKY. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY ORANGE CHIFFON FLORAL PRINT"
        },
        {
          "label": "Dupatta",
          "value": "2.3 MTR ORANGE CHIFFON FLORAL PRINT WITH BOADER TRIANGLE LACE WORK"
        },
        {
          "label": "Length",
          "value": "48 inch approx"
        },
        {
          "label": "Available Colors",
          "value": "PINK,SKY"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY ORANGE CHIFFON FLORAL PRINT",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb286",
      "sku": "SBLKB286",
      "title": "Pure Soft Organja Silk Marble Print Fabric Fully Flair Kali Pattern Canvas Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "NAVYBLUE,SKY",
      "mainImage": "https://drive.google.com/thumbnail?id=1NPHYQuqrp2N7DYs53fqrDlOjXmAKyGbU&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1NPHYQuqrp2N7DYs53fqrDlOjXmAKyGbU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1t0h7lSWZgEL_zwWuUluE4Y-nt3WqVG_N&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UV0hBbTfOAdmAit-55nYPgCiI7KTp4ln&sz=w1000",
        "https://drive.google.com/thumbnail?id=1s7--6SMDSu99emlZzXWGHpmacffSpcjz&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HX2C7XxpqD4SahW7AGQRVC9K4cPn35Cz&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vQBbOQbtxPucOl_sC21Tpv1VwYJEXXOn&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TwqqenCeDj-THKj9hKhMBV1EEv1t7I_i&sz=w1000",
        "https://drive.google.com/thumbnail?id=1500sarxmnLo7nnCs2p2lQVtP-jlBoHBH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qRlgCFmXNgLmfarPHx96_SZgUqxTNfT2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1doZ1Lot_772jIGcf_M1V6g4JFHRY5Sbw&sz=w1000",
        "https://drive.google.com/thumbnail?id=103sjKEHyVDF2m4MvW1G_dCqFRy7X-yR0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1c6jLVDO2dUXuEOxmCjDfBJ1Qx4HU-CYX&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1qyhx8STrn0q1Wp-c8N6ZS17Y1GUpN60i",
      "description": "Crafted in heavy pure soft organja silk marble print, this anarkali brings together premium fabric and refined detailing. 4 mtr approx flair with kali cut attached complete with canvas patta, styled with 2.3 mtr pure soft organja silk marble print with boader gota patti lace work, kurta length 48 49 inch approx. Available in: NAVYBLUE,SKY. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT ORGANJA SILK MARBLE PRINT"
        },
        {
          "label": "Silhouette",
          "value": "4 MTR approx FLAIR WITH KALI CUT ATTACHED COMPLETE WITH CANVAS PATTA"
        },
        {
          "label": "Dupatta",
          "value": "2.3 MTR PURE SOFT ORGANJA SILK MARBLE PRINT WITH BOADER GOTA PATTI LACE WORK"
        },
        {
          "label": "Length",
          "value": "48 49 INCH approx"
        },
        {
          "label": "Available Colors",
          "value": "NAVYBLUE,SKY"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT ORGANJA SILK MARBLE PRINT",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb284",
      "sku": "SBLKB284",
      "title": "Pure Orange Chiffon Floral Print Fabric Fully Flair Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 1800,
      "originalPrice": 3300,
      "discount": "45% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=12h8HpPDZ9kg_gJN9oUHRrgNnLb-qsP0K&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=12h8HpPDZ9kg_gJN9oUHRrgNnLb-qsP0K&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bwEN9hz-WSDUfp5eiOOXU2LjBwy_E_xD&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qXGhr0GRLFbm4ccqR7Qmfw4kSoN1Hpyh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AZSxq1TNs_q3yZ_qji5rj1Gx4y0hGObM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yzBFxvarQi3exjLPjT_2PNPZpRHEDXIp&sz=w1000",
        "https://drive.google.com/thumbnail?id=1e04w7tXnDug7hEniKVjYg5NrrTMPSCLc&sz=w1000",
        "https://drive.google.com/thumbnail?id=19jgyfMl9mUdK2uo5RxpP_ZnyUkQbicoq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1g0mFuCEoNrMmVe5_cAs7-xUtzi-Fd9m6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Z7nOKT5tQuWTkuOTP0fWGOxKJry54DJa&sz=w1000",
        "https://drive.google.com/thumbnail?id=1uYdagdEeOMe1eEAWwQwKiCtpt_7OBdpU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SNLjLVQZZeFKNyCSk4Y0h4QiZzgnEAKy&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1fvYFlmblKiSM63YU-ZNLHkIGQzs6GBvd",
      "description": "Crafted in heavy orange chiffon floral print, this anarkali brings together premium fabric and refined detailing. Styled with 2.3 mtr orange chiffon floral print with boader triangle lace work, kurta length 48 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY ORANGE CHIFFON FLORAL PRINT"
        },
        {
          "label": "Dupatta",
          "value": "2.3 MTR ORANGE CHIFFON FLORAL PRINT WITH BOADER TRIANGLE LACE WORK"
        },
        {
          "label": "Length",
          "value": "48 inch approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY ORANGE CHIFFON FLORAL PRINT",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb283",
      "sku": "SBLKB283",
      "title": "Pure Soft Fox Georgette Fabric Fully Flair Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "MAHENDIGREEN, PURPLE,BLACK",
      "mainImage": "https://drive.google.com/thumbnail?id=1ZMPyMJefyAYhCfJXL4hjFBBZElMiOC19&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1ZMPyMJefyAYhCfJXL4hjFBBZElMiOC19&sz=w1000",
        "https://drive.google.com/thumbnail?id=1aJcBaPV6YQu7WJdObwj-hashdco0tcW4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WhGVINdEm-IjllKhNzVKw9ZjRbqlf9fl&sz=w1000",
        "https://drive.google.com/thumbnail?id=1B5_J9mvutgQ3eMmAvzz5XGgJW7peZS3w&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Aw1lBjHjZOyeQ2qbTV4KldRi0vdcGda2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MVv1oY9sL8Za3N8Pi2eqwGU_BS6r_5RY&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Mc4X1s75XP5P5ESl6DAgwhmFXWOQUS50&sz=w1000",
        "https://drive.google.com/thumbnail?id=11buzX62xajGRfY6QShPT-FKwN7euK_GW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wN8kHDM0-zc5CRLZTdgIu9gcwEEcbLBS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1p2okVOWM2ExMXjvKQTSqeNhudIxSUGKY&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hZREBnwHGZujgY_jos5mMYEi14gx_43Y&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yWa5tYnqMuLKh3P4wxV-bULoLxsWv4K2&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1cJ6SoOM6lGC5kpPkURdBUQbMf-RqvTR0",
      "description": "Crafted in heavy pure soft fox georgette fancy embroidery beads and jari work, this anarkali brings together premium fabric and refined detailing. 6.5 mtr approx fully flair, styled with 2.3 mtr pure soft fox georgette fabric with boader fancy embroidery beads and jari work attached fancy latkan, kurta length 48 49 inch approx. Available in: MAHENDIGREEN, PURPLE,BLACK. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT FOX GEORGETTE FANCY EMBROIDERY BEADS AND JARI WORK"
        },
        {
          "label": "Silhouette",
          "value": "6.5 mtr approx fully flair"
        },
        {
          "label": "Dupatta",
          "value": "2.3 MTR PURE SOFT FOX GEORGETTE FABRIC WITH BOADER FANCY EMBROIDERY BEADS AND JARI WORK ATTACHED FANCY LATKAN"
        },
        {
          "label": "Length",
          "value": "48 49 INCH approx"
        },
        {
          "label": "Available Colors",
          "value": "MAHENDIGREEN, PURPLE,BLACK"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT FOX GEORGETTE FANCY EMBROIDERY BEADS AND JARI WORK",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb274",
      "sku": "SBLKB274",
      "title": "Pure Soft Organja Silk Fabric Fully Flair Kali Pattern Canvas Patta Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "PINK,BLACK,OFFWHITE",
      "mainImage": "https://drive.google.com/thumbnail?id=1V0nompqlWPMBLZopNbZs-qH5PzHOeQGr&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1V0nompqlWPMBLZopNbZs-qH5PzHOeQGr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1fYZSgB5pw_JmyTGbd9lieBRO9stSh6Ye&sz=w1000",
        "https://drive.google.com/thumbnail?id=18Vbmd7m4kIXa6TiqQu0tC0WR-fEpoDFZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JX8wn2ULixtjRspS17-CJd1msBo8-oGR&sz=w1000",
        "https://drive.google.com/thumbnail?id=1aHWG7yE5ayFTTAGiOjqhGG9Wk2w18v3f&sz=w1000",
        "https://drive.google.com/thumbnail?id=1veZM3-B60hyJiTK8YaYu8F5aSdgfibc7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1XInVLCCM31znYj81ASDomdsHt4hNvbKZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lHVGTZcZOSS2DVG2QsK_5fceNRENPIZy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eylXswwWVYNkFoJNb-ysJi3tKlvAPrS6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sTk4hx-0_LoUfhetU7tAtHiCBMrTzKWe&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yLJ37xj--TGxcEZmUjcJJk8Ra8IS1H-D&sz=w1000",
        "https://drive.google.com/thumbnail?id=1YS0qltTyiwGoXyM7zmmWcJf_zdznHfMT&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1mmQmJpwBWb6ec8FIHHRcB1PjXaI6mFSz",
      "description": "Crafted in heavy pure soft organja silk print, this anarkali brings together premium fabric and refined detailing. 4 mtr approx flair with kali cut attached complete with canvas patta, styled with shawl type 28 width 2.3 mtr pure soft organja silk with boader gota patti lace work, kurta length 48 49 inch approx. Available in: PINK,BLACK,OFFWHITE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT ORGANJA SILK PRINT"
        },
        {
          "label": "Silhouette",
          "value": "4 MTR approx FLAIR WITH KALI CUT ATTACHED COMPLETE WITH CANVAS PATTA"
        },
        {
          "label": "Dupatta",
          "value": "SHAWL TYPE 28 WIDTH 2.3 MTR PURE SOFT ORGANJA SILK WITH BOADER GOTA PATTI LACE WORK"
        },
        {
          "label": "Length",
          "value": "48 49 INCH approx"
        },
        {
          "label": "Available Colors",
          "value": "PINK,BLACK,OFFWHITE"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        },
        {
          "label": "Weight",
          "value": "900 GRAM approx"
        }
      ],
      "fabric": "HEAVY PURE SOFT ORGANJA SILK PRINT",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb282",
      "sku": "SBLKB282",
      "title": "Beautiful Pure Chinon Silk Fabric Straight Fit Kurta Set,trousers Suit Set",
      "category": "Suit Sets",
      "price": 1900,
      "originalPrice": 3450,
      "discount": "45% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "BLACK,WINE,PINK",
      "mainImage": "https://drive.google.com/thumbnail?id=1XiBJVHT9Dka0pBjzGwZcIeR5Fn1ifI3i&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1XiBJVHT9Dka0pBjzGwZcIeR5Fn1ifI3i&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nBx5eNRNBRUWIKzW7ZuYmypmlWe2TBcG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sK6e9G281mG3qmjcI_8XRPMsM_A9Vtof&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JULtqrtFNJ6VTdkNaJgbDr5HyHk3GKjo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WTidXVj9I5geALSMjhhL_XlAZGcihFCX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cawys3BXeuIbgXUue2YWe_NynSivYR8s&sz=w1000",
        "https://drive.google.com/thumbnail?id=1IhKrTApDNN03MSGisMrwqHW9sEMr4bU_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Ih7HcrUZarOuGjR353S1LVzP814Ltklr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GIdUmWFutrsn95Yra_p9vzUK6GoZqppn&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ATZVTqzGlVsgTPfH3SxfmhGqawoKEwG3&sz=w1000",
        "https://drive.google.com/thumbnail?id=19DlYea8RjDccUmxtmDNXMZBSwljAFKtX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1oxsxfily9uy2ubMHaOUWEfqpbpKTWkjK&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1PF5-VJ6ypzKDycMYhRhbArgxanqd8n7u",
      "description": "Crafted in pure chinon silk fabric with beautiful embroidery sequence and jari work on yoke,sleeves,bottom lace work,round neckline, this suit set brings together premium fabric and refined detailing. Styled with 2.2 mtr pure chinon silk fabric with embroidery sequence and jari work,boader fancy lace work, kurta length 46 inch approx. Available in: BLACK,WINE,PINK. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "PURE CHINON SILK FABRIC WITH BEAUTIFUL EMBROIDERY SEQUENCE AND JARI WORK ON YOKE,SLEEVES,BOTTOM LACE WORK,ROUND NECKLINE"
        },
        {
          "label": "Dupatta",
          "value": "2.2 MTR PURE CHINON SILK FABRIC WITH EMBROIDERY SEQUENCE AND JARI WORK,BOADER FANCY LACE WORK"
        },
        {
          "label": "Length",
          "value": "46 INCH approx"
        },
        {
          "label": "Bottom",
          "value": "LACE WORK,ROUND NECKLINE"
        },
        {
          "label": "Available Colors",
          "value": "BLACK,WINE,PINK"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "PURE CHINON SILK FABRIC WITH BEAUTIFUL EMBROIDERY SEQUENCE AND JARI WORK ON YOKE,SLEEVES,BOTTOM LACE WORK,ROUND NECKLINE",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb276",
      "sku": "SBLKB276",
      "title": "Beautiful Pure Bllooming Vichitra Silk Fabric Straight Fit Kurta Set,trousers Suit Set",
      "category": "Suit Sets",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "PURPLE,PINK",
      "mainImage": "https://drive.google.com/thumbnail?id=19DHrwzXWATTrhRvbupM8eajwpSltBHwg&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=19DHrwzXWATTrhRvbupM8eajwpSltBHwg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1p078aEuWgh-uxyZ9DtRFrq-qV9CkVXpt&sz=w1000",
        "https://drive.google.com/thumbnail?id=1uiCHhnLYbvoT-c3Or9Chsno9x2mD8VcO&sz=w1000",
        "https://drive.google.com/thumbnail?id=19TfsSypH9WGOirKIwH-eGYz9ZP9FHap-&sz=w1000",
        "https://drive.google.com/thumbnail?id=173uskkVYTfu5bcwSgII3yloWc50zvLmb&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_7UhLbOCT-QVR_wG_sbOTAgjnBJHD23z&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Ek85b7Glw6j1-cayYGB8YtzPisNeSQhr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NDoSo4EwATB9dywc45Ir4xswYrQImWjg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Ua4J3UGjvKCt4QaVQNAI7uG--X4ibPFW&sz=w1000",
        "https://drive.google.com/thumbnail?id=11uv4rfLBM3CiccVJXwpl_56hgSrSN9YG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mI87GOXqUKsx2KN-YXBmCySn6j5m_Riy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yL1H7kxCzMqK9GOOIo6jFf3g8lOxMPPc&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/17jjE-DDB0AXflpvL8jyuwgm0vTICUlq4",
      "description": "Crafted in pure blooming rangoli silk fabric with beautiful embroidery sequence and jari work on yoke,sleeves,bottom lace work,round neckline, this suit set brings together premium fabric and refined detailing. Styled with 2.2 mtr pure vichitra silk fabric with embroidery sequence and jari work,boader fancy lace work, kurta length 42 43 inch approx. Available in: PURPLE,PINK. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "PURE BLOOMING RANGOLI SILK FABRIC WITH BEAUTIFUL EMBROIDERY SEQUENCE AND JARI WORK ON YOKE,SLEEVES,BOTTOM LACE WORK,ROUND NECKLINE"
        },
        {
          "label": "Dupatta",
          "value": "2.2 MTR PURE VICHITRA SILK FABRIC WITH EMBROIDERY SEQUENCE AND JARI WORK,BOADER FANCY LACE WORK"
        },
        {
          "label": "Length",
          "value": "42 43 INCH approx"
        },
        {
          "label": "Bottom",
          "value": "LACE WORK,ROUND NECKLINE"
        },
        {
          "label": "Available Colors",
          "value": "PURPLE,PINK"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "PURE BLOOMING RANGOLI SILK FABRIC WITH BEAUTIFUL EMBROIDERY SEQUENCE AND JARI WORK ON YOKE,SLEEVES,BOTTOM LACE WORK,ROUND NECKLINE",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb277",
      "sku": "SBLKB277",
      "title": "Pure Soft Fox Georgette Print Fabric Fully Flair Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1ppOnWEXqGGAUQ0y4zCa_a5kbJFnAIUOh&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1ppOnWEXqGGAUQ0y4zCa_a5kbJFnAIUOh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1auGSrESv5ly5To91HA4SQnfWLxQ9IEQd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cyiHFVZleI1b_fChLdH58fiqHA5OO07m&sz=w1000",
        "https://drive.google.com/thumbnail?id=1idC6bCZqoONkT8-VDEav_4mC7B_T-Z6h&sz=w1000",
        "https://drive.google.com/thumbnail?id=19GQa9QcwEwxdKT8cVY2Dlom3KtCp6R1I&sz=w1000",
        "https://drive.google.com/thumbnail?id=1OXW48ke7cfw39B7fCr1LLmV8uDZLYZFB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hnZJjrCX27s-JzQ9KR0fEOkjZ64kjGX8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1s_gotbIESxk-UkiXW2c5CEBy1Zm-hXl1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AEtFo433_AmfL5k6irNyVd5Fjt17Fdkp&sz=w1000",
        "https://drive.google.com/thumbnail?id=17pXbnluVt_GseogKp7F3xPt0Z5iyJCP0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dxDvKmVuGbpeVHdqS6LuksUosgGkaAfj&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1CTXtEOsNmutrb2YGDz_ITV5tU2jUuLwi",
      "description": "Crafted in heavy pure soft fox georgette print, this anarkali brings together premium fabric and refined detailing. 7 mtr plus fully flair, styled with 2.3 mtr pure soft fox georgette print with boader triangle lace work, kurta length 54 55 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT FOX GEORGETTE PRINT"
        },
        {
          "label": "Silhouette",
          "value": "7 mtr plus fully flair"
        },
        {
          "label": "Dupatta",
          "value": "2.3 MTR PURE SOFT FOX GEORGETTE PRINT WITH BOADER TRIANGLE LACE WORK"
        },
        {
          "label": "Length",
          "value": "54 55 inch approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT FOX GEORGETTE PRINT",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb275",
      "sku": "SBLKB275",
      "title": "Pure Soft Heavy Romansilk Chanderi Fabric Nyra Cut Kurta Set,pent Suit Set",
      "category": "Suit Sets",
      "price": 1540,
      "originalPrice": 2910,
      "discount": "47% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1m34LxjYV-T2maBpvoP9kU4QFsi5An-2Q&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1m34LxjYV-T2maBpvoP9kU4QFsi5An-2Q&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nSzpOMcS_w0UfArRU5wZwLHCA3A54m9r&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vu9vfV5CiPwbFteLhCEGTV84SXnxEGUh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yXUTZJpiygdY24Ejtp-FBHmfhLzXpY5-&sz=w1000",
        "https://drive.google.com/thumbnail?id=13Zkp3lcrit3mD5Lw-uEvHslBUIF8xD9z&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JEgJYuIa9ZSP6zMTueb6umaq_qkwF6bV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1X8z2yQk1z3zXgpHftL_h7WsANM8F5ft-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lUG0YSvonkGBMMQD7IiELV0Wj5VOlRS9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1z1JRUiz5zq8IdSchOtmZIHwmuRG-Kg5-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1P11FXLlRBiqZ5HP_dSrj53wkdzV12vyf&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/11TNRdZJ8nfuT_TdgRjHzYTM90D6gWUtf",
      "description": "Crafted in heavy pure romansilk chanderi fabric fit nyra cut kurta set, this suit set brings together premium fabric and refined detailing. Featuring fancy yoke dori work,sequence thread work, styled with 2.2 mtr pure soft tabby organja floral print with boader cotton lace work, kurta length 48 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE ROMANSILK CHANDERI FABRIC FIT NYRA CUT KURTA SET"
        },
        {
          "label": "Work & Detailing",
          "value": "FANCY YOKE DORI WORK,SEQUENCE THREAD WORK"
        },
        {
          "label": "Dupatta",
          "value": "2.2 MTR PURE SOFT TABBY ORGANJA FLORAL PRINT WITH BOADER COTTON LACE WORK"
        },
        {
          "label": "Length",
          "value": "48 INCH approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE ROMANSILK CHANDERI FABRIC FIT NYRA CUT KURTA SET",
      "sleeveLength": "Full Sleeves",
      "pattern": "FANCY YOKE DORI WORK,SEQUENCE THREAD WORK",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb268",
      "sku": "SBLKB268",
      "title": "Pure Soft Fox Georgette Floral Print Fabric Fully Flair Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "YELLOW,SKYBLUE",
      "mainImage": "https://drive.google.com/thumbnail?id=1lBO7ky_rQyYjo3vtQ8btp1hTkQuoKCWw&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1lBO7ky_rQyYjo3vtQ8btp1hTkQuoKCWw&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NX2oscOlFXDds2uQZPOhaVacPNqE1L2x&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EDtc6U4G-f-FGDj7VZYy0rAFXrhYcR4A&sz=w1000",
        "https://drive.google.com/thumbnail?id=1owh3-lSCsJRuVQrDo6eOXuWO8iBZkCRu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mLUIE-_0wUFZuD9ClanENeHm0y7nT-a4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dkaGUvBdZfQPKwZd4DsmrfbuS0hoIj78&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sj2wi4_r7ATUS2wksGQ-zGe8g0RofcEq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1J9-inoix4_7muSOtNlKqQz_QCE-1pHuC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BxfPk-2REPLLAIVmLhNM7ljHohrfeisj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nM_JoH5luk3yvzFzDj6BrDdPy3VO7XeF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1YLRJIrYxUDOlhfADhVF9oPP4qpeRvWeV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HAcWFFXRFjBDtA-DHG_NnP2Q2EBb-zgU&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1CopCOl_doKoh6R9p5UfZMrkA0SAyG2lm",
      "description": "Crafted in heavy pure soft fox georgette floral print, this anarkali brings together premium fabric and refined detailing. 8.25 mtr plus fully flair, styled with 2.3 mtr pure soft fox georgette floral print with boader triangle lace work, kurta length 54 inch approx. Available in: YELLOW,SKYBLUE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT FOX GEORGETTE FLORAL PRINT"
        },
        {
          "label": "Silhouette",
          "value": "8.25 mtr plus fully flair"
        },
        {
          "label": "Dupatta",
          "value": "2.3 MTR PURE SOFT FOX GEORGETTE FLORAL PRINT WITH BOADER TRIANGLE LACE WORK"
        },
        {
          "label": "Length",
          "value": "54 inch approx"
        },
        {
          "label": "Available Colors",
          "value": "YELLOW,SKYBLUE"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT FOX GEORGETTE FLORAL PRINT",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblkb271",
      "sku": "SBLKB271",
      "title": "Pure Fox Georgette Multi Floral Print Fabric Fully Flair Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 1800,
      "originalPrice": 3300,
      "discount": "45% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "DARKMAROON,BLACK",
      "mainImage": "https://drive.google.com/thumbnail?id=1Hw0bQV53hHotS5muigvAK-YNIpg_wYfH&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1Hw0bQV53hHotS5muigvAK-YNIpg_wYfH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Jn1n19tPdF6tz-mUbYJ9Hf25DOLPluas&sz=w1000",
        "https://drive.google.com/thumbnail?id=14X6zu-bGHM2MEYVRTbhotRoY2d_ISyiJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1v3p6ES3fc7_hJRHcHe31QLb_ARwqwx72&sz=w1000",
        "https://drive.google.com/thumbnail?id=184zRBEolKXpPBUM3suNQdStQkDrgMtVf&sz=w1000",
        "https://drive.google.com/thumbnail?id=13-Q_3rGUPnYeII9w6laBl17WICiQLnos&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RswvxLeVoL49k3Dk9qKfrpAaXNzKgsxa&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AAKi0RQ9WrD1uGuRHBMgVM5kyNTvWez1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LVnhSAu6O7jsI7qSTz0zndeUp8N-sprC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qAi1VZcbeG4UQBWhIgPaLQP8einAhUDj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1az-HCffrBO3adR3o0XimYhDrMKQXFXAj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RiCTvCs46-n4DQt4LK__U08KPrx3FKtt&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1gUuCqfmRn4J_cK0cd06TPjWl_cLxP-Hr",
      "description": "Crafted in heavy pure fox georgette multi floral print, this anarkali brings together premium fabric and refined detailing. Styled with 2.3 mtr pure fox multi floral print with boader fancy lace work, kurta length 48 inch approx. Available in: DARKMAROON,BLACK. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE FOX GEORGETTE MULTI FLORAL PRINT"
        },
        {
          "label": "Dupatta",
          "value": "2.3 MTR PURE FOX MULTI FLORAL PRINT WITH BOADER FANCY LACE WORK"
        },
        {
          "label": "Length",
          "value": "48 inch approx"
        },
        {
          "label": "Available Colors",
          "value": "DARKMAROON,BLACK"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE FOX GEORGETTE MULTI FLORAL PRINT",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb73",
      "sku": "SBLNKB73",
      "title": "Pure Chinnon Silk Fabric Top Set,sharara Tunic",
      "category": "Tunics",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1_38wbPIZOd5vI5KNxidbBpB8uewFfWw_&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1_38wbPIZOd5vI5KNxidbBpB8uewFfWw_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gZ8WlrF8f2CusaWC0k7J8HKu7YzWIh-d&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DbYPX4NFV31SeM_j1wFiwwpBjcGcbUMy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gSSFUVlkmbDo6aUhlXD-t7I3KP6ukMG4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EgCA08qKY-HReFvPQCin_Z0-RiibQXr1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bHR1Hk6teoFKBw4DPaYVWIrpA3vw1jT3&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qQ2W9HO88z0Vu0B9MTuR4Qj8HNsvkvel&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gPgSi_YlsvyQ3O1nprt34hYOCc_MIuot&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Ay11V6EFN31S2AdiE2cohQUTB3qVqciI&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1K8iwL0f5c6LIt8m6m8IptbW8pt1sQke0",
      "description": "Crafted in heavy pure chinnon silk fabric with fancy embroidery sequence and jari work, this tunic brings together premium fabric and refined detailing. Styled with 2.2 meter pure chinnon silk fabric with fancy embroidery jari and sequence work, kurta length 40 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE CHINNON SILK FABRIC WITH FANCY EMBROIDERY SEQUENCE AND JARI WORK"
        },
        {
          "label": "Dupatta",
          "value": "2.2 METER PURE CHINNON SILK FABRIC WITH FANCY EMBROIDERY JARI AND SEQUENCE WORK"
        },
        {
          "label": "Length",
          "value": "40 inch approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE CHINNON SILK FABRIC WITH FANCY EMBROIDERY SEQUENCE AND JARI WORK",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb40",
      "sku": "SBLNKB40",
      "title": "Pure Romansilk Chanderi Fabric Fully Flare Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "WINE,MUSTURD,MAROON,MAUVEPINK,OFFWHITE",
      "mainImage": "https://drive.google.com/thumbnail?id=11IaIPnuftL4_jR7sBwDJPZSWVLkYLXx0&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=11IaIPnuftL4_jR7sBwDJPZSWVLkYLXx0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TwgoLe4v-7YhrUwvafnMHVqBdIMAc4eR&sz=w1000",
        "https://drive.google.com/thumbnail?id=1j5moHo1nUnoqkXep9ckb2pdjfqVxdi5r&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Le2thClNquW250kFwyQuHqbuVePrVwo3&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZGJ7UaR1nuSsrm48dD7VNGo_k_JE7DtD&sz=w1000",
        "https://drive.google.com/thumbnail?id=18caRRavXXb_ThA0cJ7zLiCn3vg6vMRX7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1meRzzwvDDxEk33KMBBeHpzjz_B3pjI9G&sz=w1000",
        "https://drive.google.com/thumbnail?id=1oM2t34zUz7vVJFIWmg0pzVW5yabWthBD&sz=w1000",
        "https://drive.google.com/thumbnail?id=168lYGiGNdrLeMHrlIeuSJZHWUHS3zQvX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HBhI2nruYspqanpacqgwv5cbLmq-31Et&sz=w1000",
        "https://drive.google.com/thumbnail?id=10GjA0TRBgmeuuAwmtYDRnEAWk1Bmtuxm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vuQ0FeAhs5y95qMU7LdNb9BCGZGc_FJs&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1GZgIAJl7sk3BRF4xvCy9fEIrLagpZnyE",
      "description": "Crafted in heavy pure romansilk chanderi fabric, this anarkali brings together premium fabric and refined detailing. 5.5 meter fully flare anarkali gown, styled with 2.2 meter pure soft fox georgette embroidery sequence work with cutwork boader four side, kurta length 55 inch approx. Available in: WINE,MUSTURD,MAROON,MAUVEPINK,OFFWHITE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE ROMANSILK CHANDERI FABRIC"
        },
        {
          "label": "Silhouette",
          "value": "5.5 METER FULLY FLARE ANARKALI GOWN"
        },
        {
          "label": "Dupatta",
          "value": "2.2 METER PURE SOFT FOX GEORGETTE EMBROIDERY SEQUENCE WORK WITH CUTWORK BOADER FOUR SIDE"
        },
        {
          "label": "Length",
          "value": "55 inch approx"
        },
        {
          "label": "Available Colors",
          "value": "WINE,MUSTURD,MAROON,MAUVEPINK,OFFWHITE"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE ROMANSILK CHANDERI FABRIC",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb72",
      "sku": "SBLNKB72",
      "title": "Pure Vichitra Silk Fabric Fully Flare Gown,with Dupatta Anarkali",
      "category": "Anarkalis",
      "price": 2400,
      "originalPrice": 4200,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "DARKRED",
      "mainImage": "https://drive.google.com/thumbnail?id=1VaEdd-ydxMEj-CrjamrLzfaNKZP7ujoV&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1VaEdd-ydxMEj-CrjamrLzfaNKZP7ujoV&sz=w1000",
        "https://drive.google.com/thumbnail?id=14jw53Vwdb1BKCAObdFA7X1IUENu0FZe_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1oyKgrqGJm5zmNTxUrtv6Nkmtli_JS0Mx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wC0QTnyyC-HFkC4uHLVGtdY5Fa7iHNmA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1x35MSUJwEE7gieefNwKEIt8SFvqcKfwf&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TjjibQDFkkeWI7x29W5anMU6W2tf7-39&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TQIDAh51zh2E8Yv4MtRa4bEMToQnF5iL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zxn33s4ngcBKh9502KAYiBAMbS0D9Adn&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-Kq5jgJnIZ0gof3-YsGEBUtsFKXlu_O5&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1wOOAUvnoZ0_VTKoI16BcEk0r2QKoFGsN",
      "description": "Crafted in heavy pure vichitra silk fabric with full kali pattern anarkali, this anarkali brings together premium fabric and refined detailing. 3.50 to 3.80 meter fully flare anarkali gown, styled with set, kurta length 54 55 inch approx. Available in: DARKRED. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE VICHITRA SILK FABRIC WITH FULL KALI PATTERN ANARKALI"
        },
        {
          "label": "Silhouette",
          "value": "3.50 TO 3.80 METER FULLY FLARE ANARKALI GOWN"
        },
        {
          "label": "Dupatta",
          "value": "SET"
        },
        {
          "label": "Length",
          "value": "54 55 INCH approx"
        },
        {
          "label": "Bottom",
          "value": "FANCY EMBROIDERY SEQUENCE,JARI WORK,FANCY WORK DUPATTA WITH TASSLES,BACKSIDE FANCY TASSELS"
        },
        {
          "label": "Available Colors",
          "value": "DARKRED"
        },
        {
          "label": "Sizes",
          "value": "XS(34) S(36) M(38) L(40) XL(42) And XXL(44) Fully stitched"
        }
      ],
      "fabric": "HEAVY PURE VICHITRA SILK FABRIC WITH FULL KALI PATTERN ANARKALI",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb71",
      "sku": "SBLNKB71",
      "title": "Pure Soft Crunchy Silk Fabric Top,sharara Dupatta Tunic",
      "category": "Tunics",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "Skyblue",
      "mainImage": "https://drive.google.com/thumbnail?id=127c-clhg9uyWjd0Eu5s5kjjq2GaCZBaO&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=127c-clhg9uyWjd0Eu5s5kjjq2GaCZBaO&sz=w1000",
        "https://drive.google.com/thumbnail?id=1um_ZGby_7vGM2p7SKolbn-jJXl8ZPmvo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rbcZotATzhCYq22skJD6Ds6F-uLyA3uZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WzTy8p2P4dPI1hk5bWEUm-MJgBjR6K44&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gkDzKmuq-UJ_KOwpuyetP02mRJbW39T4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iCySOsU2ahEmgiiR2dOIjYs0ycNP5lVe&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UAcZjvDQ5O7dKgiH0uN-cZ1bG0ajuv2h&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NmdiMFN3BBT4f68n66NO6L_1FQgZaiR0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DwoRG3k_rXqlqkhBEYd8Sjeu1lxELb95&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1kVjeA0wawQKJElCqe_mSpK0jgkRt8njC",
      "description": "Crafted in heavy pure soft crunchy silk fabric with fancy embroidery sequence,dori,thread and jari work, this tunic brings together premium fabric and refined detailing. Styled with set, kurta length 38 inch approx. Available in: Skyblue. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT CRUNCHY SILK FABRIC WITH FANCY EMBROIDERY SEQUENCE,DORI,THREAD AND JARI WORK"
        },
        {
          "label": "Dupatta",
          "value": "SET"
        },
        {
          "label": "Length",
          "value": "38 inch approx"
        },
        {
          "label": "Bottom",
          "value": "WITH DUPATTA SET"
        },
        {
          "label": "Available Colors",
          "value": "Skyblue"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT CRUNCHY SILK FABRIC WITH FANCY EMBROIDERY SEQUENCE,DORI,THREAD AND JARI WORK",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb70",
      "sku": "SBLNKB70",
      "title": "Pure Soft Crunchy Silk Fabric Top,sharara Dupatta Tunic",
      "category": "Tunics",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "yellow,offwhite",
      "mainImage": "https://drive.google.com/thumbnail?id=18vYuQiLUAtP95Sf8aaZJLrOxMJyfjliX&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=18vYuQiLUAtP95Sf8aaZJLrOxMJyfjliX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1oxY8fTbO7p91VTmPxvKzPO2e6ZI7Lmn1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yUXWeyB1R7HlHmaniNlUxHsBBmnjEOy5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1srQ1af63O58K5K43zH7TBovyB7qwAXrT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_Ufy87kO3pfLW_eJVLueOZePqZXDmY09&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GhB7OO8f_eOUZNwC3k8JfF9A1xl5-FAY&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Iq0h5jJ91ZqrLKUZTJSXngFhM7X1KpaN&sz=w1000",
        "https://drive.google.com/thumbnail?id=16ZZkKm0FJ1Qek4HsUsi09PQa83F32KDC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1awClmpukG1lKOFUau6mELKmjm5abKF4u&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AqmF_SvQV4xrQdUef9tJhCaZitEeIxwQ&sz=w1000",
        "https://drive.google.com/thumbnail?id=11t1GfDmVEjn86rlg00a2ehXRIQsrkkQz&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nIQJcBrMUVrG6nnxurBN8RQtil0qv5Sb&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1MiHUNciZHdVgZ40IMU1EJJKVtVjB7qhY",
      "description": "Crafted in heavy pure soft crunchy silk fabric with fancy embroidery sequence,dori,thread and jari work, this tunic brings together premium fabric and refined detailing. Styled with set, kurta length 38 inch approx. Available in: yellow,offwhite. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT CRUNCHY SILK FABRIC WITH FANCY EMBROIDERY SEQUENCE,DORI,THREAD AND JARI WORK"
        },
        {
          "label": "Dupatta",
          "value": "SET"
        },
        {
          "label": "Length",
          "value": "38 inch approx"
        },
        {
          "label": "Bottom",
          "value": "WITH DUPATTA SET"
        },
        {
          "label": "Available Colors",
          "value": "yellow,offwhite"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT CRUNCHY SILK FABRIC WITH FANCY EMBROIDERY SEQUENCE,DORI,THREAD AND JARI WORK",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb69",
      "sku": "SBLNKB69",
      "title": "Pure Blooming Vichitra Silk Fabric Fully Flare Gown, Anarkali",
      "category": "Anarkalis",
      "price": 2500,
      "originalPrice": 4350,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "RED,DARK MAROON",
      "mainImage": "https://drive.google.com/thumbnail?id=1zV3kTnSMFQt8I8cbxu2GZoedMIIM5uMc&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1zV3kTnSMFQt8I8cbxu2GZoedMIIM5uMc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LeePyMEJWmoKYxowkJpR3Bp6kbs9zQJG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tiZKxpsqTQKbJ59N1pgbQk80Ov7UsAdV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1s62yb4UzZYbsCMr165zj8VPWpdWxN6QY&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UBDpkKk9vxjEHQAGmOS_VifExgJRYYsc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tSw97BBwt1pHliV0XJlcPoj1sXjExUsP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RDu5xjPsvf8O3cWAzCbzMq_ysS4IX8Aj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zzTagxSNWGg275K5hU093I9Zs3wqtQB0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Ea5n6rFXf00bBOpS5fQ_Orl3kqN4HaYt&sz=w1000",
        "https://drive.google.com/thumbnail?id=1aojR1SmZ1_2I575FjRXBoQYU7N_PZupn&sz=w1000",
        "https://drive.google.com/thumbnail?id=1XYEHnB7kWRUoipRq3Zr3Z4QXAjf_6QGB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KakroLsF5_nsoIOOdMvp8EXiNnMaMAqo&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1N6_HL5Lmo2frxQaYa86w6djMoNQWIVCA",
      "description": "Crafted in heavy pure blooming vichitra silk fabric with full kali pattern anarkali, this anarkali brings together premium fabric and refined detailing. 3.50 to 3.80 meter fully flare anarkali gown, styled with 2.2 meter pure blooming vichitra silk fabric embroidery sequence dori jari work fancy lace boader with tassels width 25 inch shawl type dupatta, kurta length 54 55 inch approx. Available in: RED,DARK MAROON. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE BLOOMING VICHITRA SILK FABRIC WITH FULL KALI PATTERN ANARKALI"
        },
        {
          "label": "Silhouette",
          "value": "3.50 TO 3.80 METER FULLY FLARE ANARKALI GOWN"
        },
        {
          "label": "Dupatta",
          "value": "2.2 METER PURE BLOOMING VICHITRA SILK FABRIC EMBROIDERY SEQUENCE DORI JARI WORK FANCY LACE BOADER WITH TASSELS WIDTH 25 INCH SHAWL TYPE DUPATTA"
        },
        {
          "label": "Length",
          "value": "54 55 INCH approx"
        },
        {
          "label": "Bottom",
          "value": "FANCY EMBROIDERY SEQUENCE DORI AND JARI WORK,FANCY WORK DUPPTA WITH TASSLES"
        },
        {
          "label": "Available Colors",
          "value": "RED,DARK MAROON"
        },
        {
          "label": "Sizes",
          "value": "XS(34) S(36) M(38) L(40) XL(42) And XXL(44) Fully stitched"
        }
      ],
      "fabric": "HEAVY PURE BLOOMING VICHITRA SILK FABRIC WITH FULL KALI PATTERN ANARKALI",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb68",
      "sku": "SBLNKB68",
      "title": "Fully Flare Kali Pattern Canvas Patta Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1clOEXq90WGvUKmnNFpil3CGWPNUiSgzs&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1clOEXq90WGvUKmnNFpil3CGWPNUiSgzs&sz=w1000",
        "https://drive.google.com/thumbnail?id=17RE066I4Au-nVDga8QkBohxAA2L97ZtD&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Krh8Ql6q9pAt_eS3igXmwfliTr2d4Ag9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lMrajLOP8U9UoTIeXQN4UDEi2i9LhFvr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1T0Frq3mXUQ9JCxdxWFG_-6C67QnpVWMa&sz=w1000",
        "https://drive.google.com/thumbnail?id=1coHng2vTt5xKkJBwczyenH58t9Yom-vW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1XJMFMEKnOovSC-muCEOhUHZ01FGDv1mC&sz=w1000",
        "https://drive.google.com/thumbnail?id=10uNu1q2Xct1LcCMmh1Iw-7xGeNC0Qydi&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iAqe049EOPzBB0jXWFuhDWMbfsCGFrMT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UfjJ7HsmkaCtS0YZS3SrbwEr2GZdbn7Y&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yOWNVQoa9okI6J33a5fvOSonx3gfZBXl&sz=w1000",
        "https://drive.google.com/thumbnail?id=1P_4PY9ZX3RDYQ4bKMiuCCXqh2O0fM3dY&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/11S9FzKBb_AuqMeBl9d-IJtYdBfMfU5Hz",
      "description": "Crafted in fancy banarasi jackquard dola silk fabric, this anarkali brings together premium fabric and refined detailing. 4 meter approx flare with kali cut attached complete with canvas patta, styled with fancy banarasi jackquard dola silk fabric readymade duppta, kurta length 48 49 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "FANCY BANARASI JACKQUARD DOLA SILK FABRIC"
        },
        {
          "label": "Silhouette",
          "value": "4 METER approx FLARE WITH KALI CUT ATTACHED COMPLETE WITH CANVAS PATTA"
        },
        {
          "label": "Dupatta",
          "value": "fancy banarasi jackquard dola silk fabric readymade duppta"
        },
        {
          "label": "Length",
          "value": "48 49 INCH approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "FANCY BANARASI JACKQUARD DOLA SILK FABRIC",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb67",
      "sku": "SBLNKB67",
      "title": "Beautiful 3 Piece Of Indo Western Gathered Georgette Shrug Fancy Blouse, Printed Tunic",
      "category": "Tunics",
      "price": 1600,
      "originalPrice": 3000,
      "discount": "47% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1THo_SVUc6KlFRaTn0R9R9QpJ2lcu2jl7&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1THo_SVUc6KlFRaTn0R9R9QpJ2lcu2jl7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lXxzpWaiWX8oGTZN071Zxktvq23k6DTj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Q5452wu8zd2qvE8Cj1Y5kPyCIiVx2m3F&sz=w1000",
        "https://drive.google.com/thumbnail?id=1YhzJieGKCEH8VpWIx6XaoN119fVFSezB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zwbLhip4pq1doJpMwQ50HV6gtWWa1zAe&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Xj7luuho7OZWeFody8lGmHsJNCtQpFQ8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1n7APbxInPrcZmFkqbXMfYhHoZJ40KNJg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1w-31eb9mUmX2JmSbqnCRAnPPT4fYlEJi&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nZ2-Mp6UXgAPxzuKLhVfhjB_9zRH_gdN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LeVc9Rwl7DlCmmJP5VnzfPl2pWWXr12s&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1Rxs7g0K6BJAoALcZ8xcDdO5XvphL79h2",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "pants"
        },
        {
          "label": "Sizes",
          "value": "XS(34) S(36) M(38) L(40) XL(42) And XXL(44) Fully stitched"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb66",
      "sku": "SBLNKB66",
      "title": "Pure Vichitra Silk Fabric Fully Flare Gown, Anarkali",
      "category": "Anarkalis",
      "price": 2400,
      "originalPrice": 4200,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "DARK PINK",
      "mainImage": "https://drive.google.com/thumbnail?id=1QxztMYGbkjFkBs-KDWvG3g6x4A_f5TRv&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1QxztMYGbkjFkBs-KDWvG3g6x4A_f5TRv&sz=w1000",
        "https://drive.google.com/thumbnail?id=1373uFYl1eXy_rOoHe4XH4pQkhMDDrJr5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MjaAzxmdXPfUcWCU0VyWbD9AYkghb921&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tQcyomxS-54Mui6yRJ91u6-dpG2tjLEw&sz=w1000",
        "https://drive.google.com/thumbnail?id=1CCwmAOAOYN-jKDpWyMb5r9wFH7HPhUPH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-y4nmrdxPeKkA2mxVsfh_RsG_OEdY9le&sz=w1000",
        "https://drive.google.com/thumbnail?id=1POa2OwTTiV-_NB76kWbqEZJxnBu3tkYN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BsJxozihE0Ki4mdlVzydadB7jJRnRZ35&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1DqB_7t_GZrDc3RXXAUYvXtyIlDawXGQe",
      "description": "Crafted in heavy pure vichitra silk fabric with full kali pattern anarkali, this anarkali brings together premium fabric and refined detailing. 3.50 to 3.80 meter fully flare anarkali gown, styled with 2.2 meter pure vichitra silk fabric embroidery sequence jari work fancy lace boader with tassels, kurta length 54 55 inch approx. Available in: DARK PINK. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE VICHITRA SILK FABRIC WITH FULL KALI PATTERN ANARKALI"
        },
        {
          "label": "Silhouette",
          "value": "3.50 TO 3.80 METER FULLY FLARE ANARKALI GOWN"
        },
        {
          "label": "Dupatta",
          "value": "2.2 METER PURE VICHITRA SILK FABRIC EMBROIDERY SEQUENCE JARI WORK FANCY LACE BOADER WITH TASSELS"
        },
        {
          "label": "Length",
          "value": "54 55 INCH approx"
        },
        {
          "label": "Bottom",
          "value": "FANCY EMBROIDERY SEQUENCE DORI AND JARI WORK,FANCY WORK DUPPTA WITH TASSLES,BACKSIDE FANCY TASSELS"
        },
        {
          "label": "Available Colors",
          "value": "DARK PINK"
        },
        {
          "label": "Sizes",
          "value": "XS(34) S(36) M(38) L(40) XL(42) And XXL(44) Fully stitched"
        }
      ],
      "fabric": "HEAVY PURE VICHITRA SILK FABRIC WITH FULL KALI PATTERN ANARKALI",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb55",
      "sku": "SBLNKB55",
      "title": "Fully Flare Kali Pattern Canvas Patta Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2500,
      "originalPrice": 4350,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "BLACK, MAROON,WINE,PEACH RED",
      "mainImage": "https://drive.google.com/thumbnail?id=1Y5bAcBoeNAo379FAscCAIgpgBpDaNWrg&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1Y5bAcBoeNAo379FAscCAIgpgBpDaNWrg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xVfaOJTF9tSDNrpa6awmSHRVyAhjhHiP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BMr1r7iN4iykbzsvabFgfGyNq97Qp_eZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1C8p-lpDky1Mirb8s7WG-IrEZW9YOLqr2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Y-i_Ugxz16Mi8w2pPF0ACoJb2bjcCou_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Lh5P6Tv38r8DjuRvAtEHhMIJVNnw21oG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1c3EtbA6uR4-9D29tNDwOthsObjvWwVUH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EMiTkO33mjrdFrrgQFVs6HZQF9AaqL0C&sz=w1000",
        "https://drive.google.com/thumbnail?id=1kXy3GwyM74pYiF6EIf4ruPK2q3CU2RO3&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eM_8dDZFHAh9OknAqV8iIKyL1yYizzn4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GHX0mo0FfIZnbe6H6xJ4Gg8uyr3UEKan&sz=w1000",
        "https://drive.google.com/thumbnail?id=14SAUSk6Hvpp-RF7ls9tIB7xPGkfYRPSn&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1IT3r-S6Domh2LHRPn3YhUtXT6foAOYdh",
      "description": "Crafted in heavy pure soft fox georgette lukhnowi sequence & thread work, this anarkali brings together premium fabric and refined detailing. 4 meter approx flare with kali cut attached complete with canvas patta, styled with 2.2 meter pure soft fox georgette duppta ruffle style, kurta length 48 49 inch approx. Available in: BLACK, MAROON,WINE,PEACH RED. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT FOX GEORGETTE LUKHNOWI SEQUENCE & THREAD WORK"
        },
        {
          "label": "Silhouette",
          "value": "4 METER approx FLARE WITH KALI CUT ATTACHED COMPLETE WITH CANVAS PATTA"
        },
        {
          "label": "Dupatta",
          "value": "2.2 METER PURE SOFT FOX GEORGETTE DUPPTA RUFFLE STYLE"
        },
        {
          "label": "Length",
          "value": "48 49 INCH approx"
        },
        {
          "label": "Available Colors",
          "value": "BLACK, MAROON,WINE,PEACH RED"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT FOX GEORGETTE LUKHNOWI SEQUENCE & THREAD WORK",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb31",
      "sku": "SBLNKB31",
      "title": "Flare: 8 Meter Fully Flare Approx Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "RED,PINK DARKGREEN",
      "mainImage": "https://drive.google.com/thumbnail?id=1J0sEjCqAbYshd1PB3OMNhxrufM9HA5IY&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1J0sEjCqAbYshd1PB3OMNhxrufM9HA5IY&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lmMrdYoGHJGC3pa6Vd2L0sS2frnKQWOy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1uog1HlshgJwLmYgMHrjp04Usqa_kqCMu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Yb4Vudpd4uvHyf0ymxeqt1vI6CVm39bC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ul16mPXJ76_oXiMTjHDvIU-h_iP4m5Yq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ckK6Q-DZWcbE1USzlhBBPOWhzZX_dSPT&sz=w1000",
        "https://drive.google.com/thumbnail?id=17BYCTFQMY7H5P5MjcCLMUcmtuPnHimHW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tICtXiUBnHOTkpj7L7TcGay7dTGo2W7y&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WE9aALjHhmvuUFGsTjelyOFV4kbuyHcw&sz=w1000",
        "https://drive.google.com/thumbnail?id=1IoCehOcZ2CxJmeMkzb8cWcbR7mPH3OEs&sz=w1000",
        "https://drive.google.com/thumbnail?id=13KpGOTbRUJub_2hxNA7fBULJ3W_oKhTc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1S1x3aWqH_vjz-TUbTFB5C9qFI661yiRi&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1D8UHE6N4s3FX2Jzk3NNeAd4g73Yi3pAK",
      "description": "Crafted in pure soft lightweight chiffon bandhej fabric inner micro cotton, this anarkali brings together premium fabric and refined detailing. Available in: RED,PINK DARKGREEN. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "PURE SOFT LIGHTWEIGHT CHIFFON BANDHEJ FABRIC INNER MICRO COTTON"
        },
        {
          "label": "Bottom",
          "value": "SET FULLY STTICHED"
        },
        {
          "label": "Available Colors",
          "value": "RED,PINK DARKGREEN"
        },
        {
          "label": "Sizes",
          "value": "XS(34) S(36) M(38) L(40) XL(42) AND XXL(44)"
        },
        {
          "label": "Weight",
          "value": "CHIFFON BANDHEJ FULLY FLARE GOWN,DUPPTA ,PENT SET FULLY STTICHED"
        }
      ],
      "fabric": "PURE SOFT LIGHTWEIGHT CHIFFON BANDHEJ FABRIC INNER MICRO COTTON",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb65",
      "sku": "SBLNKB65",
      "title": "Pure Soft Fox Georgette Fabric Fully Flare Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2600,
      "originalPrice": 4500,
      "discount": "42% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1Pol3rp6Y9BJqR2I8fzso0DYmw09shXMi&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1Pol3rp6Y9BJqR2I8fzso0DYmw09shXMi&sz=w1000",
        "https://drive.google.com/thumbnail?id=1w97VggADBMII_EaiBnvu4l1C4XIys_dO&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TMmtQXQaHmJIJPNOgsoMph0Fl-R88xBV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tn15yUTiIXoVF5Y6ZqohyGMKeVvwvRQ0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ISFRWW5bLlpLjgs3m1ISPmGqMLh7dQcf&sz=w1000",
        "https://drive.google.com/thumbnail?id=1svLI7HC1FALeyndjDNKfieMt7HRN1Y5M&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iEhvyWWD6tRx7x5L8jru7mCbftYi9npi&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FdDpDn3wetZLrlfxTKCBqyjyrA3fTHHM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1er1SMv12_2H8JBX3MpO3UxApNYD_7n8U&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1kQRCV_ReE8omEHxn6j75Hafi3wqt85SW",
      "description": "Crafted in heavy pure soft fox georgette fabric, this anarkali brings together premium fabric and refined detailing. 8 meter plus fully flare, styled with 2.2 mtr pure soft fox georgette ruffle duppta, kurta length 54 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT FOX GEORGETTE FABRIC"
        },
        {
          "label": "Silhouette",
          "value": "8 meter plus fully flare"
        },
        {
          "label": "Dupatta",
          "value": "2.2 MTR PURE SOFT FOX GEORGETTE RUFFLE DUPPTA"
        },
        {
          "label": "Length",
          "value": "54 inch approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT FOX GEORGETTE FABRIC",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb64",
      "sku": "SBLNKB64",
      "title": "Pure Crunchy Silk Fabric Fully Flare Anarkali Gown,pent Anarkali",
      "category": "Anarkalis",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1Sv2Dfqsmg2q3agCcgp4_u_wi2xvxuKk_&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1Sv2Dfqsmg2q3agCcgp4_u_wi2xvxuKk_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1c2qxaQLgoXky322jlMe-k1r01h-zMXH_&sz=w1000",
        "https://drive.google.com/thumbnail?id=14rctHoPXemdqQePZ8dk2BAzRldyT7QWE&sz=w1000",
        "https://drive.google.com/thumbnail?id=1A8yJlnMwcL7RbnFvGjLK2BPHqssRuaWT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1kpkcwrf_6kHNHI8RE7OTTYJs6xxJLHbP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1K5Bw_OOgAn-sRuxAq2o3pIWfqMh8yOWo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KA9zBQsZXUUi0UvUxbGuM0BkRwpf3zen&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tn-hLWQMtXvNK4qpdmi4DxuFLVSbxwd0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BSc9Tc_aV1QLO3DrcL7rfkJ0vLo4q0bC&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1irXq04at4nLIbTD7Pv15KR-QBSxZMDPh",
      "description": "Crafted in heavy pure crunchy silk fabric, this anarkali brings together premium fabric and refined detailing. 4 mtr fully flare anarkali gown, styled with 2.2 mtr pure crunchy silk fabric embroidery sequence,dori,jari,work fancy boader lace work, kurta length 48 49 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE CRUNCHY SILK FABRIC"
        },
        {
          "label": "Silhouette",
          "value": "4 MTR FULLY FLARE ANARKALI GOWN"
        },
        {
          "label": "Dupatta",
          "value": "2.2 MTR PURE CRUNCHY SILK FABRIC EMBROIDERY SEQUENCE,DORI,JARI,WORK FANCY BOADER LACE WORK"
        },
        {
          "label": "Length",
          "value": "48 49 inch approx"
        },
        {
          "label": "Bottom",
          "value": "SET"
        },
        {
          "label": "Sizes",
          "value": "fully sttiched"
        }
      ],
      "fabric": "HEAVY PURE CRUNCHY SILK FABRIC",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb60",
      "sku": "SBLNKB60",
      "title": "Pure Soft Organja Silk Fabric Fully Flair Kali Pattern Canvas Patta ,pent Anarkali",
      "category": "Anarkalis",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "VIOLET,ONIONPINK",
      "mainImage": "https://drive.google.com/thumbnail?id=1W4qruRU0QUZhWr1PBAlDXOJK9e1j0sfS&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1W4qruRU0QUZhWr1PBAlDXOJK9e1j0sfS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gI9YiknPuLXEFOsYhgeiH3iuLWSWPXZX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1aBcCl5n9NAOxUlvFn3yRxzG75G70uNni&sz=w1000",
        "https://drive.google.com/thumbnail?id=10cgFD_E1I1ZGJGGU0zO-p_tAL0EKgZZK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TBsuluZH_f2bVrGyi2yV5stksZNuyw2o&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lWqB3f6pLrP1TzIyq6-7MZTDy33s0QCb&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zPwcjok5-8orM_YSeC9k7EWLU8CQNZ3Q&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VCmPGwSjqICchR2mDwMHhBof6QA4cT-u&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JiYzKiL0dJHdXb_QAgvUdnTOlj2snnP1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1K2-YJpKBQXXWbR8Cr2YbA-omuxrsKE7h&sz=w1000",
        "https://drive.google.com/thumbnail?id=1984xQau1YG-Pe4c9Q6fLKye3GluvF0Ed&sz=w1000",
        "https://drive.google.com/thumbnail?id=14AT7E28q5u_7ki0EnO0NAzI9KLPc0kiI&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1UuVdyupB_zuYv0htBoTl-B3IfNCfQsjX",
      "description": "Crafted in heavy pure soft organja silk print, this anarkali brings together premium fabric and refined detailing. Featuring front on fancy badla jari work flower position print outing work, 4 mtr approx flair with kali cut attached complete with canvas patta, styled with 2.3 mtr pure soft organja silk with boader gota patti lace work, kurta length 48 49 inch approx. Available in: VIOLET,ONIONPINK. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT ORGANJA SILK PRINT"
        },
        {
          "label": "Work & Detailing",
          "value": "FRONT ON FANCY BADLA JARI WORK FLOWER POSITION PRINT OUTING WORK"
        },
        {
          "label": "Silhouette",
          "value": "4 MTR approx FLAIR WITH KALI CUT ATTACHED COMPLETE WITH CANVAS PATTA"
        },
        {
          "label": "Dupatta",
          "value": "2.3 MTR PURE SOFT ORGANJA SILK WITH BOADER GOTA PATTI LACE WORK"
        },
        {
          "label": "Length",
          "value": "48 49 INCH approx"
        },
        {
          "label": "Available Colors",
          "value": "VIOLET,ONIONPINK"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT ORGANJA SILK PRINT",
      "sleeveLength": "Full Sleeves",
      "pattern": "FRONT ON FANCY BADLA JARI WORK FLOWER POSITION PRINT OUTING WORK",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb43",
      "sku": "SBLNKB43",
      "title": "Pure Soft Fox Georgette Laheriya Print Fabric Fully Flair Anarkali Fully Sttiched Anarkali",
      "category": "Anarkalis",
      "price": 1600,
      "originalPrice": 3000,
      "discount": "47% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "PURPLE,ORANGE,RANI,ROYALBLUE,BLACK,BOTTLEGREEN",
      "mainImage": "https://drive.google.com/thumbnail?id=1RSS9O6pFBlxU3R_p8spVLhDJVYK0kuBW&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1RSS9O6pFBlxU3R_p8spVLhDJVYK0kuBW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TfUiNR3WiFc02pPybiWf1f1SCZfn0XGT&sz=w1000",
        "https://drive.google.com/thumbnail?id=13MK2bT9Q_d9S6EIzQrP65ff1dmjVmqCN&sz=w1000",
        "https://drive.google.com/thumbnail?id=113DjCIdWm4hVFD48mj-u7x4jPkDFyUgN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1a-ZmUZWrSUNbH_3aK-gGwzZHPvU9ou7R&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VJoGFXTwtwxbLfoPBjWa9Q1jPUEvqCdT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tgAFZ5QG80y3Eob7s6Z_lmUTY0JrT05s&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KLrUgwKehVzQn3H34z7yFiUcM42c90g8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Qhfe2_wdIQfvOU8YuxulJpUPhV1AeRWk&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-bZwUN_ckwus0xobTUPAHN_PUpQuJtQR&sz=w1000",
        "https://drive.google.com/thumbnail?id=1l5Fga6aA-1rBH-lFbMOxoqJswIKXcmGZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1T4wjM08PjpxZ51U-ztm1cjcCvKgjORtJ&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1FypIRUy5b1-8T7gZF7d4QMCmUbt160x1",
      "description": "Crafted in heavy pure soft fox georgette laheriya print, this anarkali brings together premium fabric and refined detailing. 7 mtr plus fully flair anarkali layer gown, kurta length 54 55 inch approx. Available in: PURPLE,ORANGE,RANI,ROYALBLUE,BLACK,BOTTLEGREEN. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT FOX GEORGETTE LAHERIYA PRINT"
        },
        {
          "label": "Silhouette",
          "value": "7 MTR PLUS FULLY FLAIR ANARKALI LAYER GOWN"
        },
        {
          "label": "Length",
          "value": "54 55 inch approx"
        },
        {
          "label": "Available Colors",
          "value": "PURPLE,ORANGE,RANI,ROYALBLUE,BLACK,BOTTLEGREEN"
        },
        {
          "label": "Sizes",
          "value": "XS(34) S(36) M(38) L(40) XL(42) And XXL(44) Fully stitched"
        }
      ],
      "fabric": "HEAVY PURE SOFT FOX GEORGETTE LAHERIYA PRINT",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb45",
      "sku": "SBLNKB45",
      "title": "Pure Soft Vichitra Silk Fabric Fully Flair Kali Pattern Canvas Patta Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "BLACK,DARK RANI",
      "mainImage": "https://drive.google.com/thumbnail?id=1FJW-l7A2k2EVzCw3vU-cDIBFTxttDQPy&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1FJW-l7A2k2EVzCw3vU-cDIBFTxttDQPy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1m_9LMNp2bdQapTiYTKtWqkvY9QRS9DSc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nLtzyDCb2rkBWzF3x9MqX9EeYWgYAVXG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Byo1qrRHFcIeqJszuwURMuS6gjFBXmi9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Kgl3H6CLwEXbenYC_rBYf6gS7xEEHP98&sz=w1000",
        "https://drive.google.com/thumbnail?id=1orlGJcNmTo-yg64cV9ephbM4ySA94oOq&sz=w1000",
        "https://drive.google.com/thumbnail?id=15p-4ZrqxbSGyr7jSIY6Srcff-nQm-zM9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dLEij6iqUZtvoH_PdprZ9xpmgJ0d2Qr1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FhH0s5E5Z7EumzG_qkmypYdt-Zx3b31s&sz=w1000",
        "https://drive.google.com/thumbnail?id=14V005vBxTMsnN7p__2NSzkfdho7x3b13&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Yvt0HuEV3HtRYV7A7QFTkd1nYyg5xIAl&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Df7GspeBpBEl0W3P2Sb9LULXZ9m3aAm6&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1g9oRiCB5vZtpiUynKdaofnwUdzN7iJPr",
      "description": "Crafted in heavy pure soft vichitra silk fabrics, this anarkali brings together premium fabric and refined detailing. 4 mtr approx flair with kali cut attached complete with canvas patta, styled with shawl type 28 width 2.3 mtr pure vichitra silk fabric with boader fancy lace work, kurta length 49 50 inch approx. Available in: BLACK,DARK RANI. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT VICHITRA SILK FABRICS"
        },
        {
          "label": "Silhouette",
          "value": "4 MTR approx FLAIR WITH KALI CUT ATTACHED COMPLETE WITH CANVAS PATTA"
        },
        {
          "label": "Dupatta",
          "value": "SHAWL TYPE 28 WIDTH 2.3 MTR PURE VICHITRA SILK FABRIC WITH BOADER FANCY LACE WORK"
        },
        {
          "label": "Length",
          "value": "49 50 INCH approx"
        },
        {
          "label": "Available Colors",
          "value": "BLACK,DARK RANI"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        },
        {
          "label": "Weight",
          "value": "1 kg"
        }
      ],
      "fabric": "HEAVY PURE SOFT VICHITRA SILK FABRICS",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb62",
      "sku": "SBLNKB62",
      "title": "Pattern Canvas Patta ,pent Anarkali",
      "category": "Anarkalis",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1pe_bxVdgACYBqwm7qNCNLXOB-AtTfkaP&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1pe_bxVdgACYBqwm7qNCNLXOB-AtTfkaP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rTw_o92pbCN91P_SfNQCvLGXri1YeIS6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1L4NDazh2X7AmuGEA4gF4XTQHBozZM_Gh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1E9z8awMezhXOmz1x3GBKt-L5z0OIkxUB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VrymhV2Jep4HHblHGWNoMgweuMWNEK7D&sz=w1000",
        "https://drive.google.com/thumbnail?id=1z_hP_Lv6OMoYzN_9xo2uCibTqhEi3LYL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xz6DjTmRYQnra0Ycis4_v1xORmDZ1f0A&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ELojp6qMGEqaYHtVBOnV392UGGC2DPJs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1M7nJO61ftyVzqpo_iHVGhVsX1WmIyxWy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Bc4xIPcvF4YgtqjCh18MkmuM08mXqGoL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JMfGYYSzEZgA9l1n5OrVbQvW3jA6Tvgl&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1i_RQavLg4PwKbKNjiGMln9koHUlwzsoh",
      "description": "Crafted in heavy pure soft organja silk print, this anarkali brings together premium fabric and refined detailing. Featuring front on fancy badla jari work flower position print outing work, 4 mtr approx flair with kali cut attached complete with canvas patta, styled with 2.3 mtr pure soft organja silk with boader gota patti lace work, kurta length 48 49 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT ORGANJA SILK PRINT"
        },
        {
          "label": "Work & Detailing",
          "value": "FRONT ON FANCY BADLA JARI WORK FLOWER POSITION PRINT OUTING WORK"
        },
        {
          "label": "Silhouette",
          "value": "4 MTR approx FLAIR WITH KALI CUT ATTACHED COMPLETE WITH CANVAS PATTA"
        },
        {
          "label": "Dupatta",
          "value": "2.3 MTR PURE SOFT ORGANJA SILK WITH BOADER GOTA PATTI LACE WORK"
        },
        {
          "label": "Length",
          "value": "48 49 INCH approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT ORGANJA SILK PRINT",
      "sleeveLength": "Full Sleeves",
      "pattern": "FRONT ON FANCY BADLA JARI WORK FLOWER POSITION PRINT OUTING WORK",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb59",
      "sku": "SBLNKB59",
      "title": "Pure Soft Crunchy Silk Fabric Top Set,sharara Tunic",
      "category": "Tunics",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1DWBR1nPqbJ_ZpOLLRlBJp1c4PjeCIfHa&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1DWBR1nPqbJ_ZpOLLRlBJp1c4PjeCIfHa&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yGuUp4L6MHIAzs3meB4HZAypIQ64O71g&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Kxk2uNafal0egeeDWfWPC18cIyObUkUW&sz=w1000",
        "https://drive.google.com/thumbnail?id=122xtbiKAwIBtgKJKmOujXOp5s_7oDNTJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=15yD9-X8wyz3rOUbsYTckjnWrvE2jutHA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RzfHtOcUUmOdvRrPHN7LozHEhN9maENO&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nsouMSS5Kp0et7QqBQM-CMpWFsPWnQVc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JQDqW5zyPwAmXVP0s1lL2DlXIKPeH7XA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hMmOumDXobfPHNECVStqh-NPdwcVE2EC&sz=w1000",
        "https://drive.google.com/thumbnail?id=11lVj1kHhroGaPJ3SZxmGtj816Bd4Mye5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1YHt7_THp5UBy6cDv6XIwytJX0FnveWkQ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1pTt7rPPANksv9AwBfgJU5CjpVNv2y_le&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1lHWDE5G7WgTv3cqlQ4VXNM6ANecavmxJ",
      "description": "Crafted in heavy pure soft crunchy silk fabric with fancy embroidery sequence and jari work, this tunic brings together premium fabric and refined detailing. Styled with 2.2 mtr pure soft crunchy silk fabric with fancy embroidery jari and sequence work, kurta length 40 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT CRUNCHY SILK FABRIC WITH FANCY EMBROIDERY SEQUENCE AND JARI WORK"
        },
        {
          "label": "Dupatta",
          "value": "2.2 MTR PURE SOFT CRUNCHY SILK FABRIC WITH FANCY EMBROIDERY JARI AND SEQUENCE WORK"
        },
        {
          "label": "Length",
          "value": "40 inch approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT CRUNCHY SILK FABRIC WITH FANCY EMBROIDERY SEQUENCE AND JARI WORK",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb58",
      "sku": "SBLNKB58",
      "title": "Fully Flair Kali Pattern Canvas Patta Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2500,
      "originalPrice": 4350,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1B-9cPIdAJssGsfC1f_Zp3N_DbBYHrviG&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1B-9cPIdAJssGsfC1f_Zp3N_DbBYHrviG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Jnfi3FBbBwVPtAjVxzbvOVTj9UqeYbgT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VlF16fWcu1FNQQb4FM6B1aCD7cHbeHm5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-tY9bE7wmrYmaiEpdVS_ogKm6vMXekUC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hEfUZx5zF0SprcqKCNdX3ue4JhtFdq5W&sz=w1000",
        "https://drive.google.com/thumbnail?id=14YzYJdX871eEnTnhE0jWxFAanfDhYYoh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ITW2yRGw4aKw4sERppaQ3OJKPMKx9gv7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BMapKHTJH4KOiwyxWX4fnWRzxiTH3rHg&sz=w1000",
        "https://drive.google.com/thumbnail?id=19s14tvIy6jsIatYBUfhcUeHwssv-wztu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xFd_4mCTzk0rKDXPa_WTJDcWB8aP_JdD&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1QIW-q0gmkr64fsztrfLEqt-XjvkUW4Ml",
      "description": "Crafted in heavy pure soft fox georgette lukhnowi sequence work, this anarkali brings together premium fabric and refined detailing. 4 mtr approx flair with kali cut attached complete with canvas patta, styled with 2.2 mtr pure soft fox georgette duppta ruffle style, kurta length 48 49 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT FOX GEORGETTE LUKHNOWI SEQUENCE WORK"
        },
        {
          "label": "Silhouette",
          "value": "4 MTR approx FLAIR WITH KALI CUT ATTACHED COMPLETE WITH CANVAS PATTA"
        },
        {
          "label": "Dupatta",
          "value": "2.2 MTR PURE SOFT FOX GEORGETTE DUPPTA RUFFLE STYLE"
        },
        {
          "label": "Length",
          "value": "48 49 INCH approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT FOX GEORGETTE LUKHNOWI SEQUENCE WORK",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb57",
      "sku": "SBLNKB57",
      "title": "Pure Soft Organja Silk Floral Print Fabric Fully Flair Kali Pattern Canvas Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1BwY3F4FnfHxurk-8VhjSK3X0AeDesJrJ&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1BwY3F4FnfHxurk-8VhjSK3X0AeDesJrJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1h7mJPd9EUNt5PGap9NokewG_mCRBpkku&sz=w1000",
        "https://drive.google.com/thumbnail?id=18aCZPPkSok1pPFVRUh1D0z9l-4thPx-h&sz=w1000",
        "https://drive.google.com/thumbnail?id=1k2OR3DZQcIPcJa7aw8JQrCwYgQtz_8he&sz=w1000",
        "https://drive.google.com/thumbnail?id=1I1RZIEZj_tSKz3K4OE-qY6R3l77RKmoZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-ac5xH7e5SYwy9_FIj3QHspHC0UkoiWB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QwUiyS5yz2OS4XgnM65rtjF61s3N8r6D&sz=w1000",
        "https://drive.google.com/thumbnail?id=163yrO7846gL3BGB-iR0iKqUz3RAzZ7En&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1rQ2wDAzWr-tuzB5kAKupU-LpwTd1tvy2",
      "description": "Crafted in heavy pure soft organja silk floral print, this anarkali brings together premium fabric and refined detailing. 4 mtr approx flair with kali cut attached complete with canvas patta, styled with 2.3 mtr pure soft organja silk floral print with boader gota patti lace work, kurta length 48 49 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT ORGANJA SILK FLORAL PRINT"
        },
        {
          "label": "Silhouette",
          "value": "4 MTR approx FLAIR WITH KALI CUT ATTACHED COMPLETE WITH CANVAS PATTA"
        },
        {
          "label": "Dupatta",
          "value": "2.3 MTR PURE SOFT ORGANJA SILK FLORAL PRINT WITH BOADER GOTA PATTI LACE WORK"
        },
        {
          "label": "Length",
          "value": "48 49 INCH approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT ORGANJA SILK FLORAL PRINT",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb56",
      "sku": "SBLNKB56",
      "title": "Sharara Saree Full Sttiched Blouse Premium Fox Georgette Fabric Saree",
      "category": "Sarees",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "RUST,TEALBLUE",
      "mainImage": "https://drive.google.com/thumbnail?id=1Oem9T_PmfH5uAyAbZM8HOaGCLaLsByDN&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1Oem9T_PmfH5uAyAbZM8HOaGCLaLsByDN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Wxp4ROcaIOCHOYzl9BuDrzrRpppM12Fj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Lt9vGkqQnsoSCRs_2hC1AQisJNIrwx1M&sz=w1000",
        "https://drive.google.com/thumbnail?id=1CDxCghOf0eHt0dXBkI0D6YSgqaZjk8YP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eClt_MK841ZriuVgTwLv9WsG-yvf29WC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bVi43QT83b0R9XsAO-TKJEM0Lh0VHyyh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dUTD6qcj_xJMyaH3XjQWDmALmiC-Cq_B&sz=w1000",
        "https://drive.google.com/thumbnail?id=1T3gdcHnFDmf6CHfTY-b0ebWznQHGQIRP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HQPL6b5kO6N6a-LgiuiPPcvY9gqP8bjd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ppk442a5Racu4rJ9VvLS2NS3fD4zYqof&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NXK3kYGPOlguwC_7m7juTCa2eMt307Dr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Pu3jtCKKGYmUDFChL8KZdc1Pb3hCS9vl&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/14lCxtlSgGaMNjrBaOtoZZEdBE-hbILKH",
      "description": "This elegant saree is designed for festive celebrations and special occasions. Available in: RUST,TEALBLUE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "SAREE WITH FULL STTICHED BLOUSE PREMIUM FOX GEORGETTE FABRIC"
        },
        {
          "label": "Available Colors",
          "value": "RUST,TEALBLUE"
        },
        {
          "label": "Weight",
          "value": "600 gram"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb47",
      "sku": "SBLNKB47",
      "title": "Pure Romansilk Chanderi Fabric Fully Flair Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1tzXJwE3GI9JWHlAw2bI7uREyAltoENVe&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1tzXJwE3GI9JWHlAw2bI7uREyAltoENVe&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NKz7gB98Mbpk4Zr-hx_zRJ3dX5wUNPb0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1G8OF4ooMYc3rOogg2efrqS0bNPVA1RBF&sz=w1000",
        "https://drive.google.com/thumbnail?id=18ll5TCXlw5xsX9JFp76HztK1Dy1FHHPU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zhxpkAdrA0vljG8zPELEKgWsA4eb5rc8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Em0ohSu2CsyYGHj0I4rFbAED7BXs8sc8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tfArWaB3r1GBzvDt7w9JTvSIIPvqXvl3&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GozAsUoHQWhSv4ERGLEVkKiSJJ4cmJ2W&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_Kxs2FFsVMrQ4JeXvLBDwOcmdGuW1mK4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1fP-u_HBW5un9Fg9PHS7KGBTJxl7ASfYB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1CB4tppYWCFgvL1l4zKs2BO-fotx6k48i&sz=w1000",
        "https://drive.google.com/thumbnail?id=11Z6S1Y6Uwq8biRGdT209mpK0XNsvqdvZ&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1Zm8DoWiLfzY3ewQU2q0sJi-5x-jUIoCM",
      "description": "Crafted in heavy pure romansilk chanderi fabric, this anarkali brings together premium fabric and refined detailing. 9 mtr plus fully flair, kurta length 54 inch approx. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE ROMANSILK CHANDERI FABRIC"
        },
        {
          "label": "Silhouette",
          "value": "9 mtr plus fully flair"
        },
        {
          "label": "Length",
          "value": "54 inch approx"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE ROMANSILK CHANDERI FABRIC",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb52",
      "sku": "SBLNKB52",
      "title": "Pure Soft Romansilk Chanderi Discharge Print Fabric Fully Flair Kediya Style Kurta, Suit Set",
      "category": "Suit Sets",
      "price": 2260,
      "originalPrice": 3990,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "MAHENDI,PURPLE YELLOW,RANIPINK",
      "mainImage": "https://drive.google.com/thumbnail?id=14gmGSGRsCTW_1o4uvYaBaUbebhzNzRHR&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=14gmGSGRsCTW_1o4uvYaBaUbebhzNzRHR&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KUEE6uPxUzZZB86Bs_UVdam5buhmYrAf&sz=w1000",
        "https://drive.google.com/thumbnail?id=1P_Av4lmSMXyAo7UfuzEo3O_an0V6i8lS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_v30PDeAjjpNGM4a350-Otir8EWFoHhW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1fnhuCBntMdMvrO9F31oKx2lHIcHMIBhj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NgWxF2gx57JDPWEKLBJLHcOKCx_Gtwho&sz=w1000",
        "https://drive.google.com/thumbnail?id=16DGRUvOREioPJc90ZoEyxXWAnmdps7dM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_9eaBseN7ZMNsq0P2uKF4xFp8ogT7ehS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LXlWJT9UJ08gvvQf7Ls143LfEvR8cOzq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZtFqQ-6b61g7dKoucFY47Vfh-pFc7_K7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1W6-6W8dEOQPpCJo4RvxVtk_JMYEEQU8P&sz=w1000",
        "https://drive.google.com/thumbnail?id=1OAbXPFTJNr98VoxkrRIC9-4mmhHYRvFQ&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1KGn0tWN53dYGIEHMO1KrIXRDM6Z_th8h",
      "description": "Crafted in heavy pure soft romansilk chanderi discharge print fabric, this suit set brings together premium fabric and refined detailing. Styled with 2.2 mtr pure soft tabby organja fabric boader fancy lace work. Available in: MAHENDI,PURPLE YELLOW,RANIPINK. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT ROMANSILK CHANDERI DISCHARGE PRINT FABRIC"
        },
        {
          "label": "Dupatta",
          "value": "2.2 MTR PURE SOFT TABBY ORGANJA FABRIC BOADER FANCY LACE WORK"
        },
        {
          "label": "Available Colors",
          "value": "MAHENDI,PURPLE YELLOW,RANIPINK"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT ROMANSILK CHANDERI DISCHARGE PRINT FABRIC",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb53",
      "sku": "SBLNKB53",
      "title": "Multi Floral Organja Fabric Lehengha Choli Full Sttiched Detachable Sleeves,with Fancy Blouse Saree",
      "category": "Sarees",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1ZS5U53aDl6fiD6MLOk-uNNXau_dlrIgF&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1ZS5U53aDl6fiD6MLOk-uNNXau_dlrIgF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gwbhcySxZfU3gVr_LSikMh3Ww7dxHSTC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qxwdDnnIkYjtmJAwMnN0qGe0TRe3hwoS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1x1kXT4IhlA9FTyXKeeTxiApgqPotiKYo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PTxXXo0cnQ8DP8EfK2jzE75-q3hyUcmk&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nCjU2aA9bOBHmg1LNjUCu4Fy1e-Gt2Ea&sz=w1000",
        "https://drive.google.com/thumbnail?id=11HhtkHW1ug-4lsUZAazfrrGqOH3jffX5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yCbHKyvbpKQ35dHUIKxLIeGG5bpCYOA8&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1qzLiJfhEu2WY_d8diKqFOcPh_dO9c9dO",
      "description": "This elegant saree is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Sizes",
          "value": "FULLY STTICHED WITH CANVAS PATTA UPTO 42 INCH"
        },
        {
          "label": "Weight",
          "value": "800 gram"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb48",
      "sku": "SBLNKB48",
      "title": "Flair: 8 Mtr Fully Flair Approx Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "GREEN,RANI,RED",
      "mainImage": "https://drive.google.com/thumbnail?id=1wGG2ncQBAVzK7q85NmzGtDY7C1_I-KTL&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1wGG2ncQBAVzK7q85NmzGtDY7C1_I-KTL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-DokXE3rrOLY7mXR0w5Wv4CXDHr2QcQF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nNjc3bXrlD9nCqHHFoFxERlrmGfx5pvr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-wDBzlN4O0s0BtxOWnNwsloQLdO5HwsP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1fAe-Xgxkfr3Yzjkp8bdFLHtCmnAzYUnk&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HLs5iRxASEdMkxLMMZz18D8zsYVZfIr_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1r4qiBlLv4jmGWwW_RVsbHA4Af-zPropz&sz=w1000",
        "https://drive.google.com/thumbnail?id=1fpy7PMdvrYMvZOLzlMpUZSO0fuvqVACO&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iQgTHOeflfj_lLS3zr1Ztdx5vN801Adj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eksC80menOdt8fxe-DG3Q--WBOgCu-c9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1kcKinlUEKSQeF7PgRU2oPuTi464ML7o0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1P7kM1HoVKMt13WJ0H-J5w9tRYxO0cKAp&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1BYqNAU7hGsBmoT2-3TPw3Bo-UQFH1fKi",
      "description": "Crafted in pure soft lightweight chiffon bandhej fabric inner micro cotton, this anarkali brings together premium fabric and refined detailing. Available in: GREEN,RANI,RED. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "PURE SOFT LIGHTWEIGHT CHIFFON BANDHEJ FABRIC INNER MICRO COTTON"
        },
        {
          "label": "Bottom",
          "value": "SET FULLY STTICHED"
        },
        {
          "label": "Available Colors",
          "value": "GREEN,RANI,RED"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        },
        {
          "label": "Weight",
          "value": "CHIFFON BANDHEJ FULLY FLAIR GOWN,DUPPTA,PENT SET FULLY STTICHED"
        }
      ],
      "fabric": "PURE SOFT LIGHTWEIGHT CHIFFON BANDHEJ FABRIC INNER MICRO COTTON",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb50",
      "sku": "SBLNKB50",
      "title": "Pure Soft Fox Georgette Blooming Fabric Lehengha Choli Fully Sttiched, Fancy Blouse Suit Set",
      "category": "Suit Sets",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "RED YELLOW",
      "mainImage": "https://drive.google.com/thumbnail?id=1APCCiPgu8gG1ycaN94K7HIysFCkkkEv3&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1APCCiPgu8gG1ycaN94K7HIysFCkkkEv3&sz=w1000",
        "https://drive.google.com/thumbnail?id=18J5fKccm5HWxZpnhOrM6XduZ1l14auUH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1CMVu0vDzaqxuzV2OZTQ19aFlE0AOvhhE&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TBVJI7ns9AQvgWGcku9jMXbsQmtGXYLA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xeu6I7epS7ApoxjBIkEGzz1Nnq2ol7rG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1f7sVgE7S1kcRk0eQy1vAK38kXyxwnauJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1CcuWH6QVGfrhW4MGzOVVwpXnD7zci6fe&sz=w1000",
        "https://drive.google.com/thumbnail?id=1R5xpk__zP94ZSRbagsc0coZgDtD_bBoV&sz=w1000",
        "https://drive.google.com/thumbnail?id=11X1bxhQLdEIohhdJQWsGmCf_h90w5aDc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cj3snKeRt9Pv9GZA3inTD6eBHCfN2LWx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ImevGgbczJeuT-tMsnMwgoevfEEluSOs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1XGQUFFn0TYFl1BpSiSR_ruUjH9t1Uc9Y&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1ju0F0FWUnt1BiHMUIzfPnFghE8QD1rZH",
      "description": "This elegant suit set is designed for festive celebrations and special occasions. Available in: RED YELLOW. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Available Colors",
          "value": "RED YELLOW"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED WITH ATTACHED CANVAS PATTA"
        },
        {
          "label": "Weight",
          "value": "1 kg"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb49",
      "sku": "SBLNKB49",
      "title": "Pure Soft Fox Georgette Fabric Fully Flair Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2500,
      "originalPrice": 4350,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "RUST,TEALBLUE",
      "mainImage": "https://drive.google.com/thumbnail?id=1Fn5Ww55YD9R_XYZBmMiln6Rx_vNNsBit&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1Fn5Ww55YD9R_XYZBmMiln6Rx_vNNsBit&sz=w1000",
        "https://drive.google.com/thumbnail?id=1a7wm07u2BX0B3hqK6W5EVCmuU5JQvBXo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-cepVs2bntd5HklsONUzpj40wVxIRlwn&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FQZ-m-fVL03cOEt3sM4MG4BQ25XzKagr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UN1Jv5HRbQ9W159GAIphCnRIwu7KHYG8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qMBS29ucrGQlpMw3rwv4-LedR45kAGnI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZeB-QfPhM4UMZrnnLKy_BWgIXR1k01Yx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qRTs57ir4h8ADeDWNFXATM4daVWtZ-c4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mz0HhjiLWAAMref33MFPKYeJ7U194zb-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1IQ4RYe-482RpVW5Etqbn039j1J4fRKfe&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nDoAf-wzCqGENnqF0X8J_3Duoo_9YNj9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ORiRrAayw7e_wNWBZByUJXMONZS-zVX5&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1h6uvliseyeibU2mD06lH_BRn01WR2GsW",
      "description": "Crafted in heavy pure soft fox georgette fabric, this anarkali brings together premium fabric and refined detailing. 12 mtr plus fully flair, styled with 2.2mtr pure soft fox georgette embroidery sequence and thread work with boader fancy lace work, kurta length 54 55 inch approx. Available in: RUST,TEALBLUE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT FOX GEORGETTE FABRIC"
        },
        {
          "label": "Silhouette",
          "value": "12 mtr plus fully flair"
        },
        {
          "label": "Dupatta",
          "value": "2.2MTR PURE SOFT FOX GEORGETTE EMBROIDERY SEQUENCE AND THREAD WORK WITH BOADER FANCY LACE WORK"
        },
        {
          "label": "Length",
          "value": "54 55 inch approx"
        },
        {
          "label": "Available Colors",
          "value": "RUST,TEALBLUE"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT FOX GEORGETTE FABRIC",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb41",
      "sku": "SBLNKB41",
      "title": "Pure Soft Fox Georgette Zigzag Print Fabric Fully Flair Anarkali, Set,pent Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "LIGHTBLUE,LIGHTYELLOW",
      "mainImage": "https://drive.google.com/thumbnail?id=1yxscHJAXZib1zDzEjyIRzcROqpPJCTY4&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1yxscHJAXZib1zDzEjyIRzcROqpPJCTY4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UGTyw3Y8_0LWibedkGWt2MZaKLsr0EUH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZVpjcotytY-CL2JFJgUt36oPK5xsiLvv&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MAPy24h9Ck-nKXiGND27OS5BsWWoi_U6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HouM1noWj0b2WYhUPTDWC3vk5CioQltT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VXQgIxDnsiDiCOcVl5DJ3LuUUqaHZWCR&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tf91YcrWZmfnlZFiSOC5QQJS1dvIyYqF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZoePWfAnZmPKsaNxAOq1y-mbptxi3b_j&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cF3WzxYRE3XbwDJf31TwXGDyqBhj_ubP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1q8LDhIZkZILx3dF7jfGinB5O5e4wpWqT&sz=w1000",
        "https://drive.google.com/thumbnail?id=17vKpUFe0x4r6h-0eRTTMe2L0vm5r0m6N&sz=w1000",
        "https://drive.google.com/thumbnail?id=1fnQ9fhWuKFUlLHwblC4SWNAI9pxk6N_g&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1X6vvYcEgWHzRV-HgQtfygEea_XGywSOs",
      "description": "Crafted in heavy pure soft fox georgette zigzag print, this anarkali brings together premium fabric and refined detailing. 7 mtr plus fully flair, styled with 2.3 mtr pure soft fox georgette zigzag print with boader triangle lace work, kurta length 55 inch approx. Available in: LIGHTBLUE,LIGHTYELLOW. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT FOX GEORGETTE ZIGZAG PRINT"
        },
        {
          "label": "Silhouette",
          "value": "7 mtr plus fully flair"
        },
        {
          "label": "Dupatta",
          "value": "2.3 MTR PURE SOFT FOX GEORGETTE ZIGZAG PRINT WITH BOADER TRIANGLE LACE WORK"
        },
        {
          "label": "Length",
          "value": "55 inch approx"
        },
        {
          "label": "Available Colors",
          "value": "LIGHTBLUE,LIGHTYELLOW"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT FOX GEORGETTE ZIGZAG PRINT",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnkb36",
      "sku": "SBLNKB36",
      "title": "Georgette Anarkali Gown Duppta Anarkali",
      "category": "Anarkalis",
      "price": 1700,
      "originalPrice": 3150,
      "discount": "46% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "wine,darkrani",
      "mainImage": "https://drive.google.com/thumbnail?id=1nO6dvrgUKh2m2NthQ8Pcof12C0uNxWk_&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1nO6dvrgUKh2m2NthQ8Pcof12C0uNxWk_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GtiYlZfidS0jbZyhEiLWvAGtAv3U1eZB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lbEGWRGBYAe07qgxUg7AykQKXmU3SVfC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cQww8URcMzCckXxVfEmzsvSYCY6ckjDE&sz=w1000",
        "https://drive.google.com/thumbnail?id=1scNliaUOhzt8iQlNDEAN5s-5MC9kvYMJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=16vIjwWL8Y2psjrGlTr8fOl4JaI1BB1EZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EndVdWheKfDYNWRiHH2vJlsdgyNy19w2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_ePpEBfcBW4E9I-YIwBMfcAG5UXErFZl&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mrCM4cZ9dHpPNCMaMeboeOARfNZOy078&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WLDzSaTtZj11B6UahIp-3yrK4IryWDla&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cDguothUhWS_n0r2s6FDIIU_-CF6YBq_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1B1DEQTZ8tCXcnt2KR4El9g2r4s44Pa5X&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/13a3cXCiuQghWIe-NvJwkw_ARNEtoS4Op",
      "description": "Crafted in heavy pure soft fox georgette 7 mtr plus flair, this anarkali brings together premium fabric and refined detailing. Available in: wine,darkrani. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT FOX GEORGETTE 7 MTR PLUS FLAIR"
        },
        {
          "label": "Available Colors",
          "value": "wine,darkrani"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        },
        {
          "label": "Weight",
          "value": "800 gram"
        }
      ],
      "fabric": "HEAVY PURE SOFT FOX GEORGETTE 7 MTR PLUS FLAIR",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5300",
      "sku": "SBLSRK5300",
      "title": "Category: Women’s Ethnic Wear Tunic",
      "category": "Tunics",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "Orange, Yellow, Maroon, Mauve Pink, Lime, Purple, Dark Pink, Offwhite",
      "mainImage": "https://drive.google.com/thumbnail?id=1ftbYaFwtRi9MT9zYWytJJ4dy4tadf594&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1ftbYaFwtRi9MT9zYWytJJ4dy4tadf594&sz=w1000",
        "https://drive.google.com/thumbnail?id=1StthMalPjc0-nTl2knjMj0c-GuFIVglW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1G03xQRuAdm-HyDuJK_Wjr0QGTOn_s_Y_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qpohOqX9hWD_apOGG5v4p-k6aKv1b1cM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bRgrfIUEFxvKVqXSUE9TEw9rhYt7MILi&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DSih8_PPoY8AkDSML-si8DUvP50s5oVf&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wvDrJVMhFln5QzBijsXogSRntwgMN8V8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1h4bhx6COSiHD-nWdftHvEr_ik8y8S0bE&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ThZafeZndUCU6kLO07a0Ik2_P7Y2Dgid&sz=w1000",
        "https://drive.google.com/thumbnail?id=1r-Yv6f4JBScKDlxVgQO_9o-CO3LXACeV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FzZf3LGjn9V4U4SoEAxCSe4v4BAviGFj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Ciom4fziwYgDvz3iAeaizJEiMDlASG9Z&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1pOpDy-unV8tJ4MFmAN80m8Hhk3WdK6xT",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Available in: Orange, Yellow, Maroon, Mauve Pink, Lime, Purple, Dark Pink, Offwhite. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Sharara Plazzo)"
        },
        {
          "label": "Available Colors",
          "value": "Orange, Yellow, Maroon, Mauve Pink, Lime, Purple, Dark Pink, Offwhite"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5286",
      "sku": "SBLSRK5286",
      "title": "Showroom Finished Product❣️ Tunic",
      "category": "Tunics",
      "price": 2400,
      "originalPrice": 4200,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "Black, Pista, Offwhite, Orange",
      "mainImage": "https://drive.google.com/thumbnail?id=1q4qPcMXr0h1hRpI6MNnjGSq2C1BSrd73&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1q4qPcMXr0h1hRpI6MNnjGSq2C1BSrd73&sz=w1000",
        "https://drive.google.com/thumbnail?id=1s5mlTGAnM2gGjPCsHBKWYkgaXoeizw4y&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Tzv5XJ2ZgQMXX5-9zs921SG2O9zw6j4E&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nixr5okgnyg9Y7Rbk3cDSTizGN-Hqcal&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NMH43dpWTIZiu3gEiRgMhH_B7639KCCM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AEkUhwX63ARkebrQjHJ6iAfukF_DFzpJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yCXwN9VyoWDzEhe7STWen5oP9aZJcwOb&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Bloi3tBVqwaboyN6RouyO0YgYessHiHj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1X8eoMo_pD0A1ctXypBBMP25lmtWgZTZ1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QjLWFVnxpZgVbHULwima5ILcNRyFDSGc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hf0u4m_PxiYd6D-_UpTAmcQ_ip4rHCeV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AYIaI9sT5s4SJYYT86l3gdaj2fX8ctag&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1bbjxByFiL7Dvt0PiwZQpU0OvpDEykgim",
      "description": "Crafted in details, this tunic brings together premium fabric and refined detailing. Styled with no, kurta length 37-38 inches. Available in: Black, Pista, Offwhite, Orange. Set includes: s. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Details"
        },
        {
          "label": "Dupatta",
          "value": "No"
        },
        {
          "label": "Length",
          "value": "37-38 inches"
        },
        {
          "label": "Bottom",
          "value": "🌷🌺"
        },
        {
          "label": "Available Colors",
          "value": "Black, Pista, Offwhite, Orange"
        },
        {
          "label": "Sizes",
          "value": "Range"
        },
        {
          "label": "Weight",
          "value": "900gm"
        },
        {
          "label": "Set Includes",
          "value": "s"
        }
      ],
      "fabric": "Details",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "s"
    },
    {
      "id": "prod-sblsrk5299",
      "sku": "SBLSRK5299",
      "title": "Category: Women’s Ethnic Anarkali Gown Anarkali",
      "category": "Anarkalis",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "Purple, Yellow, Pink",
      "mainImage": "https://drive.google.com/thumbnail?id=1Ni1NnY0KcGMUsX2-wc6-myY6YOFKzzru&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1Ni1NnY0KcGMUsX2-wc6-myY6YOFKzzru&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Qyxg32IKJI0H1uAgmgL9dE-ttltayeeX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JuXarwijJZC6nCJddP7eRle2ogVTDDOy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1oNXvs8QO1rDRMZXlG0xZUT3rUg9D6E8Q&sz=w1000",
        "https://drive.google.com/thumbnail?id=1moTKq6fuw3SoxILT1gjSUnthArT2QMRu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bln6XmQauhubj3Qj_X6fFBwuywTxgH3r&sz=w1000",
        "https://drive.google.com/thumbnail?id=1p82cQKXLFneXYRv4Ow2TkIldi9XpsxqN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gTXjFIrASt0Rv6A_XyW9DujU02zX6cd1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VEjulsSQIGZoiY5mnp7Nbfn5eLGgetRd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Rl7A_LqlBn5tyVPqADxt2O_TDwBqeWUD&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TVTM4QxSaIbi6QePnJQRGW-z3XoRFrmx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1V21G0pem1XX3-wLy_2IfnMRD2KQ-cCIW&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1FpyL1YZknEa80q-ewtAO4Ki7-iAIqOHX",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Available in: Purple, Yellow, Pink. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "( Churidar )"
        },
        {
          "label": "Available Colors",
          "value": "Purple, Yellow, Pink"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5293",
      "sku": "SBLSRK5293",
      "title": "Category: Festive Collection🚺 Anarkali",
      "category": "Anarkalis",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "Purple, Pink, Dark Teal, Dark Pink",
      "mainImage": "https://drive.google.com/thumbnail?id=1TJdquZzC-gqJsHq40dYc_Rp47AJLjBGT&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1TJdquZzC-gqJsHq40dYc_Rp47AJLjBGT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WcEZhDACAZSjq_03upxv7zDRcCG0tK5I&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gGBX5YzXuAGQ2hN12X13Nhi552F35Ws9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rUEyg63wGZaz61Vtmu-p35RcAT8Hd0RL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zJBrkA0BXyCeoXbT9isH3AC1U08UV4ih&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SHRl3zOVnUU2PCUyfWYgMgDd4a6QNqfF&sz=w1000",
        "https://drive.google.com/thumbnail?id=16I6z37778rmlrlhsrjAXOhCx5h2M8qLb&sz=w1000",
        "https://drive.google.com/thumbnail?id=14wXfMN6RdCbtmy-xrBBWJYjhqCrfQeXP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1OPuFhY-e_xsYvtlyB2QbpUe-m5fjick8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dgu8VHLcu4k_K5n_Z4wFah2YjXldMb7S&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_y0ojsbRGBUGc6GnxWnACppuP9Dnq_z_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gMU60ua4rRM2PAi7IN6yAoiCNTTOrBSQ&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1IwVq-L8_lrdBfbFNrC6JwM1YtAZNWGqw",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Available in: Purple, Pink, Dark Teal, Dark Pink. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Pant)"
        },
        {
          "label": "Available Colors",
          "value": "Purple, Pink, Dark Teal, Dark Pink"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5302",
      "sku": "SBLSRK5302",
      "title": "Designer Party Wear Look Top-plazzo Dupatta Heavy Embroidery Work Tunic",
      "category": "Tunics",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "RED, PURPLE",
      "mainImage": "https://drive.google.com/thumbnail?id=1qHPQQKplTp5LIczPGsL12KZn3h7toTWM&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1qHPQQKplTp5LIczPGsL12KZn3h7toTWM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Dz3FhUo3L-nI9LXDGwrC4DSzkfLROO55&sz=w1000",
        "https://drive.google.com/thumbnail?id=1j4pICXR1p4Wv2kBWSQsW0ckI0grtYKmp&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Jd2oi774RiHd8wGCkh6m1WpWzLnaLJnZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1w1hCW9WdJHEWW6pHBVYDmG7o7AYLQSSG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vJwWo9m3w4cMvwwdPeY4xNivCI4sjaSU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KVW8lQaTcKOz9PBfLzHe1ZIfNmOjgt0t&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Xw_nYXu4wD8IGhE3r6LcVBY9ERrfFb5y&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KXgWwJiPp7OyReTPktTqHw6_h0P38x3v&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gkMu7JZ-2yo7Oz-2x8a-z68Ic3CysbDc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1pzymGK64ZDwgiaAUIBMC1W0CY0Brt6SZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gUUrW6oQAvocPbS5KPwyNYNn84sCgWYx&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/18i5o--3Hy4nqzvQ4zIdVWHgz6G7OkUtA",
      "description": "Crafted in heavy faux georgette with 5mm embroidery sequence work with full sleeve, this tunic brings together premium fabric and refined detailing. Styled with with heavy embroidery work. Available in: RED, PURPLE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Heavy Faux Georgette With 5mm Embroidery Sequence Work With Full Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "With Heavy Embroidery Work"
        },
        {
          "label": "Bottom",
          "value": "inner"
        },
        {
          "label": "Available Colors",
          "value": "RED, PURPLE"
        },
        {
          "label": "Sizes",
          "value": "."
        },
        {
          "label": "Weight",
          "value": "950 gm"
        }
      ],
      "fabric": "Heavy Faux Georgette With 5mm Embroidery Sequence Work With Full Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5303",
      "sku": "SBLSRK5303",
      "title": "Designer Party Wear Look Top-plazzo Dupatta Heavy Embroidery Work Tunic",
      "category": "Tunics",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1k3cQDYaSLCUgr3U2iMnVTY-9DdFzJAFm&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1k3cQDYaSLCUgr3U2iMnVTY-9DdFzJAFm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RqyoIoYTRpkNVj-vL7UHXNk_ux0B2ljx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JE8tLHrCckgGpems6VNhm-SgBowaWVOs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UjQD3qvpwRtSQdbvkj6RSULnq6JK08LB&sz=w1000",
        "https://drive.google.com/thumbnail?id=12BF0vZn3CbyPaYq8qtgK5b7W8QtnUVon&sz=w1000",
        "https://drive.google.com/thumbnail?id=1t0_CbAQBet7EDla3nqSkbgIkDkavQPFx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SvYXYLL4u0Mjgi9Hg43MHxZF9tapdC_4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ovpNEfOHCTF5-ewbevo43ZzeABnQLKBx&sz=w1000",
        "https://drive.google.com/thumbnail?id=17TP2vfBIFNzSLKAIbaPhJSD-kTv8t4lA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mzwdyBFjiI1J2A42JSvs385-q5WkEI1a&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/10SS7_IMJhiOJJETw3HPkuWfYCHtCYn0w",
      "description": "Crafted in heavy faux georgette with 5mm embroidery sequence work with full sleeve, this tunic brings together premium fabric and refined detailing. Styled with with heavy embroidery work, kurta length 37-38 inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Heavy Faux Georgette With 5mm Embroidery Sequence Work With Full Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "With Heavy Embroidery Work"
        },
        {
          "label": "Length",
          "value": "37-38 Inch"
        },
        {
          "label": "Bottom",
          "value": "Plazzo"
        },
        {
          "label": "Sizes",
          "value": "."
        },
        {
          "label": "Weight",
          "value": "950 gm"
        }
      ],
      "fabric": "Heavy Faux Georgette With 5mm Embroidery Sequence Work With Full Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5304",
      "sku": "SBLSRK5304",
      "title": "Designer Party Wear Look Top-plazzo Dupatta Heavy Embroidery Work Tunic",
      "category": "Tunics",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1hdQQervZ4Q90xvgJfcCH997Ijg-O64z2&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1hdQQervZ4Q90xvgJfcCH997Ijg-O64z2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Z9XjN59IsXHlFeds4ymmNmwsNiDgIlUO&sz=w1000",
        "https://drive.google.com/thumbnail?id=15cR0gtSL5E-hSPz7eDHWRHleeLT31Zch&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LRNipU5jWdfRvqQLLHzYNUIE7BrTLPNg&sz=w1000",
        "https://drive.google.com/thumbnail?id=16zRmYcYEB6SMqRK5myTiB8WDYzyLW_1K&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jDXgWxEOt1ntJ9snAxyxuit3CV5jN6QZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zvEfLlDcUhfFnObZhjOvcxS_p-XXSU12&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-hQ7lC6ycBuyfhuSuHxTMP6qc9R4JsEr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1n9dF1Ftwl19ysV1JHIqMnv4Dx0qhnHcq&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/19ZfG5tR9xt5FyTHzH7eb152DTlP1Aq_R",
      "description": "Crafted in heavy faux georgette with 5mm embroidery sequence work with full sleeve, this tunic brings together premium fabric and refined detailing. Styled with with heavy embroidery work, kurta length 37-38 inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Heavy Faux Georgette With 5mm Embroidery Sequence Work With Full Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "With Heavy Embroidery Work"
        },
        {
          "label": "Length",
          "value": "37-38 Inch"
        },
        {
          "label": "Bottom",
          "value": "Plazzo"
        },
        {
          "label": "Sizes",
          "value": "."
        },
        {
          "label": "Weight",
          "value": "950 gm"
        }
      ],
      "fabric": "Heavy Faux Georgette With 5mm Embroidery Sequence Work With Full Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5305",
      "sku": "SBLSRK5305",
      "title": "Category: Women’s Ethnic Wear Ruffle Gown Anarkali",
      "category": "Anarkalis",
      "price": 2400,
      "originalPrice": 4200,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "ORANGE, PURPLE, BLACK, OFFWHITE, RANIPINK, YELLOW, RED",
      "mainImage": "https://drive.google.com/thumbnail?id=1DK5dR9DLHF9RuWsPjPnAaqAjIQpTwDdM&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1DK5dR9DLHF9RuWsPjPnAaqAjIQpTwDdM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DE5YsHLIY5xd5j9WYe425ilnFQUeXkdu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QgJSWO4AWuh0M4m0vzmlI0jxyadZFfrc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tbynHIO5uKysp95YdVHXZEm7rdTC8I84&sz=w1000",
        "https://drive.google.com/thumbnail?id=1OcG-4zQUQLZo7ERMjkhj_WKkavFRQJzO&sz=w1000",
        "https://drive.google.com/thumbnail?id=17pfX6PlZhwz7qORPE3LzHShHT40THon1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QlQWsRpcNT2aXWM7yDRhVvfOyeSKXL-T&sz=w1000",
        "https://drive.google.com/thumbnail?id=1umU2QxXtlJ7afTKdUroH0cBtagxTa39L&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NcH6vLt7eQcKjKUOwZs1WfCO-tlGVJny&sz=w1000",
        "https://drive.google.com/thumbnail?id=1IonronasFtgjP7_VzYU2kd0DUb-bmrL4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1YtEuv3FYGplJYbzAqHtod1yQltxnqWJk&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PUCXqU7Nk7wizpmm1AxlV0BZNk4qC-SX&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1CjgzLcijtB9KyMKyLgf3SsPBhEdJ9v-U",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Available in: ORANGE, PURPLE, BLACK, OFFWHITE, RANIPINK, YELLOW, RED. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Pent)"
        },
        {
          "label": "Available Colors",
          "value": "ORANGE, PURPLE, BLACK, OFFWHITE, RANIPINK, YELLOW, RED"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5290",
      "sku": "SBLSRK5290",
      "title": "Category: Women’s Ethnic Wear Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "RED, MUSTURD",
      "mainImage": "https://drive.google.com/thumbnail?id=1IbFILwCSepU0qByQXCBpHBdKAi6avfMI&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1IbFILwCSepU0qByQXCBpHBdKAi6avfMI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zDOxEfH0imeRHi80q5Vr4-0E74ozMPNr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RCP29aWQoPK0Cv8y0E0pfFbVDHmwpmGj&sz=w1000",
        "https://drive.google.com/thumbnail?id=157XYn4GeItqitlHtwm6djaKLt9BH2OuO&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gke27hYm3D38of_O9ZF8bTQgNKFM6Pyp&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KH1nrr9G1TQPHwe-LR_9M6UZe_BroTj4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1YOf4EWUFodZido-RmvdQmxzpEaj3Fvpz&sz=w1000",
        "https://drive.google.com/thumbnail?id=14bZ3BpXYchWUttVdpLTuzHjHzyZPpxOj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1enw2GktzM-YYDfjpjuWBQQ91DFP36zmM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Xsvi2wTecjoZkQIIDBUxCwnhmEwFYLPy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rGP98DJumzfM-fHwcRNPNkrMC5wQosdv&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qxQCTQOM5cICBDS7tvahOmKdYby7OyC2&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/12dGog0lJMGdXGnrBRFH2_rfdWKkdPMc1",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Available in: RED, MUSTURD. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Pant)"
        },
        {
          "label": "Available Colors",
          "value": "RED, MUSTURD"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5311",
      "sku": "SBLSRK5311",
      "title": "Category: Women’s Ethnic Wear Tunic",
      "category": "Tunics",
      "price": 2600,
      "originalPrice": 4500,
      "discount": "42% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1kHQQBAI0m4MG7c4MHBV1G_3HsM4hrQA1&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1kHQQBAI0m4MG7c4MHBV1G_3HsM4hrQA1&sz=w1000",
        "https://drive.google.com/thumbnail?id=197IezKo4zhT4GsphAgWziNXLHQULVM-Q&sz=w1000",
        "https://drive.google.com/thumbnail?id=1W6Y85ScWo_zvVSSO3z_7godoNYjEXBWe&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sRCZp5_xE_nG-VbQMnK0qsY7HJ0WOuV4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sD3dWKgg5y-GgY5c3cGj29WCleX27Ezt&sz=w1000",
        "https://drive.google.com/thumbnail?id=173HnR97Eq15iIIpRV7QSiblnJc8xrGn-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1oNKNrGk6iTlDBUe6dKfMQM7pFOtP8MZ6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eFAAWYHfBWgmlx1ynAS01pHcxcuDaN_8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cEVRLYyw_t-SwGZcH_0JqXRGrMtKcoOZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sMw-n5VMJHLadCqWskvXNeno7Jt9fO3A&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1Q2AfhYL8kIPLLeWBzQHILlAug2IDyOxw",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Sharara Plazzo)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5313",
      "sku": "SBLSRK5313",
      "title": "Designer Collection In Faux Georgette Embroidery Work Gown Dupatta Fully Stitched 🔥😍🥰 Anarkali",
      "category": "Anarkalis",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1vGdSCzeyXYotC39Ri_hI9KdxJ4HWUYHt&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1vGdSCzeyXYotC39Ri_hI9KdxJ4HWUYHt&sz=w1000",
        "https://drive.google.com/thumbnail?id=17nTrnkL3y26UEZdZRTDyokOxHtGgHNam&sz=w1000",
        "https://drive.google.com/thumbnail?id=1atxKm9MVKJVsuNH8WA6oe9hEbuZRf8Vk&sz=w1000",
        "https://drive.google.com/thumbnail?id=1aJyapc1sQXPK-j-vXiq1NtKTfHjHfjfo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vWtfQzztIeVbWysSNr1Blpc6qxUHCNcY&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dVfwdqXju2PEiH8oQIeUaIsHioH1DKEO&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1F4UAvWxkAQIkoKOv-GY7ixMb90kFNq53",
      "description": "Crafted in heavy faux georgette with embroidery work with fancy full sleeve, this anarkali brings together premium fabric and refined detailing. Styled with set fully stitched 🔥😍🥰, kurta length 48-49inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Heavy Faux Georgette With Embroidery Work With Fancy Full Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "48-49Inch"
        },
        {
          "label": "Bottom",
          "value": "👚"
        },
        {
          "label": "Weight",
          "value": "950gm"
        }
      ],
      "fabric": "Heavy Faux Georgette With Embroidery Work With Fancy Full Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5315",
      "sku": "SBLSRK5315",
      "title": "Designer Collection In Gmy Silk Heavy Embroidery Coding-3mm Sequence Work Top-bottom Dupatta Tunic",
      "category": "Tunics",
      "price": 2600,
      "originalPrice": 4500,
      "discount": "42% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "BLACK, GREEN, PURPLE, PESTO, RED, ROYAL BLUE",
      "mainImage": "https://drive.google.com/thumbnail?id=1oiGcuqbenqiUFqNYZZWmtovCBBF7ywQj&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1oiGcuqbenqiUFqNYZZWmtovCBBF7ywQj&sz=w1000",
        "https://drive.google.com/thumbnail?id=12OfPKiL9L_S4CrVWGeQ-z23YKK2J4O3E&sz=w1000",
        "https://drive.google.com/thumbnail?id=184-fi4QARcqiABGHXsoyWXSjvnUDMJnc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ML_9CuGSpoDgWyPi8ThIrCh0fL2YJrF3&sz=w1000",
        "https://drive.google.com/thumbnail?id=1N2toOKogR-MnFO_oDtZhnrMdOZqQArSJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LGxuCiFAwmotTjTDjHqRiPj8HXZLO9RU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NThvUWRxc3iD1L3ywZpRgAz7zoGZJK1U&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xqXD8neHOjOg9k0JYDrxt4ncjWsvx1wV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mBadif2jBdWRJLW9ZD0RoHrtDn-JwGRm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EqR0nYzjC31H3ZifNr0hvT1c_tpb2nLz&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GiG0c9_Fmam28LK4_GGsUuA1LA_AGu5A&sz=w1000",
        "https://drive.google.com/thumbnail?id=1munLEw8bow-yOWg_0jKO9Wf11FnMlg1j&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1ZxS6jCqby2zUAOaiEKnaTmF-7miTMEJL",
      "description": "Crafted in pure gmy silk with heavy embroidery coding-3mm sequence work with full sleeve, this tunic brings together premium fabric and refined detailing. Styled with set fully stitched 🔥😍🥰, kurta length 39-40 inch. Available in: BLACK, GREEN, PURPLE, PESTO, RED, ROYAL BLUE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Pure GMY SILK With Heavy Embroidery Coding-3mm Sequence Work With Full Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "39-40 Inch"
        },
        {
          "label": "Bottom",
          "value": "And Dupatta Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Available Colors",
          "value": "BLACK, GREEN, PURPLE, PESTO, RED, ROYAL BLUE"
        },
        {
          "label": "Sizes",
          "value": "."
        },
        {
          "label": "Weight",
          "value": "950gm"
        }
      ],
      "fabric": "Pure GMY SILK With Heavy Embroidery Coding-3mm Sequence Work With Full Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5316",
      "sku": "SBLSRK5316",
      "title": "Designer Collection In Gmy Silk Heavy Embroidery Sequence Work Top-bottom Dupatta Fully Tunic",
      "category": "Tunics",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "RED, PURPLE",
      "mainImage": "https://drive.google.com/thumbnail?id=101RXGPRrziqNGdcXpUDY0UfyTg0dKp6b&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=101RXGPRrziqNGdcXpUDY0UfyTg0dKp6b&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dnRpfiFNvV1fvthid9qT-Wa2p38ndLVa&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xSjnsf3cp9AHHCW7sr-rNL5o8QSR0om6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bio59CtWF-rRbtDAsLu-aWFUMa43z0wg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PXIgYvOpaKUm1rYBmtDo5c1CD1YX9cbs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dMEpAOKItrGOZ7wcYbk-EibasJ9y6DVM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GXB1A-SYj5qhoLG3brck4Mx6GAO79_Fh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vKoK6Z3NoetA-c8LgwPkXpn5zupjyZsZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=19fic0Vi1n8n7KXEv_d6_Q5xqiPGYqOqo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UKH92sR85n1T3jCRLahhDH_vseknJBOI&sz=w1000",
        "https://drive.google.com/thumbnail?id=16oVKnqxw0LPXkmGPG0H88JvPCN3qWUCJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1uQDYUDkCkW-eO94LaKFyV0d1P4eAMzqb&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1HOvYbthPOBxvQDle1KY3Hvk4gJw_-8q9",
      "description": "Crafted in pure gmy silk with heavy embroidery sequence work with full sleeve, this tunic brings together premium fabric and refined detailing. Styled with set fully stitched 🔥😍🥰, kurta length 39-40 inch. Available in: RED, PURPLE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Pure GMY SILK With Heavy Embroidery Sequence Work With Full Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "39-40 Inch"
        },
        {
          "label": "Bottom",
          "value": "And Dupatta Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Available Colors",
          "value": "RED, PURPLE"
        },
        {
          "label": "Sizes",
          "value": "."
        },
        {
          "label": "Weight",
          "value": "950gm"
        }
      ],
      "fabric": "Pure GMY SILK With Heavy Embroidery Sequence Work With Full Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5317",
      "sku": "SBLSRK5317",
      "title": "Category: Women’s Ethnic Wear Tunic",
      "category": "Tunics",
      "price": 2400,
      "originalPrice": 4200,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1VFlloLQ3IcQ7LRdlNJjmEIaVVuYdks0u&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1VFlloLQ3IcQ7LRdlNJjmEIaVVuYdks0u&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KUTbHRj_WVoyVqkjw1o-3cVM8dmqRH3X&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ChkYBbl1_PGk5h0ifHzLrIMjoX-ibwO0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bG6xXkXnZlGVGPH7WjQm3WMbNRw7gT5U&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lPEqy498Gxby77FeOMUsKBr5aXZZltPX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NL3oO3YQBO2aoqTWn58sk3JEVFFNBdud&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rrOnRol-AALhU6N40Ioof36z2MHkR8KF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1n3_A9oSpmiKT9yh62RFOcUVxGq7HO3f2&sz=w1000",
        "https://drive.google.com/thumbnail?id=18gmtJ9FjkmJN3GU_kG3t2_c2WkTX1K3D&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UJR1AU4xy1fcrfMI9C5lreuI-yQ-uolM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1E8RwKKOSWEwIKwQVCOmh4Yzdvl7vXTeg&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1dR15X0tZULm8Zcl9Ko5ioWEFKmrj0uDC",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Ruffle Sharara)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5318",
      "sku": "SBLSRK5318",
      "title": "Designer Collection In Gmy Silk Heavy Embroidery Sequence Work Top-bottom Dupatta Fully Tunic",
      "category": "Tunics",
      "price": 2500,
      "originalPrice": 4350,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1eyFJdMDbUlNwXixv_eoz2VyMeEqFx0Hx&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1eyFJdMDbUlNwXixv_eoz2VyMeEqFx0Hx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gn063SbAf6REY7aL0T0ZowRecxNm_ZjN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MzseaV_1xSiycjO5faav6Pgvyui_nsO0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NMaosNI75hDvhbozcjKzY9FS7MHbPrU7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1i0DTkmZQb3jGTXhxO1vsgtj64504V4fb&sz=w1000",
        "https://drive.google.com/thumbnail?id=14Pq2mdGW5wDzTzfsS7wB2y3DcuhhekVk&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Lqkl51gL_kxxDGIxP9FIiQ5hAgY7ad51&sz=w1000",
        "https://drive.google.com/thumbnail?id=1O5rypDg3W3N-k-10xd2lhttLlVcAzvo_&sz=w1000",
        "https://drive.google.com/thumbnail?id=183yxD1SNGmXqdGEiUyB0rTECgYr_PgbN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1t_HhMZfJGeX6blIVvT_YiHA9DvI8Qce6&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1IDXN3kc2spHnC7pQK5OwdeFhPF3DfmNq",
      "description": "Crafted in pure gmy silk with heavy embroidery sequence work with full sleeve, this tunic brings together premium fabric and refined detailing. Styled with set fully stitched 🔥😍🥰, kurta length 39-40 inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Pure GMY SILK With Heavy Embroidery Sequence Work With Full Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "39-40 Inch"
        },
        {
          "label": "Bottom",
          "value": "And Dupatta Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Sizes",
          "value": "."
        },
        {
          "label": "Weight",
          "value": "950gm"
        }
      ],
      "fabric": "Pure GMY SILK With Heavy Embroidery Sequence Work With Full Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5319",
      "sku": "SBLSRK5319",
      "title": "Designer Collection In Gmy Silk Heavy Embroidery Sequence Work Top-bottom Dupatta Fully Tunic",
      "category": "Tunics",
      "price": 2700,
      "originalPrice": 4650,
      "discount": "42% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "DARK PINK, BLACK, RUSTY MAUVE, SKY, GREEN, PURPLE",
      "mainImage": "https://drive.google.com/thumbnail?id=1vof0iJyspn47oqHtWXX_0MwvWMgAdbKS&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1vof0iJyspn47oqHtWXX_0MwvWMgAdbKS&sz=w1000",
        "https://drive.google.com/thumbnail?id=195r-mLZFcIFio_h6vSYN_TJ9y_4_w6Fs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tGAambS43OKbMY4Zb2royCp5tbGsXhl5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rpQcTf9sLsPVJrHg_9-NPA73tICEstGI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-ZkaAFB61_Wcs1LxbHWIjhEAo2uxGZln&sz=w1000",
        "https://drive.google.com/thumbnail?id=16hXBOo5u5hdt8gNtH9Ul7B9zy6MgoZbx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1S8XwkdmS9Mmbnlv1PmuITzIm2lyTHOTA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-9tfK4JVAU85VqBDkgD6_Uzcbpl42t74&sz=w1000",
        "https://drive.google.com/thumbnail?id=1I9KBDsjU4q1DDE76cMUn71NGGdI4C8kj&sz=w1000",
        "https://drive.google.com/thumbnail?id=11j-rCkzmlrdlAWuph8muSNmLhX0VCe1J&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qrT9b8zCy7DmjyCdSODG1-HRQb4y81UH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Fj_IAR5YlFSFblt6jsYTQQeAEguVB2HD&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1I5HmHtr6a6IeWWtlgqv36QuXjaVjjIw8",
      "description": "Crafted in pure gmy silk with heavy embroidery sequence work with full sleeve, this tunic brings together premium fabric and refined detailing. Styled with set fully stitched 🔥😍🥰, kurta length 39-40 inch. Available in: DARK PINK, BLACK, RUSTY MAUVE, SKY, GREEN, PURPLE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Pure GMY SILK With Heavy Embroidery Sequence Work With Full Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "39-40 Inch"
        },
        {
          "label": "Bottom",
          "value": "And Dupatta Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Available Colors",
          "value": "DARK PINK, BLACK, RUSTY MAUVE, SKY, GREEN, PURPLE"
        },
        {
          "label": "Sizes",
          "value": "."
        },
        {
          "label": "Weight",
          "value": "950gm"
        }
      ],
      "fabric": "Pure GMY SILK With Heavy Embroidery Sequence Work With Full Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5325",
      "sku": "SBLSRK5325",
      "title": "Designer Collection In Cosmos Gold Embroidery Work Gown Dupatta Fully Stitched 🔥😍🥰 Anarkali",
      "category": "Anarkalis",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1ClzPK79b-Q-lPwuTFICw4jjFCFOT706n&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1ClzPK79b-Q-lPwuTFICw4jjFCFOT706n&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RG8sUdwK5Sj-9IWMLTIJKiy5EdGCY5Gi&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yjCuiauNnjsC9f1MZjwIm0TLYfxOmF7r&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zCJvcfCzH4uqnZV9AAStxKQR2RQgHzNP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MFT2Ea6vCP1ZRLs33PpDOOuJB8h9v-Rx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rbY4H-m9S5TUbXHGX68vATO3vm6gcvc2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sz9CytbT-bcrzugAGR4jAmqoDZLw5lL0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1pTMyAMOXabOB0yDELFTupA3RZVQVKU3-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wqNu3-UHGMY4yC8e_4Xb_tyKeEGObMcm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hc4n_sr1dAKRFp9ic68noUJATyaLiOWj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1thmLCydzeNsStpJV55GoBw1pCxhpuvGD&sz=w1000",
        "https://drive.google.com/thumbnail?id=1uzdCDqQRFJzjT7yugx4gEUHQNaKg611V&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1QVrPhKPc40hyiaL93oL_6rELQh0giKYK",
      "description": "Crafted in cosmos gold with embroidery work, this anarkali brings together premium fabric and refined detailing. Styled with set fully stitched 🔥😍🥰, kurta length 48-49inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Cosmos Gold With Embroidery Work"
        },
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "48-49Inch"
        },
        {
          "label": "Bottom",
          "value": "👚"
        },
        {
          "label": "Weight",
          "value": "950gm"
        }
      ],
      "fabric": "Cosmos Gold With Embroidery Work",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5326",
      "sku": "SBLSRK5326",
      "title": "Category: Women’s Ethnic Wear Tunic",
      "category": "Tunics",
      "price": 2400,
      "originalPrice": 4200,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "ORANGE, OFFWHITE, PURPLE, PINK, MAROON, TEAL",
      "mainImage": "https://drive.google.com/thumbnail?id=1D-4q63pkHOdPTUpiC5rf5WyyFy2rTAC9&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1D-4q63pkHOdPTUpiC5rf5WyyFy2rTAC9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DN2q910Hr39PtYsV811NVQhanhZpv-O8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ye2jswlxRNs_9zubcv6kb-bUuEOJ73Z1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mlvlPdUMxjJu75lAxMEFrmjz9xgb-b_G&sz=w1000",
        "https://drive.google.com/thumbnail?id=1d4bDACfxDXNaQkDa0lhypUL5JykD04DY&sz=w1000",
        "https://drive.google.com/thumbnail?id=18Y7BXq45MmZN6TQm125c2lsx66EQdNbH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MrhEBzcwFfRz16mTBZczmXnMz8nBPP2f&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LakFKgGNoxQ6BCi7Fpyyz-C4G4XUcKLU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xWGpjBD5Ii078WhCiI6b0lSUBtzk3M70&sz=w1000",
        "https://drive.google.com/thumbnail?id=1uy23TNuHWHDSyU2iL14TO-deSx64ymcY&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dI2XwhHXYCaBzmm_vXyurQ2W0hBGYLtu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1F20joDf0XOBRq_239Mh2oW42CRr7i-mV&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1_j6KPJXt2XjC5Oef2hsPl2NJlDHmu7Ns",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Available in: ORANGE, OFFWHITE, PURPLE, PINK, MAROON, TEAL. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Sharara Plazzo)"
        },
        {
          "label": "Available Colors",
          "value": "ORANGE, OFFWHITE, PURPLE, PINK, MAROON, TEAL"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5328",
      "sku": "SBLSRK5328",
      "title": "Designer Collection In Faux Georgette Heavy Embroidery Sequence Work Top-bottom Dupatta Fully Tunic",
      "category": "Tunics",
      "price": 1900,
      "originalPrice": 3450,
      "discount": "45% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1R1W6szGxRtIw18J7lB_N1SiCpvTGcmGr&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1R1W6szGxRtIw18J7lB_N1SiCpvTGcmGr&sz=w1000",
        "https://drive.google.com/thumbnail?id=16hzAh_wCvNcLeNxZqn8D-v7XCHXr-ubs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iYHJ1nzqP4NRqOcNNe23fB9LMOTjaPGI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-iXu4GmIbT3HADfnm-ClIpEqkbrOKzS6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MsOV7nu9xTCgPr7MTcCxb5CVT-hf9H0j&sz=w1000",
        "https://drive.google.com/thumbnail?id=19KGAR1dh_sGx8UdK1fw3TaIK6X-tP0mS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JcLG4xerPaMh3vSooH5v1zxK8BUMZPl1&sz=w1000",
        "https://drive.google.com/thumbnail?id=12oj06R2-pqvzhst-1KZLvftxtsn6hDnT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vuusFYRpG0YBrhDK413KJWLR-9jjyOqq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wUKdDUYHdfFBwKrXlJrLbYBPOKVq5HsT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1W2ejFCdtq_Fht-9ntvcBbKHB_qL-RibC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1aCH5yZk8bN_joFhB7A9Q7AVlmYWZ32IC&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1i0_n-ISGxmGZrJeRPO-y869qUFtjbrPw",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Styled with set fully stitched 🔥😍🥰, kurta length 41-42 inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "41-42 Inch"
        },
        {
          "label": "Bottom",
          "value": "And Dupatta Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Sizes",
          "value": "."
        },
        {
          "label": "Weight",
          "value": "950gm"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5329",
      "sku": "SBLSRK5329",
      "title": "Designer Collection In Crunchy Silk Embroidery Work Gown Dupatta Fully Stitched 🔥😍🥰 Anarkali",
      "category": "Anarkalis",
      "price": 2500,
      "originalPrice": 4350,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1H6-A9FviNz7qzgNTdPcMiBduYSDuvqTA&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1H6-A9FviNz7qzgNTdPcMiBduYSDuvqTA&sz=w1000",
        "https://drive.google.com/thumbnail?id=12wn7NRdB9sMXChlcB04B3fw2CPNwmlv1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zAC50xFgEN6RI1jGRHX4yskIf_hO1BwJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1q36OhNS5mQuRe_fa35tVuKME9RGLTdFQ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DhW7J_xyZHcnw53-o07zmuUgf5P5l8Uy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tZHqJkps_YXLHIR3Y9AdAUOPnzwIDiNn&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ovHCzxG_ntoiIC6uQKBifXj7gpDXqVet&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JJGXJOPA7ktnhKAXQvF4hMErCJqael0R&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dxTz7PoO1w6dQbiHYg--BePfphXUWqWQ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1uWtGyJjvaU-UqY0Dp8t7-PRq-sPnEeyh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LOvE-FmC0BThvnjQKTqRhEOdJZ-7meI7&sz=w1000",
        "https://drive.google.com/thumbnail?id=15jv539LClfrtYupY1S2hTqUtk-kmRz3a&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1Gxk8lp3znol_KTKXwuUch9c1VpU5Fyu2",
      "description": "Crafted in crunchy silk with embroidery work, this anarkali brings together premium fabric and refined detailing. Styled with set fully stitched 🔥😍🥰, kurta length 48-49inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Crunchy Silk With Embroidery Work"
        },
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "48-49Inch"
        },
        {
          "label": "Bottom",
          "value": "👚"
        },
        {
          "label": "Weight",
          "value": "950gm"
        }
      ],
      "fabric": "Crunchy Silk With Embroidery Work",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5330",
      "sku": "SBLSRK5330",
      "title": "Designer Collection In Roman Silk Embroidery Work Gown Dupatta Fully Stitched 🔥😍🥰 Anarkali",
      "category": "Anarkalis",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1eYSr3uufZXUpYoDNCWZygiMFpF3uYtO0&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1eYSr3uufZXUpYoDNCWZygiMFpF3uYtO0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1f3QE5FB2OI-RhKfjN4hln3KKTJD_4ssR&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Zbmb7srYjEePuYlzdltgwpJePDrI5bJZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1T0qBHdPubqLHKAwQRFuBDNrOdQ59F31B&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FZznhx_5XqdDJxsa9tz40NfLdzDaGP4O&sz=w1000",
        "https://drive.google.com/thumbnail?id=1kJNEAGQteRfeHExDzsjz2nJlBfncBRPC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1M3P563GgCl83PZW8PSSXPS57ZDJQvliO&sz=w1000",
        "https://drive.google.com/thumbnail?id=1u1ezbfKtVFv72VfB4Iuw8_8XBomsYD6G&sz=w1000",
        "https://drive.google.com/thumbnail?id=1l3_sswFpN21bGag37dThOT_ILcg7N2pc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Xi73Ly9as8NaMGYpiVLcQqRrboeUDi-I&sz=w1000",
        "https://drive.google.com/thumbnail?id=176XssvIuJB11jET1h0IQvu4fhSu6t2Kl&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mSlkPok4T14kWawL787TMf9gXJo5QMlp&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1L4wQ5611QGUShunjdsBy6RbajOJSCKl_",
      "description": "Crafted in roman silk with embroidery work with full sleeves, this anarkali brings together premium fabric and refined detailing. Styled with set fully stitched 🔥😍🥰, kurta length 48-49inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Roman Silk With Embroidery Work with Full sleeves"
        },
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "48-49Inch"
        },
        {
          "label": "Bottom",
          "value": "👚"
        },
        {
          "label": "Weight",
          "value": "950gm"
        }
      ],
      "fabric": "Roman Silk With Embroidery Work with Full sleeves",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5332",
      "sku": "SBLSRK5332",
      "title": "Stitching :- Fully Stitched & Anarkali",
      "category": "Anarkalis",
      "price": 2400,
      "originalPrice": 4200,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1PPbHIKGq2EZinpFuybRYBz1atSkDFvTs&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1PPbHIKGq2EZinpFuybRYBz1atSkDFvTs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1w0Ag8DFC_qtHjJAn_4skhQV99cwwURic&sz=w1000",
        "https://drive.google.com/thumbnail?id=11YV-bibRx2LkNNqlEpOpKOS755g3_XAX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vy6alpkf3b2YY7C_GftpseJ2gh9Yl2u-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1N2I9uFsilg-Wml5SfX2d2miqO5V452_K&sz=w1000",
        "https://drive.google.com/thumbnail?id=15RfWNwNG9_xqx-z3rLZxZXe001L04nYP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1keYoTubPWPOHqOanYEXIb0G8FAmjWPto&sz=w1000",
        "https://drive.google.com/thumbnail?id=1q87V9oPNNnZGQgWkfG-MHF6r7yOfWU3F&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eS7D2E097h7T1H-P6NtH4q1lfzB7A9nL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1kB4yvzqNwzNIS8WUm-YnayJUP44bezN7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WsmL8keuxp8TFmmp7M-2UWz7bzsjiarE&sz=w1000",
        "https://drive.google.com/thumbnail?id=19hpPawph_q9XwJr8VlTq68bts5IY-j44&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/10DpDFja65yeCNCZnNjkMHlXdXOrZskSu",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "& Dupatta"
        },
        {
          "label": "Sizes",
          "value": "M(38), L(40), XL(42), XXL(44)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5333",
      "sku": "SBLSRK5333",
      "title": "Designer Collection In Faux Georgette Heavy Embroidery Sequence Work Top-bottom Dupatta Fully Tunic",
      "category": "Tunics",
      "price": 2600,
      "originalPrice": 4500,
      "discount": "42% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "DARK PINK, TEAL BLUE",
      "mainImage": "https://drive.google.com/thumbnail?id=1AGdNEWKEF3hGzZRVDzv-_xCpBduPzaU-&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1AGdNEWKEF3hGzZRVDzv-_xCpBduPzaU-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-102VZOeqnn6ahaKsQKnFfqXgqMFy-_W&sz=w1000",
        "https://drive.google.com/thumbnail?id=1D5tETdP9qotPpekTgtz3nke69OAtjQYT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1pR5dIEIwVl9wPGIWn0lee08Pvd1brAB9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lUi6DocgnqznAd9Zx_JlAwtDcsZWu2Fg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BoDBk6RMgmoHp5wF0IoL8rF5956reVQw&sz=w1000",
        "https://drive.google.com/thumbnail?id=14Rb0vhTG7hNpmKRV_xj3stFXGdpa7-fS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-2_-364pfeOvjdPIsPpBHWn9xnmY7Lwo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sr1YoyglRctzSwKJDdT8AF8tBz4GwjYs&sz=w1000",
        "https://drive.google.com/thumbnail?id=14keBZK_yBpEjiZbZpUYGPUTQkZNp0aQ9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1atiBbmuMVvc2Vd1LKgaO6xkaRG0-FTYw&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DOcqPRZZYKkoAnUcoIVc1WSNg98yAi87&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1xqR8sNz29Q9D2wFujfa0kloW-PP4p_XQ",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Styled with set fully stitched 🔥😍🥰, kurta length 39-40 inch. Available in: DARK PINK, TEAL BLUE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "39-40 Inch"
        },
        {
          "label": "Bottom",
          "value": "And Dupatta Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Available Colors",
          "value": "DARK PINK, TEAL BLUE"
        },
        {
          "label": "Sizes",
          "value": "."
        },
        {
          "label": "Weight",
          "value": "950gm"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5334",
      "sku": "SBLSRK5334",
      "title": "Category: Women’s Ethnic Wear Tunic",
      "category": "Tunics",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "SKY TEAL, ORANGE",
      "mainImage": "https://drive.google.com/thumbnail?id=1MsobdFJoBkTihb-YgmuAZtih_RR-iu4G&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1MsobdFJoBkTihb-YgmuAZtih_RR-iu4G&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Ps-5W4KSTqx7-XVv8Q0IUbCnpbf4nObJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=19YdlyF47rnawGnRf_kH_qcJzrHF_mWvo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1u9RYxksx3-Bkq9HiGGzZBoU6wbTwcsKK&sz=w1000",
        "https://drive.google.com/thumbnail?id=16H15ebxUYanah_fRnJxspSdhKcDLiofD&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EKfMPuC_2EEhVemwbYEGKcW7IzOHc7iD&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RhAyY12UvJXJ-Szjnu8tx19sKl511jnb&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DAjB3UDGiHV7z6ZcyJw-XDSv_3D9RiRT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1o0VQnLeDZ1n0qRSA1h80QcS_QvxZiyZl&sz=w1000",
        "https://drive.google.com/thumbnail?id=104yGTVOopfwLBVDUdeddyTfTLOwKVt54&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FoXt0wW0lKQmgpaqJEcW7MgJoiVfbbRM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1emqtlnbsmj7hClyxORB36XKiFp9T32kx&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/14ZFxP2GWQChdEbhrBUcp4xXDFisfbUvc",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Available in: SKY TEAL, ORANGE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Sharara Plazzo)"
        },
        {
          "label": "Available Colors",
          "value": "SKY TEAL, ORANGE"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5336",
      "sku": "SBLSRK5336",
      "title": "Category: Women’s Ethnic Wear Tunic",
      "category": "Tunics",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "RED, BLUE, BLACK",
      "mainImage": "https://drive.google.com/thumbnail?id=1SKA49Mtf_uXWh_TGMpFWWx5fNK9AYxLJ&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1SKA49Mtf_uXWh_TGMpFWWx5fNK9AYxLJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jq5qEg1J8ymayIdYI6hlvQtGH9NrfJRC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DBTtvyArIhrVMqvTBQiotoybQNrUeaRY&sz=w1000",
        "https://drive.google.com/thumbnail?id=120KY_4oHN3sMyKGAi-1DK3EUFP0VYnXA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HUZ4fm4RgtzKcsnYeT9jXuReq0fD50vm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AwxgaAjTa60W-ALlybMXRAGX2NMLdsxF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jpnCGRMYDQKXcBqcMVF9LG-KM1qXFssZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1l0VNeDsP1do4OGUAx3Q_R7cPwRivBCsS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yYlp87JyuTjv8mQyDlHgeSgTxljJu7JK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1G3BVOA9V6Zeb5U9uR6854n5QOmVCaNfI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NX7MWkO4i8fEJJH6FAEzJJK1HnY8jtmo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1F2HSD7RgpwQgmIB4U59il_WJ7ccBXwW_&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1xs6Vfgu1qYf_vOPMkFe7l0BEBPASJZ4V",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Available in: RED, BLUE, BLACK. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Farshi Pent)"
        },
        {
          "label": "Available Colors",
          "value": "RED, BLUE, BLACK"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5337",
      "sku": "SBLSRK5337",
      "title": "Category: Women’s Ethnic Wear Tunic",
      "category": "Tunics",
      "price": 1900,
      "originalPrice": 3450,
      "discount": "45% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1wMTjasr9516xwXhJBeaUfKJsF2HY0rB2&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1wMTjasr9516xwXhJBeaUfKJsF2HY0rB2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iHibeYIRjolX4ngJ1QbVMLuLQH1MjB6x&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Ez2OUq03g65yaBbgM95p12olN_9jIzl3&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Ha92hgD9AMdU25kqSMV6mxhyGFUwbAHF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WCfTG7yWpSoCrgsbalRc1nsc12Ee0SzY&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mbc2m2GoQ7baBgRZHgNQWWbRQYnsMx_H&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Y4N-1E16sYuaTCjvPBpsc641sIKCVd3B&sz=w1000",
        "https://drive.google.com/thumbnail?id=1O4NMkeW7Jx5IyddsAQNUUvtcHdgl5PBi&sz=w1000",
        "https://drive.google.com/thumbnail?id=17IOSnqVb8zGzhHH4nJ4XLhDP0nmNup6F&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LRIG3v4d8SNuOOvSXwfofHoW5HzXGqMZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=16ryTP0ddlbgZv9u-1rJlS7gPnVdwcELV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dfvcmtQD2VsVnT63NDtd68b2OQrk5N6n&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1fjZuKgOdmvL1a1pLhbxWJ_WdeBK2EYD2",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Farshi Pent)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5339",
      "sku": "SBLSRK5339",
      "title": "Category: Women’s Ethnic Wear Tunic",
      "category": "Tunics",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1Ln5xuVKFEjHmnSHKtnVGysQUUM3q7HOS&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1Ln5xuVKFEjHmnSHKtnVGysQUUM3q7HOS&sz=w1000",
        "https://drive.google.com/thumbnail?id=19WY_T1g19U0vKB4QaLFS9gYE9p062UoU&sz=w1000",
        "https://drive.google.com/thumbnail?id=19MOSt1pdftH638U8_xk0iFvA-02F7kkW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EUV23Hnk19rG-XrxTLECIC07JcmLc1Vh&sz=w1000",
        "https://drive.google.com/thumbnail?id=18PL-qHkxP_99cTmrm3_uUCPqa2bArbsJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1XOgPD87NFGeKJE9AktWuohPNnrJTI29N&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UTOLpxdNFMNU7ih8QCs23CbquLKxvZ_a&sz=w1000",
        "https://drive.google.com/thumbnail?id=1REN4hWi9eoRLj4B1TWoP-HbXJYxvT_ss&sz=w1000",
        "https://drive.google.com/thumbnail?id=1aredieqtxNPFY87wlRzj09GW9Xajyf8r&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LyMvY8jMRqbOrVlC1phXlezzJIxyGknz&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_uDQaVN9CQBy6SrVt7ALIxarEVFCaPhL&sz=w1000",
        "https://drive.google.com/thumbnail?id=10okTToZdIqAKcV7M2ysnX_Q-TpdRZs8C&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1S0ue89Rht0TEj14l158MBkoW9TkRHF4D",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Sharara Plazzo)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5340",
      "sku": "SBLSRK5340",
      "title": "Category: Women’s Ethnic Wear Tunic",
      "category": "Tunics",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "SKY, PINK",
      "mainImage": "https://drive.google.com/thumbnail?id=15Ud8FSQHzV3CC3WTcMm3VqK2oU4zulp6&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=15Ud8FSQHzV3CC3WTcMm3VqK2oU4zulp6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1fpZjaDp_xsL-RwIpCKSRgpijS0TB_8Fx&sz=w1000",
        "https://drive.google.com/thumbnail?id=15PuLxYZ1y1s94ZFEKgC86kuWkTEjmq9X&sz=w1000",
        "https://drive.google.com/thumbnail?id=1uZVcxoyrl_Rexbw38evhkuuEPD-g1e0g&sz=w1000",
        "https://drive.google.com/thumbnail?id=1S0iWgOLIZM7DpZySIAZMcZK9f9vOrOYX&sz=w1000",
        "https://drive.google.com/thumbnail?id=15GoX8vR2VcSZbTtaeqYL87ZhP6xeYbab&sz=w1000",
        "https://drive.google.com/thumbnail?id=18fdy-BzhbGV3q0x-8pCbrByLiTRzwiKB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VGgtmpMvRDtJ-Uzqc05_D4kirfBUwLF5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nsXp5bbVrRoi_wyF3yLs6HlvSYEodVPH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sIIyyfsHqEJdiH19BANNnZ9prfeRpEKq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tMXXr9WSNqXskcS_PXvjA54CayExAdvd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nW8Wbwl_poEWi9e1fSziZXvcPMfVvbor&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1fgvEZkqBRgz5w6kVhCCuAG2BDKTSpwvn",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Available in: SKY, PINK. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Plazzo)"
        },
        {
          "label": "Available Colors",
          "value": "SKY, PINK"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5341",
      "sku": "SBLSRK5341",
      "title": "Designer Collection In Heavy Faux Georgette Silk Top-bottom Dupatta Fully Stitched 🔥😍🥰 Tunic",
      "category": "Tunics",
      "price": 1900,
      "originalPrice": 3450,
      "discount": "45% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1GtOwbQyOAR0Tf2rtQ5ryfj9WUiQskNQl&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1GtOwbQyOAR0Tf2rtQ5ryfj9WUiQskNQl&sz=w1000",
        "https://drive.google.com/thumbnail?id=18upTiaJ3xXA9D1sMZVhsiTGWKO4DHPBU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vWUTdt8YFNLzZHulyZoDyQlfsNe2oGJt&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SrtUet9ozXz2SuECteBK18cN9Y9IMnQi&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DpUn5Huvd8qi-ZS1cL2Rbg8BeNnxOJbh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GZouYxf-VxOQq25u9HsZaKaNge_m7Iam&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SHr19a3ZLnvvfRvkoOa0AFoF74WdedLM&sz=w1000",
        "https://drive.google.com/thumbnail?id=16rZm1HTTDBN9Qt7PhshoKf85nZgTmxyl&sz=w1000",
        "https://drive.google.com/thumbnail?id=1am68O4LL230hieR47hdH84Zd7tF9q-AU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1A5Q02-XnpHsihOyJHh86rQZ7jKNLBQ9H&sz=w1000",
        "https://drive.google.com/thumbnail?id=19xHSJxGjrS2kD4f0VlNjjHXG37krUTdV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JZ6Wpi9osA7mtCjrAoIuKkZtteAepZsh&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1X24G4HIFCppEaZ39AoGF-9OcTl8rlCtq",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Styled with set fully stitched 🔥😍🥰, kurta length 33-34 inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "33-34 Inch"
        },
        {
          "label": "Bottom",
          "value": "And Dupatta Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Sizes",
          "value": "."
        },
        {
          "label": "Weight",
          "value": "700gm"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5342",
      "sku": "SBLSRK5342",
      "title": "Showroom Finished Product❣️ Tunic",
      "category": "Tunics",
      "price": 1800,
      "originalPrice": 3300,
      "discount": "45% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1UCBQqXReUmbHEdHXDqkltAlR-muY7Sbw&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1UCBQqXReUmbHEdHXDqkltAlR-muY7Sbw&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FhK8ErqKCBPKQf62qEOB84yXtknIhNPq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FOkCYT3vp_IE7H1FOGqarC23mGBFRtKa&sz=w1000",
        "https://drive.google.com/thumbnail?id=17XQex7sF6KOz8RrZDAVoyxwZfRHUlJxd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bTiNuVnnI0d0j13NP-mDj_1FRXfP_-KI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Rq_J4mGilP-ISARSOi_-Cn108zPjcLwq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zYOgLA-hKBvXxKh7bPIIAwEhUM97EQOH&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1iu_P9RooVpGktChxV5S9NmHunRjn-42o",
      "description": "Crafted in details, this tunic brings together premium fabric and refined detailing. Styled with no, kurta length 39-40 inches. Set includes: s. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Details"
        },
        {
          "label": "Dupatta",
          "value": "No"
        },
        {
          "label": "Length",
          "value": "39-40 inches"
        },
        {
          "label": "Bottom",
          "value": "🌷🌺"
        },
        {
          "label": "Sizes",
          "value": "Range"
        },
        {
          "label": "Weight",
          "value": "750gm"
        },
        {
          "label": "Set Includes",
          "value": "s"
        }
      ],
      "fabric": "Details",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "s"
    },
    {
      "id": "prod-sblsrk5343",
      "sku": "SBLSRK5343",
      "title": "Category: Women’s Ethnic Wear Tunic",
      "category": "Tunics",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1xtHu0t63xr_0vlvHcKuCkSMoaaOt89nE&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1xtHu0t63xr_0vlvHcKuCkSMoaaOt89nE&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Gb27KnEm_PgUqBrZzvOls6DRFne7cXoW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NnlvYhJNi3VeYGNW8S4j6DfZJvIfNBil&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ifZFL7fv_sodVC4Vgbur0tLsx4r-dSN2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nxgGi8Q6i6hOzMiGwAs-5ZWZ2ip8ASfG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gq2n9QHxXKstIzr8Vfof4FhksIfXeeP6&sz=w1000",
        "https://drive.google.com/thumbnail?id=10KtsavBJQFBOonvt1dbUAd929l7W_R3v&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HnaRgjE8naGmclxRMkk722ZC0rmzMpGq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TpiIFdXQsnILRNxQQwjhi5TaPeaDID1o&sz=w1000",
        "https://drive.google.com/thumbnail?id=1apw9i8JeaYa8cYP1q6Hm4NIcVLggp_hH&sz=w1000",
        "https://drive.google.com/thumbnail?id=13Zf-w9_mDMGaO07fLkXSlCWWzensTmJM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hUH1C_IQNfnEuCy3QSw2w5TEgPurFzEi&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1PVtcD8S14udJbjnln4HoHUgG1bC7seOS",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Plazo Pent)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5344",
      "sku": "SBLSRK5344",
      "title": "Category: Women’s Ethnic Wear Tunic",
      "category": "Tunics",
      "price": 2500,
      "originalPrice": 4350,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1zSIJlHHexzqIqN1p5MvO_asAATjsdVW7&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1zSIJlHHexzqIqN1p5MvO_asAATjsdVW7&sz=w1000",
        "https://drive.google.com/thumbnail?id=191t27waa1v29I7WePb0Dq_-C5rhq6Vq8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1chjUrLLQTZxZBtjEPozJ5zOd6i-xFjnJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1B55SSmGaZ8rEi6_y_r4BFQvMyoMddXwF&sz=w1000",
        "https://drive.google.com/thumbnail?id=146Y0pD_K0anFl2vDiP2yYMLDB3LCwui6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UQh8MhAhbbE_e975WVfBQZr1_xUd9i4u&sz=w1000",
        "https://drive.google.com/thumbnail?id=1N3D_9Qu4zbgDZ1_XU3gyv2__d7BgqtG-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1OOcM_AkQEI09DZEoYrfiGjDPjsD20ByI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qv3nTO7TA24xN_1VFYumctCDrtX507Rq&sz=w1000",
        "https://drive.google.com/thumbnail?id=18ONBwSNVeJiteOiI34tz9WEcD3lWrGMp&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iuYkRSBaY_BmXOvBZa8Qia_Y8Rfr4o9k&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BVz4dazCQgD3mh538BSHQr1s7Dy4935a&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1s9_SRMxkONysSz3I6a2pZOuRgIHvLEBd",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Lehenga)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsrk5345",
      "sku": "SBLSRK5345",
      "title": "Category: Women’s Ethnic Wear Tunic",
      "category": "Tunics",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1MtGoAdcpqmg5SkSXs7Bx7ji3rZoaxkSW&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1MtGoAdcpqmg5SkSXs7Bx7ji3rZoaxkSW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VKFaenNiaQH0-iaFW14ubdX4fftTaVKt&sz=w1000",
        "https://drive.google.com/thumbnail?id=1p2Y31xogGDRz_HWYy4CH2mcCjXZIww2h&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tPwwu8wcI4u4ZoFr_EDekfa4f5Eg9Bev&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mvVEGOCQbfH5KzjAnkp7hnAtMIkeZ9-N&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RbdJcj2Fv88wCPr_TcWgSqPLIwEU0vn6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1IdCg48g5-L4AT554FMofhsXmOIVB1uPA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1b-aqvnyNNv_YIpJimegCASuRWtVy57Jj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TD2IYr9V3WHkpbKRm7aeA1FZnP6S17cd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HYAfuStGxbNlhJN1G5HTJOqnml5cf4Gd&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1rboiaMjZReE9GuNx-fLxAZZnHLmO7joR",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Farshi Pent)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf5008",
      "sku": "SBLZF5008",
      "title": "New Launching Heavy Designer Party Wear Look Gown-dupatta In Heavy Multy Thread Anarkali",
      "category": "Anarkalis",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "WHITE, RED, RANI, RUST ORANGE. TEAL BLUE",
      "mainImage": "https://drive.google.com/thumbnail?id=1bV27xk3SGUjqAUCL8IdQQfNrvdLFrF05&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1bV27xk3SGUjqAUCL8IdQQfNrvdLFrF05&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tLMCHaOE9Ne9qSBC0-Y9mpJmgYsysuSA&sz=w1000",
        "https://drive.google.com/thumbnail?id=180-WdMR8DuAce9jEIQEHB5c2W2R3FP1n&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DeiYKN7vTufipi6Bt7G1rt7v5wMlDHrj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1U9CSlUgJGQBiye1ncFi0I7hv2NRPwnkS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1IYRmI_LU_g4ocZOhje-64FLFUs8UnBrb&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Qitu6hwWGstSZ-jytSWnXnasmg-vFoLK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KW2PWc9BjEoK79R_W7HSKVsiQtQZG-E2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RUmq4UiYxQSjTIhMo_gC2AFCGtXpRyRg&sz=w1000",
        "https://drive.google.com/thumbnail?id=161qFWpm54QLcZR_Zd6oZsF09Fu9J3rDD&sz=w1000",
        "https://drive.google.com/thumbnail?id=1OIkdLYSC9dg6hWffRFN2KtXbjL8MzPFT&sz=w1000",
        "https://drive.google.com/thumbnail?id=10XJEJ8x4i7fR7FbTMyqY4SQF9RGlCgqz&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1xccogqfgZwq16pt2fRwKIRzbi1nIAT09",
      "description": "Crafted in heavy georgette with, this anarkali brings together premium fabric and refined detailing. Styled with in heavy multy thread embroidery sequence work, kurta length 53-54 inches. Available in: WHITE, RED, RANI, RUST ORANGE. TEAL BLUE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Heavy Georgette With"
        },
        {
          "label": "Dupatta",
          "value": "in Heavy Multy Thread Embroidery Sequence Work"
        },
        {
          "label": "Length",
          "value": "53-54 Inches"
        },
        {
          "label": "Bottom",
          "value": "Micro Cotton ( Full Stiched )"
        },
        {
          "label": "Available Colors",
          "value": "WHITE, RED, RANI, RUST ORANGE. TEAL BLUE"
        },
        {
          "label": "Weight",
          "value": "1kg"
        }
      ],
      "fabric": "Heavy Georgette With",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf417",
      "sku": "SBLZF417",
      "title": "Designer Party Wear Look Full Heavy Embroidery Sequence Work Gown Fully Stiched Anarkali",
      "category": "Anarkalis",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1WfBiBNxhxZX2Q31bATXp1zDDvaQJAqFb&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1WfBiBNxhxZX2Q31bATXp1zDDvaQJAqFb&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Mak0iVw0vgMDY7HlBDcMuEjUhiXKvn99&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rQX9QmxZcTot9P_GnPGzTOHkBwr0v-Cu&sz=w1000",
        "https://drive.google.com/thumbnail?id=17AZJKy-JCGYWea3A1ZvZMarAe0Db1YdF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yQWCxZB6avWPWWVuS0dGvfIopJFwppi_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1XkZh2Yd6GJtFsSOmydAOvR02XFWKlpp3&sz=w1000",
        "https://drive.google.com/thumbnail?id=1slOsK8-nWKZahMzoZaRYo1It-Pa23Om3&sz=w1000",
        "https://drive.google.com/thumbnail?id=19w9C0RX8InatzUri1fcnRUW0X0jy2Foj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1taxoF9EbfzMkTi9ggBeyzc8_LFlERe1s&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1VfhjpWJt9uOunG2vYX1um200QhBsahn1",
      "description": "Crafted in heavy gold crush silk with, this anarkali brings together premium fabric and refined detailing. 3 meter, styled with collection, kurta length 51-52 inches. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Heavy Gold Crush Silk With"
        },
        {
          "label": "Silhouette",
          "value": "3 Meter"
        },
        {
          "label": "Dupatta",
          "value": "Collection"
        },
        {
          "label": "Length",
          "value": "51-52 Inches"
        },
        {
          "label": "Bottom",
          "value": "Heavy Creap Fullstitched Free Size"
        },
        {
          "label": "Sizes",
          "value": "✂️📏"
        },
        {
          "label": "Weight",
          "value": "1 kg"
        }
      ],
      "fabric": "Heavy Gold Crush Silk With",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf419",
      "sku": "SBLZF419",
      "title": "Designer Party Wear Look Full Heavy Embroidery Rembo Sequence Work Gown Fully Anarkali",
      "category": "Anarkalis",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1efwK-O3YQi-GgR1ImBs1IExGhr1vyrf6&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1efwK-O3YQi-GgR1ImBs1IExGhr1vyrf6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LbB670xixx_QbuM3A43KM6wMW9DPzlRk&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qKv4evUMTCj1Cses9IR118Ht1r0OOyyx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dq7QDiGYV7ynuU-QNY-tY7DDNIL8n5mi&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ul9-YMxMtwMSUXJ6u6kNHsPKPFvXokzs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VqTreFrywuCs5x7osYiLa0uQfU7F8YJx&sz=w1000",
        "https://drive.google.com/thumbnail?id=17fLQzyEw3-rLWpKqyHi0e4O8ladw3rU_&sz=w1000",
        "https://drive.google.com/thumbnail?id=14C5kHrjjkiFKy0UDjfbbvsSIc-i_i5Hy&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/16nPUiWH-__R3DqIqcVv7R8NS1bZ8Ym5g",
      "description": "Crafted in heavy georgette with, this anarkali brings together premium fabric and refined detailing. 3 meter, styled with collection, kurta length 51-52 inches. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Heavy Georgette With"
        },
        {
          "label": "Silhouette",
          "value": "3 Meter"
        },
        {
          "label": "Dupatta",
          "value": "Collection"
        },
        {
          "label": "Length",
          "value": "51-52 Inches"
        },
        {
          "label": "Bottom",
          "value": "Heavy Micro Fullstitched Free Size"
        },
        {
          "label": "Sizes",
          "value": "✂️📏"
        },
        {
          "label": "Weight",
          "value": "1 kg"
        }
      ],
      "fabric": "Heavy Georgette With",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf420",
      "sku": "SBLZF420",
      "title": "Designer Collection In Natural Crep Silk Top-bottom Dupatta Fully Stitched 🔥😍🥰 Tunic",
      "category": "Tunics",
      "price": 1800,
      "originalPrice": 3300,
      "discount": "45% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1rBSzSl96yDG4qVXTCdaEGd_s1rt3dpsY&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1rBSzSl96yDG4qVXTCdaEGd_s1rt3dpsY&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NjHMVL3UhthIr26bBl3WMAOVxdOcdT8b&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HPDRNkIC0mjm_16UBhbwTkNTsfqXelYt&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mOuOLjbj-T3O980DdGKO8myerO36ANOu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GWsZhCOG_Dpv2fP_OZIpo8b_K2gHlwbP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1um5p4TF1Oq1krk6D_Tnmb1HC-HXD3Evn&sz=w1000",
        "https://drive.google.com/thumbnail?id=19EIKF4ZHh8rBexnY2JZH4Aabyn0XIlUn&sz=w1000",
        "https://drive.google.com/thumbnail?id=1H5CW7Ry0aJCq14iDODMeaMYmEEkeGxVT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BW9xW5ubDASwUKCogZ7Q71KyuIo7goa5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AI2MHn1bhzCMJtJ2lIx8TjypHPF1FIye&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sVAMIZlUjscBK_TjTDdwsYS_lUuxVyge&sz=w1000",
        "https://drive.google.com/thumbnail?id=18xEp4Xr_6Y7ABKu9qsrPLsiQa1d3ugC5&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1mU7jc6HFG1d_WmS-xrl_R0Ap8M--nhwM",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Styled with set fully stitched 🔥😍🥰, kurta length 39-40 inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "39-40 Inch"
        },
        {
          "label": "Bottom",
          "value": "And Dupatta Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Weight",
          "value": "850gm"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf422",
      "sku": "SBLZF422",
      "title": "Dupatta Fully Stitched Collection 🔥😍🥰 Tunic",
      "category": "Tunics",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1iREG9iSmTDncmoHlZMzPPXStay5AXqwx&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1iREG9iSmTDncmoHlZMzPPXStay5AXqwx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KopFk5Axtmhi-4NVkb9KXQ9qqHpOFexy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1g_j-Pja55uIYw-3JjMEaoO-faND2669t&sz=w1000",
        "https://drive.google.com/thumbnail?id=19ZeTOonfaYqREF32t_L0mud-tBowUeJV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UWFyvRcS8XlWGQ3Az01DGuinU2smUkBJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1CERLq4PBw6oHIY6Bp1UiTt7bexz4m6hg&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1mn7K-Ubb8EtPPTULK_rwvO7uVZVeyNZ0",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Styled with set fully stitched collection 🔥😍🥰, kurta length 38 inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "Set Fully stitched Collection 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "38 Inch"
        },
        {
          "label": "Bottom",
          "value": "👚"
        },
        {
          "label": "Weight",
          "value": "1 Kg"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf419",
      "sku": "SBLZF419",
      "title": "Embroidery Rembo Sequence Work Gown Fully Stiched Dupatta Collection Anarkali",
      "category": "Anarkalis",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "PEACH BEIGE, MINT GREEN",
      "mainImage": "https://drive.google.com/thumbnail?id=1efwK-O3YQi-GgR1ImBs1IExGhr1vyrf6&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1efwK-O3YQi-GgR1ImBs1IExGhr1vyrf6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LbB670xixx_QbuM3A43KM6wMW9DPzlRk&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qKv4evUMTCj1Cses9IR118Ht1r0OOyyx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dq7QDiGYV7ynuU-QNY-tY7DDNIL8n5mi&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ul9-YMxMtwMSUXJ6u6kNHsPKPFvXokzs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VqTreFrywuCs5x7osYiLa0uQfU7F8YJx&sz=w1000",
        "https://drive.google.com/thumbnail?id=17fLQzyEw3-rLWpKqyHi0e4O8ladw3rU_&sz=w1000",
        "https://drive.google.com/thumbnail?id=14C5kHrjjkiFKy0UDjfbbvsSIc-i_i5Hy&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/16nPUiWH-__R3DqIqcVv7R8NS1bZ8Ym5g",
      "description": "Crafted in heavy georgette with, this anarkali brings together premium fabric and refined detailing. 3 meter, styled with collection, kurta length 51-52 inches. Available in: PEACH BEIGE, MINT GREEN. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Heavy Georgette With"
        },
        {
          "label": "Silhouette",
          "value": "3 Meter"
        },
        {
          "label": "Dupatta",
          "value": "Collection"
        },
        {
          "label": "Length",
          "value": "51-52 Inches"
        },
        {
          "label": "Bottom",
          "value": "Heavy Micro Fullstitched Free Size"
        },
        {
          "label": "Available Colors",
          "value": "PEACH BEIGE, MINT GREEN"
        },
        {
          "label": "Sizes",
          "value": "✂️📏"
        },
        {
          "label": "Weight",
          "value": "1 kg"
        }
      ],
      "fabric": "Heavy Georgette With",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf427",
      "sku": "SBLZF427",
      "title": "Category: Women’s Ethnic Wear Anarkali",
      "category": "Anarkalis",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1Xz5WX9Y2pdNyqmd0UOb08kB1uaWd_2c-&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1Xz5WX9Y2pdNyqmd0UOb08kB1uaWd_2c-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1W9mPcXc7NHMSohMwX3Xp87Ta-hpVV97Q&sz=w1000",
        "https://drive.google.com/thumbnail?id=175eKTqYm5gRl4TaVCCWTpyTEA9vhM0fO&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bEr06-Mg8xId586z3zib-E2GB0f3GudV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-GA4Ps5EPxMsEVEJrcfCD6WQj_nMotyr&sz=w1000",
        "https://drive.google.com/thumbnail?id=13XK2OkI4ZRuJYuB9Q_QhkN6RGFIyzfNa&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UMPDMUpUsg5AT_WDpAlPy1TIIz3DMZMz&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PaDsB_JtnmKuJDdJLPuab5xVgPOoA2X8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GwgsORmYpvYwUIQY-0R_-YPN21xF-GZY&sz=w1000",
        "https://drive.google.com/thumbnail?id=19cSzDRUriajo21RU9x0vUO-3L6hhUuDx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WTNq6pqnhTvopWUnl16yV9XS1iz0mKr3&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/15K7aRkWaBln5t_AD39RQDgwY6xShB40s",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Pant)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf5010",
      "sku": "SBLZF5010",
      "title": "New Launching Heavy Designer Party Wear Look Gown-dupatta In Heavy Multy Thread Anarkali",
      "category": "Anarkalis",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "YELLOW, RANI PINK, BLACK. RED, OLIVE GREEN, DARK ORANGE",
      "mainImage": "https://drive.google.com/thumbnail?id=1c_J4Zwqgjf-Bi7zFlQoyqX7wStXZTP1x&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1c_J4Zwqgjf-Bi7zFlQoyqX7wStXZTP1x&sz=w1000",
        "https://drive.google.com/thumbnail?id=1OSEMFZgIlp1RX41wcpFE78UANTJKzRcd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1p5GEWel8AzbVuACNwkGVLB4VOjKlO9w5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lK9w7CC5m1hr9I0KIUlYiO42Tuv0ENbX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bVwcTYjEFp90WwH9Suf-5GbVR_d6ku4S&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hIddXAzid1YEBdgUHhcEskRydMkatVN0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rT73SJlpVvRDAMmbrCyud2HcP6cNYMal&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UU31Ke4qVHQYbWfluOrLAOkVJgCMTNMr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1u6a1Vd0RMLg2OKYkEFsIaa_P33YuoarX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1upUItar9w0m01U-vnwKUPfDjubLamtHH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1XFzi4cNV7qVV63xWJ6aU6G_vOAuAhxN5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hGfCIB_wIqV3_kMPyAzjS-jVuW44AUs2&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1j8cc0aw9EX2a0mzQPJGZPXV_WEt3fYso",
      "description": "Crafted in heavy georgette with, this anarkali brings together premium fabric and refined detailing. Styled with in heavy multy thread embroidery sequence work, kurta length 50 inches. Available in: YELLOW, RANI PINK, BLACK. RED, OLIVE GREEN, DARK ORANGE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Heavy Georgette With"
        },
        {
          "label": "Dupatta",
          "value": "in Heavy Multy Thread Embroidery Sequence Work"
        },
        {
          "label": "Length",
          "value": "50 Inches"
        },
        {
          "label": "Bottom",
          "value": "Micro Cotton ( Full Stiched )"
        },
        {
          "label": "Available Colors",
          "value": "YELLOW, RANI PINK, BLACK. RED, OLIVE GREEN, DARK ORANGE"
        },
        {
          "label": "Weight",
          "value": "1kg"
        }
      ],
      "fabric": "Heavy Georgette With",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf428",
      "sku": "SBLZF428",
      "title": "Showroom Finished Product❣️ Tunic",
      "category": "Tunics",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=12y_BiRIzZ0GCC7zdw7EFFOQHAzhiLprE&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=12y_BiRIzZ0GCC7zdw7EFFOQHAzhiLprE&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eYUpkHvvPX0rFa7qqRETOXYTbtTxHjwu&sz=w1000",
        "https://drive.google.com/thumbnail?id=176g3UFYxMAS_eIF_XEi3kcTFnDaB3b_f&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_kAuw9NMRPb6k9m35vbn_GfwJmLS7Cth&sz=w1000",
        "https://drive.google.com/thumbnail?id=1pkr9U78iJLA_L2uX6TAgxyGtYFh6oBFl&sz=w1000",
        "https://drive.google.com/thumbnail?id=17LqRXhBUrYxMjdJhPMLKOdNU4JnuUjS7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TcpzDYj2Iy3wZHungHIAJDk_Cr2WyPQU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mKUTJJ2p-jTWum5KuRhTVDt4YnMZS5gT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QaC9b0wPAubwY-P_oGeglD5dE0erj3A8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1O0cvva9fBikv6pcdhdlMR5vKwSiBYEMu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RbZBXg66FnFirvl2-AS5kqfv38XkdUF5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wfPSI-Kzb5zETCXbv1jhr0EAuLl9ZVCE&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/16xSxCtOvfE5VzQuDhpRIVIYrwz6hwXwW",
      "description": "Crafted in details, this tunic brings together premium fabric and refined detailing. Styled with no, kurta length 27-28 inches. Set includes: s. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Details"
        },
        {
          "label": "Dupatta",
          "value": "No"
        },
        {
          "label": "Length",
          "value": "27-28 inches"
        },
        {
          "label": "Bottom",
          "value": "🌷🌺"
        },
        {
          "label": "Sizes",
          "value": "Range"
        },
        {
          "label": "Weight",
          "value": "900gm"
        },
        {
          "label": "Set Includes",
          "value": "s"
        }
      ],
      "fabric": "Details",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "s"
    },
    {
      "id": "prod-sblzf430",
      "sku": "SBLZF430",
      "title": "\"elegant Embroidered Sequence Designer Sharara Set\" Tunic",
      "category": "Tunics",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1ESt1PQlxoLUdIrqL35IbBTe4R88EUlUV&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1ESt1PQlxoLUdIrqL35IbBTe4R88EUlUV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1B0TjklJXliHdqqtsvYmW7eAsYMQ109_M&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bP1msqLYvVML2uWBkC1TmKHKwCzp_SK4&sz=w1000",
        "https://drive.google.com/thumbnail?id=13UZX4fcuvc1bG4ccHBsBKPqoMSIXjuOx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Fvz0OGdtqHRkddMhIF7COFp0xIaqfPG8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1K7wV4mm9Wc9fjvAYtII_WxDPdfCkxIDm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JYPblLrryM93MNIg6HjEGKiO6oivw0jy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-YizO4OC7-wrM_CmSfzT_KcI_W-Lfpn7&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1Wol4xloCBjMGsBqLOlazQCEVG-aNxpIQ",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Styled with 🎨. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "🎨"
        },
        {
          "label": "Bottom",
          "value": "Set\""
        },
        {
          "label": "Sizes",
          "value": "M(38), L(40), XL(42), XXL(44)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf5011",
      "sku": "SBLZF5011",
      "title": "\"elegant Embroidered Sequence Designer Anarkali Three Piece Set\" Anarkali",
      "category": "Anarkalis",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "MAROON, PINK, TEAL BLUE, BLACK, PURPLE, OLIVE GREEN, RANI",
      "mainImage": "https://drive.google.com/thumbnail?id=1Fy3uQotYwV100uQlJSW2UglSuLCxTYLr&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1Fy3uQotYwV100uQlJSW2UglSuLCxTYLr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nBtsRusOSDH4m3QEQFsuy09L4Q_cvW-R&sz=w1000",
        "https://drive.google.com/thumbnail?id=1A6UiCUiKWGOSKga0McsQ174c-_NGSgvM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1muybPHKpFoq2Q_lGF-PH_LEPqQBBJp5i&sz=w1000",
        "https://drive.google.com/thumbnail?id=1XhRmWjToDIuS7bw8BXiuhPP8m0D0QChw&sz=w1000",
        "https://drive.google.com/thumbnail?id=1CgoSdJNLzGERyzNCsIYwZzsu4-5PNk5h&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QkD_5OgO0oAjc6dXhCGs7hBVceuLIu_A&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gX8TyN5503Em-Tx3gPWdW9WH8MfHq2qJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WebP81Aez8cTCftGEyOZ3JPg2CvfbujJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=16mipv4B1jO_6nuNFwmzJRlh6H_UaJVQv&sz=w1000",
        "https://drive.google.com/thumbnail?id=11fLC0A8TCN9-RLug9UMpwvShfKP-sIVb&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rcbiWKpLbfYL9McLIHsAK0pP5uhH1pxY&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1SBwEaV9ONNX1r3h60NFrF4rzK0C-Z2FX",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with 🎨. Available in: MAROON, PINK, TEAL BLUE, BLACK, PURPLE, OLIVE GREEN, RANI. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "🎨"
        },
        {
          "label": "Bottom",
          "value": "& Dupatta"
        },
        {
          "label": "Available Colors",
          "value": "MAROON, PINK, TEAL BLUE, BLACK, PURPLE, OLIVE GREEN, RANI"
        },
        {
          "label": "Sizes",
          "value": "M(38), L(40), XL(42), XXL(44)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf5012",
      "sku": "SBLZF5012",
      "title": "Elegant Embroidered Rembo Sequence Designer Anarkali Three Piece Set\" Anarkali",
      "category": "Anarkalis",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "ORANGE, YELLOW, PINK, MOCHA, MINT GREEN, BLACK, SKY. DUSTY LAVENDER",
      "mainImage": "https://drive.google.com/thumbnail?id=12LRWkeWp-HcYn6vW0fWU2k5UvPeS2vdc&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=12LRWkeWp-HcYn6vW0fWU2k5UvPeS2vdc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1A4aoOmJ0sw4VoR2Tpgp3j86abuUhLUaC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1pzK6lMdPh7dF2EZpgisYtK37vn0DVzCW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PH9CB_4sSvXkjv7n1p0lxDNoDlANXQC-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1w-7P_npGhtgN-WOBlQ0cUfe8dMeqx3y-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iNse7uMXq5x5hlTua3S3vsiPfDeyKXPV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1br8TgOGVsc-tU414uj8LQv7mG7_jwE1q&sz=w1000",
        "https://drive.google.com/thumbnail?id=1w82zIL1-zGBfha7z34PbpNOlDfRzn7wm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EueEJ6NA1ERK1qjB9ttKTweWHcPO_8Qr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iopy4n9U_D8PZPJuqZgKa9DEiv8_63QG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cV2LzZBg3dUsTW9vMehjPfJciS_o0mr6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xu2knQBjYkwl6uDdLRHACjhYCXG66rNE&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1EkwOkbailUhYvYBIzX4rJUKCzSOrdMfs",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Available in: ORANGE, YELLOW, PINK, MOCHA, MINT GREEN, BLACK, SKY. DUSTY LAVENDER. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "& Dupatta"
        },
        {
          "label": "Available Colors",
          "value": "ORANGE, YELLOW, PINK, MOCHA, MINT GREEN, BLACK, SKY. DUSTY LAVENDER"
        },
        {
          "label": "Sizes",
          "value": "M(38), L(40), XL(42), XXL(44)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf432",
      "sku": "SBLZF432",
      "title": "Elegant Embroidered Sequence Designer Anarkali Three Piece Set\" Anarkali",
      "category": "Anarkalis",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1lg_BwpE-Nf0H5V7l79et4VYdvanWyPKR&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1lg_BwpE-Nf0H5V7l79et4VYdvanWyPKR&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wHG0lgEvSP9w8TBKi0YOrP35PrceiX9c&sz=w1000",
        "https://drive.google.com/thumbnail?id=13MNLnyRWLBqgulq6IGhCkg3EtZyRuOic&sz=w1000",
        "https://drive.google.com/thumbnail?id=1D60pc4FyO7m5orouYbRjVulKCRDcZwZi&sz=w1000",
        "https://drive.google.com/thumbnail?id=1m4MTNPhmOmPwFZlkTQ6WKD2xJo2q17MG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1To0bqu4q4b6yMlY25w2uD2edbP_Y_JD0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vigWEMdgalm3S886T4dZxt3wIaqonmFh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1U1hLTw3Xupikj4oMvIxAXjKBXWPpqNoD&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1BVzAtPaIXFC1culuQVTjWExT35jrTtFT",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with 🎨. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "🎨"
        },
        {
          "label": "Bottom",
          "value": "& Dupatta"
        },
        {
          "label": "Sizes",
          "value": "M(38), L(40), XL(42), XXL(44)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf433",
      "sku": "SBLZF433",
      "title": "Elegant Embroidered Sequence Designer Suit Three Piece Set\" Tunic",
      "category": "Tunics",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "RED, BLUE",
      "mainImage": "https://drive.google.com/thumbnail?id=1Ig1SvvwzaoH9eKrWJA8ZgOmTu2xZ1Hrt&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1Ig1SvvwzaoH9eKrWJA8ZgOmTu2xZ1Hrt&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dIxEYLozardsLamu4lQPw_044Xy3bS4R&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yxG7rABvNL8MiCWOqqVKWHnaKJjJ5OnA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TJh8VXb24HOmUdGadZOLr924yVjysMmh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TO04I2dMensKq6UPcmZ7QgHnJiPo5mK3&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TStr12he-PGYS5AJpZl5CTzXTEYogsdm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1efUHkCYqeI0jVvW8uRTUOb76N5_pC8Al&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WzduiWWW4mGQRmc9mujKzG2z5I_xjvpV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1l0tX8YckF9b1HU3rb485YODTSsYjch6m&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VCDPxW6IfK0DGD7FiSJdAt9ai6t-iWzU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1n5WpSh4kHuB2KI4igGTPkeFt0qZ73S1g&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MHnFJXhncoEFB8VnP91a-3a1gt0-dkJ0&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1KDzRn2aAjH0QBP4-D8qPuJe_HLFHQ9Yb",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Styled with 🎨. Available in: RED, BLUE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "🎨"
        },
        {
          "label": "Bottom",
          "value": "& Dupatta"
        },
        {
          "label": "Available Colors",
          "value": "RED, BLUE"
        },
        {
          "label": "Sizes",
          "value": "M(38), L(40), XL(42), 2XL(44)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf5013",
      "sku": "SBLZF5013",
      "title": "Showroom Finished Product❣️ Tunic",
      "category": "Tunics",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1grAiyXQNgAbw8Hn-2KgRRR9B9pOO68xB&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1grAiyXQNgAbw8Hn-2KgRRR9B9pOO68xB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1pDyZd3Tmm_iseDLYH8a9ffXJSGq6__JL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xL9rL6NNzO7Pq2_AFxr6zvvaXO-h1Zn2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jhFyhLmAuk5IxSeADb8xVCNGsI-RnEUe&sz=w1000",
        "https://drive.google.com/thumbnail?id=18kB7dX_rH4vzXsjIyOoqoA4Zy4XBqwTy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SHUZal2j-aFcrU3v2L64o_q84QYa9CEK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Moj7bUYQk4r5XWjLM92e_lWC62v8cPDS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KhfH7m5Y7WzDc3RWNmHQV4ZMvK92KDSB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1u854DERVAWxxDcyS2smp85GIsuZA4X7r&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TKyLUFeXTVmo8mcgKg60MfBplTyf6XbE&sz=w1000",
        "https://drive.google.com/thumbnail?id=17H7FW02Ij2GYXJAEjHD4rde0rn-47lE-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EtI7Ef1TViJZwdmKDs_T6hBCIqmmCJ35&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1DvFuKDCh6c7vFoMjQKgkkirUJXTg2y37",
      "description": "Crafted in details, this tunic brings together premium fabric and refined detailing. Styled with no, kurta length 27-28 inches. Set includes: s. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Details"
        },
        {
          "label": "Dupatta",
          "value": "No"
        },
        {
          "label": "Length",
          "value": "27-28 inches"
        },
        {
          "label": "Bottom",
          "value": "🌷🌺"
        },
        {
          "label": "Sizes",
          "value": "Range"
        },
        {
          "label": "Weight",
          "value": "900gm"
        },
        {
          "label": "Set Includes",
          "value": "s"
        }
      ],
      "fabric": "Details",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "s"
    },
    {
      "id": "prod-sblzf5014",
      "sku": "SBLZF5014",
      "title": "Elegant Embroidery Digital Printed Designer Anarkali Three Piece Set\" Anarkali",
      "category": "Anarkalis",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1tUkp8CwDbbewrUuPvsblC95-IMPqBhky&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1tUkp8CwDbbewrUuPvsblC95-IMPqBhky&sz=w1000",
        "https://drive.google.com/thumbnail?id=1d9luEMFtu2cRZL0Uz2QTIjCXZqQrvdyz&sz=w1000",
        "https://drive.google.com/thumbnail?id=1pCHh7nxJLesKP21fVUFnYMIIvPRKOHDc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cKMdDRWY2tKdVWfztcbMEB_WthBj4TFa&sz=w1000",
        "https://drive.google.com/thumbnail?id=1p0ME6PNE14cqjwb7OARpFLg45o4-HTqx&sz=w1000",
        "https://drive.google.com/thumbnail?id=15FLYFN0tiwAaIi_Kll0OQNBakcngleaB&sz=w1000",
        "https://drive.google.com/thumbnail?id=150uJwkxskZ6lK2X2Tzb0xWvhgkwAOScL&sz=w1000",
        "https://drive.google.com/thumbnail?id=14Pl5jv5Rwkjc8uPFmMO99s8cSRmRXS8T&sz=w1000",
        "https://drive.google.com/thumbnail?id=19dxHSMBkI5_MqOOpu4N6jQhA--8wAMow&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-wyYRZZQBSKPeQsU3HuSH7GT1ozjvLfr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1N-nB17b7Z57K6tIRs7WQFKFUhvCamEZW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1uPU6lXeYWFNEsuRBxnVdf7EIwppQ5VbQ&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/12yqiz1cWL3vhwW6I_gRyo0UwbOg8X3vs",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with 🎨. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "🎨"
        },
        {
          "label": "Bottom",
          "value": "& Dupatta"
        },
        {
          "label": "Sizes",
          "value": "M(38), L(40), XL(42), XXL(44)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf436",
      "sku": "SBLZF436",
      "title": "Elegant Embroidered Sequence Work Designer Two Piece Set\" Tunic",
      "category": "Tunics",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1xDLD4ajOIjjptmIblTcQFmrV9eLQ-A-a&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1xDLD4ajOIjjptmIblTcQFmrV9eLQ-A-a&sz=w1000",
        "https://drive.google.com/thumbnail?id=152p8ImPLjt9nz_33MBdnssB9Xcl_X2SB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-LLXZYALfKkZ9ROTlEL8PFhWB8rrdiBe&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ISDwZNvzL5oA9hRqYwLjRugeK1rCadDK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1V2dDTSTF_ojD0CuuUp0m6kDlAEgP3Fk9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FDR0r_DyWBE1N-_UbAeOO0afHsKLTycy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QC6lz-g-eAMHW0SHAbdcN_nipiJyO-Yo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lXMV4yz1EVvxajxPyJqVAsG1vRL3VfvT&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1_YIOmhCnkxpSjnt2RZSV38bLFQjhcWaX",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "🎨"
        },
        {
          "label": "Sizes",
          "value": "M(38), L(40), XL(42), 2XL(44)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf359",
      "sku": "SBLZF359",
      "title": "Elegant Embroidered Sequence Designer Anarkali\" Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XL",
        "2XL"
      ],
      "colors": "DEEP MAROON, PINK, WINE, RANI, MAUVE, YELLOW, TEAL, BLACK, BLUE, GREEN",
      "mainImage": "https://drive.google.com/thumbnail?id=1FJchO6T87POLDX40rvZPgQJuze_vkgMo&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1FJchO6T87POLDX40rvZPgQJuze_vkgMo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qxlABRnmMjdhUKkkobM4yAFkizmuf6Yk&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yKXGAjhyTgGh2B5sVRLt2_o8qPq7s2g5&sz=w1000",
        "https://drive.google.com/thumbnail?id=12CjNs5yrjGyvqywklb84bnuDYDmW3Hh6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jObI587yBxL--ChD18FFwdCyK3nZu0wb&sz=w1000",
        "https://drive.google.com/thumbnail?id=1XwDg5t692SqLRWWbxRURe-lUYPkcTku2&sz=w1000",
        "https://drive.google.com/thumbnail?id=14nOl8eM4f2C4saVkxul1jP9LPxF4RsZZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sHIuy4PPfEaPFoq-BJYwwClN_DTo66BE&sz=w1000",
        "https://drive.google.com/thumbnail?id=16pKxbqtc0nFlJ9fxSp_sgapWJF1uloJz&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GdRJ6gEVIqKc8ap41r-p4iO-TBvbwaa6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bF9rENdHiNmdOF8ZHbgxwZOtThoC90bQ&sz=w1000",
        "https://drive.google.com/thumbnail?id=12qfrWG8JE35QhX96pfquxnqJhGor3VEO&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/134K9h_702-VAYlOLogtBJwYNM4xxMGTc",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with 🎨. Available in: DEEP MAROON, PINK, WINE, RANI, MAUVE, YELLOW, TEAL, BLACK, BLUE, GREEN. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "🎨"
        },
        {
          "label": "Available Colors",
          "value": "DEEP MAROON, PINK, WINE, RANI, MAUVE, YELLOW, TEAL, BLACK, BLUE, GREEN"
        },
        {
          "label": "Sizes",
          "value": "XL(42) with a margin of XXL(44)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf5017",
      "sku": "SBLZF5017",
      "title": "Elegant Heavy Lace Work Designer Anarkali Three Piece Set\" Anarkali",
      "category": "Anarkalis",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "OFF WHITE, MAROON",
      "mainImage": "https://drive.google.com/thumbnail?id=1fvy4r_Uvb2yHSbj0gLdqJynplce7DaRZ&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1fvy4r_Uvb2yHSbj0gLdqJynplce7DaRZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Bu1fMzzG8BLpZ45noEwvGpZbSguHl2S5&sz=w1000",
        "https://drive.google.com/thumbnail?id=16XcLCStc4Og6lYWLA-EVesKxwGWCpBMw&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PF0AUlBg6bZYP3LJ3ziJL9cVhaSdEkqE&sz=w1000",
        "https://drive.google.com/thumbnail?id=1k3x5u-_4Qr6-K1geITvKJ8YA4EDAQAR5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NAXMcpxAIGMfkNJs0BUDD6q5vx6cXiZm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xALLama6KGBy1XGyA0d7Q5zrAD3zhUXj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gg0bayUZgUsvEbY9gzizBN4n5Engm3Ho&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tFlyqjlYPUEB5VgMh29qYcwfs2XmZtmH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ryXt5ElQ4GRwtwK3RX53dCziSiwbVE6_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gHU_h6TvABGafFx28WQVpZ98m4r8e8PS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1YhQ1KpyFeUMSJuliFeMZ-7BQtvnR3Lmq&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1FFupnqHwjQnCnzSh6oMxT-Wi0Rx5PDQF",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with 🎨. Available in: OFF WHITE, MAROON. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "🎨"
        },
        {
          "label": "Bottom",
          "value": "& Dupatta"
        },
        {
          "label": "Available Colors",
          "value": "OFF WHITE, MAROON"
        },
        {
          "label": "Sizes",
          "value": "M(38), L(40), XL(42), XXL(44)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf5016",
      "sku": "SBLZF5016",
      "title": "Elegant Embroidered Sequence Designer Anarkali Three Piece Set\" Anarkali",
      "category": "Anarkalis",
      "price": 2600,
      "originalPrice": 4500,
      "discount": "42% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "MAROON, GREEN, YELLOW, RANI, BLACK, OFF WHITE, ORANGE, PINK",
      "mainImage": "https://drive.google.com/thumbnail?id=1Mpl2BcXUAMwKOdz4tY29XzJ2GL-Vjv4j&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1Mpl2BcXUAMwKOdz4tY29XzJ2GL-Vjv4j&sz=w1000",
        "https://drive.google.com/thumbnail?id=1j_gO3aEftX2HjwP-isbHt1K7okRjf4m5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gkvuVsutVo1j1_rAmmWjOEgawSpmtW57&sz=w1000",
        "https://drive.google.com/thumbnail?id=1alsx5D9_kR3UcYv2eDtCKIBT1L599mNJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DKjVIVIBoArl2AG3o64WLcYnN-JJ6NcC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1L1CXcc8KTyZHZeupi2gQqeUhv3g_xdSs&sz=w1000",
        "https://drive.google.com/thumbnail?id=10KafzESlQ9HZVaA_hewX9QtIDf9wk1Rw&sz=w1000",
        "https://drive.google.com/thumbnail?id=1aBMME-jQxmoA3RnoL1PkH5rRCjG8HdmB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1OO73NAy6ieMOFaq-XN047e4eToFDVu42&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cQ20fTbGTJQgDyLmo0zdyvn4I1ENn_a1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1v-6HyABR_PzF67J70dKITx6b1bCgwtUw&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Q4fQrQetgyM5fRMQr15Ma_Ne3sFcIIUZ&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1QEm4ZHqrdJ7rkMJTSn_7-0hwXhyzbDU4",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with 🎨. Available in: MAROON, GREEN, YELLOW, RANI, BLACK, OFF WHITE, ORANGE, PINK. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "🎨"
        },
        {
          "label": "Bottom",
          "value": "& Dupatta"
        },
        {
          "label": "Available Colors",
          "value": "MAROON, GREEN, YELLOW, RANI, BLACK, OFF WHITE, ORANGE, PINK"
        },
        {
          "label": "Sizes",
          "value": "M(38), L(40), XL(42), XXL(44)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf5018",
      "sku": "SBLZF5018",
      "title": "Elegant Coading Work Designer Three Piece Set\" Anarkali",
      "category": "Anarkalis",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1rkDsRCm9GPaYgiB5VDLdQBVRoZFlDTKI&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1rkDsRCm9GPaYgiB5VDLdQBVRoZFlDTKI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Eb74X0OaiQh5HMXWMTmyWzJxSsybYDOA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vkoC3spmHjQkIaaw4CPs9NNrjsBp4eWL&sz=w1000",
        "https://drive.google.com/thumbnail?id=15XCB2YT8zADvjMRcEmV0WQcTMqGB5nrr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JubH8QPAmHbum7Ya8ur2wH9I9JZCRX0K&sz=w1000",
        "https://drive.google.com/thumbnail?id=1kcVxBbGRg3Qmk--DbptBVILEftYX1Lig&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dPCUeT4JYLvFKhqnH9rv1svxs-n4EanW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1CIKU4jbmvAAY8rClNIlrUj1IKy7eJBi-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1odCk5opTmeMaaQbQSGnF0k9kwcJdhe5Z&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1DEWi9xZOif83JX1WudBqh3PaVvl-5Oz0",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with 🎨. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "🎨"
        },
        {
          "label": "Bottom",
          "value": "& Dupatta"
        },
        {
          "label": "Sizes",
          "value": "M(38), L(40), XL(42), XXL(44)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf5020",
      "sku": "SBLZF5020",
      "title": "Elegant Designer Anarkali Three Piece Set\" Anarkali",
      "category": "Anarkalis",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1O5oLaT8eYLSoqmpyLbvyMJGLapOuwyy2&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1O5oLaT8eYLSoqmpyLbvyMJGLapOuwyy2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1fOuVGq8dQs15P4AY6u6laEgiPiYfbF59&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tmh-W5m4i0eWxftOJ8urbyoP07Bze4L9&sz=w1000",
        "https://drive.google.com/thumbnail?id=16CS0AWoPy45V1NnoyBlmSvbDr-DoKpwh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1H0lW4C4lnIqrRHAxbgB8sflOslk11S7L&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eqxF0KsABKKAqG-HsENC4zOH2ZzQavhd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Z5qcs_H9bp6rySELRWRsUUgrJlnTiRog&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wyLoFKxKIYhZgGaqnce9IrHrVwQEq2Y6&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1j3li6-zcu9JjSPhNAhLcohi3NuZDPcsd",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with 🎨. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "🎨"
        },
        {
          "label": "Bottom",
          "value": "& Dupatta"
        },
        {
          "label": "Sizes",
          "value": "M(38), L(40), XL(42), XXL(44)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf5021",
      "sku": "SBLZF5021",
      "title": "Elegant Designer Anarkali Three Piece Set\" Anarkali",
      "category": "Anarkalis",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "DEEP TEAL, DARK MOCHA",
      "mainImage": "https://drive.google.com/thumbnail?id=1t-eSnR9SxqNAbGoFMmYeQTgiEFWrsmaf&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1t-eSnR9SxqNAbGoFMmYeQTgiEFWrsmaf&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Ts_uikJME0qBLdVV1DxHmsYtElZib4sf&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Uh0pNMyZhNSsGwB2UI04BcYVBO9tK-B1&sz=w1000",
        "https://drive.google.com/thumbnail?id=15ILmpt10K-jGix54u2AlNUWGsErieMPt&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Fhak2f21h6e8A5fGc9QDWO9cgdsw8QBs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1K_uqc9kIlHsoHzU1IbHp1TAA9xqmaDIg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Ihdrp1ig5ckonSurC-TrmvnBBKVbIaY2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1c1r4W-NtBwOqQrlHuT8qxYZBHV8FmFa7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KzWNj2IAaxj4lQTjmKgKnu7CIpmMEvNs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ftjsMEvgyZ9oUw8Ojk2QG7zkorXmibn3&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hqvpXhCr2YhJ_kdn3-V2ztVzQ0pr0Pch&sz=w1000",
        "https://drive.google.com/thumbnail?id=1h-irKx6Z-nHJWjMtdARoVDcLrKJlScoE&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1e58MmWHsqjX-TT0-wnoDpyiREh8tYnHM",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with 🎨. Available in: DEEP TEAL, DARK MOCHA. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "🎨"
        },
        {
          "label": "Bottom",
          "value": "& Dupatta"
        },
        {
          "label": "Available Colors",
          "value": "DEEP TEAL, DARK MOCHA"
        },
        {
          "label": "Sizes",
          "value": "S(36), M(38), L(40), XL(42), XXL(44)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzf5022",
      "sku": "SBLZF5022",
      "title": "Category: Women’s Ethnic Wear Tunic",
      "category": "Tunics",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "PINK, GREEN, PURPLE",
      "mainImage": "https://drive.google.com/thumbnail?id=1KspHJT4-rtw9Zq_BK03TtYDcKTAypG7-&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1KspHJT4-rtw9Zq_BK03TtYDcKTAypG7-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1L4CAbJsYX_M22j3jt932invweZUx_WQ1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Wce2j4d8X4vuv9Lr4nI17ZLql8_Uiaiu&sz=w1000",
        "https://drive.google.com/thumbnail?id=136MKPZRhcuiDhralOeqz8a-tlgOml2O0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bwdZ8UkDnkDt4ONXKPcE4nACHEcB2UIF&sz=w1000",
        "https://drive.google.com/thumbnail?id=169zUYuzHiC09VztFKuHJgziifdVz8spm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bJpM0FYllbpHyPvKL-JA4BqCtGOHqJ5N&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xMdkKM19LU9VXNXcLQiO0jQI_vpjlE1t&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wEbJjTXmHSa3uodLxMJCtNGcuBL4r4Tr&sz=w1000",
        "https://drive.google.com/thumbnail?id=16b3WpYazOr3FU2KplTn3INmPFkNL2Mnu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qHT_SzJ-6hm8Uti9CW2uv3G22_mOybGi&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vJP8MmePC_XAiQtdL8p1a1Vjny84402O&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1y6dHQAxzn7lUuHyMQQee7cvyHmyZocMN",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Available in: PINK, GREEN, PURPLE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Sharara Plazzo)"
        },
        {
          "label": "Available Colors",
          "value": "PINK, GREEN, PURPLE"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf37",
      "sku": "SBLSGF37",
      "title": "Presented Our New Sequence Embroidered Gown Pair Real Modling For This Wedding Anarkali",
      "category": "Anarkalis",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1SDlumqW-zg9e8WP7zwndFVnFCyiI-ATI&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1SDlumqW-zg9e8WP7zwndFVnFCyiI-ATI&sz=w1000",
        "https://drive.google.com/thumbnail?id=194IWwQq2JhTnNyMGdLMoXQzZTFmaYErZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GQo8Q6MBvJKVEQ2s7V7M5qONeka7omCr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1o-DgRgR17UbH4ZFFHspzvH0XTBcIc9IS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1op3OEpCQDar0xo4vyTmgaEQnl_db6gfy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SNFIcS_SxuTdQYe_0S-b4zhVJ69DFXwN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1pR2OxsvK2SVH3O4NZPRiM3lvWKMlot2z&sz=w1000",
        "https://drive.google.com/thumbnail?id=1uzrwUehJyUNsovkjmxAIJv176pSKDVo2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nVEeHzjZY1oNu6TVeYjyF6MO3MElUqWN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gU_TXIrxs3LcWe9vf9DN3xSXj_KOUsp8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_xDHp2uIMJ666eacDyi5hXXM4BG0gRQa&sz=w1000",
        "https://drive.google.com/thumbnail?id=1J7lnkcnMV8FBvinfsqUiMowm11QFSSF1&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1vp99AZNOASms8J8zmWIE8G64OaKu-Pvl",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with georgette with sequence embroidery (2.3 meter). Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "GEORGETTE WITH SEQUENCE EMBROIDERY (2.3 METER)"
        },
        {
          "label": "Sizes",
          "value": "S(36) M(38) L(40) XL(42) XXL(44)"
        },
        {
          "label": "Weight",
          "value": "6.50"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf16",
      "sku": "SBLSGF16",
      "title": "Present All New Umbrella Suit Real Modling Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "PINK, GREEN",
      "mainImage": "https://drive.google.com/thumbnail?id=18aDApuMPQgiKeCvREj5G-MLeSCn4yQdW&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=18aDApuMPQgiKeCvREj5G-MLeSCn4yQdW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_bKTvWcRb8EjpF9mKjNZbbDWj4capBKo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1giw8EYLXvTE4-GcpUW8BI-s_SmRzc-Cq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1e7EHiSh7WUSDfu8JtjK5wP1nZ4NhO6Xc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-SmPnS5fe7Av8m1uYa9pFN0iohbHGaCF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Y86K1oyAmGtxA2RizOjFFlP3zBypxlmT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HdWNZb7QyddIFhRZnGDGfTQNLu76pVBJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NEVG2tz-UytFWpq9O7FAdeDZY5AnxoZK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AIAJ9l0ar8CgvMGLo7vFyYXVNmUuaIYv&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yOAEihZHygDAw-4fN7b7yeTM6LXEky7D&sz=w1000",
        "https://drive.google.com/thumbnail?id=11_Unwp0tM0izQi43ZzoF0g3PReOI4giX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DaOcyoEyHq7Mt5ufEYklIMMegnqy3g8H&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1TOHk2vIITXKUEY4tk1pAyxxRR9m_uT5X",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with & pant. Available in: PINK, GREEN. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "& pant"
        },
        {
          "label": "Bottom",
          "value": "MICRO COTTON FREE SIZE FULLY STTICHED"
        },
        {
          "label": "Available Colors",
          "value": "PINK, GREEN"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        },
        {
          "label": "Weight",
          "value": "ORGANZA FLORAL PRINT AND BEAUTIFUL LACE IN NECK"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf49",
      "sku": "SBLSGF49",
      "title": "Present All New Sunkissed Floral Print Suit Real Modling For Upcoming Festival Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1n0eO65OElBQO2XeWcgCA2fFGq5XfJby7&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1n0eO65OElBQO2XeWcgCA2fFGq5XfJby7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-qMXNjWrhdkUYpxIlFg7ijnzvv_two7m&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mXuoMvf6DTkhrEZ_tu_cKwiYSxC2jmlm&sz=w1000",
        "https://drive.google.com/thumbnail?id=126R5fySmL0WmtaquVhuVvvmqgl1AS-sy&sz=w1000",
        "https://drive.google.com/thumbnail?id=19ppirLDUJjzsVvlE3SnZx7l22dGfhuUt&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VWP6iA8_DHUbcyoWc8cDAElXyJ7FDniT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1z79CyoBd4VjwLxcuSmz8GRcDnNZozsWN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mmrmQ7bTHPs0tSmqqvLkfd4hyzRC07zj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1aAgowCv45RdDg8KZGOttSF9luSgxntUg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Jf1GqjMoPEzOqTlKYXd2VW62n1GfRVas&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_DCiaueIxdT03b8qasQP7ATEmTDU_DjG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SgemKIAItVARWO9RahU1w67mLR7_0vOU&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/17HzAvSKa7W3GvubCKzt0bLNgSt6mD38M",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with & pant. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "& pant"
        },
        {
          "label": "Bottom",
          "value": "MICRO COTTON FREE SIZE FULLY STTICHED"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        },
        {
          "label": "Weight",
          "value": "ORGANZA FLORAL PRINT FABRIC INNER MICRO COTTON"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf26",
      "sku": "SBLSGF26",
      "title": "Present All New Kalicut Anarkali Suit Real Modling Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "BLACK, LIVE GREEN",
      "mainImage": "https://drive.google.com/thumbnail?id=1dAfawKkIiSw7LRlrUSLMBe4zV-Kz9UQ6&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1dAfawKkIiSw7LRlrUSLMBe4zV-Kz9UQ6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JPF2zo6k-mgudFBOJ27ZVhnJ_itVOezt&sz=w1000",
        "https://drive.google.com/thumbnail?id=15dDWbSzhg5dmofBQF3qcvC2hS4iBMBru&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QS-Ta_sTJCHaacSo5fMlu6s0r0qxX1qB&sz=w1000",
        "https://drive.google.com/thumbnail?id=10p_LtUDwfGyQbzLc5ahYUDw-ADEr_awf&sz=w1000",
        "https://drive.google.com/thumbnail?id=10cxbxMakKw0HQcyfUYlr0dZM_NHNpxeX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nX3s4TawQcwiMVaIHTI-sMaCzJhIJwq0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Fg55MBHZWHu_KXQsfPr7n9VdiVMkQhb6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KGPk54o6Gr7SDYLIYDCGxElMJSaKXIw6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1slFyXIk-hcxkKUo7505_sxVA7rPVv6Fs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MYFkjW99D6l417KL2dgjfhwkJ7p080su&sz=w1000",
        "https://drive.google.com/thumbnail?id=15ZdH5WyYS6ZfiIN42GS3ZXinbj6Gh8l0&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1J5rqX7mHTkrb3iENegW2fB0BZTb6eIcl",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with & pant. Available in: BLACK, LIVE GREEN. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "& pant"
        },
        {
          "label": "Bottom",
          "value": "MICRO COTTON FREE SIZE FULLY STTICHED"
        },
        {
          "label": "Available Colors",
          "value": "BLACK, LIVE GREEN"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        },
        {
          "label": "Weight",
          "value": "ORGANZA PRINT BOADER LACE WORK"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf24",
      "sku": "SBLSGF24",
      "title": "Present All New Floral Print Straight Kali Cut Anarkali Suit Real Modling Anarkali",
      "category": "Anarkalis",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "SKY, YELLOW, OFF WHITE, PINK",
      "mainImage": "https://drive.google.com/thumbnail?id=1r-Te_j7RlNAqZO6wrRrOOMc9yo5RZOBt&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1r-Te_j7RlNAqZO6wrRrOOMc9yo5RZOBt&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Jwap8ynWsjRGWYLeO5DpHK5A9Nw8eDVX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xmEmQnbYCFKfrVtB87hn8vFXOctLenlA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zPp1bY_gv1adFQPIIJunJz6OqPPFtd7O&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jaCC9FrtHggAj-ymmTUTO6r0P4VpHYZM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xWLo3ddrra3RT8UBg05W3qkC2z8w-8Mj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1oVs6oHxIC16geVU57CNKxmZSDKN3NEnm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Z-PNdyLusuebcMOQHOBT0rHIALv8Blbv&sz=w1000",
        "https://drive.google.com/thumbnail?id=1K3aNFzMf_oYomPTi9-BViTOjWmpF7J5T&sz=w1000",
        "https://drive.google.com/thumbnail?id=18zI9bX4wVhWFu7muM4vT_wjmTsUkXIt2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1d1Co4XUoAAoVVRZ7mAdbKNVTzWI_u3w3&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Q34VjagdXPNdg1_550FD2nhApC56oYqB&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1C-YeqtIGAuo7DsTfHmOlOctpF9wFAiP-",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with & pant. Available in: SKY, YELLOW, OFF WHITE, PINK. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "& pant"
        },
        {
          "label": "Bottom",
          "value": "MICRO COTTON FREE SIZE FULLY STTICHED"
        },
        {
          "label": "Available Colors",
          "value": "SKY, YELLOW, OFF WHITE, PINK"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        },
        {
          "label": "Weight",
          "value": "ORGANZA FLORAL PRINT EMBROIDERY SEQUENCE WORK WITH BOADER LACE WORK"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf40",
      "sku": "SBLSGF40",
      "title": "Present All New Sunkissed Floral Print Suit Real Modling For Upcoming Festival Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1rkRuBtv6onx41qGnZjCeFiN2YE-g8gVv&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1rkRuBtv6onx41qGnZjCeFiN2YE-g8gVv&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xvXvjC2bj8yOGETjMuYWwLCHZeSxanPT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KU4LO_J3zGktoTOsgHP_rWPkQymjnJeo&sz=w1000",
        "https://drive.google.com/thumbnail?id=12sDi1OU4J6vl1S2AWSmomgUIi-vSmwmP&sz=w1000",
        "https://drive.google.com/thumbnail?id=12Pn_LnE0dNqTezqXp8Lc40YPBniI4mA7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Bm7yHob7aAZ1g3bST2FPiD3mnUxSxYew&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZcCNbGazLnxDJSMl-G4fuG38CF8IPWwr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1X_-yPkxEmNGyGKt1ArBpVp_UPEZdGt68&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UjuHvroPjF7N61uSOlfznquAYYgipPek&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JxGDHtLDh-nhBK3KQWQCR4fNNSAJW2yf&sz=w1000",
        "https://drive.google.com/thumbnail?id=1y6qHlRbREiUQjl0OkpPKmFzFKj2UyKBn&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rEoWiYX-OCThRHAG3JP-L63rtQmKwkjj&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1LoVvYZaXN-9RGCtpplyJR9OJn5CVsd84",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with & pant. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "& pant"
        },
        {
          "label": "Bottom",
          "value": "MICRO COTTON FREE SIZE FULLY STTICHED"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        },
        {
          "label": "Weight",
          "value": "ORGANZA FLORAL PRINT FABRIC INNER MICRO COTTON"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf41",
      "sku": "SBLSGF41",
      "title": "Presented Our New Sequence Embroidered Gown Pair Real Modling For This Wedding Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=12EyhviNCAcMInFirWrKuzCyUsMUXpp3r&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=12EyhviNCAcMInFirWrKuzCyUsMUXpp3r&sz=w1000",
        "https://drive.google.com/thumbnail?id=12TvGUmpZv7cQoS_AKa4jP-gws8GQkI4p&sz=w1000",
        "https://drive.google.com/thumbnail?id=1p3zwRUqKq-YCytnXSz74yNlUuPteqTNP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1CH23BOsVN2r81UNnzchBGquo7EWQwcp8&sz=w1000",
        "https://drive.google.com/thumbnail?id=13dlKiRg12EoVBxD52dp2-us-uH2NF6Uq&sz=w1000",
        "https://drive.google.com/thumbnail?id=16GDL_M7JkU822-BVFPiMVx6g4hszBhcg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1N7tFLEWTuGxgfiRWXgw6IKmlbg6r8LKW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1u9Ri5IRHIabLI5xWdsNIDHegPKnFpcws&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SvausL4htZkjCR1nmNzLNHY2RiYm1Kb6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Or7pIKky4XRxuR7lngZFvj3i5CdON60-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AUYo5zxxni5gpZZ0gaa5SOjaNwiOxgTV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_ZA-nXUbOhNY3vqka_kFDcNmK99sP3KN&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/12-ksRuFsDAgVbuEr5ijqOveDVlZo00IX",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with georgette with sequence embroidery (2.3 meter). Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "GEORGETTE WITH SEQUENCE EMBROIDERY (2.3 METER)"
        },
        {
          "label": "Sizes",
          "value": "S(36) M(38) L(40) XL(42) XXL(44)"
        },
        {
          "label": "Weight",
          "value": "6.50"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf48",
      "sku": "SBLSGF48",
      "title": "Presented For This Eid 🌙 Our New Plazzo Pair Real Mirror Work Tunic",
      "category": "Tunics",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1oP_l02sz74U5ImXOR0AzQuY60xtnQjSH&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1oP_l02sz74U5ImXOR0AzQuY60xtnQjSH&sz=w1000",
        "https://drive.google.com/thumbnail?id=10B5YEUW4kink7sDUgfPVXSydXxJ8Pbqd&sz=w1000",
        "https://drive.google.com/thumbnail?id=16kOFPx45kq2ruf0iGLJ17T3NQjSxEOFh&sz=w1000",
        "https://drive.google.com/thumbnail?id=12GbDU_ZRRCMUA0PqmemuU6pAGsX3vvPO&sz=w1000",
        "https://drive.google.com/thumbnail?id=1uxUEfVeCinm-8iLqxAoCGE9-1oAYy7Aw&sz=w1000",
        "https://drive.google.com/thumbnail?id=16t9uP_NC_uALTFOO3mnUaf8vGYYcde6Q&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eaUsF-76RQPC7AGkVCzhj1dTC65rwL2v&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bg3KJBUDHZOuhFoEl9XtcBl2NDXcO_Zg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1XcSlocZwBwvbiBHaOzENhLYLsSj8cJyS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DovALeMxSiMCGmleKTb2KCj9f2T1bSJq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cFhNu4dEWPL0ef1J-nYSIC089g5Dt9gP&sz=w1000",
        "https://drive.google.com/thumbnail?id=18sBTghRSALO_SyA8qy4UwEFOUEB2VSXG&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1e7vkpUAS_MSfeB5cECSoDo44SjMR_ucj",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Styled with fendy silk with real mirror work lace (2.3 meter). Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "FENDY SILK WITH REAL MIRROR WORK LACE (2.3 METER)"
        },
        {
          "label": "Sizes",
          "value": "S(36) M(38) L(40) XL(42) XXL(44)"
        },
        {
          "label": "Weight",
          "value": "8.50"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf43",
      "sku": "SBLSGF43",
      "title": "Presented Our New Printed Gown Pair Real Modling For This Wedding Season Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1FgWHqzRHLJhee3AmqMc55qOvuUrNeYsy&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1FgWHqzRHLJhee3AmqMc55qOvuUrNeYsy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RGYc9wJt8lwTxObyAi69sl8lgLabRkg2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SyZhtTCLi2uTKy8R-voz5h0sNjaX0i9w&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jm7SXfsX24poqhwx1jh2w-RvuwGEAcHr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1i4WNFkLEs158KMMIXlGd9nidDtqJkYzK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TSg6vMrpxuKi4QmBmV8zi4lIKfcg3L5V&sz=w1000",
        "https://drive.google.com/thumbnail?id=1A8usuO_nbfAZVTgb_8coOMjSxy5-9LEo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tq1kWMNhtsy-GbmLKUycYfHZtn1ZdmyK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lI1ERRH0ei8eDzOfJQjjAkGLy8AFYd4B&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rnMVj9C63ZeWa4UTrydJiZWfAMADSYHT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1suLnf6Oh0L18YtxW9G5I01xE9cqgBPjJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LBshozjBZfHNxssIa-TZQSFgf-Jhx_i_&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1eZSWvENL0rsqMyIYAo_xzSlbUibluZGU",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with printed georgette with lace (2.3 meter). Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "PRINTED GEORGETTE WITH LACE (2.3 METER)"
        },
        {
          "label": "Sizes",
          "value": "S(36) M(38) L(40) XL(42) XXL(44)"
        },
        {
          "label": "Weight",
          "value": "6.50"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf47",
      "sku": "SBLSGF47",
      "title": "Presented Our New Gown Pair Real Modling For This Wedding Season 💞 Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=18wxFkbIzYYFN6RbWJJNObJz6kIJvFu9a&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=18wxFkbIzYYFN6RbWJJNObJz6kIJvFu9a&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HArqolHDuTLZkUzPvfz2CjFNy2IjaQuS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1uGx79fJZ1wdpjj8qtby2HcGOpwX6Mzuc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1unOJ097HXjaOX_6Cy5KYElxljC5_t49G&sz=w1000",
        "https://drive.google.com/thumbnail?id=11_fWwoAUau34bhptJ1WsRmxCgXGKyUrq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1808NS5OVb2BWKu8wegsywo-FlYrN51TX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DuQcF8MwvCWw-2wu_A3FIJPSiE-Aq70X&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rCuJx-4h4Owqh3AuQoDMkUNh2rnSuRFH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LxZUXbxMVpsXRS0UK2GqLGw8TnMvWnNt&sz=w1000",
        "https://drive.google.com/thumbnail?id=13EfvZrItGIVgspj9UTv1KQEoIlD5EjWM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eiNUpMX_ItqqvU5BrYr6JHoFF4J6ul-M&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1Ws9IqVWLV53jryBz2QdPyaG61Ad5ma22",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with printed tebby organza (2.3 meter). Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "PRINTED TEBBY ORGANZA (2.3 METER)"
        },
        {
          "label": "Sizes",
          "value": "S(36) M(38) L(40) XL(42) XXL(44)"
        },
        {
          "label": "Weight",
          "value": "650"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf22",
      "sku": "SBLSGF22",
      "title": "Present Pure Soft Taby Organza Floral Print Fabric Fully Flair Kediya Style Suit Set",
      "category": "Suit Sets",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1gVIGW-TcroF5YLZI7AdDG423q8NqTJ1S&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1gVIGW-TcroF5YLZI7AdDG423q8NqTJ1S&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jHp2ozg092qpNpGQyjTr5TUnDFdhehpY&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lNWX05BxMQcFsa5ZjiR6y2j35Xo7VZF3&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cwvRi16ycfMkteLzRdgt0rYnedlEerJ8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dCKzwYwj-OOQzozmzoACZJTUEJpGrYE7&sz=w1000",
        "https://drive.google.com/thumbnail?id=11Aj3I_7dEAmlggoF7UOGIgez3yW6A3h-&sz=w1000",
        "https://drive.google.com/thumbnail?id=12bKXOOSwgVNxcgwdqNvHKK3DLw2ciNWd&sz=w1000",
        "https://drive.google.com/thumbnail?id=14DmSsjav-LCiyV0PZhBkrgsHa0upD65n&sz=w1000",
        "https://drive.google.com/thumbnail?id=1fenWPz0zagwP7c3pQUpV7BMeVePx1pjS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1okffxUX4rERRPd65yjJoIJgTUtJsIJ38&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ByHsroMmc0Dp9MU06VY55nvA1LsqlOVp&sz=w1000",
        "https://drive.google.com/thumbnail?id=1oS02jNuKMZ6_AFjX-Kq876sJATYka_nz&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1LyjXvftftSRicakBR0YOGJOoPWZi-rMS",
      "description": "Crafted in heavy pure soft taby organza floral print, this suit set brings together premium fabric and refined detailing. Styled with 2.2 mtr pure soft tabby organja fabric boader fancy lace work. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "HEAVY PURE SOFT TABY ORGANZA FLORAL PRINT"
        },
        {
          "label": "Dupatta",
          "value": "2.2 MTR PURE SOFT TABBY ORGANJA FABRIC BOADER FANCY LACE WORK"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        }
      ],
      "fabric": "HEAVY PURE SOFT TABY ORGANZA FLORAL PRINT",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf46",
      "sku": "SBLSGF46",
      "title": "Presented For This Eid 🌙 Our New Embroideryed Gown Pair Real Modling Anarkali",
      "category": "Anarkalis",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1xLkdl4_vGUc2GeY6Mi_TgPCe3msNNW_T&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1xLkdl4_vGUc2GeY6Mi_TgPCe3msNNW_T&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BVahntFIRTVRm4QkAbKB5vdWHbCl1Zy7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1IeMYt9fr9g0TCXFfw8-03-hijMB-Zw-L&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yfi7bXDqaeecT_emDfzGn8_SpoutBmrH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gcXOR9znW9qa4JCfTDs63R7YoI3kAChS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ij1S--bfMjTdMFtXm3SCE3BNoABV-b75&sz=w1000",
        "https://drive.google.com/thumbnail?id=14m6fRkTJFKdcIok8sBJWTRPqOM_T2gTH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gXbDtpdkYe_p96koRE3WBvfOVLhzszO-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yhV5h9ivNSGST0uwgmluZZkHyCtWBHeZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RDV1NoC70bGQLDpBOzcMf3ka8z_vOLkz&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dsAbUIih8IZa_kYIB23MwE4lDHBGFl0j&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JaqjEUUtyI5iUjnpmN_1zeXALtEvAxxJ&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/16nMGq9mxfnEEDElydgsODh7_0X9D_qFC",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with crunchy with embroidery lace (2.3 meter). Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "CRUNCHY WITH EMBROIDERY LACE (2.3 METER)"
        },
        {
          "label": "Sizes",
          "value": "S(36) M(38) L(40) XL(42) XXL(44)"
        },
        {
          "label": "Weight",
          "value": "700"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf33",
      "sku": "SBLSGF33",
      "title": "Present All New Sunkissed Floral Print Suit Real Modling For Upcoming Festival Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1t8cBaQaEGrrCSUbpsdZYlevXH5FC3u_V&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1t8cBaQaEGrrCSUbpsdZYlevXH5FC3u_V&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iJvAoioh2ZpE97to8IjxZREnVd4DTstl&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iBC2XNVbQQEr8X6uq80JQNXk6DGWylQy&sz=w1000",
        "https://drive.google.com/thumbnail?id=16Qb5G8XWtWW9csVNZPdrGpCuORPkA5YS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mW2wmQmkCLM2rpwyC8oSEuCQ0uNJBy3q&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sXivM5L6pZj2BKyaaa_Uw1eenOmNqeTe&sz=w1000",
        "https://drive.google.com/thumbnail?id=1n-EJbeiPpa8L4lmI-D7gc_3IDqcLC28g&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RwMIuWHApzux5YBZ7-O2_tLzCTqE_kFf&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-zojUY57prvycBW6MMHSh9dsFl02vy5S&sz=w1000",
        "https://drive.google.com/thumbnail?id=1etzPaMQDE1NTNd9pLeH_CXj-hjjDiWBp&sz=w1000",
        "https://drive.google.com/thumbnail?id=1815H330iB9X5culBB3yCJeoKJ3t3X_QW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Cl1d9Kbqxn_geWBo52Maza5uK-BbslqQ&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1uL-v-PfLRCp6lFVgJUuNVMVIfsV66Mw-",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with & pant. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "& pant"
        },
        {
          "label": "Bottom",
          "value": "MICRO COTTON FREE SIZE FULLY STTICHED"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        },
        {
          "label": "Weight",
          "value": "ORGANZA FLORAL PRINT FABRIC INNER MICRO COTTON"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf45",
      "sku": "SBLSGF45",
      "title": "Presented Our New Farsi Salwaar Pair Real Modling 💞 Tunic",
      "category": "Tunics",
      "price": 1900,
      "originalPrice": 3450,
      "discount": "45% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1FY8EXqPuScVxgy98Ba8ErgzT-XriR6ct&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1FY8EXqPuScVxgy98Ba8ErgzT-XriR6ct&sz=w1000",
        "https://drive.google.com/thumbnail?id=1YnfiXyv8XI8YEHHWjFSddpXbg9Vttkx6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JNbJSwMgzTtF2W2jwZ8pmctCdtHbTIT8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1kMXSbojJwTMCfo3kouZ5-d3SDdO96DRm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1skGtJN9iNyDdiZUPv1yCX1BQQVeuPVXy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Myz4h352aqWif2K7TRSrJxsb9SjeScnz&sz=w1000",
        "https://drive.google.com/thumbnail?id=1V-556oVO4WcozqFHF9VGn5XghGdQu9_P&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ySqEAlrP6WN3jmGHrK04YxesqtNL7gJ7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BRPaB7wk9u_3Lw7q1-BMvL6WKTH9PG05&sz=w1000",
        "https://drive.google.com/thumbnail?id=1h1rIXZNZttIX8sqKtrwDMh-ThNHT_LFX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1chqC0R9l7y58usL6KAI98AMm4qOxk027&sz=w1000",
        "https://drive.google.com/thumbnail?id=1r--k45xmzwhq1ZB-7CLI8m-vYHRjKNt4&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1LjmoqDVoD-3xIpGrirULJRGnwjfPfVe7",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Styled with fendy with lace (2.3 meter). Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "FENDY WITH LACE (2.3 METER)"
        },
        {
          "label": "Sizes",
          "value": "S(36) M(38) L(40) XL(42) XXL(44)"
        },
        {
          "label": "Weight",
          "value": "650"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf44",
      "sku": "SBLSGF44",
      "title": "Our New Sarara Pair Real Modling 💞 Tunic",
      "category": "Tunics",
      "price": 1900,
      "originalPrice": 3450,
      "discount": "45% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1YLqhSOsB2RJ7rzkZBxDtOhr9nCjrbhkj&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1YLqhSOsB2RJ7rzkZBxDtOhr9nCjrbhkj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ygYYOH1uJ5EUBqbB4G1oCzc85KJZCcTd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1um0YxRxN_WELIIu2a0IxUkeQ07Utx3tl&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NvcrF_ZdrJRnR49x7uDp-pjNCALyySRe&sz=w1000",
        "https://drive.google.com/thumbnail?id=10Pe_lBwExnavlcSYvgfIBuqmz96XTQAH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1IujX2Fx6X171sRm5rEdZklniuFwWN73d&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Okc-1vfFpQNgKqQS4kwwmCkv0UN5NJxB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BcArwLN-wpk4MjaYpaF4xcFyM1-Vxjen&sz=w1000",
        "https://drive.google.com/thumbnail?id=14t0vm8l0OYn74_sRKFJBbDfLt0QMHWGS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cO2MG_C7hfLPSa03PXrdbDUPfPAaucbF&sz=w1000",
        "https://drive.google.com/thumbnail?id=11YdfEci887swO4yLiFeWImb-Dw-Cs9pL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xjpZyWKD8_Lkv4um1LDEw6Jhuw0ns2MA&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1VA6jPaqVZIIru4MIByBXS_QxlNRYp4bW",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Styled with fendy with lace (2.3 meter). Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "FENDY WITH LACE (2.3 METER)"
        },
        {
          "label": "Sizes",
          "value": "S(36) M(38) L(40) XL(42) XXL(44)"
        },
        {
          "label": "Weight",
          "value": "650"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf43",
      "sku": "SBLSGF43",
      "title": "Presented Our New Printed Gown Pair Real Modling For This Wedding Season Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1FgWHqzRHLJhee3AmqMc55qOvuUrNeYsy&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1FgWHqzRHLJhee3AmqMc55qOvuUrNeYsy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RGYc9wJt8lwTxObyAi69sl8lgLabRkg2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SyZhtTCLi2uTKy8R-voz5h0sNjaX0i9w&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jm7SXfsX24poqhwx1jh2w-RvuwGEAcHr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1i4WNFkLEs158KMMIXlGd9nidDtqJkYzK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TSg6vMrpxuKi4QmBmV8zi4lIKfcg3L5V&sz=w1000",
        "https://drive.google.com/thumbnail?id=1A8usuO_nbfAZVTgb_8coOMjSxy5-9LEo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tq1kWMNhtsy-GbmLKUycYfHZtn1ZdmyK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lI1ERRH0ei8eDzOfJQjjAkGLy8AFYd4B&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rnMVj9C63ZeWa4UTrydJiZWfAMADSYHT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1suLnf6Oh0L18YtxW9G5I01xE9cqgBPjJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LBshozjBZfHNxssIa-TZQSFgf-Jhx_i_&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1eZSWvENL0rsqMyIYAo_xzSlbUibluZGU",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with printed georgette with lace (2.3 meter). Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "PRINTED GEORGETTE WITH LACE (2.3 METER)"
        },
        {
          "label": "Sizes",
          "value": "S(36) M(38) L(40) XL(42) XXL(44)"
        },
        {
          "label": "Weight",
          "value": "650"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf42",
      "sku": "SBLSGF42",
      "title": "Presented Our New Printed Gown Pair Real Modling For This Wedding Season Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1tW55ibUBS69CMHlcNRQDFYKC-T4hx-MC&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1tW55ibUBS69CMHlcNRQDFYKC-T4hx-MC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gLUvOy6P6ZcWsdYNIWdCANS9voaXqsaa&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RotN-6zpmOBk_2C7oOE5msO1J287RAql&sz=w1000",
        "https://drive.google.com/thumbnail?id=19Z81pY4YyG2hlw_CueGpS6bEpqQVr6L1&sz=w1000",
        "https://drive.google.com/thumbnail?id=14IS0lOFoD4aS_CW7i7K2XKfhaYI156WT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DJwEJyjPzV0D1gm0XPUaEPkmBoJLYrfX&sz=w1000",
        "https://drive.google.com/thumbnail?id=13UfWXtFrH10-2zHqTaeHqdvhrK7AAXE9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1kjYc69cZRHNdLw7MACehhN-6I9zbXCBt&sz=w1000",
        "https://drive.google.com/thumbnail?id=13tBJtbPMMqzq7pQklR-rGc-WsjuoLzM-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1n4tg0yJbIcal5pUm0UEL1odhd5kZvB1R&sz=w1000",
        "https://drive.google.com/thumbnail?id=1acCtly3wpH3jqb7qNgopEHj_pLsSuNz1&sz=w1000",
        "https://drive.google.com/thumbnail?id=15iCzg2x7qxma2Ge8PBQGIf3PwcHNttWR&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1W5yaAdPoScAFH8Kxi_UGDZIIlUAIG_Wt",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with printed georgette with golden lace (2.3 meter). Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "PRINTED GEORGETTE WITH GOLDEN LACE (2.3 METER)"
        },
        {
          "label": "Sizes",
          "value": "S(36) M(38) L(40) XL(42) XXL(44)"
        },
        {
          "label": "Weight",
          "value": "650"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf41",
      "sku": "SBLSGF41",
      "title": "Presented Our New Sequence Embroidered Gown Pair Real Modling For This Wedding Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=12EyhviNCAcMInFirWrKuzCyUsMUXpp3r&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=12EyhviNCAcMInFirWrKuzCyUsMUXpp3r&sz=w1000",
        "https://drive.google.com/thumbnail?id=12TvGUmpZv7cQoS_AKa4jP-gws8GQkI4p&sz=w1000",
        "https://drive.google.com/thumbnail?id=1p3zwRUqKq-YCytnXSz74yNlUuPteqTNP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1CH23BOsVN2r81UNnzchBGquo7EWQwcp8&sz=w1000",
        "https://drive.google.com/thumbnail?id=13dlKiRg12EoVBxD52dp2-us-uH2NF6Uq&sz=w1000",
        "https://drive.google.com/thumbnail?id=16GDL_M7JkU822-BVFPiMVx6g4hszBhcg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1N7tFLEWTuGxgfiRWXgw6IKmlbg6r8LKW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1u9Ri5IRHIabLI5xWdsNIDHegPKnFpcws&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SvausL4htZkjCR1nmNzLNHY2RiYm1Kb6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Or7pIKky4XRxuR7lngZFvj3i5CdON60-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AUYo5zxxni5gpZZ0gaa5SOjaNwiOxgTV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_ZA-nXUbOhNY3vqka_kFDcNmK99sP3KN&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/12-ksRuFsDAgVbuEr5ijqOveDVlZo00IX",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with georgette with sequence embroidery (2.3 meter). Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "GEORGETTE WITH SEQUENCE EMBROIDERY (2.3 METER)"
        },
        {
          "label": "Sizes",
          "value": "S(36) M(38) L(40) XL(42) XXL(44)"
        },
        {
          "label": "Weight",
          "value": "650"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf39",
      "sku": "SBLSGF39",
      "title": "Presented Our New Sequence Embroidered Sarara Pair Real Modling For This Wedding Tunic",
      "category": "Tunics",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1Ld9IbQjTw-c5YwssYBnyqMtfzvS29Dqr&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1Ld9IbQjTw-c5YwssYBnyqMtfzvS29Dqr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BSnPiTTbTAVc8gpXA8aIV1XrvyQLkg-x&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iSS9aciGVEWYPJBk5K-d03i-aPZIMHcB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1719bCrbbjIKzsWwBAbZ3xI8Uo2tVOdYA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1P336get9tATylYNmjim4ZO92pJ3FgtCA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TdsPuoiLHpBU00nkySQHo1s9DoPxk0pu&sz=w1000",
        "https://drive.google.com/thumbnail?id=10KduLQgg9UgJWKsUSHJW5--Q7YM_CUND&sz=w1000",
        "https://drive.google.com/thumbnail?id=10pgfFRPGb732OHDbXGb2mjkDQBfk3Ef8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SyMHiuKF5AeNYnvnR33C-K5f_Ae_8p-u&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zE8kihg0tnIvX3PIO_RDu8AsF7-jqPNr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1pJvS_YCWJr3Z9-ffXVSA_ZJ3PXjr5Joq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1w2wuLTK6PaGGdp9biXNIxq3CwRuZsW1F&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/141v5xw4_w0SG5lZernq5aMECVdqYqgpa",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Styled with georgette (2.3 meter). Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "GEORGETTE (2.3 METER)"
        },
        {
          "label": "Sizes",
          "value": "S(36) M(38) L(40) XL(42) XXL(44)"
        },
        {
          "label": "Weight",
          "value": "700g"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf38",
      "sku": "SBLSGF38",
      "title": "Present All New Sunkissed Floral Print Suit Real Modling For Upcoming Festival Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1_mJZOA4kl0TrMVAr16xD3oULDBq_T85Y&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1_mJZOA4kl0TrMVAr16xD3oULDBq_T85Y&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FnVtx-WtC5nCYM-hTaMq0OZco5qO0kTe&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Kw32b_JvTvvbYup9rfWSLq6ooEbUhQJJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MsJp2XxwsiDyd6kSLWqhI_K8z3OsC9G4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FYrdCFh1AGhu6XZGLgDsYPU2qIUz1qrR&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_JNqm8OQG_jMpujGKIMUPLFaR0i5cHjM&sz=w1000",
        "https://drive.google.com/thumbnail?id=11B7MRr6q3C-HMLLYTTRE4Fx_dioiJKML&sz=w1000",
        "https://drive.google.com/thumbnail?id=1aHFEXsFlyCcQy4WdLshwFiaRliyK_dhL&sz=w1000",
        "https://drive.google.com/thumbnail?id=19y17ySHwQt2VnFFauuzVxQ5w7SueKN0O&sz=w1000",
        "https://drive.google.com/thumbnail?id=1C1HtkXkv6uDgQ4TFgDy9puBUEEind_53&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QEO8dqPVbAnTpBj6IU8N5MPIXkg7P705&sz=w1000",
        "https://drive.google.com/thumbnail?id=19Szie4T4tlGrlnZalR1Tf6WrZcCKji1G&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1lvMcB540v6MEBDyBEDUAFSiIUEQft3Kq",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with & pant. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "& pant"
        },
        {
          "label": "Bottom",
          "value": "MICRO COTTON FREE SIZE FULLY STTICHED"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        },
        {
          "label": "Weight",
          "value": "ORGANZA FLORAL PRINT FABRIC INNER MICRO COTTON"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf37",
      "sku": "SBLSGF37",
      "title": "Presented Our New Sequence Embroidered Gown Pair Real Modling For This Wedding Anarkali",
      "category": "Anarkalis",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1SDlumqW-zg9e8WP7zwndFVnFCyiI-ATI&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1SDlumqW-zg9e8WP7zwndFVnFCyiI-ATI&sz=w1000",
        "https://drive.google.com/thumbnail?id=194IWwQq2JhTnNyMGdLMoXQzZTFmaYErZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GQo8Q6MBvJKVEQ2s7V7M5qONeka7omCr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1o-DgRgR17UbH4ZFFHspzvH0XTBcIc9IS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1op3OEpCQDar0xo4vyTmgaEQnl_db6gfy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SNFIcS_SxuTdQYe_0S-b4zhVJ69DFXwN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1pR2OxsvK2SVH3O4NZPRiM3lvWKMlot2z&sz=w1000",
        "https://drive.google.com/thumbnail?id=1uzrwUehJyUNsovkjmxAIJv176pSKDVo2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nVEeHzjZY1oNu6TVeYjyF6MO3MElUqWN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gU_TXIrxs3LcWe9vf9DN3xSXj_KOUsp8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_xDHp2uIMJ666eacDyi5hXXM4BG0gRQa&sz=w1000",
        "https://drive.google.com/thumbnail?id=1J7lnkcnMV8FBvinfsqUiMowm11QFSSF1&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1vp99AZNOASms8J8zmWIE8G64OaKu-Pvl",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with georgette with sequence embroidery (2.3 meter). Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "GEORGETTE WITH SEQUENCE EMBROIDERY (2.3 METER)"
        },
        {
          "label": "Sizes",
          "value": "S(36) M(38) L(40) XL(42) XXL(44)"
        },
        {
          "label": "Weight",
          "value": "650"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf36",
      "sku": "SBLSGF36",
      "title": "Present All New Sunkissed Floral Print Suit Real Modling For Upcoming Festival Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1MoQ2ZvFhvqMtJx3l1PdTDT9OrZIBfpRs&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1MoQ2ZvFhvqMtJx3l1PdTDT9OrZIBfpRs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1o0jI8AVVATJPAif_gn7l9wlGBZ7aNg4J&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rqlRGUcZgFopLrb2Spqpb9ESluNdAAQL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cIYuo0E8bhcbyPa-mZQzNOU9HMloIiO7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZVLeQY4udmrCWp1GGX8KCLoeylZRfbPa&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_K42voJ8zZxSkiklAIzYluZ7zf4y5WcU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1H8EQNDcyg-FoFM5t56EvjVCJDD6Ml0BV&sz=w1000",
        "https://drive.google.com/thumbnail?id=11t9pWDtwsx4O8MOA1qp0CYC72oS2nRDo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xy6s-L1b9z10X6yZYAxFNT_HpkZqO0EB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hv8HiMbhGetdKkdBOO0pEKHLsYrBxR_D&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sB-XHS07C08OU5gjQLGDWBgAbF7FIf_G&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ME9iiJyJs9PCH3irlrwIQCYciVse2G2X&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1FEyhu8fbhIg3WKe4xvvg_iB4WlJRQM1g",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with & pant. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "& pant"
        },
        {
          "label": "Bottom",
          "value": "MICRO COTTON FREE SIZE FULLY STTICHED"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        },
        {
          "label": "Weight",
          "value": "ORGANZA FLORAL PRINT FABRIC INNER MICRO COTTON"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf35",
      "sku": "SBLSGF35",
      "title": "Present All New Kalicut Anarkali Suit Real Modling Anarkali",
      "category": "Anarkalis",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=13l7Ibhqx6suct7Pkwotzn4ix2QgUj4Un&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=13l7Ibhqx6suct7Pkwotzn4ix2QgUj4Un&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lti7-BBJs-oQz0YHKIqAS5RVpatuQdD5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qs4m2h7LMmPbfZg1uAdbzXSA4FV9piLw&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qCmqu5ZXcdYfjFl8w7NCyuqP8sieOB-I&sz=w1000",
        "https://drive.google.com/thumbnail?id=1u8zBDwzpiayqOCn3Ed632kAusUnCfznd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wOAFOdswiIV6IRHEIx9Vfy_Au0ZCEMyw&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Qk9fGfq2Yr10HNx_eBBGcCh9L3xPSnhV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ux2Kpzcs_cCSB_kZsJIHRfBzCSnoRxi_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_mTTtSKBeCRe23ZSjyKBe9nKd5gZ388c&sz=w1000",
        "https://drive.google.com/thumbnail?id=1N4ZSyXZrdekVTd6GWc-aUszpU1eC_F3Y&sz=w1000",
        "https://drive.google.com/thumbnail?id=19rwQDvKhGkoP6TNRZIN1DYnj-U046QEx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PePvJ2Pyxy_IWD3dFSb9NBObsrZbSpQM&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1a7xxCHx_QwPPwk-_sajw-l5kXu8rrHmm",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with & pant. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "& pant"
        },
        {
          "label": "Bottom",
          "value": "MICRO COTTON FREE SIZE FULLY STTICHED"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        },
        {
          "label": "Weight",
          "value": "GEORGETTE WITH BOADER LACE WORK"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf51",
      "sku": "SBLSGF51",
      "title": "Present All New Kalicut Anarkali Suit Real Modling Anarkali",
      "category": "Anarkalis",
      "price": 1900,
      "originalPrice": 3450,
      "discount": "45% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1AAqU3SJADvNg7XvatwVxCjnGjIHusu3Y&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1AAqU3SJADvNg7XvatwVxCjnGjIHusu3Y&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BiH58PuMSgEDgWmDnQjVP4HoNuaWzt80&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QpE8iJGroyZVA36Gfa5iZqpPCgB8ag7L&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yyWr68oVjgPupsdvN3ppNXYNHvaEhWvF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Tor57h0NO4-MctSZ8Xg0bH3E0LvqzTej&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EbS6cm75pBzmySqlijJeDcZXwkPLoM0s&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QIM4pavA7-INBUAH-3cXw5bP7FPPrbPd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Fq9WJjM2Qomgmm4tF3cuEEz7QkD1m4Cf&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Fda_g4tQ38M4op5NWlh51K0qAa7MKGfb&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-bmVZuXep8BMVERHUqIdaIA5ZLzAaQJC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PPvec0vQITnSklF3fklkvuBe6SFmu7dX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nKTMKW00wSg7S7Ebe7Ic1I0D8H9fblTb&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1Yr7TVB12MrYuUIEC5MwsxMm9PNTOQ9yW?usp=drive_link",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "MICRO COTTON FREE SIZE FULLY STTICHED"
        },
        {
          "label": "Sizes",
          "value": "FULLY STTICHED"
        },
        {
          "label": "Weight",
          "value": "GEORGETTE WITH BOADER LACE WORK"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblsgf47",
      "sku": "SBLSGF47",
      "title": "Presented Our New Gown Pair Real Modling For This Wedding Season 💞 Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1AAqU3SJADvNg7XvatwVxCjnGjIHusu3Y&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1AAqU3SJADvNg7XvatwVxCjnGjIHusu3Y&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BiH58PuMSgEDgWmDnQjVP4HoNuaWzt80&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QpE8iJGroyZVA36Gfa5iZqpPCgB8ag7L&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yyWr68oVjgPupsdvN3ppNXYNHvaEhWvF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Tor57h0NO4-MctSZ8Xg0bH3E0LvqzTej&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EbS6cm75pBzmySqlijJeDcZXwkPLoM0s&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QIM4pavA7-INBUAH-3cXw5bP7FPPrbPd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Fq9WJjM2Qomgmm4tF3cuEEz7QkD1m4Cf&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Fda_g4tQ38M4op5NWlh51K0qAa7MKGfb&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-bmVZuXep8BMVERHUqIdaIA5ZLzAaQJC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PPvec0vQITnSklF3fklkvuBe6SFmu7dX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nKTMKW00wSg7S7Ebe7Ic1I0D8H9fblTb&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1Yr7TVB12MrYuUIEC5MwsxMm9PNTOQ9yW?usp=drive_link",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with printed tebby organza (2.3 meter). Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "PRINTED TEBBY ORGANZA (2.3 METER)"
        },
        {
          "label": "Sizes",
          "value": "S(36) M(38) L(40) XL(42) XXL(44)"
        },
        {
          "label": "Weight",
          "value": "650"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3116",
      "sku": "SBLZSR3116",
      "title": "Designer Party Wear Look Top-plazzo Dupatta Heavy Embroidery Work Tunic",
      "category": "Tunics",
      "price": 1800,
      "originalPrice": 3300,
      "discount": "45% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "MOCHA, BLACK, RED",
      "mainImage": "https://drive.google.com/thumbnail?id=1g5fFuyxWBu0u8hSltWbLRfq_G3H6vE3s&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1g5fFuyxWBu0u8hSltWbLRfq_G3H6vE3s&sz=w1000",
        "https://drive.google.com/thumbnail?id=1B3Q6QqnDXg2JubSLs4k_kM1zQgo7iqng&sz=w1000",
        "https://drive.google.com/thumbnail?id=1T6wYgaBsJ9VcOJ7tQnMuWex_bF5ObylW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PVeweunS7tQMa6x1Dk1Q6Xb0pb70FsCA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1F8pR67CD7cWcSbOFP6hHShJvBoShU6Oi&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mivSrp1ejA2BVyONmY838GH8Vxk2Ub2K&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qdoz0eos7YlcuAnfJ-2_8nSAT1cAm7_O&sz=w1000",
        "https://drive.google.com/thumbnail?id=1c4p3EI1sWY8Rz26GeLAcLrWO7pUVdHBY&sz=w1000",
        "https://drive.google.com/thumbnail?id=113yupPoDS6xjzdXulLeVHpVVEYTUapIe&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zZc6hupP4JbAeE7iqo3pafkrc4OjbADG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1aEuF2_h7DT1siCMGsiVv1zHFCnEzdPIe&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zGWHkPbfp_9p-ntyV8OM-gxA1xCaIxcy&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/13oKMhk2_nAuQ6Yq7M2ArRbU0FVkiRgL2",
      "description": "Crafted in heavy faux georgette with 5mm embroidery sequence work with moti work with full sleeve, this tunic brings together premium fabric and refined detailing. Styled with with heavy embroidery work, kurta length 38-39 inch. Available in: MOCHA, BLACK, RED. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Heavy Faux Georgette With 5mm Embroidery Sequence Work With Moti Work With Full Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "With Heavy Embroidery Work"
        },
        {
          "label": "Length",
          "value": "38-39 Inch"
        },
        {
          "label": "Bottom",
          "value": "Plazzo"
        },
        {
          "label": "Available Colors",
          "value": "MOCHA, BLACK, RED"
        },
        {
          "label": "Sizes",
          "value": "."
        },
        {
          "label": "Weight",
          "value": "950 gm"
        }
      ],
      "fabric": "Heavy Faux Georgette With 5mm Embroidery Sequence Work With Moti Work With Full Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3093",
      "sku": "SBLZSR3093",
      "title": "Designer Party Wear Look Top-plazzo Dupatta Heavy Embroidery Work Tunic",
      "category": "Tunics",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1CBavjsy7sypEvfiuYHUMnlgXLkffZYcS&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1CBavjsy7sypEvfiuYHUMnlgXLkffZYcS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AxFZtKt0k5CDoMKWLZFiLHi6BH_rhYYW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1N7ZUS9CH-vFiErLeJua48jqdbvljymvD&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TU7GNQOwR3SYen06RU_9lZyOQbM1EeoE&sz=w1000",
        "https://drive.google.com/thumbnail?id=1YODPua9Ti7y6Q8Drv5uRPtBilTrnJNsH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PHMjjdBRxVr-Cwq47Ap7C67UIs1iGz1E&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KCRMiVCspZUVhcRCPQ3i5bk3NQlqEA5i&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ECzGUVbg8qlyQnDGvOC4bI-cxmSSwQI5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dOopRvI77Bf8S3VzSgfL6pBlbAbw4DSK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lStabvcAG69Wo3xC6MfKks3Vt5YW5-p_&sz=w1000",
        "https://drive.google.com/thumbnail?id=19lbiXzlFhypKG2EzLvQeUvzWiT-fDk42&sz=w1000",
        "https://drive.google.com/thumbnail?id=1C4GaYyHagIkIce_ykchAe_1X_FdU97NU&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1D4FeCwQ0vtCQXI3mV1TiqVkAnBLlKpsT",
      "description": "Crafted in heavy faux georgette with 5mm embroidery sequence work with full sleeve, this tunic brings together premium fabric and refined detailing. Styled with with heavy embroidery work, kurta length 38-39 inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Heavy Faux Georgette With 5mm Embroidery Sequence Work With Full Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "With Heavy Embroidery Work"
        },
        {
          "label": "Length",
          "value": "38-39 Inch"
        },
        {
          "label": "Bottom",
          "value": "Plazzo"
        },
        {
          "label": "Sizes",
          "value": "."
        },
        {
          "label": "Weight",
          "value": "950 gm"
        }
      ],
      "fabric": "Heavy Faux Georgette With 5mm Embroidery Sequence Work With Full Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3122",
      "sku": "SBLZSR3122",
      "title": "Designer Collection In Natural Crep Silk Top-bottom Dupatta Fully Stitched 🔥😍🥰 Tunic",
      "category": "Tunics",
      "price": 1700,
      "originalPrice": 3150,
      "discount": "46% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1asJVrUZ39cHMdwbVDrs84bgO-xg0ed5w&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1asJVrUZ39cHMdwbVDrs84bgO-xg0ed5w&sz=w1000",
        "https://drive.google.com/thumbnail?id=1XKZEJ0FYK3UDrUdbSGNw95W85pc13JDq&sz=w1000",
        "https://drive.google.com/thumbnail?id=15qg5L44S61w7L5h0snx0swySeNByO8ME&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AtwIv-dh3ZV5eEDlA-AAIgSckJmb8Ig3&sz=w1000",
        "https://drive.google.com/thumbnail?id=12bg2PdB5tRrmRz5DUIB5lQtSb94AcL_a&sz=w1000",
        "https://drive.google.com/thumbnail?id=1CmWVZvJvsllxfXLOkhhBTW0zagAJjhCA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DNReMTDolWgHt5vWJyyekGh9_RD0D3zK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VFYSOQ3_li4LFmdo_G9G1WGlG8oUWC-u&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yOZSFKnn-Rb8ROCBibsI8DhU63ggIcc9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1r8V4KftEoBC1CR4QMafxtukfdZa570ya&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1i89ZH08hIaKnKpeKkXjZw6gc0lY59j7o",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Styled with set fully stitched 🔥😍🥰, kurta length 39-40 inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "39-40 Inch"
        },
        {
          "label": "Bottom",
          "value": "And Dupatta Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Sizes",
          "value": "."
        },
        {
          "label": "Weight",
          "value": "700gm"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3128",
      "sku": "SBLZSR3128",
      "title": "Category: Women’s Ethnic Wear Tunic",
      "category": "Tunics",
      "price": 1800,
      "originalPrice": 3300,
      "discount": "45% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1NrLmxrTXzQUy2IYrHGhQni4sjqhPxpST&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1NrLmxrTXzQUy2IYrHGhQni4sjqhPxpST&sz=w1000",
        "https://drive.google.com/thumbnail?id=16M69t8ewIwndsV2e6BeVA5GjlnFDqYy2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tmxXxwDQnA4dvjq55wcTtVxd9gsHQ-Kv&sz=w1000",
        "https://drive.google.com/thumbnail?id=1--VB1Rxi-wXXKmBjx_x3q_SKv0_59J8N&sz=w1000",
        "https://drive.google.com/thumbnail?id=16ZpS07Z3BSSIIgveMq3H-R5qPBp23eMD&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wgsjE9Q-7j9EI1-JurHU67UORxZzuqZj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1m78-5BpwH4PTc0Mup3l5rdxpdoTuy4Wp&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SU5OkTwDdUgKfhwOn0IcX7B9muMbu5hU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JoJDAVGIOZZYCMuNOgAFHXV0WI5gWnX5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Lj7adHR505xYORYTLcGjcf_7VXaJc_9_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KRdoRG0XBJW7ypfB5MaRVXWuoSsS7ZSP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LOG9oD7XWgwWgBxYbnsAc4lRY-J9OJ3s&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1RDbG0q03Nz_LTGLCBgsoO8dU-mPlBpBF",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Sharara Plazzo)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3131",
      "sku": "SBLZSR3131",
      "title": "Category: Women’s Ethnic Wear Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1LNu_inuv0VA3flCaNibdlQi30wAaG6Iu&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1LNu_inuv0VA3flCaNibdlQi30wAaG6Iu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vjqgtJlOIe9Se41r6XWTJhMaXYPJlYcG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VR0y0Klcj-_2uxKGWukDNYBSnziLJPtX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cgToZnQN2LjRxImvGP5sMIwaq-0WlrYB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eD-si55uTcBUPo0gD8Ym-Dz6xbZjqHP-&sz=w1000",
        "https://drive.google.com/thumbnail?id=187vZjMS3AovMrkymkALWh5fbNRr5f3ji&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LlpelLQJo-1Kr8XLSwwBEbcaEb3YKveP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1L5PcqmKWAxXjSpWLz8twNDzRY7kbXqtf&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iSGdv98tCKxDjv6Zi6OWxHlrXgL_VTPR&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1VjzxS4xvwA15mRAIaZ-jKuI6f4rTMRoW",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Pant)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3132",
      "sku": "SBLZSR3132",
      "title": "Category: Women’s Ethnic Wear Tunic",
      "category": "Tunics",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1GzFlNmtp0ql3bhyuLz94g9X2oa7hnLy8&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1GzFlNmtp0ql3bhyuLz94g9X2oa7hnLy8&sz=w1000",
        "https://drive.google.com/thumbnail?id=190cPeIGCI265SbI9P4j-bfxm8UVlPi9j&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RBf12bI72TdKaQeWAeEtVL6l5QO6FibT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sBOm-iu97TUJoa9A1TlN5VVnl8j6CSFt&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Fh1dOEv0eHGPFsmGpHp29KjktX49HTpT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vdS-wu4zg9FapBzi7goEG_dyQ2xpGRhW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ah9GEnD6PjuZjLS0BRvZaUgMrNqI04V4&sz=w1000",
        "https://drive.google.com/thumbnail?id=191U7cEsfc4ZGYMPCk1DIw9DhjmlSwIK8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qYDQPPNRN8d2m5cNae8ivS5kjZZOckAz&sz=w1000",
        "https://drive.google.com/thumbnail?id=11SMqL-sQekSlinVJx7lKW_vPc_pptRHm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HXkqo_-w4jRNdBTnI4okAO6GFRKwImC0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-xwy2cS6XRTgy1ts5yaHNgIp4xUmnm4l&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1toEBsc90JAGfLmdt7fidUqcwFhlzgUaD",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Sharara Plazzo)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3139",
      "sku": "SBLZSR3139",
      "title": "Showroom Finished Product❣️ Tunic",
      "category": "Tunics",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1edfBJn1iF-OT4WW0n5SeQa3Yp5DQqGD4&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1edfBJn1iF-OT4WW0n5SeQa3Yp5DQqGD4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Y33AGC_XpZRWm4FS75zOtFKxQUnzSP0L&sz=w1000",
        "https://drive.google.com/thumbnail?id=1D2GZEpPLSizAO4WFJxSA-MVLiOZ08gSv&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KjKpkiFd4royEMaRSQWiRYMQb2_SciVt&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JfZsceFZRxgea-tAo169g3M6v4P--wYA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RcD7LcJTM8zR5y25HkpyvGEm6r8Wf69Q&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zcBDEDBLqGEyvF8LV3U1Czd10Kwb8ZXl&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jJI6_dGz55sCDb8A4L4Z1zk6vYuK8S89&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1-aM0mWgQ9DsmA63Wju-vUdycVOoHlOCK",
      "description": "Crafted in details, this tunic brings together premium fabric and refined detailing. Styled with no, kurta length 39-40 inches. Set includes: s. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Details"
        },
        {
          "label": "Dupatta",
          "value": "No"
        },
        {
          "label": "Length",
          "value": "39-40 inches"
        },
        {
          "label": "Bottom",
          "value": "🌷🌺"
        },
        {
          "label": "Sizes",
          "value": "Range"
        },
        {
          "label": "Weight",
          "value": "650gm"
        },
        {
          "label": "Set Includes",
          "value": "s"
        }
      ],
      "fabric": "Details",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "s"
    },
    {
      "id": "prod-sblzsr3134",
      "sku": "SBLZSR3134",
      "title": "Category: Women’s Ethnic Wear Tunic",
      "category": "Tunics",
      "price": 2400,
      "originalPrice": 4200,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "MAROON, DEEP VIOLET, PURPLE, BLACK, YELLOW, PINK, OLIVE GREEN",
      "mainImage": "https://drive.google.com/thumbnail?id=1m2qcVp_QPDLxW8NrOKMyEaY6QcPmzpP5&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1m2qcVp_QPDLxW8NrOKMyEaY6QcPmzpP5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1O3OQJU2sGiKA7ZPkfeL2JJ4uoGKxRJsy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1N3OhNNGhizOiSLjMvBynvW6PmVp3yzsK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LCm4pYyEj1dWlXqtotm8aENkGZiaaigB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EF_MXGQXnRjoAHctV6NFr8vc8_CK1TDJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lFN8yLipsBiEYx2quaZfah9MiYJcm6bk&sz=w1000",
        "https://drive.google.com/thumbnail?id=12fmdL4IPmB1xntrVOpbXEhqmB9Wsz3VR&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QjV3sLAmWlLoIkPd6ON9onfnlRCThw2H&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wn6X4mov7g7De_fUgLU-ir3_cJWE_wOZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1giRUjOdxv9-GCDkP6wYrimzdxxzk4cqs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jdvvp0rwQ4TJTq2UEAymAeIPci-igXQg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Zdx6EqZ8yXd6JQn5goon7CT_qqzltK3n&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1DE3Zyr_fNNG1Oo61ZZWPf60pLhEHKPPW",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Available in: MAROON, DEEP VIOLET, PURPLE, BLACK, YELLOW, PINK, OLIVE GREEN. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Sharara Plazzo)"
        },
        {
          "label": "Available Colors",
          "value": "MAROON, DEEP VIOLET, PURPLE, BLACK, YELLOW, PINK, OLIVE GREEN"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3140",
      "sku": "SBLZSR3140",
      "title": "Category: Women’s Ethnic Wear Anarkali",
      "category": "Anarkalis",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1YsnlujpC18R8oKVR9SiCUJuneLMj_Js9&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1YsnlujpC18R8oKVR9SiCUJuneLMj_Js9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_46FRXfQVH8NVlFbgsxsc0AOlqR82bBN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QWIF3zF0kJJIfPCDZC6grFISsHM73nvp&sz=w1000",
        "https://drive.google.com/thumbnail?id=1pYAoGnSbHgNHT8ja05lZxJhigtGq8Qu_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1olTTuHmTUoGIp_uS1LfdWrxL8473QMAQ&sz=w1000",
        "https://drive.google.com/thumbnail?id=19V2Oh1vnNLwJ_EiR4ddhoP02AyutdY49&sz=w1000",
        "https://drive.google.com/thumbnail?id=1IBAKibmnknOPuuoRnoPQ8RAPIFOjHr47&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rCUjBPqC4ST_C8_eq7T1gkdG5Eh51dFv&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1ThjKE0go0pVyFYNJrfdDci7WCcV9lLtG",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Plazzo)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3141",
      "sku": "SBLZSR3141",
      "title": "Category: Women’s Ethnic Wear Anarkali",
      "category": "Anarkalis",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1k2c2b0WNjHvLyHO77c35O_kxcYogj7dC&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1k2c2b0WNjHvLyHO77c35O_kxcYogj7dC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AMzqBpRncXnS1Kb9f1UhCO8gXtL7-gkU&sz=w1000",
        "https://drive.google.com/thumbnail?id=14pe7XjFO_eg2iTULRsW2pAH87WUeLGBq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ALN9CGYErXbQsazh0-iZbwevkbSVJiI5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1a3muZjze_hRYrLrVQIEiCJT28l8f8bag&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tHBwe6Vvy4bHY1Pk-lHTyzkxEogtwaag&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZSfCMDohlqpTxrbBJVLkwbP4BQx3WUMj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vQLes4qJGRrB_8QkyxOcbdjAAp8dN0LT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1N7EfEUydR_SoLO5E1JcOlesg1cujXHF8&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/10vsX5M_GM_UYZ6WqyENb90WdXCgrIy_D",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Pant)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3142",
      "sku": "SBLZSR3142",
      "title": "Category: Women’s Ethnic Wear Tunic",
      "category": "Tunics",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1lZ0Rav6uXKgvYc1XK_Bq7FS7fCvqJ-Qf&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1lZ0Rav6uXKgvYc1XK_Bq7FS7fCvqJ-Qf&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wX6OWQEDLD3X4dZH7DqPnoOim-Wvb5JG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1t0sSfzUQYEQi1v5pIqjj2UgzPQgabk-q&sz=w1000",
        "https://drive.google.com/thumbnail?id=1trF8vT3UQxhWmXMAeKTH6cNFBzmfuW8_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1foTkCdsioiBLUq3SrjOyAHalMEXIgpRj&sz=w1000",
        "https://drive.google.com/thumbnail?id=132REeAnnmF-_KHCfKf70-RYIw5vSAS0J&sz=w1000",
        "https://drive.google.com/thumbnail?id=1aCJDJ1atCapI_6oiX3U8UqFfNWXIYmHN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1u1a_j6kPnvUfD-BKaiMnt1TBAcZQY1Ae&sz=w1000",
        "https://drive.google.com/thumbnail?id=1oLVVOxAS1LaIqOy_AkdcdoPXeeTANJAj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rzICKhhIR5xf5HUemieVwp3RLVtHW-3L&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1GIVm0fe-xjaV7yaB0zTmcF7YLYjWhZXK",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Sharara Plazzo)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3148",
      "sku": "SBLZSR3148",
      "title": "Category: Women’s Ethnic Wear Anarkali",
      "category": "Anarkalis",
      "price": 1900,
      "originalPrice": 3450,
      "discount": "45% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1sFT4p90V6Y4GI8wW5uavH_8zvKVcXC5V&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1sFT4p90V6Y4GI8wW5uavH_8zvKVcXC5V&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xyHXF1by7Slp7fvrs4kZFxKIidVj7cag&sz=w1000",
        "https://drive.google.com/thumbnail?id=1fLaYIQEcenOMpFPc2AGQAbx0uE7xRZLd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nJgiOquQH1rT1RoxKI_FlzaHEMqz6uVq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tP3rx53rmf1fFGiaxrMCNbyk9uqcM9Mf&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iokHX2iRNcB0vwTm8t3PU_CEEuiM9K9g&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1nlI7ST9vSBjiZoPB-hE9D93fU8CGeaiG",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Pant)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3149",
      "sku": "SBLZSR3149",
      "title": "Stitching :- Fully Stitched & Anarkali",
      "category": "Anarkalis",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "RED, LAVENDER, RANI",
      "mainImage": "https://drive.google.com/thumbnail?id=1YVabmpP41a8gz9Yw0SUmMnPq4KlVW66Z&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1YVabmpP41a8gz9Yw0SUmMnPq4KlVW66Z&sz=w1000",
        "https://drive.google.com/thumbnail?id=1c7IjbOmMzAxq8gMF1uAQu67wrE72faoc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dVfg_3FZLQ_No4buxcAiIrFhinxGxKOQ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VM15k5tL5CB5i9LeldIE6FkUunaFRV8N&sz=w1000",
        "https://drive.google.com/thumbnail?id=1akQDUzh39PmXLSOR7Ly0x4yssP43pi4w&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TVvT-l7ZMngnu2M1WpeUVnYh4ELTJUJf&sz=w1000",
        "https://drive.google.com/thumbnail?id=16opD0MRtrj4me0l-OxFeyJq_QkWtcX7i&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jcqh3GQPO44he3mRG3izW827PiGPeYw3&sz=w1000",
        "https://drive.google.com/thumbnail?id=10zW_nbWgPyThHzwv7cxCpJIVRsondPa-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1N9Z5y6awEanq_95Heik2z9WqyaHyUlCB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1i9DpZOzoQwmAlgcug7jgcXvWk8umSUPz&sz=w1000",
        "https://drive.google.com/thumbnail?id=16Yf_hw9R490RDoBYqBPrZf5sEgigpoi9&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1PI3Agy7VHk8dPciqJINbnFXo5zxt-3Wl",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Available in: RED, LAVENDER, RANI. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "& Dupatta"
        },
        {
          "label": "Available Colors",
          "value": "RED, LAVENDER, RANI"
        },
        {
          "label": "Sizes",
          "value": "M(38), L(40), XL(42), XXL(44)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3151",
      "sku": "SBLZSR3151",
      "title": "Stitching: Fully Stitched & Tunic",
      "category": "Tunics",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1ovj85zE1hu4yPVqtsnc_egxQKS37RHoK&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1ovj85zE1hu4yPVqtsnc_egxQKS37RHoK&sz=w1000",
        "https://drive.google.com/thumbnail?id=10E6Q_CfXIz6PO_gOk1N1QAPy_AJ0a7P4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eho4mzYxRiCpDoDNZXI21HT1KL6BlZhU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RerQJQIzOaeZ75TfJikf_6zgUpDdLFio&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DLtkfil4rnRbgxGc3T_x0KAYnX8Lw80O&sz=w1000",
        "https://drive.google.com/thumbnail?id=1a4H8kC1ElN02bpoRx2tMj4RcclF5ZEI-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rk4os2LRqHX0sulS9_Z9-0gxcRMfQV3q&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MxctmajUj9KeViZA0luDSE-yMfawRrr7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1h8gH2bitPnVm3VR9zM7NpV1haUX0WrbA&sz=w1000",
        "https://drive.google.com/thumbnail?id=18OgBw5HsK3VjXPdXnm_XOpld_KdXB375&sz=w1000",
        "https://drive.google.com/thumbnail?id=18SWEoFoKF2EsuVGEvXtjczCLGo5wUGUC&sz=w1000",
        "https://drive.google.com/thumbnail?id=17dpMVyGPmma8dBpM_Px1kGwxsu2sX1Hg&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1sXoRsdlB4WmBZzvGHFs02mPOgk4IUtn5",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Sharara Plazzo)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3150",
      "sku": "SBLZSR3150",
      "title": "Category: Women’s Ethnic Wear Tunic",
      "category": "Tunics",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
      ],
      "photosFolder": "",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Sharara Plazzo)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3155",
      "sku": "SBLZSR3155",
      "title": "Stitching: Fully Stitched & Tunic",
      "category": "Tunics",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1DK3G05Vlq0sTPkh2ON5Lul_-rSZzDCZG&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1DK3G05Vlq0sTPkh2ON5Lul_-rSZzDCZG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zZUGYuo8vPtq9UghtNB3-xCX0D9rpkpL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1fuIwnnjOXDGg-C-QlBhhCgkrBtDmkvEf&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sl6-hWdR4qgvmFPixIIeWdCuqtcdxzT8&sz=w1000",
        "https://drive.google.com/thumbnail?id=13DnycdsfXwy7CE9JbOhS947E_k9o392R&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Pq1MSYRb0ANcj9Lk2A4RTIcME7dF3N9R&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sy2KsNz9TDMCfTtVrHuOuHSKDyGdU0eK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ufPWprXGcY7bFXmcx9dtnUGX23G65ujc&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1BLQELckWttE5vVfpEeXP2EYHUfdilOYl",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Sharara)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3156",
      "sku": "SBLZSR3156",
      "title": "Stitching: Fully Stitched & Tunic",
      "category": "Tunics",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1fKdvppnfmRRolh88c3ppcy3y4EoJLx4L&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1fKdvppnfmRRolh88c3ppcy3y4EoJLx4L&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cNx1Mv5ouals4hxE-XnV3Uz3fvNlxvBg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Z6_Msxx0zT-vbQtptRiInZzXg8c7317q&sz=w1000",
        "https://drive.google.com/thumbnail?id=1prR_KMIod11gRTJStZRXo4jxishOc1jZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HcVClouqUQuQcdmThez3Ze7NJtGMSC_D&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lPnV7SZiL2jJ1stygSBGNEtNgCrPpNwF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cdGqe4PNvJlc3bCm84qlJMnA_ur0nn0M&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eU7VP2jJ3hAVkyrYcduQGL6yx3drOIiI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hC8kkp-9zfazPQw6hs8Rbj4OhK8dwE6_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1kWZsUDjCjtrgcldrNBpcqoUm0PN7sA6k&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ic191kHEuRL4zsP4WZ5PTMUcnLJ_VpAb&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1AFm8kx_lKoiTw5EtBJ_XUGixc4j7aMfh",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Pent)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3154",
      "sku": "SBLZSR3154",
      "title": "Stitching :- Fully Stitched & Anarkali",
      "category": "Anarkalis",
      "price": 2500,
      "originalPrice": 4350,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1VY2IBGyEnBLivvqkGLokRB_khIfkQR2J&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1VY2IBGyEnBLivvqkGLokRB_khIfkQR2J&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_UKebi2-Lj1aliISzVk9xx_bTkIjUZ2X&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nYKX0jLsM5IL7oXy-oHtnkUCghukc8fJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=19uZ0uPekRoUie0DuteAP4g-xgqUvS2Vk&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bQcflLA26SjeE8_8XIv8cspQsS7Mga6c&sz=w1000",
        "https://drive.google.com/thumbnail?id=19xI1WDonwPa73taJkTpx3x5xOIh9lxJ0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yF09syXTt4RhIGgD4Ngh4kpbggU4pWOe&sz=w1000",
        "https://drive.google.com/thumbnail?id=1oqvCXv9ifFPPIsuau8e635IfK1AYkN5s&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/19OAhTwGHMfm_6Vf1OqYXclaXbj1nQd_A",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "& Dupatta"
        },
        {
          "label": "Sizes",
          "value": "M(38), L(40), XL(42), XXL(44)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3159",
      "sku": "SBLZSR3159",
      "title": "Stitching: Fully Stitched & Tunic",
      "category": "Tunics",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "SKY, PINK, OLIVE GOLD, WINE",
      "mainImage": "https://drive.google.com/thumbnail?id=1IZwNzxlyCoZLjzZ3GnTgi2yM6QAw26Nd&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1IZwNzxlyCoZLjzZ3GnTgi2yM6QAw26Nd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1pmdn0_HK4vkreeytBqUXBWG5EjQ1kpls&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DMTk-LStT1RB6XUbg_Er35BtW40ddXXM&sz=w1000",
        "https://drive.google.com/thumbnail?id=17_rvSYH34x_EaLYsNrjvALr4_5UGHiXa&sz=w1000",
        "https://drive.google.com/thumbnail?id=1B-nf4ajUmMJldoyUvqkx-tM59lCuj3fP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1F2qtKSz_-RiXeCPEQs6IxyQ4JzmrADuv&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Bv7Kodw9Gpes1HXtkbyP8hVKku8R7B68&sz=w1000",
        "https://drive.google.com/thumbnail?id=1kSpwxASUjTFqjPVnQfCbsY_hNsFFPgA4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LgEoak2fHwaMNICy2QM9iFblFbHrg16J&sz=w1000",
        "https://drive.google.com/thumbnail?id=1fri8YJ55EhCR50KPSO3z2hfjNUdLf6mo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VIJnFaqJFbycbI7OLq--P7vwCCF3qMEC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HIOh_1oNYeadECAaUm4dX3uF6WhycdvV&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1bNhlLKz7ss8U9XLunGdHwjWpb0fo_tJB",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Available in: SKY, PINK, OLIVE GOLD, WINE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Sharara Plazzo)"
        },
        {
          "label": "Available Colors",
          "value": "SKY, PINK, OLIVE GOLD, WINE"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3152",
      "sku": "SBLZSR3152",
      "title": "Stitching :- Fully Stitched & Anarkali",
      "category": "Anarkalis",
      "price": 2500,
      "originalPrice": 4350,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "BLACK, GREEN, MUSTURD, ORANGE, PURPLE",
      "mainImage": "https://drive.google.com/thumbnail?id=1R9WZHkat-U6hkOodCWagjBLU3fuE2_47&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1R9WZHkat-U6hkOodCWagjBLU3fuE2_47&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MevyGsEb1YJDVc2S8PBv7D0mPPa3J0Q6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BSj0jCLNaR9NX8Ejeo1_gnvZH1x2BW5F&sz=w1000",
        "https://drive.google.com/thumbnail?id=1blBozDu-NXSEU58aZpD5wmap5KFiDqaB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UYYh91A4UIhUaZQx1okuh4ZCKMUNdt2X&sz=w1000",
        "https://drive.google.com/thumbnail?id=17AxoCDWtULTG7-f0tWnEeDpvXT3cnFti&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mdcE8GOHXergJABp_eEPhUSms81S6Ked&sz=w1000",
        "https://drive.google.com/thumbnail?id=1IYbdxKwGjIW8txfGRZDBI_gQMTvI1GWA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1C4yDt-dxMcq1vEFM583VieciT1SfSyDM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZUo84i8Zmt0YoUzZxbAr7hDLWKgC2mk9&sz=w1000",
        "https://drive.google.com/thumbnail?id=16G6FadTyh4LZocuS7aR6LrlzCKeu-mHs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bIh1KiS6cMCDwuWe0qU1m6uHey1P-u4V&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1crxYU-cd5_PWeH4lScYzQ8gikSGBRkck",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with •. Available in: BLACK, GREEN, MUSTURD, ORANGE, PURPLE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "•"
        },
        {
          "label": "Bottom",
          "value": "•"
        },
        {
          "label": "Available Colors",
          "value": "BLACK, GREEN, MUSTURD, ORANGE, PURPLE"
        },
        {
          "label": "Sizes",
          "value": "M(38), L(40), XL(42), XXL(44)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3166",
      "sku": "SBLZSR3166",
      "title": "Stitching: Fully Stitched & Tunic",
      "category": "Tunics",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "; ORANGE, TEAL, PURPLE, RANI",
      "mainImage": "https://drive.google.com/thumbnail?id=1JE8JNybZCGbgETv7duaAtOo-E74t95XF&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1JE8JNybZCGbgETv7duaAtOo-E74t95XF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iXTFDmDFq-bL26Lb8cglGyC84YlbHuIy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tQ6gu2yriSfPx1ZXD368kidukW1LKOFs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1P5ob_oxqa3J3C0NsHzJ0ph34iT2AeUTt&sz=w1000",
        "https://drive.google.com/thumbnail?id=1La0DDFJGAA5R-n1eAgIYS9taqYlHKdcC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nZU6lrp97p9ySHmmKVOgDACGh2qPj-Vb&sz=w1000",
        "https://drive.google.com/thumbnail?id=1IyCgY54xVXAn1JfXSpTKZTc9Cm5GgwBA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1aYXWI-X4QnDsS6INq2s26xS-iIeVyO-E&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZsN7ysgA2R7LUgO6a8IXtXVpqXRgzGsY&sz=w1000",
        "https://drive.google.com/thumbnail?id=12PWwAJ16QFc9luGqaICyQuLLmsCAdT9D&sz=w1000",
        "https://drive.google.com/thumbnail?id=1za7KHF881ve3rVVQzDvqGWUvIzFcQsq7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MlHSi8uvkMW6-ChV6zy-bledmZaYJDVO&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1YfOJFIlo6icXLj_nqMfjr9L3IlInyj1d",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Available in: ; ORANGE, TEAL, PURPLE, RANI. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Sharara Plazzo)"
        },
        {
          "label": "Available Colors",
          "value": "; ORANGE, TEAL, PURPLE, RANI"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3167",
      "sku": "SBLZSR3167",
      "title": "Stitching: Fully Stitched & Tunic",
      "category": "Tunics",
      "price": 2500,
      "originalPrice": 4350,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "MAROON, MINT GREEN, SAGE TEAL, PURPLE, ORANGE, RED, WHITE, DARK TEAL, RANI, GREY, MUSTURD, DUSTY MAUVE, ANTIQUE GOLD, EMERALD, ROYAL BLUE, SMOKY OLIVE, PISTA GOLD, ROSE PINK",
      "mainImage": "https://drive.google.com/thumbnail?id=1f-vQYTPFUugyyIg5cIQMI7NONyhCAInK&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1f-vQYTPFUugyyIg5cIQMI7NONyhCAInK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sx0LxTwiSid7mBiJzYYBKNlKuBlkUuwC&sz=w1000",
        "https://drive.google.com/thumbnail?id=18LThAg1VA-VEwf_ZR_8USylHbheEJ8A6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-rYfJvYfxWk0uapQT7wWGUd5HIwVf0fW&sz=w1000",
        "https://drive.google.com/thumbnail?id=19FB_HP3Fj8G4k1XZ8aUZlEbzorrb5RDT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1--rLZ2kaaTWmxIU4MsSVCfkPxdRErioC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HoANiCYyiOOf12vGOCH1nByt_NKeXso3&sz=w1000",
        "https://drive.google.com/thumbnail?id=15bFBEsB9CrOqQ6rSX-6MaSg8JpeIIVI-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JFvRrfv0JnOtRFZBr8cUtvNmuG6hN8jt&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HHozvzhkxc8iC7JfGGsMSVgCXlGGeNLN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1U0Pb_PyyO0ftdQp-E-FZmWi683977Uk7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1b8HROTK3XI642mB1FS-eVnk75vUuXeDT&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1UbSLUVosTnIapzNTkAolFFqJmQVYx8h9",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Available in: MAROON, MINT GREEN, SAGE TEAL, PURPLE, ORANGE, RED, WHITE, DARK TEAL, RANI, GREY, MUSTURD, DUSTY MAUVE, ANTIQUE GOLD, EMERALD, ROYAL BLUE, SMOKY OLIVE, PISTA GOLD, ROSE PINK. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Palzzo)"
        },
        {
          "label": "Available Colors",
          "value": "MAROON, MINT GREEN, SAGE TEAL, PURPLE, ORANGE, RED, WHITE, DARK TEAL, RANI, GREY, MUSTURD, DUSTY MAUVE, ANTIQUE GOLD, EMERALD, ROYAL BLUE, SMOKY OLIVE, PISTA GOLD, ROSE PINK"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblzsr3168",
      "sku": "SBLZSR3168",
      "title": "Stitching: Fully Stitched & Tunic",
      "category": "Tunics",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1aKIvkV5mZyvvMbw93iVOuNXMXQ9x1bIO&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1aKIvkV5mZyvvMbw93iVOuNXMXQ9x1bIO&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wAueF3KjD_z6exHE2U3p017kmv8jXIAE&sz=w1000",
        "https://drive.google.com/thumbnail?id=13n0DMyxMesg-WZ5QRQMZfKUGGwXy4ule&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vri5YEDXbJkdfQHUl1ePvlIAIsmLD07Z&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rdDdX8JIsl5mOYLO-_3cZyY2UI73gpPF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mri5z4mVWVI8eAeJ37uR9Sr4XyiFrDzY&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Ib5KokPivKAGP2X6VhU1ou0nteQxaOl2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yyjUsOHzqtH68lA9dxRrEsaIvNr8GKQ8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LuHa_JyDkYTb6s_G440H9K7TEG3nfdQ0&sz=w1000",
        "https://drive.google.com/thumbnail?id=16zel-cTnoWtHSu-zlZVF359mCvVZpnob&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_2pzHI-Zkkr4g81FZnV7nxQ7MlLebV6m&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Yfxm6sodECecdhr5VNx6gLXwEjPQc6sk&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1KXPuPy9woEtplTxxrfPokZGBG532yRWF",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Sharara Plazzo)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sbljf046",
      "sku": "SBLJF046",
      "title": "Stitching: Fully Stitched & Tunic",
      "category": "Tunics",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=10FYNEOHv2-PQHWUsXfYCFFWFAKgNppC4&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=10FYNEOHv2-PQHWUsXfYCFFWFAKgNppC4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DBBjS4BBgC55RUMrfuC5KiUPNd6p6tuH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1F56ee-bRDyoMy08qa49xrnoNyrSpv_uJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1I4qDDYC8HOX9WY_LiAyyREetKF8yOj7s&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VsjIafHkC8bDHDbqTRD2stv0DLlaEHZd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Y1pHD6mFQeTdg8ajMnt3PcWGPoj_am4L&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hLQN3-qADj5YdhATSjmmsWxZ-X6X0nLE&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qqbFy6hYbydWj2zFKZSW60dyI6_ul4up&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Q7LER37Jp9BeDag-dcMgGDkon23J9jZg&sz=w1000",
        "https://drive.google.com/thumbnail?id=10R_pEiEiCs1ANL0Yp4NtOS-28VpvsEoW&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1IYGieF5OoZ2kUn9Kf0-r39boRxl09ey1",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Sharara Plazzo)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sbljf025",
      "sku": "SBLJF025",
      "title": "Perfect Match –trendy & Comfortable Cord Set”🎀🌸 Tunic",
      "category": "Tunics",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "BLUE, WINE MAROON, CORAL, BLUSH PINK",
      "mainImage": "https://drive.google.com/thumbnail?id=18fXA1X0gzHUrnHarFA9cmyBIo3GskOm5&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=18fXA1X0gzHUrnHarFA9cmyBIo3GskOm5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LgHbBjVvglL1VQk1IJNlM8ooePl5j6jj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ghxXTHq4p8zPqIqZ5m-NDFug9VuGQWQV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vqeGpeiu2wEv_xDf_IuNEeKHm7bADXfe&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xUEYXImqaG9lEnc8EbqepZ3LurGezQM9&sz=w1000",
        "https://drive.google.com/thumbnail?id=15NqPF5dQ_24cLIAxxEV-tLOx6QspjMA7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wy2b9BexfAyoH1JAp9FSvGbSBx3cZe0R&sz=w1000",
        "https://drive.google.com/thumbnail?id=1F7cT4xco4P1uH7jNXbhzehsbZVV5fgRA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-uHvYz0rjvUJ5e_HkYsrGmq-n8z-Og6H&sz=w1000",
        "https://drive.google.com/thumbnail?id=18jj_8IOTU2hJsDz1Hdxn_rBsUdFOBCVx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sbeBZCKqyly8r_53SxGGSFR9Be0m1Hd2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ATWv2cgOy4WMGX4tJzvbzzTSc47bWTex&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1vwGR5MzXF_PJQiWkW1awgthKS5i8jjxB",
      "description": "Crafted in details, this tunic brings together premium fabric and refined detailing. Styled with no, kurta length 31-32 inches. Available in: BLUE, WINE MAROON, CORAL, BLUSH PINK. Set includes: s. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Details"
        },
        {
          "label": "Dupatta",
          "value": "No"
        },
        {
          "label": "Length",
          "value": "31-32 inches"
        },
        {
          "label": "Bottom",
          "value": "🌷🌺"
        },
        {
          "label": "Available Colors",
          "value": "BLUE, WINE MAROON, CORAL, BLUSH PINK"
        },
        {
          "label": "Sizes",
          "value": "Range"
        },
        {
          "label": "Weight",
          "value": "850gm"
        },
        {
          "label": "Set Includes",
          "value": "s"
        }
      ],
      "fabric": "Details",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "s"
    },
    {
      "id": "prod-sbljf027",
      "sku": "SBLJF027",
      "title": "Designer Party Wear Look Top-plazzo Dupatta Heavy Embroidery Work Tunic",
      "category": "Tunics",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "LIME OLIVE, RANI",
      "mainImage": "https://drive.google.com/thumbnail?id=1G0jQs_od8WXLGJyCFCgAfiMRroz_qa3d&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1G0jQs_od8WXLGJyCFCgAfiMRroz_qa3d&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HeGJQrXFB25I9Jk-jcs3yfoBTJHMERfP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Irfoa4rtriy_BriMo3CHxYcg8IXzlvBw&sz=w1000",
        "https://drive.google.com/thumbnail?id=1N4L5A5atcyApcscq3adJ1UFEH85g4EeH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Ca1tDpdQAHt16eLuR-vNFdGel_9SoE19&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lqwG7pwbFUtWErhjw78mBTCs6C7twC7M&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jpYm3q7uZgez4M3IPLaSDJA3aTmy4gkt&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vWHXH6QI2FFhSkcC2xmLqUo0q-ki8XYP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ubICXhcIflHEB6A3rpQAGqoBlMCeWqop&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tc4fBsm6g0q248emc_IvAu36KplwkKRK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UBGskXvUq5SgyCngI7i9WIUcor8GS_Z9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1OqEvYARGgIfh0zOI3cX30BZqBCQT0zG3&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1fg1cTm4Bq_L2ZaOqeZTjRU2nTNZy5hKs",
      "description": "Crafted in heavy faux georgette with embroidery sequence work with full sleeve, this tunic brings together premium fabric and refined detailing. Styled with with heavy embroidery work, kurta length 38-39 inch. Available in: LIME OLIVE, RANI. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Heavy Faux Georgette With Embroidery Sequence Work With Full Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "With Heavy Embroidery Work"
        },
        {
          "label": "Length",
          "value": "38-39 Inch"
        },
        {
          "label": "Bottom",
          "value": "Plazzo"
        },
        {
          "label": "Available Colors",
          "value": "LIME OLIVE, RANI"
        },
        {
          "label": "Sizes",
          "value": "."
        },
        {
          "label": "Weight",
          "value": "950 gm"
        }
      ],
      "fabric": "Heavy Faux Georgette With Embroidery Sequence Work With Full Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sbljf029",
      "sku": "SBLJF029",
      "title": "Stitching: Fully Stitched & Anarkali",
      "category": "Anarkalis",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "MAROON, MUSTURD",
      "mainImage": "https://drive.google.com/thumbnail?id=1tD62rnxQ9q3Yzl9VcCWUCMuKQysgPzRp&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1tD62rnxQ9q3Yzl9VcCWUCMuKQysgPzRp&sz=w1000",
        "https://drive.google.com/thumbnail?id=1P_g_9P8wjy5MZz0AbHh3ue9xfZaiGPEV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1w8Sm93T9DtJ-JdFQrFQgYSICFaYD94bs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1juTvYYxZ1HQybVOg-mL8tqQA1cit0iHm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KNGejpSEeZ764KXDpJhpdNIirk3oaAg9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1H-ZOadybE8Ks0nHSZZSZF9BfYi4ewpYF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1epB_OzZSeC1PLnSZBWwxTk_yu1mo5Jze&sz=w1000",
        "https://drive.google.com/thumbnail?id=12m08znoOzHwkL76QCP5mLc8oKr8cvBQ-&sz=w1000",
        "https://drive.google.com/thumbnail?id=19D5iLg9OGxZIYFHW9BSrcbTxPnxmKeCY&sz=w1000",
        "https://drive.google.com/thumbnail?id=1aetr1QVgUS1c1v1au0hM7xYNI6pxU-hC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ScrjWljmw6JlQqEr8aOnaQGIbRFA32-p&sz=w1000",
        "https://drive.google.com/thumbnail?id=1S_tTGqAIebxnDXyqrhrwzmodML3y5o5m&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1CVpFsi51wfDd4PmwLOVTqOs7lI85x6jv",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Available in: MAROON, MUSTURD. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "( Plazzo )"
        },
        {
          "label": "Available Colors",
          "value": "MAROON, MUSTURD"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sbljf033",
      "sku": "SBLJF033",
      "title": "Exclusive Trending Designer Gown Heavy Sequence Embroidery Work Dupatta Anarkali",
      "category": "Anarkalis",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "MAROON, BLACK, EMERALD",
      "mainImage": "https://drive.google.com/thumbnail?id=1byfKU2GPQ5Kk_BBHXmuIMuEyw-Yq8oM8&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1byfKU2GPQ5Kk_BBHXmuIMuEyw-Yq8oM8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1m3QV-Cwbj8BvHt7DPVrQboJS1Z-g2sdA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1L_yVMY7F6nHnVBvQTwEB5nG1svDBoWsx&sz=w1000",
        "https://drive.google.com/thumbnail?id=18iGft4w0D5TRZePZBzpcRchvVzNglwPy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sT0wzUY2TcfPrClw7EexwpapBhY4zVA2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZUBpKJCBfqC-UJvqA43b5sfLHTLpLAX9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1k1ulybuxj871S9MvKmdLpbcuc8iSo_x-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EULDDIJwRgBO4k66ffSLXW0pA1LVhmiF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1e-tNL1xhzUEZ3Tj5JaR4Gqn7MrhC2Qob&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sY6RQgKfylEiSlCLJnWBCADomOEGhtgS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QnDmK5_21UoWPZRLXX_6aPW4sjnlC-L0&sz=w1000",
        "https://drive.google.com/thumbnail?id=13sMvxkfowKgC0_AZmhJn1bIHwaeYQxO8&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1IW5Qm4eqfQCv5Pd1yRorwQkYAYP-V7A7",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Available in: MAROON, BLACK, EMERALD. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Pant)"
        },
        {
          "label": "Available Colors",
          "value": "MAROON, BLACK, EMERALD"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sbljf036",
      "sku": "SBLJF036",
      "title": "Category: Women’s Ethnic Wear Anarkali",
      "category": "Anarkalis",
      "price": 2800,
      "originalPrice": 4800,
      "discount": "42% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1sdzW-Z_qmeT3v0J8_Fwgk5QOn1VB0l_N&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1sdzW-Z_qmeT3v0J8_Fwgk5QOn1VB0l_N&sz=w1000",
        "https://drive.google.com/thumbnail?id=1C19ka6CR7ktANHdk8h6S8BaZn8fvXo0T&sz=w1000",
        "https://drive.google.com/thumbnail?id=1jov7zC7BafHc5kOC4OHWsYF1do4jZ1s4&sz=w1000",
        "https://drive.google.com/thumbnail?id=16W4r9P-LGsV71FDuqjJsIx_3-2XRlBoK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EX3GdVKTE9cO7zmRPaSW7O1Mf1nIjHgS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1g80id43sE5Z1ZlbEYjw_PUmBeapV-cfw&sz=w1000",
        "https://drive.google.com/thumbnail?id=1I_J6T1WOxE2XZMNjgi4aMP4oZp-oD8WG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WZxie8xyVgEp9kv7rvq7WV28w9ARTGET&sz=w1000",
        "https://drive.google.com/thumbnail?id=1teIxMB_1PJKVsy7Mv8BSkhl4FpQvxGRz&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-8S3zMONAgm4x9KZI6Q8LWHo9UTyZPhK&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1nAYzBymTopj1ohSRfAxTqz6ihO6Ly6hh",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Styled with available. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "Available"
        },
        {
          "label": "Bottom",
          "value": "(Plazzo)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        },
        {
          "label": "Weight",
          "value": "1KG"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sbljf038",
      "sku": "SBLJF038",
      "title": "Stitching :- Fully Stitched & Anarkali",
      "category": "Anarkalis",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "PINK, MUSTURD, ORANGE, OLIVE GREEN, WHITE, RANI",
      "mainImage": "https://drive.google.com/thumbnail?id=1OXtpN16ZshQi88othp-QnftiZEiGjO6p&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1OXtpN16ZshQi88othp-QnftiZEiGjO6p&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gl18hCk1T6X82iHwkMrw_va63fYtmt8I&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NeSgYEvUDK-40SbPTzaQLSIMwjBvrsU_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZGSZ7HF-Y7xAZiDpG2whNxfkvkR8pd_g&sz=w1000",
        "https://drive.google.com/thumbnail?id=13EqzYEHdQKGF7OcyQ9LEmeXQPEA7KOOB&sz=w1000",
        "https://drive.google.com/thumbnail?id=12663xYD794cU7xYV46SejWbg8P0DEboL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tStjk-UG_Adh0WKyW90Prd66abTKltKE&sz=w1000",
        "https://drive.google.com/thumbnail?id=1h3PRrWJF0MoOk4ry4yfYx47izaGwcO84&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EZHgHm1NF8G87bqi49uJBjK5ABEi1Vuu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mXVRH9QZFFLIhnl1FG4neZ6PpAdPkRnU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gygH9Vt-vPY77eBt7C9WeXGM188gKH3N&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WBstfCcde6CYC0lmDJAha5upNMbdzxAq&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1dLwYhjJnZScW5iwDL4VmifjDfPgKmbfG",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Available in: PINK, MUSTURD, ORANGE, OLIVE GREEN, WHITE, RANI. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "& Dupatta"
        },
        {
          "label": "Available Colors",
          "value": "PINK, MUSTURD, ORANGE, OLIVE GREEN, WHITE, RANI"
        },
        {
          "label": "Sizes",
          "value": "M(38), L(40), XL(42), XXL(44)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sbljf043",
      "sku": "SBLJF043",
      "title": "Party Wear Look Pur Heavy Fendy Silk Top Plazzo & Dupatta 👚 Tunic",
      "category": "Tunics",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "PINK, OLIVE GREEN, SKY BLUE, RUST ORANGE, BLACK, MINT GREEN, DUSTY TEAL, RANI, MAROON",
      "mainImage": "https://drive.google.com/thumbnail?id=1WWNqHdKlhOHOsnbNqKjoENaVctxQk_7Y&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1WWNqHdKlhOHOsnbNqKjoENaVctxQk_7Y&sz=w1000",
        "https://drive.google.com/thumbnail?id=1i_pjHwR87H7eVT3lq5ubpFuPfA9r8WPq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1OniXc-ojCJjtLHF1NNv2wFzMkbE1JKwa&sz=w1000",
        "https://drive.google.com/thumbnail?id=1spFRuaquH2GmGne0bIbqbP6p9UoqMJxe&sz=w1000",
        "https://drive.google.com/thumbnail?id=1W4nw1gtlM7fA86P4D-rZ6agFzKH2Iw4N&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KutHW-kkWXfC--i0NWdjRyoiuTtzX4ao&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DuT173vPH5-lyorVixqJvYKf_tnfRGYj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xWvkr-AJwZIzTjlGG0hBjRBUt9ELnEHH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MW3E_iCWCObGi4cOXRAE1d9ATaMQYTl-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1r7q-DwzG88aXKF9opwNGTuEJNbk8xiPb&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FlZCfRcSlA9HhWEmr2b_rlVVBRBGUF1V&sz=w1000",
        "https://drive.google.com/thumbnail?id=1W0D1WuXyZufzSrp67dS0mTiUgP6N_fTG&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1Unhm65h1Rn0SIGg5E0hzAyB-hXgADsCh",
      "description": "Crafted in pure fendy silk with heavy embroidery sequence work with sleeves, this tunic brings together premium fabric and refined detailing. Styled with set 👚, kurta length 30-31 inch. Available in: PINK, OLIVE GREEN, SKY BLUE, RUST ORANGE, BLACK, MINT GREEN, DUSTY TEAL, RANI, MAROON. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Pure Fendy silk With Heavy Embroidery Sequence Work With Sleeves"
        },
        {
          "label": "Dupatta",
          "value": "Set 👚"
        },
        {
          "label": "Length",
          "value": "30-31 inch"
        },
        {
          "label": "Available Colors",
          "value": "PINK, OLIVE GREEN, SKY BLUE, RUST ORANGE, BLACK, MINT GREEN, DUSTY TEAL, RANI, MAROON"
        },
        {
          "label": "Sizes",
          "value": "S(36), M(38) L(40) XL(42) XXL(44)"
        },
        {
          "label": "Weight",
          "value": "900 gm"
        }
      ],
      "fabric": "Pure Fendy silk With Heavy Embroidery Sequence Work With Sleeves",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sbljf045",
      "sku": "SBLJF045",
      "title": "Stitching: Fully Stitched & Tunic",
      "category": "Tunics",
      "price": 1600,
      "originalPrice": 3000,
      "discount": "47% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1Z3iOIipzJuuZh70ofeEqTPNyijAPGHhQ&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1Z3iOIipzJuuZh70ofeEqTPNyijAPGHhQ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Lppfb0YribEa6iCXhkhuOX9ko4HZMzrB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zbqNl2D0iU6GbcknZck7JxEIMJVKcqNx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VN7-4bmJgU2q1_hbvnZy3Gj6sZ-EvVlC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nBR5dncpV9JcSkDk1BJaLD1iFgCUkP77&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yLPXl7mtK3yF0D6_Eb8uLUGw6SAc9rhG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EI0rx7Kg1KvBPNtWOqMKAfZBSUzrp9zK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1A3gA4kZkvBsm8L8mXm5mYfOzLXDdkvIw&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Z5cQ4ZNN_MMB0diKY38B_1yIcQDnO2os&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iR6O78TASKWIHZYjUaeGAww_p5zUDjJT&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VY3mMiya443H4WuJtEodnLlZvJGoVi40&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/19PtZHPPQ6XghR5DRxtxBbB7KXt1kNoUg",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Farshi Pent)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblssr524",
      "sku": "SBLSSR524",
      "title": "Category: Women’s Ethnic Wear Anarkali",
      "category": "Anarkalis",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1MLXW8NHIrtnwI5BsEINAFjkE6VJ9oeoo&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1MLXW8NHIrtnwI5BsEINAFjkE6VJ9oeoo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TMw9jGwGQgz0i1u4eqpbT6hswAmzteLE&sz=w1000",
        "https://drive.google.com/thumbnail?id=1UDdq7QndFGf9J3XoNyRtPmwCMhzrBeSy&sz=w1000",
        "https://drive.google.com/thumbnail?id=1KV8yuvMeNtJXz8ZcBGjVKPo9XzYzW2hN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yuTr1ScabuhdmKEdTtcUvnWy3Fd-8RyX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ouBgVuMXhhipYLx04d8lk5Pa8yZmlbeW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RUdQO-CdazEeB6Nd8YhbcbuYsTJJR9gK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ADA_fwmYNWw6CAgb6_u71YDRk-rVtzPQ&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1awvp9smG6iKZJ1ZykZQFA5DAvAkCI8Z8",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Pant)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblssr5005",
      "sku": "SBLSSR5005",
      "title": "Designer Party Wear Look Top-bottom Dupatta Heavy Embroidery Work Tunic",
      "category": "Tunics",
      "price": 1700,
      "originalPrice": 3150,
      "discount": "46% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "PINK, LIME GREEN, DEEP MAROON",
      "mainImage": "https://drive.google.com/thumbnail?id=1wrucw1C4QUwgCANZq7Rl9cAc7v9lptFL&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1wrucw1C4QUwgCANZq7Rl9cAc7v9lptFL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MXo1DsobIDfS9MxlgDGaVcySasli9lYq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GapNNTTLCxGioj7H9jCWj6iQU-cT0ZP_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1JRUPhbbGtKBQLGgTwaNFl4sHPmrUXi9R&sz=w1000",
        "https://drive.google.com/thumbnail?id=1C4ZQ_CdE9cxdttZ6_PtJabAP6OYUmxiV&sz=w1000",
        "https://drive.google.com/thumbnail?id=1b1sibbMF4__km2nGmTvnybfXDY1K1ktb&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rP6rS5si914W16lvXUuQtFyH6zuE_i95&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wUD7KIojMFDdHCI1H84J0xdrE-7owVk7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1he9meRAFc1SdyDpb5QId764ItghajoDE&sz=w1000",
        "https://drive.google.com/thumbnail?id=19bERfpswI-X1ysz5GoMYlFe8S-5elej7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iZUSyYc2eF8w1Lpis1UA4dCS4cO9qo37&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FDktGc0Fg0Snok5VnE_aq2Q4xxtcEjMl&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1GoogOZDlHqWyLrxqEeGcxruSvy5AIJDa",
      "description": "Crafted in heavy pure chinnon silk with 5mm embroidery sequence work and heavy lace work with sleeve, this tunic brings together premium fabric and refined detailing. Styled with with heavy embroidery work, kurta length 45 inches. Available in: PINK, LIME GREEN, DEEP MAROON. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Heavy Pure Chinnon Silk With 5mm Embroidery Sequence Work and Heavy Lace Work With Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "With Heavy Embroidery Work"
        },
        {
          "label": "Length",
          "value": "45 inches"
        },
        {
          "label": "Bottom",
          "value": "and Dupatta With Heavy Embroidery Work"
        },
        {
          "label": "Available Colors",
          "value": "PINK, LIME GREEN, DEEP MAROON"
        },
        {
          "label": "Sizes",
          "value": "."
        },
        {
          "label": "Weight",
          "value": "950 gm"
        }
      ],
      "fabric": "Heavy Pure Chinnon Silk With 5mm Embroidery Sequence Work and Heavy Lace Work With Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblssr525",
      "sku": "SBLSSR525",
      "title": "Stitching: Fully Stitched & Anarkali",
      "category": "Anarkalis",
      "price": 2500,
      "originalPrice": 4350,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1DFaxjRSGS2RJuxLQUmgJJu2YPC_J2lyY&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1DFaxjRSGS2RJuxLQUmgJJu2YPC_J2lyY&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Mg3rRy0zXb1T7LtUTgwlpmkq81hyVzrr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FO8oW-GKc3Q-pH0S3WKrZHs7V58kXB1B&sz=w1000",
        "https://drive.google.com/thumbnail?id=1nhgDkHtjR_GQ4AHBhj4RIc1Jf41WTuph&sz=w1000",
        "https://drive.google.com/thumbnail?id=1G6ojI87d1SmBJpvSAWkKqcaBuCyFGerj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1wzS5raRD-PJt1lrqG_L_v6YoYUCFjO6s&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1B-xjG8gtkNR3gVX5CdsTzmH4VJkVaBau",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Pant)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblssr526",
      "sku": "SBLSSR526",
      "title": "Stitching: Fully Stitched & Tunic",
      "category": "Tunics",
      "price": 2400,
      "originalPrice": 4200,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=17pjf-b0vUJBWkSWhA53xWyVXWlK3FjjE&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=17pjf-b0vUJBWkSWhA53xWyVXWlK3FjjE&sz=w1000",
        "https://drive.google.com/thumbnail?id=11goTIDSIpijzj85_wtVJqAbj7mLVoL8F&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SkwHNyaRsXrXU08mSIrpRuM9Nu-YIHp-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ow3I9VpbsmGGvEps1IiVoFPTl99JNGHG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1K0_IO20b7p_1Z6ByjN1tsmtAakcgOpic&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yLpQOwD8lnufqa9X_QY7p8rwqaHiGyT2&sz=w1000",
        "https://drive.google.com/thumbnail?id=14-q8HBCj03y1VDESjDm5xOuRmn2N46xF&sz=w1000",
        "https://drive.google.com/thumbnail?id=12qySXrvaxAKHn0N2ZI1PJON43EfOrWMK&sz=w1000",
        "https://drive.google.com/thumbnail?id=179jLpc6Ua5DNj7y42TU6D_Zu9hyHvc5h&sz=w1000",
        "https://drive.google.com/thumbnail?id=11xzFDkB-oSXL6SoNey8ftV57RXWFjJ5n&sz=w1000",
        "https://drive.google.com/thumbnail?id=1y3m2hvpvSvBfzr8gObtwQJ4522F5Kr6j&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VKXgsZ4ewZN9JggkIBl2nZEgh2ytOsgF&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1512YLEfV8oGYIkwYresXohMex0faZCup",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "•"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblssr529",
      "sku": "SBLSSR529",
      "title": "Category: Women’s Ethnic Wear Anarkali",
      "category": "Anarkalis",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=16VHw91NvGdTWt9-TET3_MXqVE0pln5jQ&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=16VHw91NvGdTWt9-TET3_MXqVE0pln5jQ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xIAUjwrKhaXukdTYIqZnq1zNPG72Sh-M&sz=w1000",
        "https://drive.google.com/thumbnail?id=1n5gBQqnsHxohG4mHXbwX9ixjscNdb8AK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rGh4SSyPyRGNzXxFoEDrpM6a1GclnDvz&sz=w1000",
        "https://drive.google.com/thumbnail?id=153vWRjjDc30l2dKRm2d7liqWi3usMdpN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1CgmPIHWC6N8BXB--Rayq5hVtTPPJZ9wt&sz=w1000",
        "https://drive.google.com/thumbnail?id=1E57dUirh__puuwKTwRU_TrbcKqzB3kuk&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GUfXpMx0m3KNYdoJUs6PjFr119GrvWMM&sz=w1000",
        "https://drive.google.com/thumbnail?id=1x-KCEtDIyAGKmRu7HsdlH0AsaKNbuH5D&sz=w1000",
        "https://drive.google.com/thumbnail?id=12z4uE5ul3mTIN-vgd75ASqj0X3l2Z-xv&sz=w1000",
        "https://drive.google.com/thumbnail?id=1YFAz9axg4Eta7Ph8FPrgXmDpSeV-npcq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sQ8dfoeSXncCQpDXrJCeiaRHWNOL9jCI&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1TbKuCeo20Vkc_xijgf8XAedWBP1q77c5",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Pant)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblssr535",
      "sku": "SBLSSR535",
      "title": "Designer Collection In Gmy Silk Heavy Embroidery Coding Sequence Work Top-bottom Dupatta Tunic",
      "category": "Tunics",
      "price": 2400,
      "originalPrice": 4200,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "PINK, SAND BEIGE, RED, DEEP MAGENTA, RANI, OLIVE GREEN, PURPLE, DUSTY TEAL, BLACK, EMERALD",
      "mainImage": "https://drive.google.com/thumbnail?id=1mVXuvPX0R5RRGLQWU3xykTqJlzUDknRs&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1mVXuvPX0R5RRGLQWU3xykTqJlzUDknRs&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GfRPoy93uLRi3qulvW1yo8Pb_3xc4ixF&sz=w1000",
        "https://drive.google.com/thumbnail?id=1emQBBbYtrL_IDPZ2Z2EnuG77hi361k-G&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vUeK9P1m__7MtC9OE7JztUjPVAvL5ivA&sz=w1000",
        "https://drive.google.com/thumbnail?id=17JVV0bPjtgM10lhm1b4MD0o46H2xgTNe&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iy0aHhdb8VqytJxTs8fUjdO2fmnEUt_U&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FEeRafjGpDgrQSlZGrYA4gZvgiyrUe-S&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WaBg3oUAONvtIT3L5ykWcvHEzqBls4cQ&sz=w1000",
        "https://drive.google.com/thumbnail?id=11glYz6pWLN0pMhitzIby2Ek48mrJ5b8S&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PN_Cc7kplOn1cD9YxE_oaRB8uqgpJyWw&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rw8avOoD9W1QEkMFOPl845RZ_3miMMGB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GLE118NYgFEnG3Z29G5FF6eGV-68BEQp&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1w1ZKxRUU_iD4p8VnKBD29ZxB5RkXst2Q",
      "description": "Crafted in pure gmy silk with heavy embroidery coding sequence work with moti work and full sleeve, this tunic brings together premium fabric and refined detailing. Styled with set fully stitched 🔥😍🥰, kurta length 41-42 inch. Available in: PINK, SAND BEIGE, RED, DEEP MAGENTA, RANI, OLIVE GREEN, PURPLE, DUSTY TEAL, BLACK, EMERALD. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Pure GMY SILK With Heavy Embroidery Coding Sequence Work With Moti Work and Full Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "41-42 Inch"
        },
        {
          "label": "Bottom",
          "value": "And Dupatta Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Available Colors",
          "value": "PINK, SAND BEIGE, RED, DEEP MAGENTA, RANI, OLIVE GREEN, PURPLE, DUSTY TEAL, BLACK, EMERALD"
        },
        {
          "label": "Sizes",
          "value": "."
        },
        {
          "label": "Weight",
          "value": "950gm"
        }
      ],
      "fabric": "Pure GMY SILK With Heavy Embroidery Coding Sequence Work With Moti Work and Full Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sbldd1004",
      "sku": "SBLDD1004",
      "title": "Designer Collection In Faux Georgette Embroidery Real Mirror 🪞 Work Gown Dupatta Anarkali",
      "category": "Anarkalis",
      "price": 1700,
      "originalPrice": 3150,
      "discount": "46% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=13rh2L3eV3uxNYRgGQvQHL1mfnhJf8Ilg&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=13rh2L3eV3uxNYRgGQvQHL1mfnhJf8Ilg&sz=w1000",
        "https://drive.google.com/thumbnail?id=1h6cI5iwDtSQijxwMhnjkx6ocbUjem64F&sz=w1000",
        "https://drive.google.com/thumbnail?id=1xC1s9B2x4A0IsLIMabvTbTr0E66eHDie&sz=w1000",
        "https://drive.google.com/thumbnail?id=11J2ekLGsAUKHRoMksommpQ3iciDZ9a1n&sz=w1000",
        "https://drive.google.com/thumbnail?id=1P7u2g87Q-MqRucNFfmqiMpdQ3Q38ATD1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_WEM-aifYmH9B7RN3rBEvqRN0iPgX4qu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VbXTzaR_x5OXW9sbJ5cmzBCFSvpWjWCP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FjOAF9FkRsvUWYKaw0TTFyJ-PI2OdDON&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dBH-ETnCcyVgRbjidsnslplLBZIuiCHh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DxZB5E40WUMCMCOPwQO8YByqwBGGscWa&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1s3Gr-BbINzS-IvfHVvcEmq4lMtE4_HTU",
      "description": "Crafted in faux georgette with embroidery real mirror 🪞 with fancy full sleeve, this anarkali brings together premium fabric and refined detailing. Styled with set fully stitched 🔥😍🥰, kurta length 48-49inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Faux Georgette With Embroidery Real mirror 🪞 With Fancy Full Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "48-49Inch"
        },
        {
          "label": "Bottom",
          "value": "👚"
        },
        {
          "label": "Weight",
          "value": "950gm"
        }
      ],
      "fabric": "Faux Georgette With Embroidery Real mirror 🪞 With Fancy Full Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sbldd1005",
      "sku": "SBLDD1005",
      "title": "Designer Collection In Khadi Cotton Thread Work Dupatta Fully Stitched 🔥😍🥰 Tunic",
      "category": "Tunics",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1XMDOEgQJNC2ANpQOSBUWpxr8Dh5i7si3&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1XMDOEgQJNC2ANpQOSBUWpxr8Dh5i7si3&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WSgzrAWG4aTR-W0gg-L9BZi52inZmZjm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1c9mZPB4rqx7upu7Qa8ue2pHfxiJp_ggv&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yYmmURwPyREbLGGIuWycQtiaDcPlc26o&sz=w1000",
        "https://drive.google.com/thumbnail?id=11uJUsI2wPu93WHwlybu-xMENPaK48Sn4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1CO8TXVbeVn705v1VQraHSY04hsjQhFwO&sz=w1000",
        "https://drive.google.com/thumbnail?id=16y5j1NimFP396ucfNb4KWKJFNApBEg8f&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PN90ujDguJUjgvrmZ3_Lr3fxDNbZCbuq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1L1SoDT6x4WLROeg9q3WV-kHeqseikvHN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WsIU-kNIuAq3IxezR9X6jWvD1BfbDO1O&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_TfbdKcX8aiN56FbXgBkZmGxutRru4CP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1f8flAYPZSsSswN7p1n1prNeVOv7RqAVK&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1aHEvTxAmwyKe_do_epT59ijTTYkjTHIZ",
      "description": "Crafted in khadi cotton with thread work with fancy full sleeve, this tunic brings together premium fabric and refined detailing. Styled with set fully stitched 🔥😍🥰, kurta length 48-49inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Khadi Cotton With Thread Work With Fancy Full Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "48-49Inch"
        },
        {
          "label": "Bottom",
          "value": "👚"
        },
        {
          "label": "Weight",
          "value": "950gm"
        }
      ],
      "fabric": "Khadi Cotton With Thread Work With Fancy Full Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sbldd1006",
      "sku": "SBLDD1006",
      "title": "Đěsigner Party Wear Look Fancy Style Top,lehenga Dupatta Tunic",
      "category": "Tunics",
      "price": 2400,
      "originalPrice": 4200,
      "discount": "43% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1rS7ECcyVTzZeZL-hDrzh8xrXxIojvKNI&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1rS7ECcyVTzZeZL-hDrzh8xrXxIojvKNI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cuN_EBe-OqkozUaBNqfv-qwOAQVXBRnY&sz=w1000",
        "https://drive.google.com/thumbnail?id=1htMsMCDofFLMixtpqiBvlRE--Up9dk9Q&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MPMgoCJeHau8kHp5oBBpoWQxoekRKvh5&sz=w1000",
        "https://drive.google.com/thumbnail?id=15GEtZSjW14xnoacS5jeKdBO53951sBTN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1tMUnsUWGMTBeBvaswhHezzBSx786m_Pr&sz=w1000",
        "https://drive.google.com/thumbnail?id=1RRLkD0CAdFLdELs9UDGILgpwP-oXVSJq&sz=w1000",
        "https://drive.google.com/thumbnail?id=11E_0wdVk9L8IIahuxyxzV3O3CUajHoZG&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zIze_vqnQjtUgBqL7SmJVRD9gN1xJ3S7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1qskZ2PK93-2Xq2J1xQEMfjd4N4U0nye0&sz=w1000",
        "https://drive.google.com/thumbnail?id=195ffDuoDI0AabXrOA_vVbFl-O1V0DhM7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1A_3JVQT5pPexWyWuuUw105jd0Xjc526t&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1muJMoi7Pt87Q49ihWRLFE6XSzxZLUNoJ",
      "description": "Crafted in faux georgette with heavy embroidery sequence work with sleeve, this tunic brings together premium fabric and refined detailing. Styled with faux georgette with heavy embroidery sequence work, kurta length 40 inches. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Faux Georgette With Heavy Embroidery Sequence Work With Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "Faux Georgette With Heavy Embroidery Sequence Work"
        },
        {
          "label": "Length",
          "value": "40 Inches"
        },
        {
          "label": "Sizes",
          "value": "M(38),L(40),XL(42),XXL(44)"
        },
        {
          "label": "Weight",
          "value": "1 kg"
        }
      ],
      "fabric": "Faux Georgette With Heavy Embroidery Sequence Work With Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sbldd1003",
      "sku": "SBLDD1003",
      "title": "Showroom Finished Product❣️ Anarkali",
      "category": "Anarkalis",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "RANI, OFFWHITE, BLACK, PURPLE",
      "mainImage": "https://drive.google.com/thumbnail?id=1uN-96IQbgNOAA-fLvRZZfODteDidn0br&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1uN-96IQbgNOAA-fLvRZZfODteDidn0br&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VIl5XSjnE3s3nxmlwfTUniVrCprt58KU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1kBe46eg83EZB7DhEcTmC5uKlTBjFsjF_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1fRPB7j6Tdb4k9n5cQbzn0j21uMaqBoY4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1A_TxQCUcui5fRtTlad-_RcYQe6R7dLw4&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dlwr4mhA_n_H_U3hJL_572irVGH8o85G&sz=w1000",
        "https://drive.google.com/thumbnail?id=1uoOWtoDjvXadFPLQpmJGNBaVovqbcA4t&sz=w1000",
        "https://drive.google.com/thumbnail?id=1FDEEtMzfwW1grSqim1UpeIoKz2bLlvB6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Nvf-8PQdwL5OvPZcHzGiOD7gMTjQ_Cyv&sz=w1000",
        "https://drive.google.com/thumbnail?id=10uHfsJunZwpR1zNTDKu13KvEDnR8T-Tx&sz=w1000",
        "https://drive.google.com/thumbnail?id=14dIPQtq8d53sNtv38PVcWObygoS51IEW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1uH-3YRm37USuSLshTgrHzRnwmtXBAvJ6&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1hqRpLDI4EtYAlnHmCZwLYKPEfh17wI7e",
      "description": "Crafted in details, this anarkali brings together premium fabric and refined detailing. Styled with details, kurta length 49-50 inches. Available in: RANI, OFFWHITE, BLACK, PURPLE. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Details"
        },
        {
          "label": "Dupatta",
          "value": "Details"
        },
        {
          "label": "Length",
          "value": "49-50 inches"
        },
        {
          "label": "Bottom",
          "value": "Details"
        },
        {
          "label": "Available Colors",
          "value": "RANI, OFFWHITE, BLACK, PURPLE"
        },
        {
          "label": "Sizes",
          "value": "Range"
        },
        {
          "label": "Weight",
          "value": "900gm"
        }
      ],
      "fabric": "Details",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sbldd1007",
      "sku": "SBLDD1007",
      "title": "Stitching: Fully Stitched & Anarkali",
      "category": "Anarkalis",
      "price": 2400,
      "originalPrice": 4200,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1pZCrSMY11w2qTyGyrPvp8BdqLaQeo6i-&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1pZCrSMY11w2qTyGyrPvp8BdqLaQeo6i-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GMl3DK6qrsLx_OlLFTWwvbWaWjMrH8ln&sz=w1000",
        "https://drive.google.com/thumbnail?id=12qMtEhYJlLXqoY476HBIVXWWpQ0Ca30Z&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PbAoAIwR1AOTHbVxm8TP2FtmsjD2AlHL&sz=w1000",
        "https://drive.google.com/thumbnail?id=199dKCpYypOqm47-qmv0ymHPPgneuxQ0B&sz=w1000",
        "https://drive.google.com/thumbnail?id=1TI3D3AZe0siHL48qm84NxWHeRR-8ScA-&sz=w1000",
        "https://drive.google.com/thumbnail?id=1EVQVB3XnpAkSdG7-iFgmgUulyAR2alwq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yy6aPJabDAPyIRnx2LmNc3RS9va831l1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ng5kWhu7eM8nBfJz4UNaj6xAXaf2lH_0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1e_w_4kgbpezMzq3Wh8sWTEPbSnYhM4tQ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1O4pERiTDcGVrZ5tmSC2mbOgXlb3E_5CO&sz=w1000",
        "https://drive.google.com/thumbnail?id=1kwylXW-BggyObjyQlnhnBoRTmUAEqxMq&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1wUu2zIzu_w2a0RhYG0ehkqt3r2-SMGfq",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Pant)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sbldd1008",
      "sku": "SBLDD1008",
      "title": "Designer Collection In Faux Georgette Embroidery Sequence Work Gown Dupatta Fully Stitched Anarkali",
      "category": "Anarkalis",
      "price": 1800,
      "originalPrice": 3300,
      "discount": "45% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1BYrhrcCB7roDKXJcCPdhkHuswZPyC9pC&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1BYrhrcCB7roDKXJcCPdhkHuswZPyC9pC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1AkIlBW3QJ6RmSMCODqPTVf7PJBeZTfNB&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ybGbDUxRc9MxDm1Vp9cdUARMFCmfJYjI&sz=w1000",
        "https://drive.google.com/thumbnail?id=16ONcLtdkErU41lzaLhQrqT8t0IWZi_sz&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Ic__MucqkDVhUXNusrXs7K41G3hgceeK&sz=w1000",
        "https://drive.google.com/thumbnail?id=11YuGvbMoDZX9JHgoyZmiN0oGq32RJwEX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1mOCeoGNNkwXGl2GDWcHpwGs0tlKiiiwE&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ja4oQa2AGQ7S3R_q_dDWsY79jblkRkiY&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Q3wNa-GMO5eYiG61wLCkMgdnmDpySyyL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1dR5wrNuR05muhrhybA9F8DN7znOMbENx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ag2Mm0C0M8lrzAvXIYMeNl7wwUVffXd6&sz=w1000",
        "https://drive.google.com/thumbnail?id=12kdVqU9BL6aSvccq5g4Shiu2uSd83_O7&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1x3loO1IGt5kFEMtx-xlEoU2aFBVnsQiY",
      "description": "Crafted in faux georgette with embroidery sequence work full sleeve, this anarkali brings together premium fabric and refined detailing. Styled with set fully stitched 🔥😍🥰, kurta length 48-49inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Faux Georgette With Embroidery Sequence work Full Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "48-49Inch"
        },
        {
          "label": "Bottom",
          "value": "👚"
        },
        {
          "label": "Weight",
          "value": "900gm"
        }
      ],
      "fabric": "Faux Georgette With Embroidery Sequence work Full Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sbldd1009",
      "sku": "SBLDD1009",
      "title": "Designer Collection In Faux Georgette Embroidery Sequence Work Gown Dupatta Fully Stitched Anarkali",
      "category": "Anarkalis",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1o9Z-Dj3-SSOItUkn1AFZEqbUevvstHRN&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1o9Z-Dj3-SSOItUkn1AFZEqbUevvstHRN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1H3acJUmN_0O6d2OWyL5vS_D-ZMA98w0J&sz=w1000",
        "https://drive.google.com/thumbnail?id=1caMMv17t-piexJFFXyO3Uvdm8N4HDIVv&sz=w1000",
        "https://drive.google.com/thumbnail?id=10R8C1TwaIiluySlm50WruDvXGY_rOL17&sz=w1000",
        "https://drive.google.com/thumbnail?id=1cKMjGI_pEGiHHNB2U5z3tzNzqjVnDCve&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vY_Kbis0fWn01LZyHhkfxCeOWiOFsI-U&sz=w1000",
        "https://drive.google.com/thumbnail?id=1HzCPdS72Q5kLbRRGk1MVPpHl78Wfs9im&sz=w1000",
        "https://drive.google.com/thumbnail?id=1T1AgWJDZmVQjSNMMZ788nRTeuGXUMl1M&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iQZM0E9y1lSGgLoDFiyxtsHHWFzZllCf&sz=w1000",
        "https://drive.google.com/thumbnail?id=1u7grygbO0TKi1sNG8b3I1U4jmacPY0ja&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/17CIkmyk3dto2Mm0DyuSkPmFJIhpjuYo3",
      "description": "Crafted in faux georgette with embroidery work with fancy full sleeve, this anarkali brings together premium fabric and refined detailing. Styled with set fully stitched 🔥😍🥰, kurta length 48-49inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Faux Georgette With Embroidery Work With Fancy Full Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "48-49Inch"
        },
        {
          "label": "Bottom",
          "value": "👚"
        },
        {
          "label": "Weight",
          "value": "950gm"
        }
      ],
      "fabric": "Faux Georgette With Embroidery Work With Fancy Full Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sbldd1010",
      "sku": "SBLDD1010",
      "title": "Designer Collection In Simar Silk Embroidery Work Top-bottom Dupatta Fully Stitched 🔥😍🥰 Tunic",
      "category": "Tunics",
      "price": 2100,
      "originalPrice": 3750,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1wZeyg8LhzEDKcM3R9ri8WnzS_j1-MFN7&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1wZeyg8LhzEDKcM3R9ri8WnzS_j1-MFN7&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bcioWyiXpZ6Y7T_1I9V9Au7LQ6WF2YmR&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_sd-uIjqj0UiTwuUnpa6aOqzfbfEurjh&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NtuL30crzb9Ksrfai25BXh3Duf2g8W5x&sz=w1000",
        "https://drive.google.com/thumbnail?id=105GOzs81ofJuA7w4WCF9Lm-0aCcz39iv&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Lj69FY42BObtz7p4xIxa3vg3B5Y8fjpL&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_9coY-7G60sGl3tTziq2eSaTEk0dDQhc&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1cbSsTKs2DcuMTGXieVLhDVM7llhk1MO9",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Styled with set fully stitched 🔥😍🥰, kurta length 39-40 inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "39-40 Inch"
        },
        {
          "label": "Bottom",
          "value": "And Dupatta Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Sizes",
          "value": "."
        },
        {
          "label": "Weight",
          "value": "900gm"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sbldd1013",
      "sku": "SBLDD1013",
      "title": "Stitching: Fully Stitched & Tunic",
      "category": "Tunics",
      "price": 2000,
      "originalPrice": 3600,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1FQ17mAiTXcepqDhMp5vskz1zy4p1rmhu&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1FQ17mAiTXcepqDhMp5vskz1zy4p1rmhu&sz=w1000",
        "https://drive.google.com/thumbnail?id=1znYcunl6PLL9SrpIKEhyQNsZ4EwbTJfA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rJo9jfhSuLU8Rca9CZPGblrsb7PGN4nA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1zxLDgECO3s7YRov1SbPsJnj9SKHF-XJc&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QDpNOwUZS3NVoxHmGMib-89KkYRxUvK_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1VBc1o-MravuEzK74Mbe6cB-afEznjo8U&sz=w1000",
        "https://drive.google.com/thumbnail?id=1_vzZQVN1IGBT1rvKcg78hd0sKXC13LYP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1v_R-zhrepsde1gB6u2PvPdZvTfOj-gN0&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/16xRCfFsrBV12rK-VdaWkXvWVjmnzqSoy",
      "description": "This elegant tunic is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Bottom",
          "value": "(Sharara Plazzo)"
        },
        {
          "label": "Sizes",
          "value": "Available"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sbldd1022",
      "sku": "SBLDD1022",
      "title": "Designer Collection In Cosmos Heavy Embroidery Sequence Work Top-bottom Dupatta Fully Stitched Tunic",
      "category": "Tunics",
      "price": 2300,
      "originalPrice": 4050,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1GXcOANXhM-xXR7dtpbXma5UvVze5euZk&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1GXcOANXhM-xXR7dtpbXma5UvVze5euZk&sz=w1000",
        "https://drive.google.com/thumbnail?id=1YX1AZpXSwDrMTnK0uljQcIE-J1AhydPA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Rm5X-fldCnuWk4yZpSkbVx_lDSvhbj2Z&sz=w1000",
        "https://drive.google.com/thumbnail?id=1B12d7rqKjLgUEzUMbF1iYiwKiJ0nyZA0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eCEdi-YBJLHDvUrgBD09ln_9WM_WVeSK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bVnfZqRzvyp_PbkzA0cBVIkfibJeQyCd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MF3SkS7kePYRlHi4iZXSNtuttxX1wOXR&sz=w1000",
        "https://drive.google.com/thumbnail?id=1G7uhI-I744ZVCYm86u7gq_wA0DVPSpnG&sz=w1000",
        "https://drive.google.com/thumbnail?id=10M4hZ3EQFJsCLWj6R1IFQ0aoVYUx07h6&sz=w1000",
        "https://drive.google.com/thumbnail?id=1QGm3aEmZpmplKbXSalP-d-rWCV40h6X9&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1iqpDcHCRsnYSNnja04lGE-2czwaPyAay",
      "description": "Crafted in cosmos gold jari silk with heavy embroidery sequence work with full sleeve, this tunic brings together premium fabric and refined detailing. Styled with set fully stitched 🔥😍🥰, kurta length 39-40 inch. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Cosmos Gold Jari Silk With Heavy Embroidery Sequence Work With Full Sleeve"
        },
        {
          "label": "Dupatta",
          "value": "Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Length",
          "value": "39-40 Inch"
        },
        {
          "label": "Bottom",
          "value": "And Dupatta Set Fully stitched 🔥😍🥰"
        },
        {
          "label": "Sizes",
          "value": "."
        },
        {
          "label": "Weight",
          "value": "950gm"
        }
      ],
      "fabric": "Cosmos Gold Jari Silk With Heavy Embroidery Sequence Work With Full Sleeve",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnd5061",
      "sku": "SBLND5061",
      "title": "Đěsigner Anarkali Suit In New Fancy Style Anarkali",
      "category": "Anarkalis",
      "price": 2500,
      "originalPrice": 4350,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1VqbIoPuZ48U-bnoAj89ShmyXQ2FzsB-H&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1VqbIoPuZ48U-bnoAj89ShmyXQ2FzsB-H&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Qw55-0GsUCjLAOTy62OdKNJQrPR1REUH&sz=w1000",
        "https://drive.google.com/thumbnail?id=1COaUxwoBbUbUkX_Poela44EP-R5YJtLd&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-Fu2dDTTVMZ8f8xY9y8dFiBY4vnZgEfQ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1aGJCHyHPPYHMRzQLBULtNWiMWu3pyctx&sz=w1000",
        "https://drive.google.com/thumbnail?id=1umedecUQJsMsFQTok4Gq2tA_aDPMgnV5&sz=w1000",
        "https://drive.google.com/thumbnail?id=1temjst3HxpuAP8nEztTWP4AiROPVUvFX&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hkw4KQik2DDMiHfaAzX0y3Tqmp3OxHpq&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hOWclAEp23ITJdkgxa5kbLncdnNvZ2_r&sz=w1000",
        "https://drive.google.com/thumbnail?id=1lyBwvwKFcjrTggUUq-NiG9csxdD7a9Ap&sz=w1000",
        "https://drive.google.com/thumbnail?id=116y0Lhj-fww9Tlk-23R0qiJjiusIv-2K&sz=w1000",
        "https://drive.google.com/thumbnail?id=178S5EahkagVrrBfMrIQG4i7Je1ZRYf-u&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1T05roBn0MRv41xwvtlcFf9KB2CGzZgN1",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Sizes",
          "value": "2.30 meter)"
        },
        {
          "label": "Weight",
          "value": "1 kg"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnd5060",
      "sku": "SBLND5060",
      "title": "Designer Party Wear Look Top , Sharara Plazzo Dupatta Tunic",
      "category": "Tunics",
      "price": 3000,
      "originalPrice": 5100,
      "discount": "41% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1XTFqKmxPIOj3VyX5xWiDS_oMFg9GgHtA&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1XTFqKmxPIOj3VyX5xWiDS_oMFg9GgHtA&sz=w1000",
        "https://drive.google.com/thumbnail?id=139n6svY8a9nvjIUgBTSRke_ZkvZpk6Hy&sz=w1000",
        "https://drive.google.com/thumbnail?id=16zcpACOiNjRBAGoO0Lb0NKI3ozcW4-bC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BNewVCKngRThV24iFYfz51LWIIK06eYW&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GAleBmk3BV7LR35TMX3JjG6D9VPH5VNC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1hLQlk_0OuS_wN5TC2Bz1AmSH3TyqXMw8&sz=w1000",
        "https://drive.google.com/thumbnail?id=11QXl4Xw7r0kTcnuLqPSdA7BWwD6xfDOk&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Ysy-lI3nfrjT1tRufBkn4B_J0Ewzgchv&sz=w1000",
        "https://drive.google.com/thumbnail?id=1SbMR15pTDN5sdf-leOwZfItKBw3bDJIm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1fKdAy0Ta5iIfaWpDF1WcibgnoX9ncNiN&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ANz08PI5lrQbX92e1fT3RUL4MCNQuh7d&sz=w1000",
        "https://drive.google.com/thumbnail?id=1q-tszF5pAoYdw8sXsn71fVvk_7SPzju-&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1G0kYXF50d_2jU5w-yJuB0vKekuhZ4Qzf",
      "description": "Crafted in heavy crunchy silk material, this tunic brings together premium fabric and refined detailing. Set includes: Top, Sharara Plazzo and Dupptta. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Heavy Crunchy Silk Material"
        },
        {
          "label": "Bottom",
          "value": "Plazzo and Dupatta"
        },
        {
          "label": "Weight",
          "value": "950 Gm."
        },
        {
          "label": "Set Includes",
          "value": "Top, Sharara Plazzo and Dupptta"
        }
      ],
      "fabric": "Heavy Crunchy Silk Material",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Top, Sharara Plazzo and Dupptta"
    },
    {
      "id": "prod-sblnd5059",
      "sku": "SBLND5059",
      "title": "Đěsigner Anarkali Suit In New Fancy Style Anarkali",
      "category": "Anarkalis",
      "price": 2500,
      "originalPrice": 4350,
      "discount": "43% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1q0mMy_ygtC2AsxGn4CM_gPSZVEqe5sc4&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1q0mMy_ygtC2AsxGn4CM_gPSZVEqe5sc4&sz=w1000",
        "https://drive.google.com/thumbnail?id=11tCwbvnJ97ANM1gKY6MD2t1ZokySqFZ0&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WleY7jT8kLRtDSg5S72nFOlLQ1ELCxz1&sz=w1000",
        "https://drive.google.com/thumbnail?id=17VngfE35Rf0Dk5aZY0vKag2Y_h5hz-D0&sz=w1000",
        "https://drive.google.com/thumbnail?id=12jq_mUGB0CZqXxhqxHpu8e19cnK934hp&sz=w1000",
        "https://drive.google.com/thumbnail?id=1m7jJK0QEHC8T8Eam7k2MKAp-bYl1la0D&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vpet8i0naMHyOArYaODDr0t1gnZyiEAo&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PQnlIyDurH6YZiezi9M-EKFnREaHxHyS&sz=w1000",
        "https://drive.google.com/thumbnail?id=1OT3dkcPxPd6Nofu-EMXC5S5mPPLepzuK&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BT4jt3Oo2iZ-f4cjD3Au06SN6SwdpWWz&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1dNq5-fDGN2WfrA91Fr1Or5Yd6P9_YoxY",
      "description": "This elegant anarkali is designed for festive celebrations and special occasions. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Sizes",
          "value": "2.30 Meter)"
        }
      ],
      "fabric": "Premium silk blend with lining",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnd5058",
      "sku": "SBLND5058",
      "title": "Đěsigner Party Wear Look Top Farshi Salwar Tunic",
      "category": "Tunics",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "S",
        "M",
        "L",
        "XL",
        "2XL",
        "3XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=184BK9LGLeDDszrduAj533grcJc41M2gJ&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=184BK9LGLeDDszrduAj533grcJc41M2gJ&sz=w1000",
        "https://drive.google.com/thumbnail?id=13zuC07ni7Msdg-QtM-9RDVjBN7xpu3vP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1vPv9tUB_tJPEoysSuDPUAppBl4y5UqJA&sz=w1000",
        "https://drive.google.com/thumbnail?id=1yxCbxDTre0aDO7QbmzwKOlKHhZIOneZ2&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ih7Vng4GNR-TkPDiwvbG-mH6KPRTPzra&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Syx3cdOYarpZDS40lAxroi-brmvHlZnj&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MOLSmHIbcKr0fdk4s11lNeQnL8JsYpw5&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/10ZhGiHqjDBeZSjgRil5Nwsiube5iG_Yh",
      "description": "Crafted in heavy roman silk with embroidery work, this tunic brings together premium fabric and refined detailing. Styled with heavy faux georgette., kurta length 31-32 inch.. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Heavy Roman Silk With Embroidery Work"
        },
        {
          "label": "Dupatta",
          "value": "Heavy Faux Georgette."
        },
        {
          "label": "Length",
          "value": "31-32 Inch."
        },
        {
          "label": "Sizes",
          "value": "S(36),M(38),L(40),XL(42),XXL(44),3XL(46)+margin"
        }
      ],
      "fabric": "Heavy Roman Silk With Embroidery Work",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnd5034",
      "sku": "SBLND5034",
      "title": "Top Fabric :pure Heavy Chinnon Silk Heavy Embroidery Coding Sequence Work Full Tunic",
      "category": "Tunics",
      "price": 2200,
      "originalPrice": 3900,
      "discount": "44% OFF",
      "badge": "BEST-SELLER",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1lYG-leDX59qQ2y9X3Lfm3qE4EEJexFoU&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1lYG-leDX59qQ2y9X3Lfm3qE4EEJexFoU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1BY-1xunP8a6bzk9V98EMFjRsAF4JrgEZ&sz=w1000",
        "https://drive.google.com/thumbnail?id=1PjjFvj8PZNlvGMHgGRyUsZUe3en_jNd1&sz=w1000",
        "https://drive.google.com/thumbnail?id=1WhoS3iO-5tUuh7t3obbNSOdbVn5c9oWD&sz=w1000",
        "https://drive.google.com/thumbnail?id=1eTuQuELXvsY8uxV8ylNnivRAD7uBMqRv&sz=w1000",
        "https://drive.google.com/thumbnail?id=1rkzv8pBVjKjjctouwFGV2a_wlrJTnEM8&sz=w1000",
        "https://drive.google.com/thumbnail?id=1pHg69KJTmZp5IJzYZpJyIALmYLDlw6Dm&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Q6mGHO4SxHGRZo8nUhkvWITa2Kjtdd_-&sz=w1000",
        "https://drive.google.com/thumbnail?id=10koMygnjhfCiCy1pI4a8_7DikoGjRmiD&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iWUj52HlMSzc1RWae9GwvIbx3U0ascgj&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1RZfpF1_DJNokUTJkpG3empbPwuoPw41G",
      "description": "Crafted in pure heavy chinnon silk with, this tunic brings together premium fabric and refined detailing. Styled with pure heavy chinnon silk with, kurta length 41-42 inches. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Pure Heavy Chinnon Silk With"
        },
        {
          "label": "Dupatta",
          "value": "Pure Heavy Chinnon Silk With"
        },
        {
          "label": "Length",
          "value": "41-42 Inches"
        },
        {
          "label": "Sizes",
          "value": "(M38)(L40)(42XL)(44XXL)+++ Margin Size."
        },
        {
          "label": "Weight",
          "value": "950 gm."
        }
      ],
      "fabric": "Pure Heavy Chinnon Silk With",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnd5057",
      "sku": "SBLND5057",
      "title": "Designer Party Wear Look Top , Sharara Plazzo Dupatta Tunic",
      "category": "Tunics",
      "price": 2800,
      "originalPrice": 4800,
      "discount": "42% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=1fLoRfh2NhSN17erW-bnpbPL4n9h81EVk&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=1fLoRfh2NhSN17erW-bnpbPL4n9h81EVk&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ugbJyYbyrr6f8SML9VSksajnPj99oBZB&sz=w1000",
        "https://drive.google.com/thumbnail?id=196sb9NMkbO4WuVau9grJiLFgnw_ehLA9&sz=w1000",
        "https://drive.google.com/thumbnail?id=1gpRKdHa_kqBkrNGJV_V2oMHJ8Fg-zFnM&sz=w1000",
        "https://drive.google.com/thumbnail?id=11OAdd0Uk-KuAIeakA_7JQT_akqSCeC9n&sz=w1000",
        "https://drive.google.com/thumbnail?id=15bqPDr0gec7JBIseVB4MPJtG734onc27&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Ij2Gx2RemgMej8uBph4Uu7vIrIzNgm-O&sz=w1000",
        "https://drive.google.com/thumbnail?id=1LbMyV8jA7PPy9ncvNwE-edBwSVuRqLQC&sz=w1000",
        "https://drive.google.com/thumbnail?id=1y_EhFdYJTyN9dIh-KrZWeZuRKckOjNP_&sz=w1000",
        "https://drive.google.com/thumbnail?id=1-e-o-njsV06yn3pOQFCaKQ878GWmlY_B&sz=w1000",
        "https://drive.google.com/thumbnail?id=123s2Btfr-J4MgdxPci7HZqVnUZ-T8KuW&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1H3HrbecHWb1NI37XxuTYpglUDF9yOCXO",
      "description": "Crafted in heavy nc vichitra silk material, this tunic brings together premium fabric and refined detailing. Comes complete with coordinated dupatta and bottom for a ready-to-style look. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Heavy NC Vichitra Silk Material"
        },
        {
          "label": "Bottom",
          "value": "Plazzo and Dupatta"
        },
        {
          "label": "Weight",
          "value": "950 Gm."
        }
      ],
      "fabric": "Heavy NC Vichitra Silk Material",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Kurta/Gown, bottom trousers and dupatta"
    },
    {
      "id": "prod-sblnd5056",
      "sku": "SBLND5056",
      "title": "Designer Party Wear Look Top , Sharara Plazzo Dupatta Tunic",
      "category": "Tunics",
      "price": 2900,
      "originalPrice": 4950,
      "discount": "41% OFF",
      "badge": "ONLINE EXCLUSIVE",
      "isHot": false,
      "inStock": true,
      "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL"
      ],
      "colors": "",
      "mainImage": "https://drive.google.com/thumbnail?id=11iuyN49cYevlKwHPXE9m9tcMTVKVUk3A&sz=w1000",
      "gallery": [
        "https://drive.google.com/thumbnail?id=11iuyN49cYevlKwHPXE9m9tcMTVKVUk3A&sz=w1000",
        "https://drive.google.com/thumbnail?id=1iwE57PCw9LQn77E4Nt1RZjbXRLMoT0Ud&sz=w1000",
        "https://drive.google.com/thumbnail?id=1bgfGdk_L2pQXtwt65JQoSBvrPStro_Bv&sz=w1000",
        "https://drive.google.com/thumbnail?id=1MuIdWlDtSPFLc-2jk8joop7YUMA8ihvP&sz=w1000",
        "https://drive.google.com/thumbnail?id=1Fu-6jFUJVcAIIONGlRPOPsZLv7QojmNC&sz=w1000",
        "https://drive.google.com/thumbnail?id=13z1MrkgSh15au-G12s6VOTtX1ZBrbWjI&sz=w1000",
        "https://drive.google.com/thumbnail?id=1DOnzN9wPKZeAaMRuWolYiPj6FHCFDoet&sz=w1000",
        "https://drive.google.com/thumbnail?id=1NUeeJfwWoc7_I6ilsWiW6uQfK62n5s7r&sz=w1000",
        "https://drive.google.com/thumbnail?id=1sPx-_SUYJgmKz3pXY5mBEowdLcy-vU09&sz=w1000",
        "https://drive.google.com/thumbnail?id=1ZI355INkb5EtWa1tOVgejaGii1ZuXb6x&sz=w1000",
        "https://drive.google.com/thumbnail?id=1GOOCDuZu39CvOJ78Yf5kFqdeMfaFTkwU&sz=w1000",
        "https://drive.google.com/thumbnail?id=1oeeTZAjQ0beBLfhzCSBYMk2eIyNmBNDz&sz=w1000"
      ],
      "photosFolder": "https://drive.google.com/drive/folders/1IJIxDnIEyC2iqT9meTHC901GRgjfdcPh",
      "description": "Crafted in heavy fandy silk material, this tunic brings together premium fabric and refined detailing. Set includes: Top, Sharara Plazzo and Dupptta. Fully stitched and ready to wear with standard ethnic sizing.",
      "highlights": [
        {
          "label": "Fabric",
          "value": "Heavy Fandy Silk Material"
        },
        {
          "label": "Bottom",
          "value": "Plazzo and Dupatta"
        },
        {
          "label": "Weight",
          "value": "950 Gm."
        },
        {
          "label": "Set Includes",
          "value": "Top, Sharara Plazzo and Dupptta"
        }
      ],
      "fabric": "Heavy Fandy Silk Material",
      "sleeveLength": "Full Sleeves",
      "pattern": "Handcrafted embroidery and zari work",
      "washCare": "Dry clean only",
      "setIncludes": "Top, Sharara Plazzo and Dupptta"
    }
  ]
};

// Storage helper functions
const STORAGE_KEY = "narivae_store_database_v5";

function getStoreData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        branding: { ...DEFAULT_STORE_DATA.branding, ...(parsed.branding || {}) },
        navigation: parsed.navigation || DEFAULT_STORE_DATA.navigation,
        sections: { ...DEFAULT_STORE_DATA.sections, ...(parsed.sections || {}) },
        heroSlides: parsed.heroSlides || DEFAULT_STORE_DATA.heroSlides,
        promoBanner: { ...DEFAULT_STORE_DATA.promoBanner, ...(parsed.promoBanner || {}) },
        customerReviews: parsed.customerReviews || DEFAULT_STORE_DATA.customerReviews,
        products: parsed.products || DEFAULT_STORE_DATA.products
      };
    }
  } catch (e) {
    console.warn("Failed to parse store data from localStorage", e);
  }
  return DEFAULT_STORE_DATA;
}

function saveStoreData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error("Failed to save store data to localStorage", e);
    return false;
  }
}

function resetStoreData() {
  localStorage.removeItem(STORAGE_KEY);
  return DEFAULT_STORE_DATA;
}

// Generate formatted WhatsApp message URL
function buildWhatsAppOrderUrl(whatsappNumber, productTitle, selectedSize, price, mainImage) {
  const cleanPhone = (whatsappNumber || "918511414656").replace(/[^0-9]/g, "");
  const message = `Hello NARIVAE Team! 👋\n\nI want to place an order for:\n📌 *${productTitle}*\n📏 *Size:* ${selectedSize || "Standard"}\n💰 *Price:* ₹${(price || 0).toLocaleString("en-IN")}\n🖼️ *Image:* ${mainImage}\n\nPlease confirm availability and payment details!`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
