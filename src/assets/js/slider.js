let slideIndex = 1;
let timer;

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
    resetTimer();
}

function previousSlide() {
    showSlides(slideIndex -= 1);
    resetTimer();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetTimer();
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function startTimer() {
    timer = setInterval(nextSlide, 10000);
}

function resetTimer() {
    clearInterval(timer);
    startTimer();
}

startTimer();