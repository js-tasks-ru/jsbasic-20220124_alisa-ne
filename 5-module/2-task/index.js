/* eslint-disable indent */
function toggleText() {
	const btn = document.querySelector(`.toggle-text-button`);
	const text = document.querySelector(`#text`);
	let count = 0;

	function hideShow() { 
		count++;
		count % 2 === 0 ? text.hidden = false : text.hidden = true;
	}
	
	btn.addEventListener("click", hideShow);
}
