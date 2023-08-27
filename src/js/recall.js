"use strict";

window.addEventListener('load', windiwLoad);

function windiwLoad() {
	function digitsCounterInit(digitsCountersItems) {
		let digitsCounters = digitsCountersItems
			? digitsCountersItems
			: document.querySelectorAll('[data-digits-counter]');
		if (digitsCounters) {
			digitsCounters.forEach(digitsCounter => {
				digitsCountersAnimate(digitsCounter);
			});
		}
	}
	// *animate
	function digitsCountersAnimate(digitsCounter) {
		let startTimestamp = null;
		const duration = parseInt(digitsCounter.dataset.digitsCounter)
			? parseInt(digitsCounter.dataset.digitsCounter)
			: 1000;
		const startValue = parseInt(digitsCounter.innerHTML);
		const startPosition = 0;
		const step = timestamp => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			digitsCounter.innerHTML = Math.floor(
				progress * (startPosition + startValue)
			) + `<span>+</span>`;
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
        window.requestAnimationFrame(step);
	}
    // * load
    // digitsCounterInit()

    let options = {
        threshhold: 0.3
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                const targetElement = entry.target;
                const digitsCountersItems = targetElement.querySelectorAll('[data-digits-counter]');
                if(digitsCountersItems.length){
                    digitsCounterInit(digitsCountersItems);
                }
                // * вимкнути слежку
                observer.unobserve(targetElement);
            }
        });
    }, options);
    let sections = document.querySelectorAll('.recall');
    if (sections.length) {
        sections.forEach(sections => {
            observer.observe(sections);
        });
    }
}
