const e=document.querySelectorAll(".nav-menu__item a");document.querySelector('a[href="#header"]').addEventListener("click",(e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})),e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const s=e.getAttribute("href");if(s&&"#"!==s){const e=document.querySelector(s).offsetTop;window.scrollTo({top:e+-100,behavior:"smooth"})}}))}));new Swiper(".swiper-container",{autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",centeredSlides:!0,spaceBetween:50,loop:!0,loopedSlides:3});({spoiler:document.querySelector(".sItem"),subtitle:document.querySelector(".sItem__subtitle"),spoilerSvg:document.querySelector(".spoiler-svg"),spoilerJs:document.querySelector(".item-spoiler-js"),spoilerTitle:document.querySelector(".sItem__title"),faq:document.querySelector(".FAQ")}).faq.addEventListener("click",(e=>{const t=e.target.closest(".sItem");if(t){const e=t.querySelector(".sItem__subtitle"),s=t.querySelector(".spoiler-svg");e.classList.contains("active")?(e.classList.remove("active"),t.classList.remove("active"),s.classList.remove("active")):(e.classList.add("active"),t.classList.add("active"),s.classList.add("active"))}}));
//# sourceMappingURL=index.fe490b42.js.map
