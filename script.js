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
};

(()=>{"use strict";function e(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const t=document.createElement("link");t.rel="stylesheet",t.href="https://cdn.jsdelivr.net/gh/Insights-Labs/minimog-menu-badges/style.css",document.head.appendChild(t);window.__MenuBadges=new class{constructor(){e(this,"menuLv3Class","sf__menu-item-level3"),e(this,"data",window.__minimog_menu_data),e(this,"desktopHeader",document.querySelector(".sf-header__desktop")),e(this,"origin",window.location.origin),e(this,"linkTags",[]),e(this,"createBadgeNode",((e,t)=>{const s=document.createElement("span");return s.classList.add("mn-badge"),s.style.setProperty("--badge",`"${e}"`),s.style.setProperty("--bg-color",t),s})),this.desktopHeader&&this.init()}init(){const{desktopHeader:e,data:t,linkTags:s,origin:n,menuLv3Class:i}=this;Object.entries(t).forEach((([t,{bgColor:a,urls:o}])=>{o.forEach((o=>{var r,d;const l=o.replace(n,""),c=e.querySelector(`a[href="${l}"]`);if(c&&null!=c&&null!==(r=c.parentNode)&&void 0!==r&&null!==(d=r.classList)&&void 0!==d&&d.contains(i)){const e=this.createBadgeNode(t,a);c.appendChild(e),s.push(c)}}))}))}}})();
