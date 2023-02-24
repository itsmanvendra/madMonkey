'use script';

const hamburger = document.querySelector('.hamburger');
const menu = document.getElementById('menu');
const menu1 = document.getElementById('menu1');

// console.log(hamburger);

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('open');
    menu.classList.toggle('hidden');
    menu1.classList.toggle('hidden');
    
    // console.log('clicked');
})