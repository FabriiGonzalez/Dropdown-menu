const Burmenu = document.querySelector(".bur_menu");
const mobileMenu = document.querySelector(".mob_menu");
const closeMenu = document.querySelector(".cross")

Burmenu.addEventListener('click', togglemenumobile);
closeMenu.addEventListener('click', togglemenumobile)
function togglemenumobile (){
    mobileMenu.classList.toggle('inactive');
}

const armenu = document.querySelector(".arrow");
const armenut = document.querySelector(".arrow_two");
const listMenu = document.querySelector(".list");
const listMenutwo = document.querySelector(".list_two")

armenu.addEventListener('click', togglelist);
armenut.addEventListener('click', togglelisttwo);

function togglelist (){
    listMenu.classList.toggle('inactive');
    listMenutwo.classList.add('inactive');
}
function togglelisttwo(){
    listMenutwo.classList.toggle('inactive');
    listMenu.classList.add('inactive');
}