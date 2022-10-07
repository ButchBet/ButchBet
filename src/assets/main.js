const aboutSelector = document.getElementById('aboutSelector');
const porjectsSelector = document.getElementById('porjectsSelector');
const contactSelector = document.getElementById('contactSelector');

// Script to prevent the default behavour of some elements
[aboutSelector, porjectsSelector, contactSelector].forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Hello world');
    });
});