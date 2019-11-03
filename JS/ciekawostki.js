let subject = document.getElementsByClassName('cgr__section');
let info = document.getElementsByClassName('artC');
let cgr = document.querySelector('.cgr__div');
let back = document.querySelectorAll('.artC__i');
let artC = document.querySelector('.artC');
let licznik;

function show(i){
    cgr.classList.add('cgr__div--hide');
    info[i].classList.add('artC--show');
}

function goBack(i){
    cgr.classList.remove('cgr__div--hide');
    info[i].classList.remove('artC--show');
}

function exit(event, indeks){
    let character = event.keyCode || event.which || event.key || event.keyIdentifier;
    if(character==27){
        goBack(indeks);
    }
}

for(let i=0; i<subject.length; i++){
    subject[i].addEventListener('click', function(){
        show(i);
        licznik = i;
    });
    back[i].addEventListener('click', function(){
        goBack(i);
    });
}

window.addEventListener("keydown", function(){
    exit(event, licznik);
});