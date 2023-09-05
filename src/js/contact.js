const form = document.querySelector('.contact__form');
const inputName = document.querySelector('.input_name');
const inputContact = document.querySelector('.input_contact');

function shake(element) {
	element.classList.remove('error');
	element.offsetWidth;
	element.classList.add('error');
}

form.addEventListener('submit', event => {
	event.preventDefault();
	let valid = true;

	if (!inputName.value.trim()) {
		shake(inputName);
		valid = false;
	}
	if (!inputContact.value.trim()) {
		shake(inputContact);
		valid = false;
	}

	const nameRegex = /^[А-ЯҐЄІЇ][а-яґєії']+\s[А-ЯҐЄІЇ][а-яґєії']+$/;
	if (!nameRegex.test(inputName.value)) {
		shake(inputName);
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
