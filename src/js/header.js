// Получаем все ссылки в навигационном меню
const navLinks = document.querySelectorAll('.nav-menu__item a');
const headerLink = document.querySelector('a[href="#header"]');

headerLink.addEventListener('click', event => {
	event.preventDefault();

	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

navLinks.forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault();

		const sectionId = link.getAttribute('href');

		if (sectionId && sectionId !== '#') {
			const section = document.querySelector(sectionId);

			const sectionPosition = section.offsetTop;

			window.scrollTo({
				top: sectionPosition + -100,
				behavior: 'smooth',
			});
		}
	});
});
