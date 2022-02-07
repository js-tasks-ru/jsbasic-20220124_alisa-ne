function camelize(str) {

	if (str[0] === '-') {
		str = str[1].toUpperCase() + str.slice(2);
	}

	let newString = str.split('-');
	for (let i = 1; i < newString.length; i++ ) {
		newString[i] = newString[i][0].toUpperCase() + newString[i].slice(1);
	}

		return newString.join('')
}
