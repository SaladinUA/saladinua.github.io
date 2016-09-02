'use strict';

var images = document.querySelectorAll('.image');
var photo = document.querySelector('.container');
var h = document.querySelector('h2');
var arrowLeft = document.querySelector('.arrow-left');
var arrowRight = document.querySelector('.arrow-right');

function setPhoto() {
    var theSwitcher = document.querySelector('.active');
    photo.style.backgroundImage = theSwitcher.dataset.url;
    h.innerHTML = theSwitcher.dataset.caption;
}

function switcher() {
    for (var i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
    }
    this.classList.add('active');    
    setPhoto();
}

function rightSwitcher () {
    var currentSwitcher = document.querySelector('.active');
    var nextSwitcher = document.querySelector('.active + .image');
    
    if (currentSwitcher.nextElementSibling == null) {
        nextSwitcher = document.querySelector('.image:first-of-type');
    }
    
    currentSwitcher.classList.remove('active');
    nextSwitcher.classList.add('active');
    
    setPhoto();
}

function leftSwitcher () {
    var currentSwitcher = document.querySelector('.active');
    var previousSwitcher = currentSwitcher.previousElementSibling;
    
    if (currentSwitcher.previousElementSibling == null) {
        previousSwitcher = document.querySelector('.image:last-of-type');
    }
    
    currentSwitcher.classList.remove('active');
    previousSwitcher.classList.add('active');
    
    setPhoto();
}

for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', switcher);
}

arrowRight.addEventListener('click', rightSwitcher);
arrowLeft.addEventListener('click', leftSwitcher);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwaG90b3Mtc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1hZ2UnKTtcclxudmFyIHBob3RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG52YXIgaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJyk7XHJcbnZhciBhcnJvd0xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctbGVmdCcpO1xyXG52YXIgYXJyb3dSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1yaWdodCcpO1xyXG5cclxuZnVuY3Rpb24gc2V0UGhvdG8oKSB7XHJcbiAgICB2YXIgdGhlU3dpdGNoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XHJcbiAgICBwaG90by5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB0aGVTd2l0Y2hlci5kYXRhc2V0LnVybDtcclxuICAgIGguaW5uZXJIVE1MID0gdGhlU3dpdGNoZXIuZGF0YXNldC5jYXB0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hlcigpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaW1hZ2VzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTsgICAgXHJcbiAgICBzZXRQaG90bygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByaWdodFN3aXRjaGVyICgpIHtcclxuICAgIHZhciBjdXJyZW50U3dpdGNoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XHJcbiAgICB2YXIgbmV4dFN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZSArIC5pbWFnZScpO1xyXG4gICAgXHJcbiAgICBpZiAoY3VycmVudFN3aXRjaGVyLm5leHRFbGVtZW50U2libGluZyA9PSBudWxsKSB7XHJcbiAgICAgICAgbmV4dFN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlOmZpcnN0LW9mLXR5cGUnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY3VycmVudFN3aXRjaGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgbmV4dFN3aXRjaGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgXHJcbiAgICBzZXRQaG90bygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsZWZ0U3dpdGNoZXIgKCkge1xyXG4gICAgdmFyIGN1cnJlbnRTd2l0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcclxuICAgIHZhciBwcmV2aW91c1N3aXRjaGVyID0gY3VycmVudFN3aXRjaGVyLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICBcclxuICAgIGlmIChjdXJyZW50U3dpdGNoZXIucHJldmlvdXNFbGVtZW50U2libGluZyA9PSBudWxsKSB7XHJcbiAgICAgICAgcHJldmlvdXNTd2l0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZTpsYXN0LW9mLXR5cGUnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY3VycmVudFN3aXRjaGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgcHJldmlvdXNTd2l0Y2hlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIFxyXG4gICAgc2V0UGhvdG8oKTtcclxufVxyXG5cclxuZm9yICh2YXIgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGltYWdlc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaGVyKTtcclxufVxyXG5cclxuYXJyb3dSaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJpZ2h0U3dpdGNoZXIpO1xyXG5hcnJvd0xlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsZWZ0U3dpdGNoZXIpOyJdLCJmaWxlIjoicGhvdG9zLXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
