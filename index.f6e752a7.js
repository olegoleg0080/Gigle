const e=document.querySelectorAll(".nav-menu__item a"),t=document.querySelector('a[href="#header"]');document.querySelector('a[href="#footer"]').addEventListener("click",(e=>{e.preventDefault(),console.log("aaaa"),window.scrollTo({top:0,behavior:"smooth"})})),t.addEventListener("click",(e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})),e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href");if(o&&"#"!==o){const e=document.querySelector(o).offsetTop;window.scrollTo({top:e+-100,behavior:"smooth"})}}))}));new Swiper(".swiper-container",{autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",centeredSlides:!0,spaceBetween:50,loop:!0,loopedSlides:3});({spoiler:document.querySelector(".sItem"),subtitle:document.querySelector(".sItem__subtitle"),spoilerSvg:document.querySelector(".spoiler-svg"),spoilerJs:document.querySelector(".item-spoiler-js"),spoilerTitle:document.querySelector(".sItem__title"),faq:document.querySelector(".FAQ")}).faq.addEventListener("click",(e=>{const t=e.target.closest(".sItem");if(t){const e=t.querySelector(".sItem__subtitle"),o=t.querySelector(".spoiler-svg");e.classList.contains("active")?(e.classList.remove("active"),t.classList.remove("active"),o.classList.remove("active")):(e.classList.add("active"),t.classList.add("active"),o.classList.add("active"))}})),window.addEventListener("load",(function(){function e(e){let t=e||document.querySelectorAll("[data-digits-counter]");t&&t.forEach((e=>{!function(e){let t=null;const o=parseInt(e.dataset.digitsCounter)?parseInt(e.dataset.digitsCounter):1e3,n=parseInt(e.innerHTML),r=0,s=c=>{t||(t=c);const i=Math.min((c-t)/o,1);e.innerHTML=Math.floor(i*(r+n))+"<span>+</span>",i<1&&window.requestAnimationFrame(s)};window.requestAnimationFrame(s)}(e)}))}let t=new IntersectionObserver(((t,o)=>{t.forEach((t=>{if(t.isIntersecting){const o=t.target.querySelectorAll("[data-digits-counter]");o.length&&e(o)}}))}),{threshhold:.3}),o=document.querySelectorAll(".recall");o.length&&o.forEach((e=>{t.observe(e)}))}));const o=document.querySelector(".contact__form"),n=document.querySelector(".input_name"),r=document.querySelector(".input_contact");function s(e){e.classList.add("error"),e.offsetWidth,e.classList.remove("error")}let c,i;o.addEventListener("submit",(e=>{e.preventDefault();let t=!0;n.value.trim()||(s(n),t=!1),r.value.trim()||(s(r),t=!1);/^[А-ЯҐЄІЇ][а-яґєії']+\s[А-ЯҐЄІЇ][а-яґєії']+$/.test(n.value)||(s(n),t=!1),t&&(localStorage.setItem("name",n.value),localStorage.setItem("contact",r.value),localStorage.setItem("message",document.querySelector(".form__textarea_message").value),o.reset())})),n.addEventListener("input",(()=>{n.classList.remove("error")})),r.addEventListener("input",(()=>{r.classList.remove("error")}));const l=document.querySelector(".timer-wrapper");document.addEventListener("mousemove",a),document.addEventListener("mousedown",a),document.addEventListener("keypress",a),document.addEventListener("touchmove",a);function a(){clearTimeout(c),c=setTimeout((function(){l.style="display: flex;",i=setTimeout((()=>{l.style="display: none;",window.close()}),1e4)}),49e3)}document.querySelector(".timer-btn").addEventListener("click",(function(){l.style="display: none;",clearTimeout(i)})),a();const d=document.querySelector(".load-wrapper");!function(){document.body.style="position: fixed;";setTimeout((function(){d.style="display: none;",document.body.style="position: statik;",document.body.style="overflow-x: hidden"}),5e3)}();
//# sourceMappingURL=index.f6e752a7.js.map
