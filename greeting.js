const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_ON = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_ON)
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        
    }else{
        paintGreeting(currentUser);
    }
}

function init(){

}
init();