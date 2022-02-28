import createElement from '../../assets/lib/create-element.js';

export default class Modal {
	constructor() {
		this.modal = this.render();
		this.setTitle = this.setTitle.bind(this);
		this.setBody = this.setBody.bind(this);
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
		this.closeEsc = this.closeEsc.bind(this);
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
												
						</h3>

					</div>

					<div class="modal__body">
					</div>
    			</div>

  			</div>
		`);

		return this.modal;

	}
	
	setTitle(title) { 
		this.modalTitle = this.modal.querySelector('.modal__title');
		this.modalTitle.textContent = title;
	}

	setBody(ModalBodyInner) { 
		this.modalBody = this.modal.querySelector('.modal__body');
		this.modalBody.firstChild.remove();
		this.modalBody.append(ModalBodyInner);	
	}

	open() {
		document.body.append(this.modal);
		document.body.classList.add('is-modal-open');

		const closeBtn = document.querySelector('.modal__close');
		closeBtn.addEventListener('click', this.close);
		document.body.addEventListener('keydown', this.closeEsc);
	}

	close() { 
		this.modal.remove();
		document.body.classList.remove('is-modal-open');
		document.body.removeEventListener('keydown', this.closeEsc);
	}

	closeEsc(event) { 
		if (event.code === 'Escape') {
			this.modal.remove();
			document.body.classList.remove('is-modal-open');
			document.body.removeEventListener('keydown', this.closeEsc);
		}
	}

}
