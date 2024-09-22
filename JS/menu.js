 //scrip para el header
 const menuToggle = document.querySelector('.menu-toggle');
 const menu = document.querySelector('.headerM ul');

 menuToggle.addEventListener('click', () => {
     menu.classList.toggle('active');
 });