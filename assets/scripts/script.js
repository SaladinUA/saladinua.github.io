'use strict';

var links = document.querySelectorAll('a:not(.menu-item)');
var showMenu = document.getElementById('cont-foot-link');
var contacts = document.querySelector('.contacts');

function showContacts() {
    if (contacts.style.display === 'flex') {
        contacts.style.display = 'none';
    } else {
        contacts.style.display = 'flex';
    }
}

function hideContacts() {
    contacts.style.display = 'none';
}
    

showMenu.addEventListener('click', showContacts);
contacts.addEventListener('mouseleave', hideContacts);

for (var i = 0; i < links.length; i++) {
    links[i].innerHTML = links[i].dataset.text;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYTpub3QoLm1lbnUtaXRlbSknKTtcclxudmFyIHNob3dNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnQtZm9vdC1saW5rJyk7XHJcbnZhciBjb250YWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0cycpO1xyXG5cclxuZnVuY3Rpb24gc2hvd0NvbnRhY3RzKCkge1xyXG4gICAgaWYgKGNvbnRhY3RzLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xyXG4gICAgICAgIGNvbnRhY3RzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRhY3RzLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVDb250YWN0cygpIHtcclxuICAgIGNvbnRhY3RzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuICAgIFxyXG5cclxuc2hvd01lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Q29udGFjdHMpO1xyXG5jb250YWN0cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGlkZUNvbnRhY3RzKTtcclxuXHJcbmZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGxpbmtzW2ldLmlubmVySFRNTCA9IGxpbmtzW2ldLmRhdGFzZXQudGV4dDtcclxufSJdLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
