// Получаем все ссылки в навигационном меню
const navLinks = document.querySelectorAll('.nav-menu__item a');
// Получаем ссылку с href="#header"
const headerLink = document.querySelector('a[href="#header"]');

// Добавляем обработчик событий для ссылки
headerLink.addEventListener('click', event => {
	// Отменяем стандартное поведение ссылки
	event.preventDefault();

	// Плавно прокручиваем страницу до верха
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

// Добавляем обработчик событий для каждой ссылки
navLinks.forEach(link => {
	link.addEventListener('click', event => {
		// Отменяем стандартное поведение ссылки
		event.preventDefault();

		// Получаем ID раздела, на который ссылается ссылка
		const sectionId = link.getAttribute('href');

		// Проверяем, является ли sectionId допустимым селектором
		if (sectionId && sectionId !== '#') {
			// Получаем элемент раздела
			const section = document.querySelector(sectionId);

			// Вычисляем позицию раздела на странице
			const sectionPosition = section.offsetTop;

			// Плавно прокручиваем страницу до позиции раздела
			window.scrollTo({
				top: sectionPosition + -100,
				behavior: 'smooth',
			});
		}
	});
});
