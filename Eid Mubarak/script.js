let envelope = document.getElementById('envelope');
let wishCard = document.getElementById('wishCard');
let topCover = document.getElementById('topCover');
let bottomCover = document.getElementById('bottomCover');
let leftCover = document.getElementById('leftCover');
let rightCover = document.getElementById('rightCover');
let container = document.getElementById('container');

let isOpen = false;

envelope.addEventListener('click', () => {
    if (!isOpen) {
        isOpen = true;
        envelope.style = `
            transform: translateY(450px);
            // opacity: 0;
        `;

        wishCard.style = `
            transform: translateY(-460px);
        `;

        topCover.style = `
            border-top: 155px solid #dbb509;
            transform: rotateX(180deg) translateY(-3px);
            z-index:1;
        `;

        
    } else {
        isOpen = false;
        envelope.style = `
            transform: translateX(0px);
        `;

        topCover.style = `
            transform: rotateX(0deg);
            z-index:4;
            transition: 9s all;
        `;
        
        wishCard.style = `
        transform: translateX(0px);
        z-index: 2;
    `;
   
    }

});
