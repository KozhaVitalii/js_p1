function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},a=i.parcelRequiref4fb;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){s[e]=t},i.parcelRequiref4fb=a),a.register("kyEFX",function(t,i){"use strict";e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return s},function(e){return s=e});var n,s,a={};n=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)a[t[i]]=e[t[i]]},s=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a("kyEFX").register(JSON.parse('{"7nZc1":"shopping.057acba6.js","1yVwl":"amazon.85d56d2a.png","bYYsk":"appleshop.99c6208d.png","hiPvQ":"boockshop.4b2f13db.png","lp5u4":"sprite.9905b075.svg"}'));var r={};r=new URL(a("kyEFX").resolve("1yVwl"),import.meta.url).toString();var l={};l=new URL(a("kyEFX").resolve("bYYsk"),import.meta.url).toString();var o={};o=new URL(a("kyEFX").resolve("hiPvQ"),import.meta.url).toString();var c={};c=new URL(a("kyEFX").resolve("lp5u4"),import.meta.url).toString();const d=document.querySelector(".shopping-list"),p=document.querySelector(".shopping-list-empty"),u=({items:e,rows:t=10,handlePaginatedItems:i,buttonsWrapper:n,buttonsContainerClass:s="pagination",buttonClass:a="page-link",nextClass:r="page-link",prevClass:l="page-link",nextText:o=">",prevText:c="<",firstClass:d="page-link",firstText:p="<<",lastClass:u="page-link",lastText:g=">>",activeClass:v="active"})=>{if(!e)return console.error("items not defined. Send {items: ...} as a parameter."),!1;let h=({wrapper:e})=>{let t=document.createElement("div");t.classList.add("pagination-"+m,s);let i=e=>{let t=document.createElement("button");return t.setAttribute("type","button"),t.classList.add(a),b===e&&t.classList.add(v),t.innerHTML=e,t.addEventListener("click",function(){b=e,L.paginate(b,!1),f().classList.remove("active"),t.classList.add("active")}),t},{prevBtn:n,nextBtn:r}=(()=>{let e=document.createElement("button");e.setAttribute("type","button"),e.classList.add("page-link"),e.classList.add("prevClass"),e.innerHTML=c;let t=document.createElement("button");return t.setAttribute("type","button"),t.classList.add("page-link"),t.classList.add("nextClass"),t.innerHTML=o,e.addEventListener("click",()=>{L.prev()}),t.addEventListener("click",()=>{L.next()}),{prevBtn:e,nextBtn:t}})();t.appendChild(n);for(let e=1;e<k+1;e++){let n=i(e);t.appendChild(n)}t.appendChild(r),e.appendChild(t)},f=()=>document.querySelector(`.${"pagination-"+m} button.active`),m=(()=>{var e=46656*Math.random()|0,t=46656*Math.random()|0;return(e=("000"+e.toString(36)).slice(-3))+(t=("000"+t.toString(36)).slice(-3))})();t=parseInt(t);let b=1,k=Math.ceil(e.length/t),y=void 0!==n,L={paginate:(s=1,a=!0)=>{let r=t*--s,l=r+t,o=e.slice(r,l);if(a&&n&&h({wrapper:document.querySelector(n)}),!i)return o;i(o)},next:()=>{if(b>=k)return;let n=t*(++b-1),s=n+t,a=e.slice(n,s);if(y){let e=f();e.classList.remove("active"),e.nextElementSibling.classList.add("active")}if(!i)return a;i(a)},prev:()=>{if(1===b)return;let n=t*(--b-1),s=n+t,a=e.slice(n,s);if(y){let e=f();e.classList.remove("active"),e.previousElementSibling.classList.add("active")}if(!i)return a;i(a)},changeRows:(e=10)=>{t=parseInt(e),document.querySelector(".pagination-"+m).remove(),L.paginate(b)},changeItems:i=>{if(!i)return!1;document.querySelector(".pagination-"+m)?.remove(),k=Math.ceil((e=i).length/t),b=1,L.paginate(1)}};return L},g=document.getElementById("pagination");let v=JSON.parse(localStorage.getItem("shopping-trash"));function h(){0!==v.length?(!function(){g.innerHTML="";let e=u({items:v,rows:3,buttonsWrapper:"#pagination",handlePaginatedItems:e=>{let i=document.getElementById("list");i.innerHTML=" ",i.innerHTML=e.reduce((e,i)=>e+` <div class="book-card" id="${i._id}">
        <div class="shopping-list-img">
        <img
          class="book-img"
          src="${i.book_image}"
          alt="${i.title}"
          loading="lazy"
        />
      </div>
      <div class="info">
        <div class="first-info-div">
          <div>
            <p class="book-name">${i.title}</p>
            <p class="book-category">${i.list_name}</p>
          </div>
          <button class="remove-book">
            <svg class="trash-icon" width="16" height="16"><use href="${t(c)}#trash"></use></svg>
          </button>
        </div>
        <div class="second-info-div">
          <p class="book-description">
           ${i.description}
          </p>
        </div>
        <div class="third-info-div">
          <div>
            <p class="book-author">
            ${i.author}
            </p>
          </div>
          <div class="shop-list-div">
          <ul class="shop-list">
               <li class="shop-item">
              <a class="shop-link" href="${i.buy_links[0].url}" target="_blank"><img class="shop-icon amazon-icon" src="${t(r)}" alt="amazon" width="32" height="11"></a>
              </li>
                <li class="shop-item">
                    <a class="shop-link" href="${i.buy_links[1].url}" target="_blank"><img class="shop-icon" src="${t(l)}" alt="apple shop" width="16" height="16"></a>
                  </li>
                    <li class="shop-item">
                        <a class="shop-link" href="${i.buy_links[4].url}" target="_blank" ><img class="shop-icon book-shop-icon" src="${t(o)}" alt="book shop" width="16" height="16"></a>
                      </li>
            </ul>
          </div>
        </div>
      </div>
    </div>`,"")}});e.paginate()}(),p.classList.add("shopping-list-filled")):(d.innerHTML="",g.innerHTML="",f())}function f(){p.classList.remove("shopping-list-filled")}h(),d.addEventListener("click",function(e){if("BUTTON"===e.target.nodeName){let t=e.target.closest(".book-card").id;v.splice(v.findIndex(e=>e._id===t),1),document.getElementById(t).remove(),localStorage.setItem("shopping-trash",JSON.stringify(v)),0===v.length&&f(),h()}});
//# sourceMappingURL=shopping.057acba6.js.map
