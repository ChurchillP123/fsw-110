//create a square 
let square = document.createElement('div');
square.style.width = '150px';
square.style.height = '150px';
square.style.backgroundColor = 'white';
square.style.margin = '0 auto';
square.style.marginTop = '20px';
square.style.border = '2px solid black';
document.body.appendChild(square);

//creating some h1 content for scrolling purposes
for (let i = 0; i < 12; i++) {
    let h1 = document.createElement('h1');
    h1.textContent = 'Hello World';
    document.body.appendChild(h1);
}

//on page load, change box to black color
window.addEventListener('load', function(){
    square.style.backgroundColor = 'black';
});

//on hovering over square, color changes to green
square.addEventListener('mouseover', function(){
    square.style.backgroundColor = 'green';
});

square.addEventListener('mousedown', function(){
    square.style.backgroundColor = 'yellow';
});

square.addEventListener('mouseup', function(){
    square.style.backgroundColor = 'blue';
});

//double click box, and it turns red
square.addEventListener('dblclick', function(){
    square.style.backgroundColor = 'red';
});

window.addEventListener('scroll', function(){
    square.style.backgroundColor = 'purple';
})

function setSquareBackgroundColor(color) {
    square.style.backgroundColor = color;
}

window.addEventListener('keydown', function(event){
   switch(event.which) {
       case 82:
           setSquareBackgroundColor('red');
           break;
        case 71:
            setSquareBackgroundColor('green');
            break;
        case 66:
            setSquareBackgroundColor('blue');
            break;
   }
});