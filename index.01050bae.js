!function(){var e=document.querySelectorAll(".nav-menu__item a");document.querySelector('a[href="#header"]').addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})),e.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var o=e.getAttribute("href");if(o&&"#"!==o){var r=document.querySelector(o).offsetTop;window.scrollTo({top:r+-100,behavior:"smooth"})}}))}));new Swiper(".swiper-container",{autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",centeredSlides:!0,spaceBetween:50,loop:!0,loopedSlides:3});({spoiler:document.querySelector(".sItem"),subtitle:document.querySelector(".sItem__subtitle"),spoilerSvg:document.querySelector(".spoiler-svg"),spoilerJs:document.querySelector(".item-spoiler-js"),spoilerTitle:document.querySelector(".sItem__title"),faq:document.querySelector(".FAQ")}).faq.addEventListener("click",(function(e){var t=e.target.closest(".sItem");if(t){var o=t.querySelector(".sItem__subtitle"),r=t.querySelector(".spoiler-svg");o.classList.contains("active")?(o.classList.remove("active"),t.classList.remove("active"),r.classList.remove("active")):(o.classList.add("active"),t.classList.add("active"),r.classList.add("active"))}})),window.addEventListener("load",(function(){function e(e){var t=e||document.querySelectorAll("[data-digits-counter]");t&&t.forEach((function(e){!function(e){var t=null,o=parseInt(e.dataset.digitsCounter)?parseInt(e.dataset.digitsCounter):1e3,r=parseInt(e.innerHTML),n=0,s=function(i){t||(t=i);var a=Math.min((i-t)/o,1);e.innerHTML=Math.floor(a*(n+r))+"<span>+</span>",a<1&&window.requestAnimationFrame(s)};window.requestAnimationFrame(s)}(e)}))}var t=new IntersectionObserver((function(t,o){t.forEach((function(t){if(t.isIntersecting){var o=t.target.querySelectorAll("[data-digits-counter]");o.length&&e(o)}}))}),{threshhold:.3}),o=document.querySelectorAll(".recall");o.length&&o.forEach((function(e){t.observe(e)}))}));var t,o,r=document.querySelector(".contact__form"),n=document.querySelector(".input_name"),s=document.querySelector(".input_contact");r.addEventListener("submit",(function(e){e.preventDefault();var t=!0;n.value.trim()||(s.classList.remove("error"),n.classList.add("error"),t=!1),s.value.trim()||(s.classList.remove("error"),s.classList.add("error"),t=!1);/^[А-ЯҐЄІЇ][а-яґєії']+\s[А-ЯҐЄІЇ][а-яґєії']+$/.test(n.value)||(s.classList.remove("error"),n.classList.add("error"),t=!1),t&&(localStorage.setItem("name",n.value),localStorage.setItem("contact",s.value),localStorage.setItem("message",document.querySelector(".form__textarea_message").value),r.reset())})),n.addEventListener("input",(function(){n.classList.remove("error")})),s.addEventListener("input",(function(){s.classList.remove("error")}));var i=document.querySelector(".timer-wrapper");function a(){clearTimeout(t),t=setTimeout((function(){i.style="display: flex;",o=setTimeout((function(){i.style="display: none;",window.close()}),1e4)}),7e3)}document.addEventListener("mousemove",a),document.addEventListener("mousedown",a),document.addEventListener("keypress",a),document.addEventListener("touchmove",a),document.querySelector(".timer-btn").document.addEventListener((i.style="display: none;",void clearTimeout(o)));var c=document.querySelector(".load-wrapper");!function(){c.style="display: flex;",document.body.style="position: fixed;";setTimeout((function(){c.style="display: none;",document.body.style="position: statik;",document.body.style="overflow-x: hidden"}),5e3)}()}();
//# sourceMappingURL=index.01050bae.js.map