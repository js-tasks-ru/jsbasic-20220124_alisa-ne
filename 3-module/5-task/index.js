function getMinMax(str) {
	let result = {};
	let arr = str.split(' ').filter(item => isFinite(item));

	result.min = Math.min(...arr);
	result.max = Math.max(...arr);
	
	return result;
}
