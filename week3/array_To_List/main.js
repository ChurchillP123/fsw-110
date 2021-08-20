let h1 = document.createElement('h1');
h1.textContent = 'Hello World';
document.body.appendChild(h1);

for (let i = 0; i < 10; i++) {
    let h1 = document.createElement('h1');
    h1.textContent = 'Hello World';
    h1.style.fontStyle = 'italic';
    document.body.appendChild(h1);    
}

const names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily'];

let ul = document.createElement('ul');

for (let i = 0; i < names.length; i++) {
    //let li = document.createElement('li');
    //li.textContent = names[i];
    //ul.appendChild(li);
    ul.innerHTML += '<li>' + names[i] + '</li>';
}

document.body.appendChild(ul);