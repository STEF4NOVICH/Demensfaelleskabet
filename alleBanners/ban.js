//DOM element
const text = document.querySelector(".fancy");
//for at hive fat i vores teksten i vores DOM element
const strText = text.textContent;
//Her slittes teksten op og der dannes et array med hver enkelte characters
const splitText = strText.split("");

// Fjerner vores oprindelige h1 tekst, så vi kun benytter det nye span der laves i næste trin
text.textContent = "";

//Der laves et loop, hvor vores oprindelige h1 tekst bliver duplikeret, men her bliver hvert enkelte charactors fordelt i forskellige spans. splitText er vores array 
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

// Dette 
let char = 0;
let timer = setInterval(onTick, 50);

//I denne funtion tilføjes der et class til hvert enkelte span(character) som genereres i forrige trin. [char] gør at vi får alle charactors med fra 0 til slut fra vores array 
function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    // ++ gør at for hvert 50 millisekunder der går vil der tildeles en class til span i rækkefølge
    char++

    //Da vores loop ikke skal køre forevigt, stoppes loopet efter at være nået det sidste charactor i vores array
    if (char === splitText.length) {
        complete();
        return;
    }
}

//Her stopper vi vores interval med at køre og resetter vores timer til 0.
function complete() {
    clearInterval(timer);
    timer = null;

}


    const slideshowBanners = document.querySelectorAll(".myBanners");

    const nextBannerDelay = 6000;
    let currentBannerCounter = 0;

    slideshowBanners[currentBannerCounter].style.display = "block";


    setInterval(nextBanner, nextBannerDelay);

    function nextBanner() {
        slideshowBanners[currentBannerCounter].style.display = "none";

        currentBannerCounter = (currentBannerCounter + 1) % slideshowBanners.length;
        slideshowBanners[currentBannerCounter].style.display = "block";

    }
