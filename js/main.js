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

function open_vid_overlay(vid) {
    $('#overlay-vid').src = vid.src;
    overlay.classList.remove('gone');
}

function close_vid_overlay() {
    $('#overlay-vid').src = '';
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

// add overlays for videos
var vids = $a('video:not(#overlay-vid)');
console.log('vids:', vids);
for (const vid of vids) {
    vid.addEventListener("playing", function (e) {
        console.log(e);
        if (vid.paused == true) {
            vid.play();
        }
        else {
            vid.pause();
        }
        open_vid_overlay(vid);
    });
}

overlay.onclick = function (e) {
    if (e.target != this) return;
    // console.log('outside overlay clicked');
    close_img_overlay();
    close_vid_overlay();
}

var btt = $('aside.btt');
function on_scroll() {
    var root = document.documentElement;
    var maxScroll = root.scrollHeight - root.clientHeight;

    var scroll = root.scrollTop;

    if (scroll / maxScroll > 0.25) {
        btt.classList.remove('gone');
    } else {
        btt.classList.add('gone');
    }
}
document.addEventListener("scroll", on_scroll)

function validate_email(eml) {
    var re = /\S+@\S+\.\S+/;
    return re.test(eml);
}

var js_form = $('#js-form');
if (js_form) {
    js_form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (js_form.classList.contains("email-form")) {
            console.log('email form was submitted', e);

            var email = $("#test-email").value;

            var status = validate_email(email);
            console.log('validate: ', status, 'for', email)

            var msg = status ? "email successfully recorded" : "invalid email address";

            $("#validation-status").innerText = msg;
        }
    })
}