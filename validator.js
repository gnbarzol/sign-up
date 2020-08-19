const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("btn-submit");

function checkRequired(inputArr) {
    inputArr.forEach((input) => {
        if (input.value.trim() === "") {
            showError(input, `${input.placeholder} cannot be empty`);
        } else {
            showSuccess(input);
        }
    });
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form_control error";
    const small = formControl.querySelector("small");
    small.textContent = message;
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(input.value).trim())) {
        email.style.color = "hsl(249, 31%, 18%); ";
    } else {
        showError(input, "Looks like this is not an email");
        email.style.color = "hsl(0, 100%, 74%) ";
    }
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form_control";
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    checkRequired([firstname, lastname, email, password]);
    checkEmail(email);
});