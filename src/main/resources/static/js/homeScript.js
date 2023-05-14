//header
window.addEventListener("scroll", function(){
    let bg = document.getElementById('bg');

    if (window.pageYOffset > 600) {
        bg.classList.add("bg-menu");
    }else{
        bg.classList.remove("bg-menu");
    }
});


//slider btn

window.onload = function(){
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    nextBtn.addEventListener('click',function(){
        nextSlide();
    });
    prevBtn.addEventListener('click',function(){
        prevSlide();
    });
}
let slideNo = 0;
const nextSlide = ()=>{
    const slider = document.querySelector('.slider');
    const slides = slider.getElementsByClassName('slide');
    const currentSlide = document.querySelector('.slide.active');

    currentSlide.classList.remove('active');
    slideNo = (slideNo + 1) % slides.length;
    slider.style.marginLeft = '-'+slideNo+'00%';
    slides[slideNo].classList.add('active');
};
const prevSlide = ()=>{
    const slider = document.querySelector('.slider');
    const slides = slider.getElementsByClassName('slide');
    const currentSlide = document.querySelector('.slide.active');

    currentSlide.classList.remove('active');
    slideNo = (slideNo - 1 + slides.length) % slides.length;
    slider.style.marginLeft = '-'+slideNo+'00%';
    slides[slideNo].classList.add('active');
};

//input

const inputs = document.querySelectorAll('input');

inputs.forEach(el => {
    el.addEventListener('blur', e => {
        if(e.target.value) {
            e.target.classList.add('dirty');
        } else {
            e.target.classList.remove('dirty');
        }
    })
})