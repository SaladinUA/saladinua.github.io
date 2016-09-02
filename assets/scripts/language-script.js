'use strict';

var flagsVas = document.querySelectorAll('.vas .language:not(.name)'),
    flagsSam = document.querySelectorAll('.sam .language:not(.name)');

function switchFlagVas() {
    for (var i = 0; i < flagsVas.length; i++) {
        flagsVas[i].classList.remove('active');
    }
    this.classList.add('active');
}

function switchFlagSam() {
    for (var i = 0; i < flagsSam.length; i++) {
        flagsSam[i].classList.remove('active');
    }
    this.classList.add('active');
}

for (var i = 0; i < flagsVas.length; i++) {
    flagsVas[i].addEventListener('click', switchFlagVas);
    flagsSam[i].addEventListener('click', switchFlagSam);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsYW5ndWFnZS1zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGZsYWdzVmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhcyAubGFuZ3VhZ2U6bm90KC5uYW1lKScpLFxyXG4gICAgZmxhZ3NTYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2FtIC5sYW5ndWFnZTpub3QoLm5hbWUpJyk7XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hGbGFnVmFzKCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbGFnc1Zhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZsYWdzVmFzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoRmxhZ1NhbSgpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmxhZ3NTYW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmbGFnc1NhbVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn1cclxuXHJcbmZvciAodmFyIGkgPSAwOyBpIDwgZmxhZ3NWYXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGZsYWdzVmFzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoRmxhZ1Zhcyk7XHJcbiAgICBmbGFnc1NhbVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaEZsYWdTYW0pO1xyXG59Il0sImZpbGUiOiJsYW5ndWFnZS1zY3JpcHQuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
