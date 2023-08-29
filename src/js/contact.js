const form = document.querySelector('.contact__form');
const inputName = document.querySelector('.input_name');
const inputContact = document.querySelector('.input_contact');

form.addEventListener('submit', event => {
	event.preventDefault();
	let valid = true;

	if (!inputName.value.trim()) {
		inputName.classList.add('error');
		valid = false;
	}
	if (!inputContact.value.trim()) {
		inputContact.classList.add('error');
		valid = false;
	}

	const nameRegex = /^[А-ЯҐЄІЇ][а-яґєії']+\s[А-ЯҐЄІЇ][а-яґєії']+$/;
	if (!nameRegex.test(inputName.value)) {
		inputName.classList.add('error');
		valid = false;
	}

	if (valid) {
		localStorage.setItem('name', inputName.value);
		localStorage.setItem('contact', inputContact.value);
		localStorage.setItem(
			'message',
			document.querySelector('.form__textarea_message').value
		);

		form.reset();
	}
});

inputName.addEventListener('input', () => {
	inputName.classList.remove('error');
});
inputContact.addEventListener('input', () => {
	inputContact.classList.remove('error');
});
