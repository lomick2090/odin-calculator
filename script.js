buttons = document.querySelectorAll('button');
screen = document.querySelector(".screen");
let input
console.log(buttons); 

function inputNumber(num) {
    let text = screen.textContent + num;
    screen.textContent = text;
    input = text;
}

buttons.forEach ((button) => 
    button.addEventListener('click', () => inputNumber(button.textContent)
    ));