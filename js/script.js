var slideIndex=1;

function showSlides(){
    this.index = function(num) {
        var slides = document.querySelectorAll(".mySlides");
        var preview = document.querySelectorAll(".preview");
        var prev = document.querySelector(".prev");
        var next = document.querySelector(".next");

        if(num == 1){
            prev.style.display = "none";
        }
        else if(num != 1) {
            prev.style.display = "block";
        }

        if(num == 4){
            next.style.display = "none";
        }
        else if(num != 4) {
            next.style.display = "block";
        }
        for(var i=0; i<slides.length; i++){
            slides[i].style.display = "none";
        }
        for(var i=0; i < preview.length; i++){
            preview[i].className = preview[i].className.replace("active","");
        }
        slides[slideIndex-1].style.display = "block";
        preview[slideIndex-1].className+= " active";
    }
}

var show = new showSlides();
show.index(slideIndex);

function plusSlides(num){
    show.index(slideIndex += num);
}

function currentSlide(num){
    show.index(slideIndex = num);
}

