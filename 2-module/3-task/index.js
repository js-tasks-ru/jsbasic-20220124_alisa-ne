let calculator = {
	read(a, b) { 
		this.x = a;
		this.y = b;
	},

	sum() { 
		let sum = this.x + this.y;
		return sum;
	},

	mul() {
		let mul = this.x * this.y;
		return mul;
	}
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
