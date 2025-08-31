const i=document.getElementById("search-input"),c=document.getElementById("category-filter"),l=document.getElementById("status-filter"),E=document.getElementById("products-grid"),u=document.getElementById("results-count"),S=document.querySelectorAll(".product-card");function d(){const t=i?.value.toLowerCase()||"",e=c?.value||"",o=l?.value||"";let a=0;S.forEach(n=>{const r=n,y=r.dataset.name,b=r.dataset.category,x=r.dataset.status;(y?.includes(t)||!1)&&(!e||b===e)&&(!o||x===o)?(r.style.display="block",r.classList.add("animate-fade-in"),a++):(r.style.display="none",r.classList.remove("animate-fade-in"))}),u&&(u.textContent=a.toString(),u.classList.add("scale-110"),setTimeout(()=>u.classList.remove("scale-110"),200));const s=document.getElementById("no-results");if(a===0&&t){if(!s){const n=document.createElement("div");n.id="no-results",n.className="col-span-full text-center py-12",n.innerHTML=`
          <div class="text-muted-foreground">
            <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <p class="text-lg font-medium mb-2">No se encontraron resultados</p>
            <p class="text-sm">Intenta con otros términos de búsqueda o filtros</p>
          </div>
        `,E?.appendChild(n)}}else s&&s.remove()}let f;function C(){clearTimeout(f),f=setTimeout(d,300)}i?.addEventListener("input",C);c?.addEventListener("change",d);l?.addEventListener("change",d);function v(t){const e=JSON.parse(localStorage.getItem("figure-store")||'{"cart": {}, "wishlist": []}');e.cart[t]=(e.cart[t]||0)+1,localStorage.setItem("figure-store",JSON.stringify(e)),window.dispatchEvent(new CustomEvent("cartUpdated")),I("¡Producto agregado al carrito!","success")}function w(t){const e=parseInt(t.toString()),o=JSON.parse(localStorage.getItem("figure-store")||'{"cart": {}, "wishlist": []}');o.cart[e]=(o.cart[e]||0)+1,localStorage.setItem("figure-store",JSON.stringify(o)),window.dispatchEvent(new CustomEvent("cartUpdated"));const s=JSON.parse(document.body.getAttribute("data-figures")||"[]").find(n=>n.id===e);if(s){const n=`¡Hola! Me interesa comprar:

*${s.name}*
Precio: S/${s.price.toLocaleString("en-US")}
Fabricante: ${s.manufacturer}
Escala: ${s.scale}
Altura: ${s.height}
Material: ${s.material}

¿Podrías darme más información sobre disponibilidad y envío?`,r=`https://wa.me/51949799869?text=${encodeURIComponent(n)}`;window.open(r,"_blank")}}function I(t,e="success"){const o="notification-"+Date.now(),a=document.createElement("div");a.id=o,a.className=`fixed top-20 right-4 z-50 px-4 py-3 rounded-xl shadow-medium border-l-4 transform translate-x-full transition-transform duration-300 ${e==="success"?"bg-emerald-500 text-white border-emerald-600":e==="error"?"bg-red-500 text-white border-red-600":e==="warning"?"bg-amber-500 text-white border-amber-600":"bg-blue-500 text-white border-blue-600"}`,a.innerHTML=`
      <div class="flex items-center gap-3">
        <span class="text-lg font-bold">${e==="success"?"✓":e==="error"?"✕":e==="warning"?"⚠":"ℹ"}</span>
        <p class="font-medium">${t}</p>
        <button onclick="this.parentElement.parentElement.remove()" class="ml-2 text-white/80 hover:text-white transition-colors">✕</button>
      </div>
    `,document.body.appendChild(a),setTimeout(()=>{a.classList.remove("translate-x-full")},100),setTimeout(()=>{a.classList.add("translate-x-full"),setTimeout(()=>a.remove(),300)},3e3)}const m=new URLSearchParams(window.location.search),g=m.get("category"),p=m.get("status"),h=m.get("search");g&&c&&(c.value=g);p&&l&&(l.value=p);h&&i&&(i.value=h);setTimeout(d,100);document.addEventListener("keydown",t=>{(t.ctrlKey||t.metaKey)&&t.key==="f"&&(t.preventDefault(),i?.focus()),(t.ctrlKey||t.metaKey)&&t.key==="k"&&(t.preventDefault(),i&&(i.value=""),c&&(c.value=""),l&&(l.value=""),d())});window.addToCart=v;window.buyNow=w;document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("button[data-figure-id]").forEach(t=>{const e=t.getAttribute("data-figure-id");e&&t.addEventListener("click",o=>{o.stopPropagation();const a=t.textContent?.trim();a==="Comprar"?w(parseInt(e)):a==="Agregar al Carrito"&&v(parseInt(e))})})});
