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
  }

  function closeModal(event) {
    if (event.target === modal || event.target === closeModalBtn) {
      modal.classList.remove('active');
    }
  }
});