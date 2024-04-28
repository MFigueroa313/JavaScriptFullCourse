 //let age = 35;
 //let price = 10.99;
 //let gpa = 5000000

 
 //console.log(`you are ${age} years old`);
 //console.log(`The price is $${price}`);
 //console.log(`your gpa is ${gpa}`);

 //let firstname = "Michael";

 //console.log(`your name is ${firstname}`);

//let online = true

//console.log(`Michael is online: ${online}`);

/* arithmetic operators = operands (values, variables, etc.)
                                operators (+ - * /)
                                ex. 11 = x + 5;
                                
*/
/*
                                   operator precedence
                                      1. parenthsis 
                                      2. exponents
                           3. multiplication & divison & modulo
                                 4. addition & subtraction
*/

//let students = 30;
//student = students +=1;

//console.log(student);
//let result = 6 / 128; 

//console.log(result);


/* 
                                  how to accept user input

                                1. easy way = window prompt
                                2. professinal way = HTML textbox
*/

 //let username = window.prompt("whats your username??");
 //console.log(username);\
 
    //document.getElementById("mySubmit").onclick = function(){
    //username =  document.getElementById("myText").value
    //document.getElementById("myH1").textContent = `hello ${username}`
    //}

    /* 
        type conversion -- change the datatype of ta value to another
                           (strings, numbers, booleans)
    */                       

    /*
    let age = window.prompt("How old are you?");
    age = Number(age);
    age+=1;

    console.log(age, typeof age);
    */


/*
               type conversion = change the datatype of a value to another 
                                (string, number, booleans)
*/

/*
let x = "pizza"
let y = "pizza"
let z = "pizza"

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);                
*/

// const = a variable that can't be changed

/*
const PI = 3.14159;
let radius;
let circumfrence;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumfrence = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumfrence + "cm";

}

*/

                              //counter program

/*

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

*/

/*
                    Math = built-in object that provides a 
                           collection of and methods
*/

/*

let x = 3;
let y = 2;
let z = 1;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x, y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x);
let max = Math.max(x, y, z);
let min = Math.min(x, y, z);

console.log(max);

*/

                               //Random number generator

/*

const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;


myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;

}

*/


                   // IF statements = if a condition is true, execute some code
                                    //if not, do something else
/*

let age = 14
if(age >= 18){
    console.log("you are old enought to enter this website");

}
else{
    console.log("you must me 18+ to enter this site");
}

*/
/////////////////
/*

let time = 11;

if(time < 12){
    console.log("good morning! :)");
}
else{
    console.log("good afternoon! :)")
}

*/
/////////////////
/*
let isStudent = true;

if(isStudent){
    console.log("you are a student!");
}
else{ 
    console.log("you are not a student")
}

*/
////////////////

/*
let age = 17;
let hasLicense = true;

if(age >= 16){
    console.log("you are old enough to drive!");

    if(hasLicense){
        console.log("you do have your license!");
    }
    else{
        console.log("you don't have your license");
    }
}
else{
    console.log("you must be 16+ to have a license");
}

*/
/////////////////////////////


/*
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement")
let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent = `You are TOO OLD for this site!`;
    }
    else if(age < 0){
            resultElement.textContent = `your age can't be below 0`;
        }
    else if(age == 0){
        resultElement.textContent = `You can't enter this site you were just born!`;
    }
    else if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site!`;
    }
    else if(age <= 18){
            resultElement.textContent = `You must be 18+ to enter this site!`;
        }
 }

 */

 ///////////////////////////

// .checked = property that determines the checked stat of an 
//            HTML checkbox or radio button

/*

const myCheckBox = document.getElementById("myCheckBox");
const VisaBtn = document.getElementById("VisaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");


mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are sucbribed`;  
    }
    else{
        subResult.textContent = `You are not subscribed`;
    }
    if(VisaBtn.checked){
        paymentResult.textContent = ` You are paying with visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent =  `You are paying with Mastercard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent =  `You are paying with Paypal`;
    }
    else{
        paymentResult.textContent = `You must select a payment type`
    }


}


*/


//////////////

// ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;

let age = 21; 
let message = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message);