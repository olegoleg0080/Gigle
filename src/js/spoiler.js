const refs = {
    spoiler: document.querySelector('.sItem'),
    subtitle: document.querySelector('.sItem__subtitle'),
    spoilerSvg: document.querySelector('.spoiler-svg'),
    spoilerJs: document.querySelector('.item-spoiler-js'),
    spoilerTitle: document.querySelector('.sItem__title'),
    faq: document.querySelector('.FAQ'),
};

refs.faq.addEventListener('click', e => {
    const spoiler = e.target.closest('.sItem');
    if (spoiler) {
        const subtitle = spoiler.querySelector('.sItem__subtitle');
        const spoilerSvg = spoiler.querySelector('.spoiler-svg');
        if (subtitle.classList.contains('active')) {
            subtitle.classList.remove('active');
            spoiler.classList.remove('active');
            spoilerSvg.classList.remove('active');
        } else {
            subtitle.classList.add('active');
            spoiler.classList.add('active');
            spoilerSvg.classList.add('active');
        }
    }
});
