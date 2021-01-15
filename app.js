var SlideIndex = 1;

const ChangeSlide = (value) => {
    SlideIndex += value;

    var slides = document.getElementsByClassName('Slide');

    if(SlideIndex > slides.length)
        SlideIndex = 1;
    

    if(SlideIndex < 1)
        SlideIndex = slides.length -1;
    

    for(var i=0;i<slides.length;i++){
        slides[i].style.display = 'none';
    }

    slides[SlideIndex -1].style.display = 'block';
     
}

ChangeSlide(0);