'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const eventListener = function (element, event, eventName) {
  element.addEventListener(event, eventName);
};

for (let i = 0; i < btnsShowModal.length; i++) {
  eventListener(btnsShowModal[i], 'click', openModal);
}

eventListener(btnCloseModal, 'click', closeModal);
eventListener(overlay, 'click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
