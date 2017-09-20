/*jslint es6 */

let pointerHeight = 1000;
let element = document.querySelector('.tile');
let elementRect = element.getBoundingClientRect();
let elementCenter = {x: elementRect.left + (elementRect.width / 2), y: elementRect.top + (elementRect.height / 2)};
let elementBackground = element.querySelector('.tile-background');
let elementContent = element.querySelector('.tile-content')

document.addEventListener('mousemove', function (event) {
    let angleX = ((Math.atan(pointerHeight / (elementCenter.x - event.clientX)) * 180 / Math.PI) - 90);
    if(angleX < -90) {
        angleX = angleX - 180;
    }
    let angleY = ((Math.atan(pointerHeight / (elementCenter.y - event.clientY)) * 180 / Math.PI) - 90);
    if(angleY < -90) {
        angleY = angleY - 180;
    }
    elementBackground.style.transform = "rotateY(" + angleX + "deg) rotateX(" + -angleY + "deg)";
    elementContent.style.transform = "rotateY(" + angleX + "deg) rotateX(" + -angleY + "deg) translateZ(50px)";
    elementContent.style.transition = "all 10ms ease-in-out"
});

document.addEventListener('mouseleave', function (event) {
    elementBackground.style.transform = "rotateY(0deg) rotateX(0deg)";
    elementContent.style.transform = "rotateY(0deg) rotateX(0deg) translateZ(50px)";
    elementContent.style.transition = "all 10ms ease-in-out"
});

elementBackground.style.transform = "rotateY(0deg) rotateX(0deg)";
elementContent.style.transform = "rotateY(0deg) rotateX(0deg) translateZ(50px)";
elementContent.style.transition = "all 10ms ease-in-out"