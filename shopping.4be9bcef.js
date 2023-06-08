!function(){function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},a=i.parcelRequiref4fb;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){s[e]=t},i.parcelRequiref4fb=a),a.register("iE7OH",function(t,i){"use strict";e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return s},function(e){return s=e});var n,s,a={};n=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)a[t[i]]=e[t[i]]},s=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a.register("aNJCr",function(t,i){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});"use strict";var n,s={};n=function(e){var t=s[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),s[e]=t),t}}),a("iE7OH").register(JSON.parse('{"l20mf":"shopping.4be9bcef.js","aaLHb":"amazon.85d56d2a.png","kA0Wr":"appleshop.99c6208d.png","5sBRp":"boockshop.4b2f13db.png","ee16w":"sprite.9905b075.svg"}'));var r={};r=a("aNJCr").getBundleURL("l20mf")+a("iE7OH").resolve("aaLHb");var l={};l=a("aNJCr").getBundleURL("l20mf")+a("iE7OH").resolve("kA0Wr");var o={};o=a("aNJCr").getBundleURL("l20mf")+a("iE7OH").resolve("5sBRp");var c={};c=a("aNJCr").getBundleURL("l20mf")+a("iE7OH").resolve("ee16w");let d=document.querySelector(".shopping-list"),p=document.querySelector(".shopping-list-empty"),u=({items:e,rows:t=10,handlePaginatedItems:i,buttonsWrapper:n,buttonsContainerClass:s="pagination",buttonClass:a="page-link",nextClass:r="page-link",prevClass:l="page-link",nextText:o=">",prevText:c="<",firstClass:d="page-link",firstText:p="<<",lastClass:u="page-link",lastText:f=">>",activeClass:g="active"})=>{var v,h;if(!e)return console.error("items not defined. Send {items: ...} as a parameter."),!1;let m=({wrapper:e})=>{let t,i,n=document.createElement("div");n.classList.add("pagination-"+k,s);let r=e=>{let t=document.createElement("button");return t.setAttribute("type","button"),t.classList.add(a),L===e&&t.classList.add(g),t.innerHTML=e,t.addEventListener("click",function(){L=e,H.paginate(L,!1),b().classList.remove("active"),t.classList.add("active")}),t},{prevBtn:l,nextBtn:d}=((t=document.createElement("button")).setAttribute("type","button"),t.classList.add("page-link"),t.classList.add("prevClass"),t.innerHTML=c,(i=document.createElement("button")).setAttribute("type","button"),i.classList.add("page-link"),i.classList.add("nextClass"),i.innerHTML=o,t.addEventListener("click",()=>{H.prev()}),i.addEventListener("click",()=>{H.next()}),{prevBtn:t,nextBtn:i});n.appendChild(l);for(let e=1;e<E+1;e++){let t=r(e);n.appendChild(t)}n.appendChild(d),e.appendChild(n)},b=()=>document.querySelector(`.${"pagination-"+k} button.active`),k=(v=46656*Math.random()|0,h=46656*Math.random()|0,(v=("000"+v.toString(36)).slice(-3))+(h=("000"+h.toString(36)).slice(-3)));t=parseInt(t);let L=1,E=Math.ceil(e.length/t),y=void 0!==n,H={paginate:(s=1,a=!0)=>{let r=t*--s,l=r+t,o=e.slice(r,l);if(a&&n&&m({wrapper:document.querySelector(n)}),!i)return o;i(o)},next:()=>{if(L>=E)return;let n=t*(++L-1),s=n+t,a=e.slice(n,s);if(y){let e=b();e.classList.remove("active"),e.nextElementSibling.classList.add("active")}if(!i)return a;i(a)},prev:()=>{if(1===L)return;let n=t*(--L-1),s=n+t,a=e.slice(n,s);if(y){let e=b();e.classList.remove("active"),e.previousElementSibling.classList.add("active")}if(!i)return a;i(a)},changeRows:(e=10)=>{t=parseInt(e),document.querySelector(".pagination-"+k).remove(),H.paginate(L)},changeItems:i=>{if(!i)return!1;document.querySelector(".pagination-"+k)?.remove(),E=Math.ceil((e=i).length/t),L=1,H.paginate(1)}};return H},f=document.getElementById("pagination"),g=JSON.parse(localStorage.getItem("shopping-trash"));function v(){0!==g.length?(!function(){f.innerHTML="";let e=u({items:g,rows:3,buttonsWrapper:"#pagination",handlePaginatedItems:e=>{let i=document.getElementById("list");i.innerHTML=" ",i.innerHTML=e.reduce((e,i)=>e+` <div class="book-card" id="${i._id}">
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
    </div>`,"")}});e.paginate()}(),p.classList.add("shopping-list-filled")):(d.innerHTML="",f.innerHTML="",h())}function h(){p.classList.remove("shopping-list-filled")}v(),d.addEventListener("click",function(e){if("BUTTON"===e.target.nodeName){let t=e.target.closest(".book-card").id;g.splice(g.findIndex(e=>e._id===t),1),document.getElementById(t).remove(),localStorage.setItem("shopping-trash",JSON.stringify(g)),0===g.length&&h(),v()}})}();
//# sourceMappingURL=shopping.4be9bcef.js.map
