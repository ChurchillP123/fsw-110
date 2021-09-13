// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

let submit = document.getElementById('submit');
submit.addEventListener('submit', function(e) {
    e.preventDefault();
});