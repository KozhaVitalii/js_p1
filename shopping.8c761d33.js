!function(){var e;(e=jQuery).switcher=function(t){var c=e("input[type=checkbox]");void 0!==t&&t.length&&(c=c.filter(t)),c.each(function(){var t=e(this).hide(),c=e(document.createElement("div")).addClass("ui-switcher").attr("aria-checked",t.is(":checked"));toggleSwitch=function(e){void 0===e.target.type&&t.trigger(e.type),document.body.classList.toggle("theme-dark"),c.attr("aria-checked",t.is(":checked"))},c.on("click",toggleSwitch),c.insertBefore(t)})},function(){let e=document.body.dataset.activePage,t=document.querySelectorAll("[data-home-btn]"),c=document.querySelectorAll("[data-shopping-btn]");if("home"===e){for(let e of c)e.classList.remove("active");for(let e of t)e.classList.add("active")}else{for(let e of t)e.classList.remove("active");for(let e of c)e.classList.add("active")}}();let t=document.querySelector(".form-check-input");function c(e){localStorage.setItem("theme",e)}t.addEventListener("click",function(){let e=t.checked;if(!0===e){c("theme-dark");return}localStorage.removeItem("theme"),c("theme-light")}),"theme-dark"===localStorage.getItem("theme")?(c("theme-dark"),t.checked=!0,document.body.classList.add("theme-dark")):(c("theme-light"),t.checked=!1,document.body.classList.remove("theme-dark"))}();
//# sourceMappingURL=shopping.8c761d33.js.map
