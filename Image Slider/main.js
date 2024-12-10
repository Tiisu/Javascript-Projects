let slideindex = 0;
showSlide();

function showSlide () {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i =0; i < slides.length; i++) {
        slides [i].style.display = "none";
    }
    slideindex++;
    if (slideindex > slides.length) {
        slideindex = 1;
    }
    slides [slideindex - 1].style.display = "block";
    setTimeout(showSlide, 2000)
}