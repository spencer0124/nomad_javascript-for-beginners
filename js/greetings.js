const loginInput = document.querySelector('#login-form input');
const loginForm = document.querySelector('#login-form');
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY", username);
    console.log(username);
    paintGrettings(username);
}

function paintGrettings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedusername = localStorage.getItem("USERNAME_KEY");
console.log(savedusername);

if(savedusername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGrettings(savedusername);
    
}
