
var grid = document.querySelector('.msnry-grid');

var msnry = new Masonry( '.msnry-grid', {
    columnWidth: '.msnry-grid-sizer',
    gutter: '.msnry-gutter-sizer',
    itemSelector: '.msnry-grid-item',
    percentPosition: true
});

imagesLoaded( grid ).on('progress', function(){
    
    // Recalculate Mansonry
    msnry.layout();
    
});


/* JS To Open & Close The Menu */

const menu = document.querySelector('.js-menu');
const open_icon = document.querySelector('.js-menu-open');
const close_icon = document.querySelector('.js-menu-close');

open_icon.addEventListener('click', function() {
    menu.classList.add('open');
});

close_icon.addEventListener('click', function() {
    menu.classList.remove('open');
});