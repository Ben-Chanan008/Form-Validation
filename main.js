const nameInput = document.querySelector('#name');
const myForm = document.querySelector('#myform');
const phoneInput = document.querySelector('#number');
const message = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    // e.preventDefault();
    console.log("success")
    // if(nameInput.value === '' || phoneInput.value === ''){
    //     message.classList.add('empty');
    //     message.innerHTML = 'PLEASE ENTER FIELDS';
    // }
}