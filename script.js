'use strict';

const addImg = document.querySelector('.add__img');
const graphImg = document.querySelector('.graph__img');

addImg.addEventListener('click', () => {
	document.querySelector('.dash_section').classList.add('hidden');
	document.querySelector('.add_trainer').classList.remove('hidden');
});

graphImg.addEventListener('click', () => {
	document.querySelector('.add_trainer').classList.add('hidden');
	document.querySelector('.dash_section').classList.remove('hidden');
});
