const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("btn-submit");

function checkRequired(input) {
    if (input.value.trim() === "") {
        showError(input, `${input.placeholder} cannot be empty`);
    } else {
        showSuccess(input);
    }
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form_control error";
    const small = formControl.querySelector("small");
    small.textContent = message;
    input.style = "border: 1px solid hsl(0, 100%, 74%);";
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(input.value).trim())) {
        email.style.color = "hsl(249, 31%, 18%) ";
    } else {
        showError(input, "Looks like this is not an email");
        email.style.color = "hsl(0, 100%, 74%) ";
    }
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form_control";
    input.style = "border: 1px solid hsl(248, 32%, 49%);";

}

firstname.addEventListener("input", ()=>{
    checkRequired(firstname);
});

lastname.addEventListener("input", ()=>{
    checkRequired(lastname);
});

email.addEventListener("input", ()=>{
    checkRequired(email);
    checkEmail(email);
});

password.addEventListener("input", ()=>{
    checkRequired(password);
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    checkRequired(firstname);
    checkRequired(lastname);
    checkRequired(email);
    checkRequired(password);
});