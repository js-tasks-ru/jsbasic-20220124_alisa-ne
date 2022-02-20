function initCarousel() {
  
	const btnRight = document.querySelector('.carousel__arrow_right');
	const btnLeft = document.querySelector('.carousel__arrow_left');
	const carouselInner = document.querySelector('.carousel__inner');
	const carouselInnerWidth = carouselInner.offsetWidth;

	let translateX = 0;
	btnLeft.style.display = 'none';

	function moveRight() {
		
		translateX -= carouselInnerWidth;
		carouselInner.style.transform = `translateX(${translateX}px)`;

		if (translateX < 0) {
			btnLeft.style.display = '';
		}
    
		if (translateX === -carouselInnerWidth * 3) {
			btnRight.style.display = 'none';
		}	
	} 

	function moveLeft() {

		translateX += carouselInnerWidth;
		carouselInner.style.transform = `translateX(${translateX}px)`;

		if (translateX > -carouselInnerWidth * 3) {
			btnRight.style.display = '';
		}

		if (translateX === 0) {
			btnLeft.style.display = 'none';
		}
	}

	btnRight.addEventListener("click", moveRight);
	btnLeft.addEventListener("click", moveLeft);
}
