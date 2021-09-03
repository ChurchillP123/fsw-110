let form = document.myForm;
let selectMenu = document.getElementById('options');

form.addEventListener('submit', function(){
    let checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
    let restrictions = [];
    for (let i = 0; i < checkbox.length; i++) {
        restrictions.push(" " + checkbox[i].value);
    }
    alert(` 
    First Name: ${form.first_name.value}
    Last Name: ${form.last_name.value}
    Age: ${form.age.value}
    Have you shopped here before: ${form.question.value}
    How Likely: ${selectMenu.options[selectMenu.selectedIndex].value}
    Dietary Restrictions:${restrictions}`);
});