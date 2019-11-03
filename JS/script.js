let showMenu = document.querySelector('.showMenu');
let menu = document.querySelector('.menuRes');

function show_Menu(){
    menu.classList.toggle('menuRes--show');
}

showMenu.addEventListener('click', function(){
    show_Menu();
});