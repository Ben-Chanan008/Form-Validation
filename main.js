const nameInput = document.querySelector('#name');
const myForm = document.querySelector('#myform');
const phoneInput = document.querySelector('#number');
const button= document.querySelector('#submit');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
}