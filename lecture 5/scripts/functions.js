function createErrorMessage() {
	let errDiv = document.createElement('div');

	container.appendChild(errDiv);
	errDiv.innerHTML = 'Ooops... Something went wrong...<br>Try to reenter the name';
	errDiv.classList.add('error');
}