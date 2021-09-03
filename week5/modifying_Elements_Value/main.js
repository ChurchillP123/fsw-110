let name = document.getElementById('name');
let school = document.getElementById('school');
let age = document.getElementById('age');

//Accessing the form and adding an event handler to the form not the submit button
let form = document.getElementById('myForm');

form.addEventListener('submit', function(){
    alert(`Name: ${name.value} \nSchool: ${school.value} \nAge: ${age.value}`);
    name.value = "";
    school.value = "";
    age.value = "";
});