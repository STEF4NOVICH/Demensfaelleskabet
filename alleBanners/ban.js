
    //definere min de variabler jeg skal bruge
    const slideshowBanners = document.querySelectorAll(".myBanners");
    //Definere forsinkelsen mellem bennerskiftet
    const nextBannerDelay = 3000;
    //definere hvilket banner der skal vises
    let currentBannerCounter = 0;

    //fortæller den at den kun skal vise et banner af gangen 
    slideshowBanners[currentBannerCounter].style.display = "block";

    //metode som gør at vores funktion konstant gentages i bestemt tidsinterval
    setInterval(nextBanner, nextBannerDelay);

    function nextBanner() {
        //nuværende banner gemmes
        slideshowBanners[currentBannerCounter].style.display = "none";
        //fra vores array finder den næste banner
        currentBannerCounter = (currentBannerCounter + 1) % slideshowBanners.length;
        //viser den næste banner
        slideshowBanners[currentBannerCounter].style.display = "block";
    }
