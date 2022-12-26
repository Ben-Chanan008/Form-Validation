const nameField = ".input-1"
const phoneField = ".input-2"
const button = "a"
const message = ".msg"

let _nameField = document.querySelector(`${nameField}`);
    _phoneField = document.querySelector(`${phoneField}`);
    _buttonField = document.querySelector(`${button}`);
    _message = document.querySelector(`${message}`);

_buttonField.addEventListener('submit', (onSubmit));
function onSubmit(){
    button.preventDefault();

    if(_nameField.value === ''){
        _message.classList.add('empty');
        _message.innerHTML = "Fill in please";
    } else{

    }
}