const modal = document.querySelector('.modal');

const openModal = () => {
  modal.classList.remove('fade');
};

const closeModal = () => {
  modal.classList.add('fade');
};

export default {
  open: () => openModal(),
  close: () => closeModal(),
};
