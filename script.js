//Selecciones para barra de navegacion burguer
const burger = document.querySelector('#burger-menu');
const ul= document.querySelector("nav ul");
const nav = document.querySelector("nav");


burger.addEventListener('click', () =>{
    ul.classList.toggle("show");
})

//cerrar el menu de burguer
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((link) =>
    link.addEventListener("click", () =>{
        ul.classList.remove("show");
    })
);






//CAMBIO DE TEMA A CLARO

const btnSwitch = document.querySelector('#switch');  /*lo q tenga class switch sera mi const btnswitch*/
btnSwitch.addEventListener('click', () => {  /*evento click, cuando de click sucedera lo de abajo*/
    document.body.classList.toggle('claro');  /*busco la parte que tenga los valores del tema claro */
    btnSwitch.classList.toggle('active'); /*paso a activo el tema*/
})

//desplazar hacia arriba

const scrollUp = document.querySelector('#scroll-up');

//funcionalidad de desplazamiento hacia arriba
scrollUp.addEventListener("click", () => {
window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth",
});
});


