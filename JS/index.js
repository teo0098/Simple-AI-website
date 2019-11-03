let photo = document.getElementsByClassName('photo');
let cat = document.querySelector('.cat');

function move(event, indeks){
    let getX = event.pageX;
    let getY = event.pageY;
    const photoWidth = photo[1].offsetWidth;
    const photoHeight = photo[1].offsetHeight;
    const catHeight = cat.offsetHeight;
    getY = getY - ((photoHeight + catHeight) * indeks);
    photo[indeks].setAttribute("style", `background-position: ${(getX - (photoWidth / 2)) / 100}px ${getY / 100}px`);
}

for(let i=0; i<photo.length; i++){
    photo[i].addEventListener('mousemove', function(){
        move(event, i);
    });
}