!function(){var e=document.querySelectorAll(".nav-menu__item a");document.querySelector('a[href="#header"]').addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})),e.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var o=e.getAttribute("href");if(o&&"#"!==o){var r=document.querySelector(o).offsetTop;window.scrollTo({top:r+-100,behavior:"smooth"})}}))}));new Swiper(".swiper-container",{autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",centeredSlides:!0,spaceBetween:50,loop:!0,loopedSlides:3});({spoiler:document.querySelector(".sItem"),subtitle:document.querySelector(".sItem__subtitle"),spoilerSvg:document.querySelector(".spoiler-svg"),spoilerJs:document.querySelector(".item-spoiler-js"),spoilerTitle:document.querySelector(".sItem__title"),faq:document.querySelector(".FAQ")}).faq.addEventListener("click",(function(e){var t=e.target.closest(".sItem");if(t){var o=t.querySelector(".sItem__subtitle"),r=t.querySelector(".spoiler-svg");o.classList.contains("active")?(o.classList.remove("active"),t.classList.remove("active"),r.classList.remove("active")):(o.classList.add("active"),t.classList.add("active"),r.classList.add("active"))}})),window.addEventListener("load",(function(){function e(e){var t=e||document.querySelectorAll("[data-digits-counter]");t&&t.forEach((function(e){!function(e){var t=null,o=parseInt(e.dataset.digitsCounter)?parseInt(e.dataset.digitsCounter):1e3,r=parseInt(e.innerHTML),n=0,s=function(a){t||(t=a);var i=Math.min((a-t)/o,1);e.innerHTML=Math.floor(i*(n+r))+"<span>+</span>",i<1&&window.requestAnimationFrame(s)};window.requestAnimationFrame(s)}(e)}))}var t=new IntersectionObserver((function(t,o){t.forEach((function(t){if(t.isIntersecting){var r=t.target,n=r.querySelectorAll("[data-digits-counter]");n.length&&e(n),o.unobserve(r)}}))}),{threshhold:.3}),o=document.querySelectorAll(".recall");o.length&&o.forEach((function(e){t.observe(e)}))}));var t,o=document.querySelector(".contact__form"),r=document.querySelector(".input_name"),n=document.querySelector(".input_contact");o.addEventListener("submit",(function(e){e.preventDefault();var t=!0;r.value.trim()||(r.classList.add("error"),t=!1),n.value.trim()||(n.classList.add("error"),t=!1);/^[А-ЯҐЄІЇ][а-яґєії']+\s[А-ЯҐЄІЇ][а-яґєії']+$/.test(r.value)||(r.classList.add("error"),t=!1),t&&(localStorage.setItem("name",r.value),localStorage.setItem("contact",n.value),localStorage.setItem("message",document.querySelector(".form__textarea_message").value),o.reset())})),r.addEventListener("input",(function(){r.classList.remove("error")})),n.addEventListener("input",(function(){n.classList.remove("error")}));var s=document.querySelector(".timer-wrapper");function a(){clearTimeout(t),t=setTimeout(i,49e3),s.style="display: none;",clearTimeout(closeWindow)}function i(){s.style="display: flex;",closeWindow=setTimeout((function(){s.style="display: none;",window.close()}),1e4)}document.addEventListener("mousemove",a),document.addEventListener("mousedown",a),document.addEventListener("keypress",a),document.addEventListener("touchmove",a)}();
//# sourceMappingURL=index.4ac41118.js.map
