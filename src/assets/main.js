import './server/js/project.js';

const aboutSelector = document.getElementById('aboutSelector');
const porjectsSelector = document.getElementById('porjectsSelector');
const contactSelector = document.getElementById('contactSelector');
const cvButton = document.getElementById('cvButton');
const pdfJsViewer = document.getElementById('pdfJsViewer');
const projects = document.getElementById('projects');

const fileReference = "./server/json/projects.json"; 

// Script to prevent the default behavour of some elements
[aboutSelector, porjectsSelector, contactSelector].forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Hello world');
    });
});

// Script to create the insteraction in some elements when get clicked
[cvButton,].forEach((element) => {
    element.addEventListener('click', (e) => {
        switch (e.target.id) {
            case 'cvButton':
                    pdfJsViewer.classList.toggle('hidden');

                    // condition to change the text contenct in the cv button
                    if(!pdfJsViewer.classList.contains('hidden')) {
                        cvButton.textContent = 'Hidde my cv';
                    } else {
                        cvButton.textContent = 'Check my cv';
                    }
                break;
    
            default:
                break;
        }    
    });
});


