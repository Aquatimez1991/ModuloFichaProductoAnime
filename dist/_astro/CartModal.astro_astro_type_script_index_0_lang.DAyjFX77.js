const a=document.getElementById("cart-modal"),v=document.getElementById("close-cart"),h=document.getElementById("empty-cart"),m=document.getElementById("cart-items"),u=document.getElementById("cart-total"),w=document.getElementById("checkout-btn"),S=document.getElementById("clear-cart"),g={},k=JSON.parse(document.body.getAttribute("data-figures")||"[]");k.forEach(t=>{g[t.id]={name:t.name,price:t.price,image:t.image,stock:t.stock}});function b(){a&&(a.classList.remove("hidden"),setTimeout(()=>{a.querySelector(".transform")?.classList.remove("translate-x-full")},10),d())}function f(){a&&(a.querySelector(".transform")?.classList.add("translate-x-full"),setTimeout(()=>{a.classList.add("hidden")},300))}function d(){const e=JSON.parse(localStorage.getItem("figure-store")||'{"cart": {}, "wishlist": []}').cart;if(Object.keys(e).length===0){h?.classList.remove("hidden"),m?.classList.add("hidden"),u&&(u.textContent="S/0");return}h?.classList.add("hidden"),m?.classList.remove("hidden");let r=0,s="";Object.entries(e).forEach(([c,n])=>{const o=g[parseInt(c)];if(o){const l=o.price*n;r+=l;const i=o.stock===1,p=n<o.stock;s+=`
          <div class="flex items-center gap-3 py-3 border-b last:border-b-0">
            <img src="${o.image}" alt="${o.name}" class="w-16 h-16 object-cover rounded-lg" onerror="this.src='/placeholder-figure.svg'; this.onerror=null;">
            <div class="flex-1">
              <h4 class="font-medium text-sm">${o.name}</h4>
              <p class="text-gray-500 text-sm">S/${o.price.toLocaleString("en-US")}</p>
              ${i?'<p class="text-orange-500 text-xs">Stock limitado: 1 unidad</p>':""}
            </div>
            <div class="flex items-center gap-2">
              <button onclick="updateQuantity(${c}, ${n-1})" class="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 ${i?"opacity-50 cursor-not-allowed":""}" ${i?"disabled":""}>
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                </svg>
              </button>
              <span class="w-8 text-center text-sm">${n}</span>
              <button onclick="updateQuantity(${c}, ${n+1})" class="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 ${p?"":"opacity-50 cursor-not-allowed"}" ${p?"":"disabled"}>
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </button>
            </div>
            <button onclick="removeFromCart(${c})" class="text-red-500 hover:text-red-700">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
            </button>
          </div>
        `}}),m&&(m.innerHTML=s),u&&(u.textContent=`S/${r.toLocaleString("en-US")}`)}function y(t,e){const r=JSON.parse(localStorage.getItem("figure-store")||'{"cart": {}, "wishlist": []}'),s=g[t];e<=0?delete r.cart[t]:s&&e<=s.stock&&(r.cart[t]=e),localStorage.setItem("figure-store",JSON.stringify(r)),window.dispatchEvent(new CustomEvent("cartUpdated")),d()}function x(t){const e=JSON.parse(localStorage.getItem("figure-store")||'{"cart": {}, "wishlist": []}');delete e.cart[t],localStorage.setItem("figure-store",JSON.stringify(e)),window.dispatchEvent(new CustomEvent("cartUpdated")),d()}function E(){const e=JSON.parse(localStorage.getItem("figure-store")||'{"cart": {}, "wishlist": []}').cart;if(Object.keys(e).length===0){alert("Tu carrito está vacío");return}let r=0,s=`¡Hola! Me interesa comprar:

`;Object.entries(e).forEach(([n,o])=>{const l=g[parseInt(n)];if(l){const i=l.price*o;r+=i,s+=`• ${l.name} x${o} - S/${i.toLocaleString("en-US")}
`}}),s+=`
Total: S/${r.toLocaleString("en-US")}

¿Podrías darme más información sobre disponibilidad y envío?`;const c=`https://wa.me/51949799869?text=${encodeURIComponent(s)}`;window.open(c,"_blank")}function L(){const t=JSON.parse(localStorage.getItem("figure-store")||'{"cart": {}, "wishlist": []}');t.cart={},localStorage.setItem("figure-store",JSON.stringify(t)),window.dispatchEvent(new CustomEvent("cartUpdated")),d()}v?.addEventListener("click",f);w?.addEventListener("click",E);S?.addEventListener("click",L);a?.addEventListener("click",t=>{t.target===a&&f()});window.addEventListener("cartUpdated",d);window.openCart=b;window.updateQuantity=y;window.removeFromCart=x;
