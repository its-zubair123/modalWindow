'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
//console.log(btnOpenModal);
const CloseModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const OpenModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for (let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click', OpenModal);

btnCloseModal.addEventListener('click', CloseModal);
overlay.addEventListener('click', CloseModal);