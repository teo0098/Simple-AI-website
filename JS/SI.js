let skip = document.getElementsByClassName("skip__h3");
let article = document.getElementsByClassName("SI__article");

function scrollToElement(indeks){
    article[indeks].scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
}

for(let i=0; i<skip.length; i++){
    skip[i].addEventListener('click', function(){
        scrollToElement(i);
    });
}