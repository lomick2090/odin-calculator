buttons = document.querySelectorAll('button');
answerbox = document.querySelector(".answerbox");
input = document.querySelector(".input");
var a = '';
var b = '';
let answer;
let operatorInUse;

function userInput(button) {
    if (button.className === 'clear'){
        a='';
        b='';
        input.textContent='';
        answerbox.textContent='';
        operatorInUse = '';
        answer = '';
    } else if (button.className === 'number') {
        inputNumber(button.textContent);
    } else if (button.className === 'operator') {
        inputOperator(button.textContent);
    } else if (button.className === 'calculate'){
        calculate();
    } else if (button.className === 'delete') {
        backspace();
    }
};

function backspace() {
    let string = input.textContent.toString();
    string = string.substring(0, (string.length - 1));
    input.textContent = string;
}

function calculate() {
    if (operatorInUse == ''){
        return;
    }
    if (answerbox.textContent != '' && input.textContent != '') {
        inputOperator(operatorInUse);
    } else if (input.textContent != '') {
        answerbox.textContent = `${a} ${operatorInUse}`;
    }

    answerbox.textContent = a;
    operatorInUse = '';
    
}

function inputOperator(operator) {

    if (a == '' || a == undefined){
        if (input.textContent != '') {
            a = parseInt(input.textContent);
            input.textContent = '';
            answerbox.textContent = `${a} ${operator}`;
        }
    } else if (input.textContent != '') {
            b = parseInt(input.textContent);
            a = doMath(a , b , operatorInUse);
            b = '';
            input.textContent = ''; 
            answerbox.textContent = `${a} ${operator}`;   
    } else {
        answerbox.textContent = `${a} ${operator}`;
    }
    

    operatorInUse = operator;


};

function doMath(a, b , operator) {
    switch (operator){
        case '+':
            answer = a + b;
            break;
        case '*':
            answer = a * b;
            break;
        case '/':
            answer = a / b;
            break;
        case '-':
            answer = a - b;
            break;
    }
    if (answer % 1 != 0 ) {answer = answer.toFixed(5);}
    answerbox.textContent = answer;
    return parseFloat(answer);
};

function inputNumber(num) {
    let text = input.textContent + num;
    input.textContent = text;
};

buttons.forEach ((button) => 
    button.addEventListener('click', () => userInput(button)
    ));