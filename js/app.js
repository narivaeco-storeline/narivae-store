/**
 * NARIVAE ETHNIC WEAR - DYNAMIC STORE FRONT CONTROLLER
 */

/* ── Apply saved theme colors instantly on every page load ── */
(function applyStoredTheme() {
  // First try to get theme from the store data (pushed via GitHub - works on ALL devices)
  let theme = null;
  try {
    const storeRaw = localStorage.getItem("narivae_store_database_v5");
    if (storeRaw) {
      const storeData = JSON.parse(storeRaw);
      if (storeData && storeData.branding && storeData.branding.theme) {
        theme = storeData.branding.theme;
      }
    }
    // Fallback: old separate key (backwards compat)
    if (!theme) {
      theme = JSON.parse(localStorage.getItem("narivae_theme_colors") || "null");
    }
  } catch(e) {}
  if (!theme) return;
  const root = document.documentElement;
  const darken = (hex, amt) => {
    let c = hex.replace("#",""); if(c.length===3) c=c.split("").map(x=>x+x).join("");
    return "#"+[0,2,4].map(i=>Math.max(0,parseInt(c.substr(i,2),16)-amt).toString(16).padStart(2,"0")).join("");
  };
  root.style.setProperty("--primary-maroon", theme.primary);
  root.style.setProperty("--maroon-hover",   darken(theme.primary, 20));
  root.style.setProperty("--gold-accent",    theme.gold);
  root.style.setProperty("--gold-light",     theme.goldLight);
  root.style.setProperty("--rose-pink",      theme.rose);
  root.style.setProperty("--rose-hover",     darken(theme.rose, 20));
  root.style.setProperty("--bg-warm",        theme.bgWarm);
  root.style.setProperty("--bg-card",        theme.bgCard);
  root.style.setProperty("--text-main",      theme.textMain);
  root.style.setProperty("--discount-red",   theme.discount);
})();

document.addEventListener("DOMContentLoaded", () => {
  const store = getStoreData();
  let currentFilter = "All";
  let activeHeroIndex = 0;
  let heroTimer = null;
  
  let cart = JSON.parse(localStorage.getItem("narivae_cart") || "[]");
  let wishlist = JSON.parse(localStorage.getItem("narivae_wishlist") || "[]");

  // Cache Elements
  const annTextEl = document.getElementById("announcement-text");
  const brandTitleEl = document.getElementById("brand-title-text");
  const brandSubtitleEl = document.getElementById("brand-subtitle-text");
  const brandLogoImgEl = document.getElementById("brand-logo-img");
  const mainNavEl = document.getElementById("main-nav-links");
  const heroSliderEl = document.getElementById("hero-slider-container");
  
  const hotTitleEl = document.getElementById("hot-selling-title");
  const hotSubtextEl = document.getElementById("hot-selling-subtext");
  const hotBtnEl = document.getElementById("hot-selling-btn");
  const hotTrackEl = document.getElementById("hot-slider-track");
  
  const promoTitleEl = document.getElementById("promo-title");
  const promoSubtitleEl = document.getElementById("promo-subtitle");
  const promoBgEl = document.getElementById("promo-bg-img");
  const promoWaBtnEl = document.getElementById("promo-wa-btn");

  const catalogTitleEl = document.getElementById("catalog-title");
  const catalogSubtextEl = document.getElementById("catalog-subtext");
  const filterTabsEl = document.getElementById("filter-tabs");
  const catalogGridEl = document.getElementById("catalog-grid");
  const searchInputEl = document.getElementById("search-input");

  const cartDrawerEl = document.getElementById("cart-drawer");
  const cartDrawerOverlay = document.getElementById("cart-drawer-overlay");
  const cartToggleBtn = document.getElementById("cart-toggle-btn");
  const cartCloseBtn = document.getElementById("cart-close-btn");
  const cartBadgeCount = document.getElementById("cart-badge-count");
  const wishlistBadgeCount = document.getElementById("wishlist-badge-count");

  /* ==========================================================================
     1. BRANDING & DYNAMIC HEADER NAVIGATION
     ========================================================================== */
  function initBranding() {
    if (annTextEl) annTextEl.textContent = store.branding.announcementText;
    if (brandTitleEl) brandTitleEl.textContent = store.branding.logoText;
    if (brandSubtitleEl) brandSubtitleEl.textContent = store.branding.logoSubtext;
    
    if (store.branding.logoImageUrl && brandLogoImgEl) {
      brandLogoImgEl.src = store.branding.logoImageUrl;
      brandLogoImgEl.style.display = "block";
      const brandTextContainer = document.querySelector(".brand-text-container");
      if (brandTextContainer) brandTextContainer.style.display = "none";
    }

    // Dynamic Navigation Menu from Admin
    if (mainNavEl) {
      mainNavEl.innerHTML = store.navigation.map((item, i) => `
        <a href="${item.link}" class="nav-link ${i === 0 ? 'active' : ''}" onclick="handleNavClick(event, '${item.filter || ''}')">
          ${item.name}
          ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ''}
        </a>
      `).join('');
    }

    // Dynamic Footer Elements
    const footerLogoEl = document.getElementById("footer-logo-text");
    const footerBioEl = document.getElementById("footer-bio");
    const footerCopyrightEl = document.getElementById("footer-copyright");
    const footerWaLink = document.getElementById("footer-wa-link");
    const footerEmailLink = document.getElementById("footer-email-link");

    if (footerLogoEl) footerLogoEl.textContent = store.branding.siteName;
    if (footerBioEl) footerBioEl.textContent = store.branding.footerBio;
    if (footerCopyrightEl) footerCopyrightEl.textContent = store.branding.copyrightText;
    
    if (footerWaLink) {
      footerWaLink.href = `https://wa.me/${store.branding.whatsappNumber}`;
      footerWaLink.querySelector('span').textContent = `WhatsApp: +${store.branding.whatsappNumber}`;
    }
    if (footerEmailLink) {
      footerEmailLink.href = `mailto:${store.branding.contactEmail}`;
      footerEmailLink.querySelector('span').textContent = store.branding.contactEmail;
    }
    
    updateBadgeCounts();
  }

  window.handleNavClick = function(e, filterCategory) {
    if (filterCategory) {
      currentFilter = filterCategory;
      renderCatalog();
      const catSection = document.getElementById("catalog");
      if (catSection) catSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* ==========================================================================
     2. HERO SLIDER
     ========================================================================== */
  function renderHero() {
    if (!heroSliderEl || !store.heroSlides.length) return;
    
    heroSliderEl.innerHTML = store.heroSlides.map((slide, index) => `
      <div class="hero-slide ${index === 0 ? 'active' : ''}">
        ${slide.type === 'video' ? `
          <video class="hero-media" autoplay loop muted playsinline src="${slide.mediaUrl}"></video>
        ` : `
          <img class="hero-media" src="${slide.mediaUrl}" alt="${slide.headline}" />
        `}
        <div class="hero-content">
          ${slide.badgeText ? `<span class="hero-tag">${slide.badgeText}</span>` : ''}
          <h1 class="hero-headline">${slide.headline}</h1>
          <p class="hero-subheadline">${slide.subheadline}</p>
          <a href="${slide.buttonLink || '#catalog'}" class="btn-primary">
            <span>${slide.buttonText || 'EXPLORE NOW'}</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    `).join('');

    startHeroTimer();
  }

  function startHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => {
      const slides = document.querySelectorAll('.hero-slide');
      if (slides.length <= 1) return;
      slides[activeHeroIndex].classList.remove('active');
      activeHeroIndex = (activeHeroIndex + 1) % slides.length;
      slides[activeHeroIndex].classList.add('active');
    }, 5500);
  }

  /* ==========================================================================
     3. "SELLING HOT!" SLIDER SECTION
     ========================================================================== */
  function renderHotSellingSection() {
    if (hotTitleEl) hotTitleEl.textContent = store.sections.hotSellingTitle;
    if (hotSubtextEl) hotSubtextEl.textContent = store.sections.hotSellingSubtext;
    if (hotBtnEl) hotBtnEl.textContent = store.sections.hotSellingBtnText;

    const hotProducts = store.products.filter(p => p.isHot);
    if (!hotTrackEl) return;

    hotTrackEl.innerHTML = hotProducts.map(p => `
      <div class="hot-product-card" data-id="${p.id}" onclick="openProductModal('${p.id}')" style="cursor:pointer;">
        <div class="product-image-box" onclick="openProductModal('${p.id}')">
          <img src="${p.mainImage}" alt="${p.title}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80';" />
          ${p.badge ? `<span class="badge-tag">${p.badge}</span>` : ''}
          <button class="wishlist-btn ${wishlist.includes(p.id) ? 'active' : ''}" onclick="toggleWishlist('${p.id}', event)">
            <svg width="18" height="18" fill="${wishlist.includes(p.id) ? 'var(--primary-maroon)' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <button class="quick-bag-btn" title="Quick View & Order" onclick="openProductModal('${p.id}', event)">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          </button>
        </div>
        <div class="product-info">
          <h4 class="product-title">${p.title}</h4>
          <div class="price-row">
            <span class="current-price">₹${p.price.toLocaleString('en-IN')}</span>
            ${p.originalPrice > p.price ? `<span class="original-price">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
            ${p.discount ? `<span class="discount-tag">${p.discount}</span>` : ''}
          </div>
          <div class="size-pill-row">
            ${(p.sizes || []).join('  ')}
          </div>
        </div>
      </div>
    `).join('');

    const prevBtn = document.getElementById("hot-slider-prev");
    const nextBtn = document.getElementById("hot-slider-next");

    if (prevBtn) prevBtn.onclick = () => hotTrackEl.scrollBy({ left: -320, behavior: 'smooth' });
    if (nextBtn) nextBtn.onclick = () => hotTrackEl.scrollBy({ left: 320, behavior: 'smooth' });
  }

  /* ==========================================================================
     4. PROMOTIONAL BANNER SECTION
     ========================================================================== */
  function renderPromoBanner() {
    const banner = store.promoBanner;
    if (!banner) return;

    if (promoTitleEl) promoTitleEl.textContent = banner.title;
    if (promoSubtitleEl) promoSubtitleEl.textContent = banner.subtitle;
    if (promoBgEl && banner.imageUrl) promoBgEl.src = banner.imageUrl;
    if (promoWaBtnEl) {
      promoWaBtnEl.href = banner.buttonLink || `https://wa.me/${store.branding.whatsappNumber}`;
      promoWaBtnEl.querySelector('span').textContent = banner.buttonText || "CLAIM ON WHATSAPP";
    }
  }

  /* ==========================================================================
     5. 4-COLUMN CATALOG GRID SECTION
     ========================================================================== */
  function renderCatalog() {
    if (catalogTitleEl) catalogTitleEl.textContent = store.sections.catalogTitle;
    if (catalogSubtextEl) catalogSubtextEl.textContent = store.sections.catalogSubtext;

    const categories = ["All", ...new Set(store.products.map(p => p.category))];
    if (filterTabsEl) {
      filterTabsEl.innerHTML = categories.map(cat => `
        <button class="filter-btn ${cat === currentFilter ? 'active' : ''}" onclick="setFilter('${cat}')">
          ${cat}
        </button>
      `).join('');
    }

    let items = store.products;
    if (currentFilter !== "All") {
      items = items.filter(p => p.category === currentFilter || p.badge === currentFilter);
    }

    const searchTerm = (searchInputEl?.value || "").toLowerCase().trim();
    if (searchTerm) {
      items = items.filter(p => p.title.toLowerCase().includes(searchTerm) || p.category.toLowerCase().includes(searchTerm));
    }

    if (!catalogGridEl) return;

    if (items.length === 0) {
      catalogGridEl.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 0; color: #777;">
          <h3>No products found matching "${currentFilter}"</h3>
        </div>
      `;
      return;
    }

    catalogGridEl.innerHTML = items.map(p => `
      <div class="catalog-card" data-id="${p.id}" onclick="openProductModal('${p.id}')" style="cursor:pointer;">
        <div class="product-image-box" onclick="openProductModal('${p.id}')">
          <img src="${p.mainImage}" alt="${p.title}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80';" />
          ${p.badge ? `<span class="badge-tag">${p.badge}</span>` : ''}
          <button class="wishlist-btn ${wishlist.includes(p.id) ? 'active' : ''}" onclick="toggleWishlist('${p.id}', event)">
            <svg width="18" height="18" fill="${wishlist.includes(p.id) ? 'var(--primary-maroon)' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <button class="quick-bag-btn" title="Order / Add to Cart" onclick="openProductModal('${p.id}', event)">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          </button>
        </div>
        <div class="product-info">
          <h4 class="product-title">${p.title}</h4>
          <div class="price-row">
            <span class="current-price">₹${p.price.toLocaleString('en-IN')}</span>
            ${p.originalPrice > p.price ? `<span class="original-price">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
            ${p.discount ? `<span class="discount-tag">${p.discount}</span>` : ''}
          </div>
        </div>
      </div>
    `).join('');
  }

  window.setFilter = function(category) {
    currentFilter = category;
    renderCatalog();
  };

  if (searchInputEl) {
    searchInputEl.addEventListener("input", () => {
      renderCatalog();
    });
  }

  /* ==========================================================================
     6. PRODUCT NAVIGATION (Direct to product.html)
     ========================================================================== */
  window.openProductModal = function(productId, event) {
    if (event) event.stopPropagation();
    window.location.href = `product.html?id=${productId}`;
  };

  /* ==========================================================================
     7. CART & WISHLIST ENGINE
     ========================================================================== */
  window.toggleWishlist = function(productId, event) {
    if (event) event.stopPropagation();
    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
      wishlist.splice(idx, 1);
    } else {
      wishlist.push(productId);
    }
    localStorage.setItem("narivae_wishlist", JSON.stringify(wishlist));
    updateBadgeCounts();
    renderHotSellingSection();
    renderCatalog();
  };

  function updateBadgeCounts() {
    const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartBadgeCount) cartBadgeCount.textContent = cartCount;
    if (wishlistBadgeCount) wishlistBadgeCount.textContent = wishlist.length;
  }

  function renderCartDrawer() {
    const bodyEl = document.getElementById("cart-drawer-body");
    const subtotalEl = document.getElementById("cart-subtotal-val");
    const checkoutWaBtn = document.getElementById("cart-wa-checkout-btn");

    if (!bodyEl) return;
    if (checkoutWaBtn) checkoutWaBtn.onclick = null;

    if (cart.length === 0) {
      bodyEl.innerHTML = `
        <div style="text-align: center; margin-top: 60px; color: #888;">
          <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="margin-bottom:12px; opacity:0.5;"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          <p>Your shopping bag is currently empty.</p>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = "₹0";
      return;
    }

    let subtotal = 0;
    bodyEl.innerHTML = cart.map((item, idx) => {
      subtotal += item.price * item.qty;
      return `
        <div class="cart-item">
          <img src="${item.image}" class="cart-item-img" alt="${item.title}" />
          <div class="cart-item-details">
            <div class="cart-item-title">${item.title}</div>
            <div class="cart-item-size">Size: ${item.size}</div>
            <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
            <div class="qty-controls">
              <button onclick="updateCartQty(${idx}, -1)">-</button>
              <span>${item.qty}</span>
              <button onclick="updateCartQty(${idx}, 1)">+</button>
            </div>
          </div>
          <button style="color:#aaa;" onclick="removeCartItem(${idx})">&times;</button>
        </div>
      `;
    }).join('');

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;

    if (checkoutWaBtn) {
      const summaryText = cart.map(i => {
        const productId = i.id || i.productId;
        const productUrl = productId
          ? `https://narivae.com/product.html?id=${encodeURIComponent(productId)}`
          : "https://narivae.com";
        return `• ${i.title} (${i.size}) x${i.qty} = ₹${(i.price * i.qty).toLocaleString('en-IN')}\n  Product: ${productUrl}`;
      }).join('\n');
      const waMsg = `Hello NARIVAE! I would like to order the following items from my shopping bag:\n\n${summaryText}\n\n*Total Amount:* ₹${subtotal.toLocaleString('en-IN')}`;
      checkoutWaBtn.href = `https://wa.me/${store.branding.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;
    }
  }

  window.updateCartQty = function(idx, delta) {
    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
    localStorage.setItem("narivae_cart", JSON.stringify(cart));
    updateBadgeCounts();
    renderCartDrawer();
  };

  window.removeCartItem = function(idx) {
    cart.splice(idx, 1);
    localStorage.setItem("narivae_cart", JSON.stringify(cart));
    updateBadgeCounts();
    renderCartDrawer();
  };

  function openCartDrawer() {
    if (cartDrawerEl) cartDrawerEl.classList.add('active');
    if (cartDrawerOverlay) cartDrawerOverlay.classList.add('active');
  }

  function closeCartDrawer() {
    if (cartDrawerEl) cartDrawerEl.classList.remove('active');
    if (cartDrawerOverlay) cartDrawerOverlay.classList.remove('active');
  }

  if (cartToggleBtn) cartToggleBtn.onclick = () => { renderCartDrawer(); openCartDrawer(); };
  if (cartCloseBtn) cartCloseBtn.onclick = closeCartDrawer;
  if (cartDrawerOverlay) cartDrawerOverlay.onclick = closeCartDrawer;

  /* ==========================================================================
     8. INITIALIZATION
     ========================================================================== */
  initBranding();
  renderHero();
  renderHotSellingSection();
  renderPromoBanner();
  renderCatalog();
});
