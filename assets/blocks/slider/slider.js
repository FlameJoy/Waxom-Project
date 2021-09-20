let sliderIndex = 1;
showSlides();

function plusSlideIndex(n){
    showSlides(sliderIndex += n);
}
function currentSlide(n) {
    showSlides(sliderIndex = n);
}

function showSlides(n) {
    let i,
    slides = document.getElementsByClassName("slider__slide"),
    dots = document.getElementsByClassName("slider__dot");

    if(n > slides.length) {
        sliderIndex = 1;
    } else if(n < 1) {
        sliderIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++) {
       dots[i].className =  dots[i].className.replace(" slider__dot_active", "")
    }

    slides[sliderIndex - 1].style.display = "block";
    dots[sliderIndex - 1].className += " slider__dot_active";
    
}
