function fas1() {
    console.log("Skriptet körs!")
    document.querySelector("article").style.gridTemplateRows = "80vh 40vh 40vh";
}

let knapp1 = document.querySelector('#artdel1')
knapp1.addEventListener("click",fas1);