let output=document.querySelector("#output");
let button=document.querySelectorAll(".num");
let piButton=document.querySelector("#pi");
let currentNumber="";
let previousNumber="";
let operator="";
let userInput="";
const PI=3.142; 
isPiSelected= false;

function calculate(a,b,op){
    a=Number(a);
    b=Number(b);
    if(op=="+") return a+b;
    if(op=="-") return a-b;
    if(op=="X") return a*b;
    if(op=="/") return b!=0?a/b:"Error";
    if(op=="%") return a%b;
    return 0;
}

button.forEach(button =>{
    button.addEventListener("click",()=>{
        let value=button.innerHTML;
        piButton.addEventListener("click",()=>{
            currentNumber=PI;
            output.innerHTML=userInput+currentNumber;
        });
        if(value==="AC"){
            currentNumber="";
            previousNumber="";
            operator="";
            userInput="";
            output.innerHTML="";
        }
        else if(value==="+" || value==="-" || value==="X" || value==="/" || value==="%"){
            if(currentNumber!=""){
                if(previousNumber!=""){
                    previousNumber=calculate(previousNumber,currentNumber,operator);
                }
                else{
                    previousNumber=currentNumber;
                }
                currentNumber="";
                operator=value;
                userInput=previousNumber+operator;
                output.innerHTML=userInput;
            }
        }
        else if(value==="="){
            if(isPiSelected){
                output.innerHTML=PI;
                currentNumber=PI.toString();
                previousNumber="";
                operator="";
                userInput=currentNumber;
                isPiSelected=false;
            }
            else if(previousNumber!="" && currentNumber!="" && operator!=""){
                let result=calculate(previousNumber,currentNumber,operator);
                output.innerHTML=result;
                currentNumber=result.toString();
                previousNumber="";
                operator="";
                userInput=currentNumber;
            }
        }
        else{
            currentNumber+=value;
            output.innerHTML=userInput+currentNumber;
        }
    });
});