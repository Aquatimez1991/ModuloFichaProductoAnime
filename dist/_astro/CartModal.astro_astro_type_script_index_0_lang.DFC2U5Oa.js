const d=document.getElementById("cart-modal"),v=document.getElementById("close-cart"),c=document.getElementById("cart-items"),f=document.getElementById("empty-cart"),l=document.getElementById("cart-total"),w=document.getElementById("clear-cart"),k=document.getElementById("checkout-cart"),i={},S=JSON.parse(document.body.getAttribute("data-figures")||"[]");S.forEach(t=>{i[t.id]={name:t.name,price:t.price,image:t.image,stock:t.stock}});function b(){d?.classList.remove("hidden"),m()}function g(){d?.classList.add("hidden")}function m(){const e=JSON.parse(localStorage.getItem("figure-store")||'{"cart": {}, "wishlist": []}').cart;if(Object.keys(e).length===0){f?.classList.remove("hidden"),c?.classList.add("hidden"),l&&(l.textContent="S/0");return}f?.classList.add("hidden"),c?.classList.remove("hidden"),c&&(c.innerHTML="",Object.entries(e).forEach(([r,n])=>{const o=i[parseInt(r)];if(o){o.price*n;const a=document.createElement("div");a.className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl mb-3",a.innerHTML=`
            <img src="${o.image}" alt="${o.name}" class="w-16 h-16 object-cover rounded-lg">
            <div class="flex-1 min-w-0">
              <h4 class="font-medium text-sm truncate">${o.name}</h4>
              <p class="text-muted-foreground text-sm">S/${o.price.toLocaleString("en-US")}</p>
              ${o.stock===1?'<p class="text-amber-600 text-xs font-medium">Stock limitado: 1 unidad</p>':""}
            </div>
            <div class="flex items-center gap-2">
              <button onclick="updateQuantity(${r}, ${n-1})" 
                      class="w-8 h-8 flex items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors ${n<=1?"opacity-50 cursor-not-allowed":""}"
                      ${n<=1?"disabled":""}>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                </svg>
              </button>
              <span class="w-8 text-center font-medium">${n}</span>
              <button onclick="updateQuantity(${r}, ${n+1})" 
                      class="w-8 h-8 flex items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors ${n>=o.stock?"opacity-50 cursor-not-allowed":""}"
                      ${n>=o.stock?"disabled":""}>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </button>
            </div>
            <button onclick="removeFromCart(${r})" class="text-muted-foreground hover:text-foreground transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
            </button>
          `,c.appendChild(a)}}));let s=0;Object.entries(e).forEach(([r,n])=>{const o=i[parseInt(r)];o&&(s+=o.price*n)}),l&&(l.textContent=`S/${s.toLocaleString("en-US")}`)}function x(t,e){const s=JSON.parse(localStorage.getItem("figure-store")||'{"cart": {}, "wishlist": []}'),r=i[t];r&&(e>r.stock&&(e=r.stock),e<=0?delete s.cart[t]:s.cart[t]=e,localStorage.setItem("figure-store",JSON.stringify(s)),window.dispatchEvent(new CustomEvent("cartUpdated")),m())}function C(t){const e=JSON.parse(localStorage.getItem("figure-store")||'{"cart": {}, "wishlist": []}');delete e.cart[t],localStorage.setItem("figure-store",JSON.stringify(e)),window.dispatchEvent(new CustomEvent("cartUpdated")),m()}function h(){const t=JSON.parse(localStorage.getItem("figure-store")||'{"cart": {}, "wishlist": []}');t.cart={},localStorage.setItem("figure-store",JSON.stringify(t)),window.dispatchEvent(new CustomEvent("cartUpdated")),m()}function E(){const e=JSON.parse(localStorage.getItem("figure-store")||'{"cart": {}, "wishlist": []}').cart;if(Object.keys(e).length===0){alert("Tu carrito esta vacio");return}let s=`¡Hola! Quiero comprar las siguientes figuras anime:

`,r=0;Object.entries(e).forEach(([o,a])=>{const u=i[parseInt(o)];if(u){const p=u.price*a;r+=p,s+=`• ${u.name} x${a} - S/${p.toLocaleString("en-US")}
`}}),s+=`
Total: S/${r.toLocaleString("en-US")}

`,s+=`¿Podrías confirmarme disponibilidad y opciones de entrega?

`,s+="¡Gracias!";const n=encodeURIComponent(s);window.open(`https://wa.me/51949799869?text=${n}`,"_blank"),h(),g()}v?.addEventListener("click",g);w?.addEventListener("click",h);k?.addEventListener("click",E);d?.addEventListener("click",t=>{t.target===d&&g()});window.openCart=b;window.updateQuantity=x;window.removeFromCart=C;
