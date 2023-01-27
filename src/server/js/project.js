class Project extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode:"open"});

        // Prevent to repit the fetch petition
        this.change = false;

        // Prevent the initialization of of the image with the index 0 
        this.loadedImages = false;

        // Identify the item that we will get
        this.id = this.getAttribute('value');

        // The file reference to the Json file
        this.fileReference = this.getAttribute('fileReference');

        // project object
        this.project = undefined;

        // Declaration of the main variables of the project card
        this.index = 0;
        this.title = "Paracuantutirimicuaro";
        this.images = [];
        this.image = undefined;
        this.description = "This is the ugliest animal";
        this.gitHub = undefined;
        this.live = undefined;

    }

    static get styles() {
        return `
        .project,
        .project__move,
        .project__left,
        .project__right,
        .project__choose,
        .icons,
        .project__images {
            display: flex;
        }

        .project {
            flex-flow: column nowrap;
        }

        .project__move,
        .project__left,
        .project__right,
        .icons,
        .project__images  {
            flex-flow: row wrap;
        }     
        
        .project__images {
            position: relative;
        } 
        
        .project__move {
            position: absolute;
        }
        
        .project__move,
        .project__choose {
            justify-content: space-between;
        }

        .project__left,
        .project__right,
        .project__choose,
        .icons,
        .category--projects,
        .project__images {
            align-content: center;
        }

        .project__left,
        .project__right,
        .project__images {
            justify-content: center;
        }

        .project__images,
        .project,
        .project__move,
        .icon__img,
        .icon__access,
        .icons__img {
            width: 100%;
        }

        .project {
            gap: 20px;
        }

        .project {
            padding: 10px;
        }
        
        .project {
            width: 280px;
        }
        
        .project__images {
            height: 192px;
            background-color: red;
        } 
        
        .project__img {
            width: 100%;
        }
        
        .project__move,
        .project__left,
        .project__right,
        .icon__img,
        .icon__access,
        .icons__img { 
            height: 100%;
        } 
        
        .project__move,
        .project__left,
        .project__right {
            top: 0;
        }
        
        .project__move {
            left: 0;
        }
        
        .project__left,
        .project__right {
            width: 2em;
        }
        
        .icons {
            width: 90px;
            height: 90px;
            margin: 0;
        } 

        .project__title {
            font-size: 1rem;
            font-weight: 600;
        }

        .project__description {
            text-align: justify;
        }

        .category__title {
            color: var(--eden);
        }

        .project__description {
            color: var(--text);
        }

        .project {
            /* background: var(--teal-blue); */
            border-radius: 8px;
            box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.301);
        }

        .project__move {
            background: transparent;
        }
        
        .project__left,
        .project__right {
            background: var(--ice);
        }
        
        .project__left,
        .project__right {
            opacity: .1; 
        }

        .icons:active,
        .project__left:active,
        .project__right:active {
            transform: scale(.99);
            opacity: .9;
        }

        .project__left:hover,
        .project__right:hover {
            opacity: 1;
        }

        .project__left,
        .project__right,
        .icons {
            cursor: pointer;
        } 

        .project__left,
        .project__right {
            user-select: none;
        }

        @media (max-width: 606px) {
            .project {
                width: 100%;
            }
        }
        `;
    }

    goLeft() {
        if(this.index === 0) {
            this.index = this.images.length - 1;
        } else {
            this.index--;
        }

        this.image = this.images[this.index];
        
        this.connectedCallback();
    }

    goRight() {
        if(this.index === this.images.length - 1) {
            this.index = 0;
        } else {
            this.index++;
        }

        this.image = this.images[this.index];

        this.connectedCallback();
    }

    connectedCallback() {
        if(!this.change) {

            // Fetch especifications
            const option = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                cache: 'default',
                mode: 'cors'
            };
    
            fetch(this.fileReference, option)
                .then((response) => {
                    if(response.ok) {
                        return response.json();
                    } else {
                        return {
                            error: true,
                            status: response.status
                        }
                    }
                })
                .then((response) => {
                    for(let key in response) {
                        if(response[key].id === Number(this.id)) {
                            this.object = response[key];
                            this.change = true;
                            this.connectedCallback();
                            return;
                        }
                    }
                })
                .catch((error) => console.log(error.status))
        } else {
            // Re initialization of the main variables of the project card
            this.title = this.object.title;
            this.description = this.object.description;
            this.gitHub = this.object.github;
            this.live = this.object.live;
            
            if(!this.loadedImages) {
                this.images = this.object.images;
                
                // this.index = 0;
                // this.image = this.images[this.index];
                // for(let img in this.images) {
                //     this.goLeft();
                //     this.render();
                // }

                this.index = 0;
                this.image = this.images[this.index];

                this.loadedImages = true;
            }

            // console.log(this.images);
            // console.log(this.image);
            // console.log(this.index)
            this.render();
    
            // Getting the left ands right buttons
            this.left = this.shadowRoot.getElementById("left");
    
            this.right = this.shadowRoot.getElementById("right");
    
            // Adding evending to move thought the images
            this.left.onclick = () => this.goLeft();
    
            this.right.onclick = () => this.goRight();
    
            // Getting the image element
            this.imageElement = this.shadowRoot.getElementById("image");
        }

    }

    disconnectedCallback() {}

    render() {
        this.shadowRoot.innerHTML = 
        `
            <style>${Project.styles}</style>
            <div class="project">
                <h2 class="project__title">${this.title}</h2>

                <section class="project__images" title="project title">
                    <img src="${this.image}" class="project__img" alt="Image of the product" id="image">
                    
                    <div class="project__move">
                        <div class="project__left" id="left"><</div>
                        <div class="project__right" id="right">></div>
                    </div>
                </section>

                <p class="project__description">${this.description}​</p>

                <section class="project__choose">
                    <figure class="icons">
                        <a href="${this.gitHub}" class="icon__access" target="_blank">
                            <img src="./assets/images/github.svg" alt="GitHub icon" title="Go to check the code" class="icons__img">
                        </a>
                    </figure>

                    <figure class="icons">
                        <a href="${this.live}" class="icon__access" target="_blank">
                            <img src="./assets/images/internet.png" alt="internet icon" title="Go to check the in live" class="icons__img">
                        </a>
                    </figure>
                </section>
            </div>
        `;
    }
}

customElements.define('app-project', Project);