document.addEventListener('DOMContentLoaded', () => {
  const openModalBtns = document.querySelectorAll('.open-modal');
  const openModalBtnsCount = openModalBtns.length;
  const closeModalBtn = document.querySelector('.modal__close');
  const modal = document.querySelector('.modal-overlay');

  for (let i = 0; i < openModalBtnsCount; i++) {
    openModalBtns[i].addEventListener('click', openModal);
  }

  window.addEventListener('click', closeModal, true);

  function openModal() {
    modal.classList.add('active');
    modal.classList.add('show');
  }

  function closeModal(event) {
    if (event.target === modal || event.target === closeModalBtn) {
      modal.classList.remove('active');

      function handler() {
        modal.classList.remove('show');
        modal.removeEventListener('transitionend', handler);
      }

      modal.addEventListener('transitionend', handler);
    }
  }
});