import createElement from '../../assets/lib/create-element.js';

export default class Modal {
	constructor() {
		
	}

	setTitle(title) { 
			this.modal.querySelector('.modal__title').textContent = title;
	}
	
	render() { 

		this.modal = createElement(`
  			<div class="modal">
    
    			<div class="modal__overlay"></div>

    			<div class="modal__inner">
      			<div class="modal__header">

						<button type="button" class="modal__close">
							<img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
						</button>

						<h3 class="modal__title">
													{/*  Вот сюда нужно добавлять заголовок */}
						</h3>

					</div>

					<div class="modal__body">
										{/* A сюда нужно добавлять содержимое тела модального окна */}
					</div>
    			</div>

  			</div>
		`);

		
		return this.modal;

	}

	openModal() {
		document.body.append(this.modal);
		document.body.classList.add('is-modal-open');
	}
	
	setBody(modal) { 
		this.modal.querySelector('.modal__title').textContent = value;
	}




}
