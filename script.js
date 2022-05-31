
// variables
const form = document.getElementById("form");
const userName = document.getElementById("username");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("repassword");

function error(input, message) {
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback"
}
function success(input) {
    input.className = 'form-control is-valid'
}
const validateEmail = (input) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, "hatalı bir email adresi girdiniz..");
    }

};
function checkRequired(input) {
    if (input.value === '') {
        error(input, `${input.id} is required.`)
    } else {
        success(input)
    }
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} en az ${min} karakter olmalıdır..`);
    } else if (input.value.length > max) {
        error(input, `${input.id} en fazla ${max} karakter olmalıdır..`);
    } else {
        success(input);
    }
}
function checkRepassword(input, reinput){
    if (input.value === reinput.value) {
        success(reinput);
    }else{
        error(reinput, `password ile repassword aynı olmalıdır...`)
    }
}
function checkPhone(input) {
    let exp = /^\d{10}$/
    if (exp.test(input.value)) {
        success(input)
    }else{
        error(input, 'Telefon 10 karakterli olmalıdır..')
    }
}
form.addEventListener("submit", function (event) {
    event.preventDefault();

    checkRequired(userName)
    validateEmail(email)
    checkRequired(password)
    checkRequired(rePassword)

    checkLength(userName, 5, 15)
    checkLength(password, 6, 16)
    checkRepassword(password, rePassword)
    checkPhone(phone)
})
// function userValidation(){
//     if (userName.value === '') {
//         document.getElementById("user-error").innerHTML = "Username must not be empty";
//     }else if (userName.value.length > 10 ){
//         document.getElementById("user-error").innerHTML = "Username more not 10 character ";
//     }
// }