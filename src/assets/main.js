import './server/js/project.js';

const aboutSelector = document.getElementById('aboutSelector');
const about = document.getElementById('about');
const porjectsSelector = document.getElementById('porjectsSelector');
const projects = document.getElementById('projects');
const contactSelector = document.getElementById('contactSelector');
const contact = document.getElementById('contact');
// const cvButton = document.getElementById('cvButton');
const pdfJsViewer = document.getElementById('pdfJsViewer');
const categoryTitle = document.getElementById('categoryTitle');

const fileReference = "./server/json/projects.json"; 

// Script to create the insteraction in some elements when get clicked
[aboutSelector, porjectsSelector, contactSelector].forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();

        switch (e.target.id) {
            // case 'cvButton':
                    // pdfJsViewer.classList.toggle('hidden');

                    // // condition to change the text contenct in the cv button
                    // if(!pdfJsViewer.classList.contains('hidden')) {
                    //     cvButton.textContent = 'Hidde my cv';
                    // } else {
                    //     cvButton.textContent = 'Check my cv';
                    // }
                // break;

            case 'aboutSelector':
                    if(about.classList.contains('hidden')) {
                        categoryTitle.textContent = 'About';
                        about.classList.toggle('hidden');
                        projects.classList.toggle('hidden');
                    } 
                break;
            
            case 'porjectsSelector':
                    if(projects.classList.contains('hidden')) {
                        categoryTitle.textContent = 'Projects';
                        projects.classList.toggle('hidden');
                        about.classList.toggle('hidden');
                    }
                break;
            default:
                break;
        }    
    });
});


