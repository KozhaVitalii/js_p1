!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},l={},t=n.parcelRequiref4fb;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in l){var n=l[e];delete l[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var d=Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,n){l[e]=n},n.parcelRequiref4fb=t);var d=t("1lPHI");let s=document.querySelector(".header-menu"),c=document.querySelectorAll(".menuItem"),r=document.querySelector(".header-menu-open"),i=document.querySelector(".header-menu-open-shopping"),a=document.querySelector(".header-menu-closed"),u=document.querySelector(".header-menu-closed-shopping");function f(){s.classList.contains("showMenu")?(s.classList.remove("showMenu"),r.style.display="block",a.style.display="none",e(d).enablePageScroll(document.body)):(s.classList.add("showMenu"),r.style.display="none",a.style.display="block",e(d).disablePageScroll(document.body))}window.matchMedia("(min-width: 768px)").addEventListener("change",function(n){let o=s.className.includes("showMenu");n.matches&&o&&(s.classList.remove("showMenu"),r.style.display="block",a.style.display="none",e(d).enablePageScroll(document.body))}),r.addEventListener("click",f),i.addEventListener("click",f),a.addEventListener("click",f),u.addEventListener("click",f),c.forEach(function(e){e.addEventListener("click",f)})}();
//# sourceMappingURL=index.8cf52b6b.js.map
