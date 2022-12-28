const nameInput = document.querySelector('#name');
const form = document.querySelector('#myform');
const  emailInput = document.querySelector('#email');
const  errorMsg = document.querySelector('.msg');
const  userLists = document.querySelector('.users');

form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        errorMsg.classList.add('error');
        errorMsg.innerHTML = "NAME AND EMAIL PLEASE";
        setTimeout(() => {
            errorMsg.classList.remove('error');
            errorMsg.innerHTML = '';
        }, 3000);
    } else {
        console.log('success');
        errorMsg.classList.add('success')
        errorMsg.innerHTML = 'Success';

        setTimeout((clearfields), 3000)

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} | ${emailInput.value}`));

        userLists.appendChild(li);

    }

}

function clearfields(){
    nameInput.value = '';
    emailInput.value = '';
    errorMsg.classList.remove('success')
    errorMsg.innerHTML = '';
}