//Set vartiables
const mainElem = document.querySelectorAll(".main");
const contentElem = document.querySelectorAll(".content");

//Add Events
for (let i = 0; i < mainElem.length; i++) {
    mainElem[i].addEventListener("click", function () {
        clearActive()
        mainElem[i].nextElementSibling.classList.toggle("active")
    })
}

function clearActive() {
    for (let i = 0; i < contentElem.length; i++) {
        contentElem[i].classList.remove("active")
    }
}