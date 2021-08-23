//appending 5 h2 elements to the DOM
for (let i = 0; i < 5; i++) {
    let h2 = document.createElement('h2');
    h2.textContent = 'JS DOM!!!';
    document.body.appendChild(h2);
}

//styling all 5 h2 elements using querySelector
let h2S = document.querySelectorAll('h2');

for (let i = 0; i < h2S.length; i++) {
    h2S[i].style.fontSize = '20px';
    h2S[i].style.fontWeight = 'lighter';
    h2S[i].style.fontFamily - 'sans-serif';
    h2S[i].style.color = 'cornflowerblue';
}

//adding a class to all the elements using classList
for (let i = 0; i < h2S.length; i++) {
    h2S[i].classList.add('border');
}





