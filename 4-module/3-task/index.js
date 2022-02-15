function highlight(table) {
	
	let rows = table.rows;

	for (let i = 1; i < rows.length; i++) {
		
		let targetRow = rows[i];

		let ageCell = rows[i].cells[1];

		if (ageCell.textContent < 18) {
			targetRow.setAttribute('style', 'text-decoration: line-through');
		}

		let genderCell = rows[i].cells[2];
		
		if (genderCell.textContent === 'm') {
			targetRow.classList.add('male');

		} else if (genderCell.textContent === 'f') {
			targetRow.classList.add('female');
		}
		
		let statusCell = rows[i].cells[3];
		
		if (statusCell.getAttribute('data-available') === 'true') {
			targetRow.classList.add('available');

		} else if (statusCell.getAttribute('data-available') === 'false') {
			targetRow.classList.add('unavailable');

		} else if (!statusCell.hasAttribute('data-available')) {
			targetRow.setAttribute('hidden', 'true');
		}

	}
}
