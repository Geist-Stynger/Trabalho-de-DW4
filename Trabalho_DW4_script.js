const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordconfirmation = document.getElementById('password-confirmation');
const radioFisica = document.getElementById('CPF_id');
const radioJuridica = document.getElementById('CNPJ_id');
const divFisica = document.getElementById('fisica');
const divJuridica = document.getElementById('juridica');
const inputcpf = document.getElementById('cpf');
const inputcnpj = document.getElementById('cnpj')

radioFisica.addEventListener('change', () => {
    if (radioFisica.checked) {
        divFisica.style.display = 'block';
        divJuridica.style.display = 'none';
    }
});
radioJuridica.addEventListener('change', () => {
    if(radioJuridica.checked) {
        divJuridica.style.display = 'block';
        divFisica.style.display = 'none';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    checkInputs()
} )

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordconfirmationValue = passwordconfirmation.value;
    const inputFisicaValue = inputcpf.value;
    const inputJuridicaValue = inputcnpj.value;
    
if(inputFisicaValue === '') {
    setErrorFor(inputcpf, 'CPF obrigatório para continuar')
} else {
    setSuccessFor(inputcpf)
}

if(inputJuridicaValue === '') {
    setErrorFor(inputcnpj, 'CNPJ obrigatório para continuar')
} else {
    setSuccessFor(inputcnpj)
}

    
if(usernameValue === '') {
    setErrorFor(username, 'O nome de usuário é obrigatório')
} else{
    setSuccessFor(username)
}

if(emailValue === '') {
    setErrorFor(email, 'O email do usuário é obrigatório')
} else if (!checkEmail(emailValue)) {
    setErrorFor(email, 'Digite um email válido')
} else {
    setSuccessFor(email)
}

if(passwordValue === '') {
    setErrorFor(password, 'Senha obrigatória')
} else{
    setSuccessFor(password)
}

if(passwordconfirmationValue === '') {
    setErrorFor(passwordconfirmation, 'senha obrigatória')
} else if (passwordValue !== passwordconfirmationValue) {
    setErrorFor(passwordconfirmation, 'As senhas não coincidem')
} else {
    setSuccessFor(passwordconfirmation)
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