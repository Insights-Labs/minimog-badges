(()=>{const e=document.querySelector(".sf-header__desktop");if(e){const t={hot:"#f8796e",new:"#9a84c8"};fetch("https://script.google.com/macros/s/AKfycbzJ4w9YNdRKiZWJRoysnyeKGoZlXpdnjE7DDXTGliLtclmTidc1mdjhZ6JTVqb7eq6n/exec").then((e=>e.json())).then((s=>{if(s.success){const{data:n,styleVer:c}=s,l=document.createElement("link");l.rel="stylesheet",l.href=`https://cdn.jsdelivr.net/gh/Insights-Labs/minimog-menu-badges/style-${c}.css`,document.head.appendChild(l),n.forEach((({badge:s,url:n})=>{if(n){var c,l;const{origin:o,href:d}=new URL(n),r=d.replace(o,""),a=e.querySelector(`a[href$="${r}"]`);if(a&&null!=a&&null!==(c=a.parentNode)&&void 0!==c&&null!==(l=c.classList)&&void 0!==l&&l.contains("sf__menu-item-level3")){const e=document.createElement("span");e.classList.add("mn-badge"),e.style.setProperty("--badge",`"${s}"`),e.style.setProperty("--bg-color",t[s]),a.appendChild(e)}}}))}}))}})();
