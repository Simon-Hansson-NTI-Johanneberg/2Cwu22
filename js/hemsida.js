var x = 0
var y = 0
var z = 0

function fas1() {
    document.querySelector(".artdel2text").style.display = "none";
    document.querySelector(".artdel3text").style.display = "none";
    if (x % 2 == 0 ) {
        document.querySelector("article").style.gridTemplateRows = "60vh 20vh 20vh";
        document.querySelector(".artdel1text").style.display = "flex";
        y = 0;
        z = 0;
    }
    else {
        document.querySelector("article").style.gridTemplateRows = "1fr 1fr 1fr";
        document.querySelector(".artdel1text").style.display = "none";
    }
    x += 1
}
function fas2() {
    document.querySelector(".artdel1text").style.display = "none";
    document.querySelector(".artdel3text").style.display = "none";
    if (y % 2 == 0 ) {
        document.querySelector("article").style.gridTemplateRows = "20vh 60vh 20vh";
        document.querySelector(".artdel2text").style.display = "flex";
        z = 0;
        x = 0;
    }
    else {
        document.querySelector("article").style.gridTemplateRows = "1fr 1fr 1fr";
        document.querySelector(".artdel2text").style.display = "none";
    }
    y += 1
}
function fas3() {
    document.querySelector(".artdel2text").style.display = "none";
    document.querySelector(".artdel1text").style.display = "none";
    if (z % 2 == 0 ) {
        document.querySelector("article").style.gridTemplateRows = "20vh 20vh 60vh";
        document.querySelector(".artdel3text").style.display = "flex";
        x = 0;
        y = 0;
    }
    else {
        document.querySelector("article").style.gridTemplateRows = "1fr 1fr 1fr";
        document.querySelector(".artdel3text").style.display = "none";
    }
    z += 1
}
function hem() {
    window.location.href = ("/index.html")
}
function meny() {
    let meny = document.querySelector("aside")
    meny.classList.toggle("show")
}

let knapp1 = document.querySelector('#artdel1')
knapp1.addEventListener("click",fas1);
let knapp2 = document.querySelector('#artdel2')
knapp2.addEventListener("click",fas2);
let knapp3 = document.querySelector('#artdel3')
knapp3.addEventListener("click",fas3);
let knapp4 = document.querySelector('.logga');
knapp4.addEventListener("click",hem);
let knapp5 = document.querySelector('.meny')
knapp5.addEventListener("click",meny)