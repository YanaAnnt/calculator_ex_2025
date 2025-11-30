const display=document.querySelector('.display');
display.style.minHeight = '100px'; 
display.innerText = '';
const numberButtons=document.querySelectorAll('.number');
numberButtons.forEach(button=> {
    button.addEventListener('click',function() {
        display.innerText=display.innerText+button.innerText;
    });
});

let selectedOperator = '';
const opButtons=document.querySelectorAll('.operations button');
opButtons.forEach(op =>{
    op.addEventListener('click',function(){
        selectedOperator = op.innerText;
        display.innerText=display.innerText+selectedOperator;
    });
});

const equalButton=document.querySelector('#equal');
equalButton.addEventListener('click',function(){

    const parts=display.innerText.split(selectedOperator);

    const num1=Number(parts[0]);// Number הופך טקסט למספר  
    const num2=Number(parts[1]);
    
    if(selectedOperator==='+')
        display.innerText=num1+num2;
    else if(selectedOperator==='-')
         display.innerText=num1-num2;
        else if(selectedOperator==='*')
         display.innerText=num1*num2;
        else if(selectedOperator==='/')
         display.innerText=num1/num2;
});

const clearButton=document.querySelector('#clear');
clearButton.addEventListener('click',function(){
    display.innerText='';
    selectedOperator='';
});
