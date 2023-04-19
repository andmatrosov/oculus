'use strict'

const tabBtns = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabBtns.forEach(item => {
	item.addEventListener('click', open)
})

function open(event) {
	const target = event.target;
	const dataBtn = target.dataset.button;

	tabBtns.forEach(item => item.classList.remove('tabs__btn-item--active'));
	tabContent.forEach(item => item.classList.remove('tabs__content-item--active'));

	target.classList.add('tabs__btn-item--active');
	document.getElementById(dataBtn).classList.add('tabs__content-item--active');

}


const menuBtn = document.querySelector('.menu-btn'),
	menu = document.querySelector('.menu');


menuBtn.addEventListener('click', () => {
	menu.classList.toggle('active')
})