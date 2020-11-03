var i=0,text;
text = "Har du hjertet på det rette sted?"

function typing() {
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(it);
        i++;
        setTimeout(typing, 50)
    }
}

typing();
