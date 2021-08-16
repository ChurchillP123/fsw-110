let nav = document.createElement('nav');
nav.style.backgroundColor = 'black';
nav.style.float = 'right';

let a1 = document.createElement('a');
a1.setAttribute('href', '#news');
a1.textContent = 'News';
a1.style.color = 'blue';

let a2 = document.createElement('a');
a2.setAttribute('href', '#maps');
a2.textContent = 'Maps';
a2.style.color = 'red';

let a3 = document.createElement('a');
a3.setAttribute('href', '#contact');
a3.textContent = 'Contact';
a3.style.color = 'green';

function styleNavLinks(...args) {
    for (a of args) {
        a.style.padding = '12px';
        a.style.fontWeight = 'bold';
        a.style.fontSize = '20px';
    }
}

styleNavLinks(a1, a2, a3);
nav.append(a1, a2, a3);
document.body.appendChild(nav);

let h1 = document.createElement('h1');
h1.textContent = 'My First Header';
document.body.appendChild(h1);

let p1 = document.createElement('p');
p1.textContent = 'This is my First Paragraph';
document.body.appendChild(p1);

let ol = document.createElement('ol');
let li1 = document.createElement('li');
li1.textContent = 'HTML';
let li2 = document.createElement('li');
li2.textContent = 'CSS';
let li3 = document.createElement('li');
li3.innerHTML = '<b>JAVASCRIPT</b>';
ol.append(li1, li2, li3);
document.body.appendChild(ol);

let footer = document.createElement('footer');
let p2 = document.createElement('p');
p2.innerHTML = 'Website Created by Churchill Perry <br> churchill.perry@bryanuniversity.edu';
p2.style.fontStyle = 'italic';
footer.appendChild(p2);
document.body.appendChild(footer); 