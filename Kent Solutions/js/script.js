let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active-search-form');
}

let cart = document.querySelector('.shopping-cart')

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active-shopping-cart');
}

let login = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () =>{
    login.classList.toggle('login-form-active');
}
let slides = document.querySelectorAll('.home .slide-container .slide');
let index = 0;
function next()
{
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');

}


function prev()
{
    slides[index].classList.remove('active');
    index = (index -1 + slides.length)% slides.length;
    slides[index].classList.add('active');

}