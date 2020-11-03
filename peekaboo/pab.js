function yScrollHandler() {
    var win = document.getElementById("peekaboo");
    if ((window.pageYOffset + window.innerHeight) >= document.body.offsetHeight) {
        //win.style.webkitTransition = "right 0.7s ease-in-out 0s";
        win.style.transition = "right 0.7s ease-in-out 0s";
        win.style.right = "0px";
    } else {
        win.style.transition = "right 0.7s ease-in-out 0s";
        win.style.right = "-452px";
    }
}
window.onscroll = yScrollHandler;

function inputFocus(i) {
    if (i.value == i.defaultValue) { i.value = ""; i.style.color = "#000000"; }
}
function inputBlur(i) {
    if (i.value == "") { i.value = i.defaultValue; i.style.color = "#888888"; }
}