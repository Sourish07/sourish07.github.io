class Head extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    
        <link rel="stylesheet" type="text/css" href="blog.css">
        <link rel="icon" href="resources/images/CenterPiecePhoto.JPG">
        <title>Sourish Shares!</title>
        
    `;
    }
}

customElements.define('my-head', Head);