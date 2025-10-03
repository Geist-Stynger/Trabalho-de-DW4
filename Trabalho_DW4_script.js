const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-Confirmation');


form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    checkInputs()
} )

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

if(usernameValue === '') {
    setErrorFor(username, 'O nome de usuário é obrigatório')
} else{
    setSucessFor(username)
}

if(emailValue === '') {
    setErrorFor(email, 'O email do usuário é obrigatório')
} else{
    setSucessFor(email)
}

if(passwordValue === '') {
    setErrorFor(password, 'Senha obrigatória')
} else{
    setSucessFor(password)
}

if(passwordConfirmationValue === '') {
    setErrorFor(passwordConfirmation, 'senha obrigatória')
} else{
    setSucessFor(passwordConfirmation)
}
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement
    
    formControl.className = 'form-control success'
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
    );
    }