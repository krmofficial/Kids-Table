

//Table



let numEntered = document.querySelector('#enteredNumber');
let number_first =document.querySelector('#firstNumber');
numEntered.addEventListener('keyup', function(){
    let number1 = Number(numEntered.value);
    number_first.innerText = number1;
    multiplication();

});

let range = document.querySelector('#multiplier');
let number_second = document.querySelector('#secondNumber');
range.addEventListener('input', function(){
    let number2 = Number(range.value);
    number_second.innerText = number2;
    multiplication();
});

let multiplication = ()=>{
   let num1 = Number(document.querySelector('#firstNumber').innerText);
   let num2 = Number(document.querySelector('#secondNumber').innerText);
   let finalResult = num1 * num2;
   document.querySelector('#result').innerText = finalResult; 
};
