'use strict';

// Select options

const days = document.getElementById('days');
const years = document.getElementById('years');
const months = document.getElementById('months');

for (let day = 1; day <= 30; day++) {
	days.innerHTML += `<option value="1"> ${day}</option>`;
}
for (let year = 1990; year <= 2021; year++) {
	years.innerHTML += `<option value="1"> ${year}</option>`;
}

const theMonths = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

for (let month = 0; month < theMonths.length; month++) {
	months.innerHTML += `<option value="1"> ${theMonths[month]}</option>`;
}

// side bar buttons
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
