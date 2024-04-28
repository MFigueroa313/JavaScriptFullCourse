

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