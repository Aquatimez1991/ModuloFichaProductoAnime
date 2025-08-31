const d=document.getElementById("cart-modal"),w=document.getElementById("close-cart"),l=document.getElementById("cart-items"),f=document.getElementById("empty-cart"),u=document.getElementById("cart-total"),k=document.getElementById("clear-cart"),S=document.getElementById("checkout-cart"),m={},b=JSON.parse(document.body.getAttribute("data-figures")||"[]");b.forEach(t=>{m[t.id]={name:t.name,price:t.price,image:t.image,stock:t.stock}});function y(){d?.classList.remove("hidden"),g()}function p(){d?.classList.add("hidden")}function g(){const e=JSON.parse(localStorage.getItem("figure-store")||'{"cart": {}, "wishlist": []}').cart;if(Object.keys(e).length===0){f?.classList.remove("hidden"),l?.classList.add("hidden"),u.textContent="S/0";return}f?.classList.add("hidden"),l?.classList.remove("hidden");let o=0,s="";Object.entries(e).forEach(([c,a])=>{const r=m[c];if(r){const i=r.price*a;o+=i;const n=r.stock===1,h=a<r.stock;s+=`
          <div class="flex items-center gap-3 py-3 border-b last:border-b-0">
            <img src="${r.image}" alt="${r.name}" class="w-16 h-16 object-cover rounded-lg" onerror="this.src='/placeholder-figure.svg'; this.onerror=null;">
            <div class="flex-1">
              <h4 class="font-medium text-sm">${r.name}</h4>
              <p class="text-gray-500 text-sm">S/${r.price.toLocaleString("en-US")}</p>
              ${n?'<p class="text-orange-500 text-xs">Stock limitado: 1 unidad</p>':""}
            </div>
            <div class="flex items-center gap-2">
              <button onclick="updateQuantity(${c}, ${a-1})" class="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 ${n?"opacity-50 cursor-not-allowed":""}" ${n?"disabled":""}>
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                </svg>
              </button>
              <span class="w-8 text-center text-sm">${a}</span>
              <button onclick="updateQuantity(${c}, ${a+1})" class="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 ${h?"":"opacity-50 cursor-not-allowed"}" ${h?"":"disabled"}>
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
        `}}),l&&(l.innerHTML=s),u&&(u.textContent=`S/${o.toLocaleString("en-US")}`)}function x(t,e){const o=JSON.parse(localStorage.getItem("figure-store")||'{"cart": {}, "wishlist": []}'),s=m[t];s&&(e>s.stock&&(e=s.stock),e<=0?delete o.cart[t]:o.cart[t]=e,localStorage.setItem("figure-store",JSON.stringify(o)),window.dispatchEvent(new CustomEvent("cartUpdated")),g())}function C(t){const e=JSON.parse(localStorage.getItem("figure-store")||'{"cart": {}, "wishlist": []}');delete e.cart[t],localStorage.setItem("figure-store",JSON.stringify(e)),window.dispatchEvent(new CustomEvent("cartUpdated")),g()}function v(){const t=JSON.parse(localStorage.getItem("figure-store")||'{"cart": {}, "wishlist": []}');t.cart={},localStorage.setItem("figure-store",JSON.stringify(t)),window.dispatchEvent(new CustomEvent("cartUpdated")),g()}function $(){const e=JSON.parse(localStorage.getItem("figure-store")||'{"cart": {}, "wishlist": []}').cart;if(Object.keys(e).length===0){alert("Tu carrito esta vacio");return}let o=`¡Hola! Quiero comprar las siguientes figuras anime:

`,s=0;Object.entries(e).forEach(([a,r])=>{const i=m[a];if(i){const n=i.price*r;s+=n,o+=`• ${i.name} x${r} - S/${n.toLocaleString("en-US")}
`}}),o+=`
Total: S/${s.toLocaleString("en-US")}

`,o+=`¿Podrías confirmarme disponibilidad y opciones de entrega?

`,o+="¡Gracias!";const c=encodeURIComponent(o);window.open(`https://wa.me/51949799869?text=${c}`,"_blank"),v(),p()}w?.addEventListener("click",p);k?.addEventListener("click",v);S?.addEventListener("click",$);d?.addEventListener("click",t=>{t.target===d&&p()});window.openCart=y;window.updateQuantity=x;window.removeFromCart=C;
