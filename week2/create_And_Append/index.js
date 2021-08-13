let h1 = document.createElement('h1');
h1.textContent = 'Welcome to my JS site';

let p = document.createElement('p');
p.textContent = "All of this was created with Javascript";

let ol = document.createElement('ol');

let li1 = document.createElement('li');
li1.textContent = 'First Item';
ol.appendChild(li1);

let li2 = document.createElement('li');
li2.textContent = 'Second Item';
ol.appendChild(li2);

let li3 = document.createElement('li');
li3.textContent = 'Third Item';
ol.appendChild(li3);

document.body.append(h1, p, ol);