class BlogContent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const title = this.attributes.title.value;
        const img = this.attributes.img.value
        const subheader = this.attributes.subheader.value
        this.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css?family=Lato:100,300&display=swap');
            .blog-container {
                font-family: 'Lato', sans-serif;
                background: white;
                width: auto;
                max-width: 800px;
                margin: 0 auto;
            }
            
            .blog-header {
                margin-bottom: 30px;
            }
            
            h2 {
                font-size: 2.5rem;
                margin: 0;
                padding: 20px 0 0 0;
                text-align: center;
            }
            .blog-header img {
                display: block;
                width: 95%;
                max-width: 600px;
                margin: 0 auto;
                /*padding: 10px;*/
            }
            
            .blog-header p {
                text-align: center;
            }
            
            .reading-level {
                display: flex;
                justify-content: space-around;
                max-width: 600px;
                margin: 0 auto;
                font-size: 1.5rem;
            }
            
            .reading-level-selected {
                color: #e62b1e;
                cursor: pointer;
                
                background: 
                    linear-gradient(currentColor 0 0)
                    100% 100% / 100% 2px
                    no-repeat;
            }
            
            .text {
                padding: 0 10px;
            }
            
            .content p {
                font-size: 18px;
            }
            
            /*https://dev.to/afif/100-underline-overlay-animation-the-ultimate-css-collection-4p40*/
            .reading-level-unselected {
                cursor: pointer;
                background: 
                    linear-gradient(currentColor 0 0) 
                    var(--p, 0) 100% / var(--d, 0) 2px 
                    no-repeat;
                transition: 0.3s, background-position 0s 0.3s;
            }
            
            .reading-level-unselected:hover {
              --d: 100%;
              --p: 100%;
            }
            
            .image-container {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .image-container img {
                width: 50%;
                max-height: 50%;
            }
            
            /*Footer*/
            .footer {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 35px 0;
            }
            
            .email-link {
                text-decoration: none;
                color: #e62b1e;
            }
            
        </style>
        <div class="blog-container">
            <div class="blog-header">
                <h2>${title}</h2>
                <p class="author">By Sourish Kundu</p>
                <img src="${img}">
                <p>${subheader}</p>
            </div>
            <div class="reading-level">
                <div id="non-technical-link" class="reading-level-selected">Non-Technical</div>
                <div id="technical-link" class="reading-level-unselected">Technical</div>
            </div>
            <div class="content">
            
            </div>
            <br/>
            <hr style="width: 95%">
            <div class="footer">
                <div>Questions or comments?</div>
                <div>Contact me at <a class="email-link" 
                                      href="mailto:sourish@cs.wisc.edu">sourish@cs.wisc.edu</a></div>
            </div>
        </div>
    `;
    }
}

customElements.define('blog-content', BlogContent);
