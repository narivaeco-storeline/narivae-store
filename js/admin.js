/**
 * NARIVAE ETHNIC WEAR - COMPLETE ADMIN PANEL ENGINE
 * Includes WebP Conversion, Multi-Image Upload, Navigation & Reviews CRUD
 */

document.addEventListener("DOMContentLoaded", () => {
  let store = getStoreData();
  const DEFAULT_PASSCODE = "admin123";

  // Elements
  const loginOverlay = document.getElementById("admin-login-overlay");
  const loginPassInput = document.getElementById("admin-passcode-input");
  const loginBtn = document.getElementById("admin-login-btn");
  const loginErrorMsg = document.getElementById("login-error-msg");
  const adminApp = document.getElementById("admin-app");

  /* ==========================================================================
     1. PASSCODE AUTHENTICATION LOCK
     ========================================================================== */
  function checkAuth() {
    const sessionAuth = sessionStorage.getItem("narivae_admin_authed");
    if (sessionAuth === "true") {
      loginOverlay.style.display = "none";
      adminApp.style.display = "block";
      initAdminPanel();
    } else {
      loginOverlay.style.display = "flex";
      adminApp.style.display = "none";
    }
  }

  if (loginBtn) {
    loginBtn.onclick = () => {
      const entered = (loginPassInput.value || "").trim();
      if (entered === DEFAULT_PASSCODE || entered === "admin") {
        sessionStorage.setItem("narivae_admin_authed", "true");
        loginErrorMsg.style.display = "none";
        checkAuth();
      } else {
        loginErrorMsg.style.display = "block";
        loginErrorMsg.textContent = "Invalid passcode. Default passcode is admin123";
      }
    };
  }

  /* ==========================================================================
     2. AUTOMATIC WEBP CONVERTER & IMAGE COMPRESSOR
     ========================================================================== */
  function convertToWebP(file, maxWidth = 900, quality = 0.82) {
    return new Promise((resolve, reject) => {
      if (file.type && file.type.startsWith('video/')) {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          // Convert explicitly to image/webp
          const webpDataUrl = canvas.toDataURL('image/webp', quality);
          resolve(webpDataUrl);
        };
        img.onerror = reject;
        img.src = event.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  /* ==========================================================================
     3. ADMIN PANEL INITIALIZATION
     ========================================================================== */
  function initAdminPanel() {
    store = getStoreData();
    renderDashboardStats();
    populateBrandingForm();
    renderNavManagerTable();
    renderProductsTable();
    renderHeroSlidesAdmin();
    populatePromoBannerForm();
    renderReviewsAdminTable();
    setupTabSwitchers();
  }

  function setupTabSwitchers() {
    const tabBtns = document.querySelectorAll(".admin-nav-item");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabBtns.forEach(btn => {
      btn.onclick = () => {
        const targetTab = btn.getAttribute("data-tab");
        tabBtns.forEach(b => b.classList.remove("active"));
        tabPanels.forEach(p => p.style.display = "none");
        
        btn.classList.add("active");
        const panel = document.getElementById(`tab-${targetTab}`);
        if (panel) panel.style.display = "block";
      };
    });
  }

  function renderDashboardStats() {
    setTxt("stat-total-products", store.products.length);
    setTxt("stat-hot-products", store.products.filter(p => p.isHot).length);
    setTxt("stat-hero-slides", store.heroSlides.length);
    setTxt("stat-nav-count", store.navigation.length);
    setTxt("stat-reviews-count", store.customerReviews.length);
  }

  function setTxt(id, txt) {
    const el = document.getElementById(id);
    if (el) el.textContent = txt;
  }

  function setVal(id, val) {
    const el = document.getElementById(id);
    if (el) el.value = val || "";
  }

  function getVal(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : "";
  }

  /* ==========================================================================
     4. BRANDING & ALL SECTIONS FORM
     ========================================================================== */
  function populateBrandingForm() {
    const b = store.branding;
    const s = store.sections;

    setVal("cfg-logo-text", b.logoText);
    setVal("cfg-logo-subtext", b.logoSubtext);
    setVal("cfg-logo-img", b.logoImageUrl);
    setVal("cfg-whatsapp-num", b.whatsappNumber);
    setVal("cfg-announcement-text", b.announcementText);
    setVal("cfg-contact-email", b.contactEmail);
    setVal("cfg-footer-bio", b.footerBio);
    setVal("cfg-copyright-text", b.copyrightText);

    setVal("cfg-hot-title", s.hotSellingTitle);
    setVal("cfg-hot-subtext", s.hotSellingSubtext);
    setVal("cfg-hot-btn", s.hotSellingBtnText);
    setVal("cfg-catalog-title", s.catalogTitle);
    setVal("cfg-catalog-subtext", s.catalogSubtext);
    setVal("cfg-bestsellers-title", s.bestsellersTitle);
    setVal("cfg-bestsellers-subtext", s.bestsellersSubtext);
    setVal("cfg-topselling-title", s.topSellingTitle);
    setVal("cfg-topselling-subtext", s.topSellingSubtext);
    setVal("cfg-deals-title", s.amazingDealsTitle);
    setVal("cfg-deals-subtext", s.amazingDealsSubtext);
    setVal("cfg-allprod-title", s.allProductsTitle);
    setVal("cfg-allprod-subtext", s.allProductsSubtext);
    setVal("cfg-reviews-title", s.reviewsTitle);
    setVal("cfg-reviews-subtext", s.reviewsSubtext);
    setVal("cfg-trust-1", s.trustBadge1);
    setVal("cfg-trust-2", s.trustBadge2);
    setVal("cfg-trust-3", s.trustBadge3);
  }

  const saveBrandingBtn = document.getElementById("save-branding-btn");
  if (saveBrandingBtn) {
    saveBrandingBtn.onclick = () => {
      store.branding.logoText = getVal("cfg-logo-text");
      store.branding.logoSubtext = getVal("cfg-logo-subtext");
      store.branding.logoImageUrl = getVal("cfg-logo-img");
      store.branding.whatsappNumber = getVal("cfg-whatsapp-num");
      store.branding.announcementText = getVal("cfg-announcement-text");
      store.branding.contactEmail = getVal("cfg-contact-email");
      store.branding.footerBio = getVal("cfg-footer-bio");
      store.branding.copyrightText = getVal("cfg-copyright-text");

      store.sections.hotSellingTitle = getVal("cfg-hot-title");
      store.sections.hotSellingSubtext = getVal("cfg-hot-subtext");
      store.sections.hotSellingBtnText = getVal("cfg-hot-btn");
      store.sections.catalogTitle = getVal("cfg-catalog-title");
      store.sections.catalogSubtext = getVal("cfg-catalog-subtext");
      store.sections.bestsellersTitle = getVal("cfg-bestsellers-title");
      store.sections.bestsellersSubtext = getVal("cfg-bestsellers-subtext");
      store.sections.topSellingTitle = getVal("cfg-topselling-title");
      store.sections.topSellingSubtext = getVal("cfg-topselling-subtext");
      store.sections.amazingDealsTitle = getVal("cfg-deals-title");
      store.sections.amazingDealsSubtext = getVal("cfg-deals-subtext");
      store.sections.allProductsTitle = getVal("cfg-allprod-title");
      store.sections.allProductsSubtext = getVal("cfg-allprod-subtext");
      store.sections.reviewsTitle = getVal("cfg-reviews-title");
      store.sections.reviewsSubtext = getVal("cfg-reviews-subtext");
      store.sections.trustBadge1 = getVal("cfg-trust-1");
      store.sections.trustBadge2 = getVal("cfg-trust-2");
      store.sections.trustBadge3 = getVal("cfg-trust-3");

      if (saveStoreData(store)) {
        alert("All Site Branding & Section settings saved successfully!");
      }
    };
  }

  /* ==========================================================================
     5. HEADER NAVIGATION MENU MANAGER (CRUD)
     ========================================================================== */
  function renderNavManagerTable() {
    const tbody = document.getElementById("admin-nav-tbody");
    if (!tbody) return;

    tbody.innerHTML = store.navigation.map((item, idx) => `
      <tr>
        <td><strong>${item.name}</strong></td>
        <td><code>${item.link}</code></td>
        <td>${item.badge ? `<span style="background:var(--rose-pink); color:#fff; font-size:0.7rem; padding:2px 6px; border-radius:4px;">${item.badge}</span>` : '-'}</td>
        <td>
          <button class="btn-primary" style="padding:4px 10px; font-size:0.75rem;" onclick="editNavItem('${item.id}')">Edit</button>
          <button style="padding:4px 10px; font-size:0.75rem; background:#d32f2f; color:#fff; border-radius:4px; margin-left:4px;" onclick="deleteNavItem('${item.id}')">Delete</button>
        </td>
      </tr>
    `).join('');
  }

  let editingNavId = null;
  const navModal = document.getElementById("admin-nav-modal");
  const addNavBtn = document.getElementById("add-nav-btn");
  const saveNavBtn = document.getElementById("save-nav-btn");

  if (addNavBtn) {
    addNavBtn.onclick = () => {
      editingNavId = null;
      document.getElementById("nav-modal-title").textContent = "Add Menu Link";
      setVal("nav-form-name", "");
      setVal("nav-form-link", "index.html#catalog");
      setVal("nav-form-badge", "");
      navModal.classList.add("active");
    };
  }

  window.editNavItem = function(id) {
    const item = store.navigation.find(n => n.id === id);
    if (!item) return;
    editingNavId = id;
    document.getElementById("nav-modal-title").textContent = "Edit Menu Link";
    setVal("nav-form-name", item.name);
    setVal("nav-form-link", item.link);
    setVal("nav-form-badge", item.badge);
    navModal.classList.add("active");
  };

  if (saveNavBtn) {
    saveNavBtn.onclick = () => {
      const name = getVal("nav-form-name");
      const link = getVal("nav-form-link") || "index.html";
      const badge = getVal("nav-form-badge");

      if (!name) return alert("Please enter menu link title.");

      if (editingNavId) {
        const idx = store.navigation.findIndex(n => n.id === editingNavId);
        if (idx > -1) store.navigation[idx] = { id: editingNavId, name, link, badge };
      } else {
        store.navigation.push({ id: "nav-" + Date.now(), name, link, badge });
      }

      saveStoreData(store);
      renderNavManagerTable();
      renderDashboardStats();
      navModal.classList.remove("active");
    };
  }

  window.deleteNavItem = function(id) {
    if (confirm("Delete this navigation menu link?")) {
      store.navigation = store.navigation.filter(n => n.id !== id);
      saveStoreData(store);
      renderNavManagerTable();
      renderDashboardStats();
    }
  };

  const navModalClose = document.getElementById("admin-nav-modal-close");
  if (navModalClose) navModalClose.onclick = () => navModal.classList.remove("active");

  /* ==========================================================================
     6. PRODUCT CATALOG & MULTI-WEBP GALLERY MANAGER
     ========================================================================== */
  function renderProductsTable() {
    const tbody = document.getElementById("admin-products-tbody");
    if (!tbody) return;

    tbody.innerHTML = store.products.map(p => `
      <tr>
        <td><img src="${p.mainImage}" class="table-thumb" alt="${p.title}" /></td>
        <td>
          <strong>${p.title}</strong><br/>
          <small style="color:#888;">ID: ${p.id} | Cat: ${p.category} | Gallery: ${(p.gallery || []).length} images</small>
        </td>
        <td>₹${p.price.toLocaleString('en-IN')} ${p.originalPrice ? `<span style="text-decoration:line-through; color:#aaa; font-size:0.8rem;">₹${p.originalPrice}</span>` : ''}</td>
        <td>${p.badge ? `<span style="background:var(--rose-pink); color:#fff; font-size:0.7rem; padding:2px 6px; border-radius:4px;">${p.badge}</span>` : '-'}</td>
        <td>${p.isHot ? '<span style="color:green; font-weight:bold;">Yes</span>' : 'No'}</td>
        <td>
          <button class="btn-primary" style="padding:4px 10px; font-size:0.75rem;" onclick="editProductModal('${p.id}')">Edit</button>
          <button style="padding:4px 10px; font-size:0.75rem; background:#d32f2f; color:#fff; border-radius:4px; margin-left:4px;" onclick="deleteProduct('${p.id}')">Delete</button>
        </td>
      </tr>
    `).join('');
  }

  let editingProductId = null;
  let currentProductGallery = [];

  const productModal = document.getElementById("admin-prod-modal");
  const addProdBtn = document.getElementById("add-prod-btn");
  const saveProdBtn = document.getElementById("save-prod-btn");

  if (addProdBtn) {
    addProdBtn.onclick = () => {
      editingProductId = null;
      currentProductGallery = [];
      document.getElementById("prod-modal-title").textContent = "Add New Product";
      clearProdForm();
      renderGalleryPreviewGrid();
      productModal.classList.add("active");
    };
  }

  window.editProductModal = function(id) {
    const p = store.products.find(item => item.id === id);
    if (!p) return;
    editingProductId = id;
    currentProductGallery = [...(p.gallery || [p.mainImage])];

    document.getElementById("prod-modal-title").textContent = "Edit Product";
    setVal("prod-form-title", p.title);
    setVal("prod-form-category", p.category);
    setVal("prod-form-price", p.price);
    setVal("prod-form-mrp", p.originalPrice);
    setVal("prod-form-discount", p.discount);
    setVal("prod-form-badge", p.badge);
    setVal("prod-form-img", p.mainImage);
    setVal("prod-form-sizes", (p.sizes || []).join(", "));
    setVal("prod-form-desc", p.description);
    setVal("prod-form-fabric", p.fabric);
    setVal("prod-form-sleeves", p.sleeveLength || "3/4 Sleeves");
    setVal("prod-form-pattern", p.pattern || "Sequence & Zari Embroidery");
    setVal("prod-form-care", p.washCare || "Dry Clean Only");
    setVal("prod-form-includes", p.setIncludes || "Kurta, Bottom & Dupatta");
    document.getElementById("prod-form-ishot").checked = !!p.isHot;

    renderGalleryPreviewGrid();
    productModal.classList.add("active");
  };

  function renderGalleryPreviewGrid() {
    const gridEl = document.getElementById("prod-gallery-preview-grid");
    if (!gridEl) return;

    if (currentProductGallery.length === 0) {
      gridEl.innerHTML = `<span style="font-size:0.8rem; color:#888;">No gallery images uploaded yet. Select 8-10 images below.</span>`;
      return;
    }

    gridEl.innerHTML = currentProductGallery.map((img, idx) => `
      <div style="position:relative; width:70px; height:90px; border-radius:6px; overflow:hidden; border:1px solid #ccc;">
        <img src="${img}" style="width:100%; height:100%; object-fit:cover;" />
        <button style="position:absolute; top:2px; right:2px; background:red; color:#fff; border-radius:50%; width:18px; height:18px; font-size:10px; display:flex; align-items:center; justify-content:center;" onclick="removeGalleryImg(${idx})">&times;</button>
        ${idx === 0 ? `<span style="position:absolute; bottom:0; inset-x:0; background:rgba(0,0,0,0.7); color:#fff; font-size:8px; text-align:center;">MAIN</span>` : ''}
      </div>
    `).join('');
  }

  window.removeGalleryImg = function(idx) {
    currentProductGallery.splice(idx, 1);
    if (currentProductGallery.length > 0) {
      setVal("prod-form-img", currentProductGallery[0]);
    }
    renderGalleryPreviewGrid();
  };

  // MULTIPLE WEBP IMAGE SELECT LISTENER (Up to 8-10 Images)
  const multiFileInput = document.getElementById("prod-form-multi-file");
  if (multiFileInput) {
    multiFileInput.onchange = async (e) => {
      const files = Array.from(e.target.files);
      if (files.length === 0) return;

      const progressTxt = document.getElementById("multi-upload-status");
      if (progressTxt) progressTxt.textContent = `Converting ${files.length} images to WebP...`;

      for (let i = 0; i < files.length; i++) {
        try {
          const webpDataUrl = await convertToWebP(files[i], 900, 0.82);
          currentProductGallery.push(webpDataUrl);
        } catch (err) {
          console.error("Failed to convert image to WebP", err);
        }
      }

      if (currentProductGallery.length > 0) {
        setVal("prod-form-img", currentProductGallery[0]);
      }

      if (progressTxt) progressTxt.textContent = `✓ Uploaded ${files.length} images converted to WebP format!`;
      renderGalleryPreviewGrid();
    };
  }

  if (saveProdBtn) {
    saveProdBtn.onclick = () => {
      const title = getVal("prod-form-title");
      const category = getVal("prod-form-category") || "Suit Sets";
      const price = parseFloat(getVal("prod-form-price")) || 0;
      const originalPrice = parseFloat(getVal("prod-form-mrp")) || price;
      const discount = getVal("prod-form-discount");
      const badge = getVal("prod-form-badge");
      const mainImage = getVal("prod-form-img") || (currentProductGallery[0] || "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80");
      const sizesStr = getVal("prod-form-sizes");
      const sizes = sizesStr ? sizesStr.split(",").map(s => s.trim()) : ["XS", "S", "M", "L", "XL"];
      const description = getVal("prod-form-desc");
      const fabric = getVal("prod-form-fabric");
      const sleeveLength = getVal("prod-form-sleeves");
      const pattern = getVal("prod-form-pattern");
      const washCare = getVal("prod-form-care");
      const setIncludes = getVal("prod-form-includes");
      const isHot = document.getElementById("prod-form-ishot").checked;

      if (!title || !price) {
        alert("Please enter product title and valid selling price.");
        return;
      }

      const gallery = currentProductGallery.length ? currentProductGallery : [mainImage];

      if (editingProductId) {
        const pIndex = store.products.findIndex(p => p.id === editingProductId);
        if (pIndex > -1) {
          store.products[pIndex] = {
            ...store.products[pIndex],
            title, category, price, originalPrice, discount, badge, mainImage, gallery, sizes, description, fabric, sleeveLength, pattern, washCare, setIncludes, isHot
          };
        }
      } else {
        const newId = "prod-" + Date.now();
        store.products.unshift({
          id: newId,
          title, category, price, originalPrice, discount, badge, mainImage, gallery, sizes, description, fabric, sleeveLength, pattern, washCare, setIncludes, isHot
        });
      }

      saveStoreData(store);
      renderProductsTable();
      renderDashboardStats();
      productModal.classList.remove("active");
    };
  }

  window.deleteProduct = function(id) {
    if (confirm("Are you sure you want to delete this product?")) {
      store.products = store.products.filter(p => p.id !== id);
      saveStoreData(store);
      renderProductsTable();
      renderDashboardStats();
    }
  };

  function clearProdForm() {
    setVal("prod-form-title", "");
    setVal("prod-form-category", "Suit Sets");
    setVal("prod-form-price", "");
    setVal("prod-form-mrp", "");
    setVal("prod-form-discount", "");
    setVal("prod-form-badge", "BEST-SELLER");
    setVal("prod-form-img", "");
    setVal("prod-form-sizes", "XS, S, M, L, XL, 2XL");
    setVal("prod-form-desc", "");
    setVal("prod-form-fabric", "");
    setVal("prod-form-sleeves", "3/4 Sleeves");
    setVal("prod-form-pattern", "Zari & Sequence Embroidery");
    setVal("prod-form-care", "Dry Clean Only");
    setVal("prod-form-includes", "Kurta, Trousers & Dupatta");
    document.getElementById("prod-form-ishot").checked = false;
  }

  const prodModalClose = document.getElementById("admin-prod-modal-close");
  if (prodModalClose) prodModalClose.onclick = () => productModal.classList.remove("active");

  /* ==========================================================================
     7. HERO SLIDES & PROMO BANNERS
     ========================================================================== */
  function renderHeroSlidesAdmin() {
    const listEl = document.getElementById("admin-hero-slides-list");
    if (!listEl) return;

    listEl.innerHTML = store.heroSlides.map((slide, idx) => `
      <div class="admin-card" style="position:relative;">
        <button style="position:absolute; top:12px; right:12px; color:red;" onclick="deleteHeroSlide(${idx})">&times; Remove Slide</button>
        <h4>Hero Slide #${idx + 1}</h4>
        
        <div class="form-group" style="margin-top:14px;">
          <label>📷 Upload Media from Device (Converts to WebP)</label>
          <input type="file" accept="image/*,video/*" class="form-control" onchange="uploadHeroMedia(${idx}, this)" />
        </div>

        <div class="form-group">
          <label>Headline</label>
          <input class="form-control" value="${slide.headline}" onchange="updateHeroSlide(${idx}, 'headline', this.value)" />
        </div>
        <div class="form-group">
          <label>Subheadline</label>
          <input class="form-control" value="${slide.subheadline}" onchange="updateHeroSlide(${idx}, 'subheadline', this.value)" />
        </div>
        <div class="form-group">
          <label>Background Image / Video URL (or WebP Data)</label>
          <input class="form-control" value="${slide.mediaUrl}" onchange="updateHeroSlide(${idx}, 'mediaUrl', this.value)" />
        </div>
        <div class="form-group">
          <label>Badge Tag</label>
          <input class="form-control" value="${slide.badgeText || ''}" onchange="updateHeroSlide(${idx}, 'badgeText', this.value)" />
        </div>
      </div>
    `).join('');
  }

  window.updateHeroSlide = function(idx, field, value) {
    store.heroSlides[idx][field] = value;
    saveStoreData(store);
  };

  window.deleteHeroSlide = function(idx) {
    if (confirm("Remove this hero slide?")) {
      store.heroSlides.splice(idx, 1);
      saveStoreData(store);
      renderHeroSlidesAdmin();
      renderDashboardStats();
    }
  };

  window.uploadHeroMedia = async function(idx, inputEl) {
    const file = inputEl.files[0];
    if (!file) return;

    try {
      const webpData = await convertToWebP(file, 1400, 0.82);
      store.heroSlides[idx].mediaUrl = webpData;
      store.heroSlides[idx].type = file.type.startsWith('video/') ? 'video' : 'image';
      saveStoreData(store);
      renderHeroSlidesAdmin();
      renderDashboardStats();
      alert("Hero slide media converted to WebP and updated!");
    } catch (err) {
      alert("Failed to process media file.");
    }
  };

  const addHeroSlideBtn = document.getElementById("add-hero-slide-btn");
  if (addHeroSlideBtn) {
    addHeroSlideBtn.onclick = () => {
      store.heroSlides.push({
        id: "hero-" + Date.now(),
        type: "image",
        mediaUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=80",
        headline: "New Ethnic Collection",
        subheadline: "Handcrafted Luxury Wear",
        badgeText: "EXCLUSIVE",
        buttonText: "SHOP NOW",
        buttonLink: "#catalog"
      });
      saveStoreData(store);
      renderHeroSlidesAdmin();
      renderDashboardStats();
    };
  }

  function populatePromoBannerForm() {
    const pb = store.promoBanner;
    if (!pb) return;
    setVal("cfg-promo-title", pb.title);
    setVal("cfg-promo-subtitle", pb.subtitle);
    setVal("cfg-promo-img", pb.imageUrl);
    setVal("cfg-promo-btn-text", pb.buttonText);
    setVal("cfg-promo-btn-link", pb.buttonLink);
  }

  const savePromoBannerBtn = document.getElementById("save-promo-banner-btn");
  if (savePromoBannerBtn) {
    savePromoBannerBtn.onclick = () => {
      store.promoBanner = {
        title: getVal("cfg-promo-title"),
        subtitle: getVal("cfg-promo-subtitle"),
        imageUrl: getVal("cfg-promo-img"),
        buttonText: getVal("cfg-promo-btn-text"),
        buttonLink: getVal("cfg-promo-btn-link")
      };
      saveStoreData(store);
      alert("Promotional Banner settings saved!");
    };
  }

  /* ==========================================================================
     8. CUSTOMER FEEDBACK REVIEWS MANAGER (CRUD)
     ========================================================================== */
  function renderReviewsAdminTable() {
    const tbody = document.getElementById("admin-reviews-tbody");
    if (!tbody) return;

    tbody.innerHTML = store.customerReviews.map(r => `
      <tr>
        <td><img src="${r.imageUrl}" class="table-thumb" alt="${r.name}" /></td>
        <td><strong>${r.name}</strong> <small style="color:green;">(${r.status})</small></td>
        <td>${'★'.repeat(r.rating)}</td>
        <td style="max-width:300px; font-size:0.82rem;">"${r.comment}"</td>
        <td>
          <button class="btn-primary" style="padding:4px 10px; font-size:0.75rem;" onclick="editReviewModal('${r.id}')">Edit</button>
          <button style="padding:4px 10px; font-size:0.75rem; background:#d32f2f; color:#fff; border-radius:4px; margin-left:4px;" onclick="deleteReview('${r.id}')">Delete</button>
        </td>
      </tr>
    `).join('');
  }

  let editingReviewId = null;
  const reviewModal = document.getElementById("admin-review-modal");
  const addReviewBtn = document.getElementById("add-review-btn");
  const saveReviewBtn = document.getElementById("save-review-btn");

  if (addReviewBtn) {
    addReviewBtn.onclick = () => {
      editingReviewId = null;
      document.getElementById("review-modal-title").textContent = "Add Customer Review";
      setVal("rev-form-name", "");
      setVal("rev-form-status", "Verified Buyer");
      setVal("rev-form-rating", "5");
      setVal("rev-form-comment", "");
      setVal("rev-form-img", "");
      reviewModal.classList.add("active");
    };
  }

  window.editReviewModal = function(id) {
    const r = store.customerReviews.find(item => item.id === id);
    if (!r) return;
    editingReviewId = id;
    document.getElementById("review-modal-title").textContent = "Edit Customer Review";
    setVal("rev-form-name", r.name);
    setVal("rev-form-status", r.status);
    setVal("rev-form-rating", r.rating);
    setVal("rev-form-comment", r.comment);
    setVal("rev-form-img", r.imageUrl);
    reviewModal.classList.add("active");
  };

  if (saveReviewBtn) {
    saveReviewBtn.onclick = () => {
      const name = getVal("rev-form-name");
      const status = getVal("rev-form-status") || "Verified Buyer";
      const rating = parseInt(getVal("rev-form-rating")) || 5;
      const comment = getVal("rev-form-comment");
      const imageUrl = getVal("rev-form-img") || "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80";

      if (!name || !comment) return alert("Please enter reviewer name and feedback comment.");

      if (editingReviewId) {
        const idx = store.customerReviews.findIndex(r => r.id === editingReviewId);
        if (idx > -1) store.customerReviews[idx] = { id: editingReviewId, name, status, rating, comment, imageUrl };
      } else {
        store.customerReviews.push({ id: "rev-" + Date.now(), name, status, rating, comment, imageUrl });
      }

      saveStoreData(store);
      renderReviewsAdminTable();
      renderDashboardStats();
      reviewModal.classList.remove("active");
    };
  }

  window.deleteReview = function(id) {
    if (confirm("Delete this customer feedback review?")) {
      store.customerReviews = store.customerReviews.filter(r => r.id !== id);
      saveStoreData(store);
      renderReviewsAdminTable();
      renderDashboardStats();
    }
  };

  const reviewModalClose = document.getElementById("admin-review-modal-close");
  if (reviewModalClose) reviewModalClose.onclick = () => reviewModal.classList.remove("active");

  const revFileInput = document.getElementById("rev-form-file-input");
  if (revFileInput) {
    revFileInput.onchange = async (e) => {
      const file = e.target.files[0];
      if (file) {
        try {
          const webpData = await convertToWebP(file, 600, 0.82);
          setVal("rev-form-img", webpData);
        } catch (err) {
          alert("Error converting review photo to WebP.");
        }
      }
    };
  }

  /* ==========================================================================
     9. DATABASE BACKUP / IMPORT / RESET
     ========================================================================== */
  const exportBtn = document.getElementById("export-db-btn");
  if (exportBtn) {
    exportBtn.onclick = () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(store, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `narivae_store_catalog_${Date.now()}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    };
  }

  const importInput = document.getElementById("import-db-file");
  if (importInput) {
    importInput.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (imported.products && imported.branding) {
            saveStoreData(imported);
            alert("Database imported successfully!");
            location.reload();
          } else {
            alert("Invalid database file format.");
          }
        } catch (err) {
          alert("Error parsing JSON file.");
        }
      };
      reader.readAsText(file);
    };
  }

  const resetDbBtn = document.getElementById("reset-db-btn");
  if (resetDbBtn) {
    resetDbBtn.onclick = () => {
      if (confirm("Reset all store data to default sample items? Custom changes will be cleared.")) {
        resetStoreData();
        location.reload();
      }
    };
  }

  /* ==========================================================================
     10. GOOGLE DRIVE LINK CONVERTER & BULK EXCEL/CSV IMPORTER
     ========================================================================== */
  function convertGoogleDriveUrl(url) {
    if (!url) return "";
    const folderMatch = url.match(/\/folders\/([a-zA-Z0-9_-]+)/);
    if (folderMatch) {
      // Folder links are resolved at import time via parse_sheet.py
      return url;
    }
    const driveMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      return `https://drive.google.com/thumbnail?id=${driveMatch[1]}&sz=w1000`;
    }
    return url;
  }

  const excelImportInput = document.getElementById("import-excel-file");
  if (excelImportInput) {
    excelImportInput.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const text = event.target.result;
          const rows = parseCSVRows(text);
          if (rows.length < 2) return alert("CSV file seems empty or missing header row.");

          const headers = rows[0].map(h => h.toLowerCase().trim());
          const newProducts = [];

          for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            if (!row || row.length === 0 || !row[0]) continue;

            const getCol = (name) => {
              const idx = headers.findIndex(h => h.includes(name));
              return idx > -1 ? (row[idx] || "").trim() : "";
            };

            const netValue = parseFloat(getCol("net value") || getCol("netvalue") || getCol("net"));
            let price = parseFloat(getCol("price"));
            let originalPrice = parseFloat(getCol("mrp")) || parseFloat(getCol("original"));
            if (netValue && !isNaN(netValue)) {
              price = (netValue - 200) * 2;
              originalPrice = netValue * 3;
            }
            if (!price || isNaN(price)) price = 1999;
            if (!originalPrice || isNaN(originalPrice)) originalPrice = price * 2;
            price = Math.round(price);
            originalPrice = Math.round(originalPrice);
            const discountPct = originalPrice > price
              ? Math.round((1 - price / originalPrice) * 100)
              : 0;
            const discount = getCol("discount") || (discountPct > 0 ? `${discountPct}% OFF` : "");
            const title = getCol("title") || row[0];
            const category = getCol("category") || "Suit Sets";
            const badge = getCol("badge") || "BEST-SELLER";
            let mainImage = convertGoogleDriveUrl(getCol("image") || getCol("img") || getCol("drive") || getCol("photos"));
            const description = getCol("description") || getCol("desc") || title;

            // Gallery images comma separated
            const galleryStr = getCol("gallery");
            let gallery = [mainImage];
            if (galleryStr) {
              gallery = galleryStr.split(",").map(url => convertGoogleDriveUrl(url.trim()));
            }

            if (!mainImage) {
              mainImage = "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80";
              gallery = [mainImage];
            }

            newProducts.push({
              id: "prod-excel-" + (Date.now() + i),
              title,
              category,
              price,
              originalPrice,
              discount,
              badge,
              isHot: true,
              inStock: true,
              sizes: ["XS", "S", "M", "L", "XL", "2XL"],
              mainImage,
              gallery,
              description,
              fabric: getCol("fabric") || "Chanderi Silk Blend",
              sleeveLength: getCol("sleeve") || "3/4 Sleeves",
              pattern: getCol("pattern") || "Handcrafted Zari Embroidery",
              washCare: "Dry Clean Only",
              setIncludes: "Top, Bottom & Dupatta"
            });
          }

          if (newProducts.length > 0) {
            store.products = [...newProducts, ...store.products];
            saveStoreData(store);
            alert(`🎉 Successfully imported ${newProducts.length} items from your Excel/CSV sheet with Google Drive images!`);
            location.reload();
          } else {
            alert("No valid products found in file.");
          }
        } catch (err) {
          alert("Error parsing CSV/Excel file: " + err.message);
        }
      };
      reader.readAsText(file);
    };
  }

  function parseCSVRows(text) {
    const lines = text.split(/\r\n|\n/);
    return lines.map(line => {
      const regex = /(?:,|\n|^)("(?:(?:"")*[^"]*)*"|[^",\n]*)/g;
      const row = [];
      let matches;
      while ((matches = regex.exec(line)) !== null) {
        let val = matches[1];
        if (val.startsWith('"') && val.endsWith('"')) val = val.substring(1, val.length - 1).replace(/""/g, '"');
        row.push(val);
      }
      return row;
    });
  }

  // Initial Auth Check
  checkAuth();
});
