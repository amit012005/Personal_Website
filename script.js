let menuIcons=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcons.onclick=()=>{
    menuIcons.classList.toggle('responsive');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menuIcons.classList.remove('responsive');
    navbar.classList.remove('active');
}