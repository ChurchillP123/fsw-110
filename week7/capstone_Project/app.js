let title = document.getElementById('title');
let description = document.getElementById('description');
let form = document.getElementById('myForm');
let ul = document.getElementById('todo-list');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let parentList = document.createElement('li');
    parentList.className = 'parentList';
    let subList = document.createElement('ul');
    let nestedList = document.createElement('li');

    parentList.textContent = title.value;
    nestedList.textContent = description.value;
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', (e)=> {
        let removeBtn = e.target;
        removeBtn.parentNode.parentNode.parentNode.remove();
    });
    
    ul.appendChild(parentList);
    parentList.appendChild(subList);
    subList.appendChild(nestedList); 
    nestedList.appendChild(deleteBtn);
    title.value = "";
    description.value = "";
});








