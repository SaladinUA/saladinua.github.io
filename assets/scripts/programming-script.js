'use strict';

var levels = document.querySelectorAll('.content td:not(:first-child)'),
    details = document.querySelectorAll('.details');

for (var i = 0; i < levels.length; i++) {
    var cell = levels[i];
    
    cell.innerHTML = cell.innerHTML + levels[i].dataset.level;
    
    cell.addEventListener('mouseenter', function () {
        var arrow = this.firstElementChild,
            originalColor = getComputedStyle(arrow).borderTopColor;
        arrow.style.borderTopColor = getComputedStyle(this).color;
        arrow.classList.add('hovered');
        this.addEventListener('mouseleave', function () {
            arrow.style.borderTopColor = originalColor;
            arrow.classList.remove('hovered');
        });
    });
    
    cell.addEventListener('click', function () {
        var block = this.lastElementChild;
        
        block.addEventListener('mouseleave', function () {
            this.style.opacity = '0';
            this.style.zIndex = '-5';
        });
        if (getComputedStyle(block).opacity === '0') {
            block.style.opacity = '1';
            block.style.zIndex = '15';
        } else {
            block.style.opacity = '0';
            block.style.zIndex = '-5';
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwcm9ncmFtbWluZy1zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGxldmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250ZW50IHRkOm5vdCg6Zmlyc3QtY2hpbGQpJyksXHJcbiAgICBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRldGFpbHMnKTtcclxuXHJcbmZvciAodmFyIGkgPSAwOyBpIDwgbGV2ZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgY2VsbCA9IGxldmVsc1tpXTtcclxuICAgIFxyXG4gICAgY2VsbC5pbm5lckhUTUwgPSBjZWxsLmlubmVySFRNTCArIGxldmVsc1tpXS5kYXRhc2V0LmxldmVsO1xyXG4gICAgXHJcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFycm93ID0gdGhpcy5maXJzdEVsZW1lbnRDaGlsZCxcclxuICAgICAgICAgICAgb3JpZ2luYWxDb2xvciA9IGdldENvbXB1dGVkU3R5bGUoYXJyb3cpLmJvcmRlclRvcENvbG9yO1xyXG4gICAgICAgIGFycm93LnN0eWxlLmJvcmRlclRvcENvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5jb2xvcjtcclxuICAgICAgICBhcnJvdy5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkJyk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhcnJvdy5zdHlsZS5ib3JkZXJUb3BDb2xvciA9IG9yaWdpbmFsQ29sb3I7XHJcbiAgICAgICAgICAgIGFycm93LmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBibG9jayA9IHRoaXMubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICBcclxuICAgICAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuekluZGV4ID0gJy01JztcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShibG9jaykub3BhY2l0eSA9PT0gJzAnKSB7XHJcbiAgICAgICAgICAgIGJsb2NrLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgIGJsb2NrLnN0eWxlLnpJbmRleCA9ICcxNSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmxvY2suc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICAgICAgYmxvY2suc3R5bGUuekluZGV4ID0gJy01JztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSJdLCJmaWxlIjoicHJvZ3JhbW1pbmctc2NyaXB0LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
