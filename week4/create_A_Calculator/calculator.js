let h1 = document.createElement('h1');
h1.textContent = 'Basic Calculator';
document.body.appendChild(h1);

//First Addition Operation
let divAdd = document.createElement('div');
divAdd.textContent = "Add 2 Numbers";
divAdd.style.backgroundColor = 'lightgreen';
document.body.appendChild(divAdd);
let firstNum = document.createElement('input');
divAdd.appendChild(firstNum);
let secondNum = document.createElement('input');
divAdd.appendChild(secondNum);
let answer = document.createElement('button');
answer.textContent = '=';
divAdd.appendChild(answer);

//Second Div for Subtraction
let divSub = document.createElement('div');
divSub.textContent = "Subtract 2 Numbers";
divSub.style.backgroundColor = 'lightblue';
document.body.appendChild(divSub);
let first = document.createElement('input');
divSub.appendChild(first);
let second = document.createElement('input');
divSub.appendChild(second);
let answer2 = document.createElement('button');
answer2.textContent = '=';
divSub.appendChild(answer2);

//Third Div for Multiplication
let divMul= document.createElement('div');
divMul.textContent = "Multiply 2 Numbers";
divMul.style.backgroundColor = 'grey';
document.body.appendChild(divMul);
let one = document.createElement('input');
divMul.appendChild(one);
let two = document.createElement('input');
divMul.appendChild(two);
let answer3 = document.createElement('button');
answer3.textContent = '=';
divMul.appendChild(answer3);

//styling
let divs = document.querySelectorAll('div');
for (let i = 0; i < divs.length; i++) {
    divs[i].style.margin = '10px';
}

//styling
let inputs = document.querySelectorAll('input');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.margin = '5px';
}

let h2 = document.createElement('h2');
h2.textContent = 'Answers';
document.body.appendChild(h2);
let ul = document.createElement('ul');
document.body.appendChild(ul);

//event Handlers to take care of if user did not enter a number
answer.addEventListener('click', function(){
    if (firstNum.value == '' || secondNum.value == '') {
        alert('Enter a number first');
    }
    else {
        let li = document.createElement('li');
        li.textContent = Number(firstNum.value) + Number(secondNum.value);
        ul.appendChild(li);
    }
});

answer2.addEventListener('click', function(){
    if (first.value == '' || second.value == '') {
        alert('Enter a number first');

    } else {
        let li = document.createElement('li');
        li.textContent = Number(first.value) - Number(second.value);
        ul.appendChild(li);
    }
});

answer3.addEventListener('click', function(){
    if (one.value == '' || two.value == '') {
        alert('Enter a number first');
    
    } else {
        let li = document.createElement('li');
        li.textContent = Number(one.value) * Number(two.value);
        ul.appendChild(li);
    }
});