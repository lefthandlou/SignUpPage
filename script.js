const password = document.querySelector('.password');

let passwordLengthMsg = document.querySelector('.pwdLengthMsg');
let passNoMatch = document.querySelector('.pwdNoMatch');

const pw1 = document.querySelector('.pwd1');
const pw2 = document.querySelector('.pwd2');

const patterns = {
    password: /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,}))/
};

function validatePassword(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'error';
    }
}

password.addEventListener('keyup', (e) => {
    validatePassword(e.target, patterns[e.target.attributes.name.value])
    if (pw1.classList.contains('valid')) {
        pw1.style.backgroundColor="#bef3ca"
    }
});

password.addEventListener('focusout', () => {
    alertMessage();
})

function alertMessage() {
    if (pw1.classList.contains("error")) {
        pw1.style.backgroundColor= "#FFC06F";
        passwordLengthMsg.style.display = 'block';
    } else if (pw1.classList.contains("valid")) {
        passwordLengthMsg.style.display= 'none';
    }
}

function matchPass() {
    let a = pw1.value;
    let b = pw2.value;
    if (a != b) {
        pw2.style.backgroundColor= "#FFC06F";
        passNoMatch.style.display= 'block';
    }
    else if (a==b) {
        pw2.style.backgroundColor="#bef3ca"
        passNoMatch.style.display= 'none';  
    }
}

pw2.addEventListener('focusout', ()=> {
    matchPass();
})