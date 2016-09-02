'use strict';

var menuBasic = document.querySelector('.menu-basic');
var menuFront = document.querySelector('.menu-front');
var menuItem = document.querySelectorAll('.menu-item');

function showMenuBasic() {
    menuFront.classList.remove('active');
    menuBasic.classList.add('active');
    
    var i;
    for (i = 0; i < menuItem.length; i = i + 1) {
        menuItem[i].classList.add('animate');
    }
}

menuFront.addEventListener("click", showMenuBasic);
menuFront.innerHTML = menuFront.dataset.text;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgbWVudUJhc2ljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYmFzaWMnKTtcclxudmFyIG1lbnVGcm9udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWZyb250Jyk7XHJcbnZhciBtZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0nKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dNZW51QmFzaWMoKSB7XHJcbiAgICBtZW51RnJvbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBtZW51QmFzaWMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBcclxuICAgIHZhciBpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IG1lbnVJdGVtLmxlbmd0aDsgaSA9IGkgKyAxKSB7XHJcbiAgICAgICAgbWVudUl0ZW1baV0uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tZW51RnJvbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dNZW51QmFzaWMpO1xyXG5tZW51RnJvbnQuaW5uZXJIVE1MID0gbWVudUZyb250LmRhdGFzZXQudGV4dDsiXSwiZmlsZSI6Im1haW4tc2NyaXB0LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
