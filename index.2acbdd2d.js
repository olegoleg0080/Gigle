const e=document.querySelectorAll(".nav-menu__item a");document.querySelector('a[href="#header"]').addEventListener("click",(e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})),e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href");if(o&&"#"!==o){const e=document.querySelector(o).offsetTop;window.scrollTo({top:e+-100,behavior:"smooth"})}}))}));new Swiper(".swiper-container",{autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",centeredSlides:!0,spaceBetween:50,loop:!0,loopedSlides:3});({spoiler:document.querySelector(".sItem"),subtitle:document.querySelector(".sItem__subtitle"),spoilerSvg:document.querySelector(".spoiler-svg"),spoilerJs:document.querySelector(".item-spoiler-js"),spoilerTitle:document.querySelector(".sItem__title"),faq:document.querySelector(".FAQ")}).faq.addEventListener("click",(e=>{const t=e.target.closest(".sItem");if(t){const e=t.querySelector(".sItem__subtitle"),o=t.querySelector(".spoiler-svg");e.classList.contains("active")?(e.classList.remove("active"),t.classList.remove("active"),o.classList.remove("active")):(e.classList.add("active"),t.classList.add("active"),o.classList.add("active"))}})),window.addEventListener("load",(function(){function e(e){let t=e||document.querySelectorAll("[data-digits-counter]");t&&t.forEach((e=>{!function(e){let t=null;const o=parseInt(e.dataset.digitsCounter)?parseInt(e.dataset.digitsCounter):1e3,s=parseInt(e.innerHTML),r=0,n=i=>{t||(t=i);const l=Math.min((i-t)/o,1);e.innerHTML=Math.floor(l*(r+s))+"<span>+</span>",l<1&&window.requestAnimationFrame(n)};window.requestAnimationFrame(n)}(e)}))}let t=new IntersectionObserver(((t,o)=>{t.forEach((t=>{if(t.isIntersecting){const s=t.target,r=s.querySelectorAll("[data-digits-counter]");r.length&&e(r),o.unobserve(s)}}))}),{threshhold:.3}),o=document.querySelectorAll(".recall");o.length&&o.forEach((e=>{t.observe(e)}))}));const t=document.querySelector(".contact__form"),o=document.querySelector(".input_name"),s=document.querySelector(".input_contact");let r,n;t.addEventListener("submit",(e=>{e.preventDefault();let r=!0;o.value.trim()||(o.classList.add("error"),r=!1),s.value.trim()||(s.classList.add("error"),r=!1);/^[А-ЯҐЄІЇ][а-яґєії']+\s[А-ЯҐЄІЇ][а-яґєії']+$/.test(o.value)||(o.classList.add("error"),r=!1),r&&(localStorage.setItem("name",o.value),localStorage.setItem("contact",s.value),localStorage.setItem("message",document.querySelector(".form__textarea_message").value),t.reset())})),o.addEventListener("input",(()=>{o.classList.remove("error")})),s.addEventListener("input",(()=>{s.classList.remove("error")}));const i=document.querySelector(".timer-wrapper");function l(){clearTimeout(r),r=setTimeout((function(){i.style="display: flex;",n=setTimeout((()=>{i.style="display: none;",window.close()}),1e4)}),49e3),i.style="display: none;",clearTimeout(n)}document.addEventListener("mousemove",l),document.addEventListener("mousedown",l),document.addEventListener("keypress",l),document.addEventListener("touchmove",l);const a=document.querySelector(".load-wrapper");window.addEventListener("load",(function(){a.style="display: flex;",document.body.style="position: fixed;",load=setTimeout((function(){a.style="display: none;",document.body.style="position: statik;",document.body.style="overflow-x: hidden"}),5e3)}));
//# sourceMappingURL=index.2acbdd2d.js.map
