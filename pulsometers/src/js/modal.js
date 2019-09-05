document.addEventListener('DOMContentLoaded', () => {
  const openModalBtns = document.querySelectorAll('.open-modal');
  const openModalBtnsCount = openModalBtns.length;
  let modal = null;

  for (let i = 0; i < openModalBtnsCount; i++) {
    openModalBtns[i].addEventListener('click', openModal);
  }

  window.addEventListener('click', closeModal, true);

  function openModal() {
    modal = document.querySelector(`.${this.dataset.modal}`);
    if (this.dataset.modal === 'modal-buy') {
      const yourOrder = this.closest('.catalog__item').querySelector('.catalog__item-title').textContent;
      modal.querySelector('.modal__text').innerText = yourOrder;
    }
    modal.classList.add('active');
    modal.classList.add('show');
  }

  function closeModal(event) {
    if (!modal) {
      return;
    }

    if (event.target === modal || event.target.classList.contains('modal__close')) {
      modal.classList.remove('active');

      function handler() {
        modal.classList.remove('show');
        modal.removeEventListener('transitionend', handler);
      }

      modal.addEventListener('transitionend', handler);
    }
  }
});