let mobileBtn = document.getElementById('mobile-cta')
let nav = document.querySelector('nav')
let mobileBtnExit = document.getElementById('mobile-exit-cta');

mobileBtn.addEventListener('click', ()=>{
  nav.classList.add('menu-btn');
});

mobileBtnExit.addEventListener('click', ()=>{
    nav.classList.remove('menu-btn');
});
