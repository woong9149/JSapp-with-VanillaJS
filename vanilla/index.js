/*
//variables
let a = 221;
let b = a -5;
a = 4;
console.log(b, a);

//const
const a = 221;
let b =a - 5;
a = 4; // error 

//var
const a = 221;
let b =a - 5;
a = 4;

//data type
const what = "Nicolas"; //String
const what2 = true; //boolean 1:true, 0:false

//array
const something = "something";
const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun",something];
console.log(daysOfWeek);

//object
const nicoInfo = {
    name:"Nico",
    age:33,
    gender:"Male",
    isHandsome:true,
    favMovies :["Along the gods","Load Of The Ring"],
    favFood: [
        {
            name:"Kimchi",
            fatty: false
        },
        {
            name:"cheese burger",
            fatty:true
        }
    ]
}

console.log(nicoInfo);
console.log(nicoInfo.gender); // nicoInfo의 gender에만 접근

nicoInfo.gender ="Female" //nicoInfo.gender의 값을 변경

//function
function sayHello(name, age){
    // console.log('Hello', name," you have ",age," yo");
    return `Hello ${name} you are ${age} yo`;
}

const greetNicolas = sayHello("Nicolas", 15);

console.log(greetNicolas);

const calculator = {
    plus : function(a,b){
        return a + b + ' ';
    },
    min : function(a,b){
        return a - b + ' ';
    },
    multiple : function(a,b){
        return a * b + ' ';
    },
    divide : function(a,b){
        return a / b + ' ';
    },
    power : function(a,b){
        return a ** b + ' ' ;
    }
}

const plus = calculator.plus(5,5);
const min = calculator.plus(5,5);
const multiple = calculator.plus(5,5);
const divide = calculator.plus(5,5);
const power = calculator.plus(5,5);
console.log(plus,min,multiple,divide,power);
*/
const title = document.querySelector("#title");
// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";
const CLICKED_CLASS = "clicked";


// function handleResize(event){
//     console.log(event);
// }

// window.addEventListener("resize", handleResize);

// function handleClick(event){
//     title.style.color = "blue";
// }

// window.addEventListener("click", handleClick);


//if
const age = prompt("How old are yout?");

if(age >= 18 && age <=21){
    console.log("you can drink but you should not");
}else if(age > 21){
    console.log("go ahead");
}else{
    console.log("too young");
}

// function handleClick2(){
//     const currentColor = title.style.color;
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }else{
//         title.style.color = BASE_COLOR;
//     }
// }

function handleOffline(){
    console.log("Bye bye");
}

function handleOnline(){
    console.log("Welcome Back !");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online",handleOnline);

function handleClick2(){
    // const hassClass = title.classList.contains(CLICKED_CLASS);
    // if(!hassClass){
    //     title.classList.add(CLICKED_CLASS);
    // }else{
    //     title.classList.remove(CLICKED_CLASS);
    // }
    title.classList.toggle(CLICKED_CLASS);//위에 주석부분을 toggle로 처리할 수 있음
}


function init(){
    // title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick2);
}
init();
