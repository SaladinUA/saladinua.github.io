'use strict';

var vasil = document.querySelector('.vasil'),
    semen = document.querySelector('.semen'),
    head = document.querySelector('.head'),
    arrow = document.querySelector('.arrow'),
    container = document.querySelector('.autobios');

function show() {    
    vasil.style.animationName = 'book';
    semen.style.animationName = 'book';
    arrow.style.animationName = 'hide';
    container.classList.add('done');
    head.classList.add('done');
}

head.addEventListener('click', show);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhdXRvYmlvLXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdmFzaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmFzaWwnKSxcclxuICAgIHNlbWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbWVuJyksXHJcbiAgICBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWQnKSxcclxuICAgIGFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93JyksXHJcbiAgICBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXV0b2Jpb3MnKTtcclxuXHJcbmZ1bmN0aW9uIHNob3coKSB7ICAgIFxyXG4gICAgdmFzaWwuc3R5bGUuYW5pbWF0aW9uTmFtZSA9ICdib29rJztcclxuICAgIHNlbWVuLnN0eWxlLmFuaW1hdGlvbk5hbWUgPSAnYm9vayc7XHJcbiAgICBhcnJvdy5zdHlsZS5hbmltYXRpb25OYW1lID0gJ2hpZGUnO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcclxuICAgIGhlYWQuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xyXG59XHJcblxyXG5oZWFkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvdyk7Il0sImZpbGUiOiJhdXRvYmlvLXNjcmlwdC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
