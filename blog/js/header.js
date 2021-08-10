class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css?family=Lato:100,300&display=swap');
            
            .header {
                font-family: 'Lato', sans-serif;
                display: flex;
                justify-content: space-between;
                background: #e62b1e;
                margin: 0;
                color: white;
                padding: 10px;
            }
            
            .right {
                display: flex;
                align-items: center;
            }
            
            .right a:link,
            .right a:hover,
            .right a:active,
            .right a:visited {
                color: white;
                text-decoration: none;
            }
            
        </style>
        <div class="header">
            <div class="left">
                <h1>Sourish Shares!</h1>
            </div>
            <div class="right">
                <a href="/">Personal Website</a>
            </div>
        </div>
        
    `;
    }
}

customElements.define('page-header', Header);