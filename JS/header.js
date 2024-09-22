//Script para bolber transparente el header
window.onscroll = function() {
    var header = document.querySelector("header");
    if (window.scrollY > 50) { // Cuando el scroll sea mayor a 50px
        header.classList.add("he1");
    } else {
        header.classList.remove("he1");
    }
};
