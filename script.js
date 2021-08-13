window.__minimog_menu_data = {
  hot: {
    bgColor: '#f8796e',
    urls: [
      'https://hta218.myshopify.com/products/adidas-kids-stan-smith'
    ]
  },
  new: {
    bgColor: '#9a84c8',
    urls: [
      'https://hta218.myshopify.com/products/adidas-classic-backpack',
      'https://hta218.myshopify.com/collections'
    ]
  }
}

(()=>{const e=document.querySelector(".sf-header__desktop");if(e){const t=document.createElement("link");t.rel="stylesheet",t.href="https://cdn.jsdelivr.net/gh/Insights-Labs/minimog-menu-badges/style.css",document.head.appendChild(t),Object.entries(window.__minimog_menu_data||{}).forEach((([t,{bgColor:n,urls:s}])=>{s.forEach((s=>{var o,l;const r=s.replace(window.location.origin,""),a=e.querySelector(`a[href="${r}"]`);if(a&&null!=a&&null!==(o=a.parentNode)&&void 0!==o&&null!==(l=o.classList)&&void 0!==l&&l.contains("sf__menu-item-level3")){const e=document.createElement("span");e.classList.add("mn-badge"),e.style.setProperty("--badge",`"${t}"`),e.style.setProperty("--bg-color",n),a.appendChild(e)}}))}))}})();
