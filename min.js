// NAV-BAR START

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});


// JQUERY START ======
$(document).ready(function(){

    $('.menu-btn').click(function(){
        $('.nav-item').slideToggle(500)
    });

    $(window).scroll(function(){
        if(this.scrollY > 5){
            $('.navactive').addClass("sticky");
        }else{
            $('.navactive').removeClass("sticky");
        }
    });
});

// NAV-BAR END



// SLIDER START
// JAVASCRIPT START   
const slides=document.querySelector(".slider").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
let index=0;


prev.addEventListener("click",function(){
    prevSlide()
})
next.addEventListener("click",function(){
    nextSlide()
})

function prevSlide(){
    if(index==0){
        index=slides.length-1;
    }
    else{
        index--;
    }
    changeSlide();
}

function nextSlide(){
    if(index==slides.length-1){
        index=0;
    }
    else{
        index++;
    }
    changeSlide();
}

function changeSlide(){
    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove("active"); 
    }
    slides[index].classList.add("active");
}
// SLIDER END

// PROJECT AREA JQUERY START
$(document).ready(function(){
    $('.project-area .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            650:{
                items: 2
            },
            1000:{
                items:3
            }
        }
    })
});



$(document).ready(function(){
    $('.video-area .kvideo-sign a').click(function(){
        $('.video-area .video-wrapper').css({
            "display" : "block",
        });
    });
    $('.video-area .video-wrapper i').click(function(){
        $('.video-area .video-wrapper').css({
            "display" : "none",
        });
    });
});



// TESTIMONIAL JQUERY START
$('.testimonial-area .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        570:{
            items:2
        },
        760:{
            items:2
        },
        768:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


// BRAND JQUERY START
$('.brand-area .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// BLOG AREA JQUERY START
$('.blog-area .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        591:{
            items:2
        },
        650:{
            items:2
        },
        1000:{
            items:2
        }
    }
});



// ABOUT-PAGE START============ 

// WHY-WE SECTION START 

// WHY-WE SECTION END 


// PROJETS-PAGE START




