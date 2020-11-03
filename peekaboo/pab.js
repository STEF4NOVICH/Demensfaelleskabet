/* ved at scroll ned kommer peekaboo frem */
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

/*  */
window.onload = function () {
    document.getElementById('close').onclick = function () {
        this.parentNode.parentNode.parentNode
            .removeChild(this.parentNode.parentNode);
        return false;
    };
};

/* teksten inde i formen bliver sort når der skrives navn eller email */
function inputFocus(i) {
    if (i.value == i.defaultValue) { i.value = ""; i.style.color = "#000000"; }
}
function inputBlur(i) {
    if (i.value == "") { i.value = i.defaultValue; i.style.color = "#888888"; }
}