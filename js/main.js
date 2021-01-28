/*
js
*/

const $ = document.querySelector.bind(document);
const $a = document.querySelectorAll.bind(document);

// the main overlay container
var overlay = $('#overlay');

function open_img_overlay(img) {
    $('#overlay-img').src = img.src;
    overlay.classList.remove('gone');
}

function close_img_overlay() {
    $('#overlay-img').src = '';
    overlay.classList.add('gone');
}

// add overlays for images
var imgs = $a('img:not(#overlay-img)');
console.log('imgs:', imgs);
for (const img of imgs) {
    img.onclick = function () {
        open_img_overlay(this);
    };
}

overlay.onclick = function (e) {
    if (e.target != this) return;
    // console.log('outside overlay clicked');
    close_img_overlay();
}
