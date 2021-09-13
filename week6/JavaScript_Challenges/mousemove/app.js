let box = document.querySelector('.red-box');

box.addEventListener('mousemove', function(e){
    box.textContent = `(x: ${e.x}, y: ${e.y})`;
});