const aboutSelector = document.getElementById('aboutSelector');
const porjectsSelector = document.getElementById('porjectsSelector');
const contactSelector = document.getElementById('contactSelector');

[aboutSelector, porjectsSelector, contactSelector].forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Hello world');
    });
});