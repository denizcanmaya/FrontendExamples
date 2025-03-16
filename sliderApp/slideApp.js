let slides = [
    {
        image : 'assets/1.webp'
    },
    {
        image : 'assets/2.webp'
    },
    {
        image : 'assets/3.webp'
    }
]
let index = 0;
let slideCount = slides.length;
let interval;
let setting = {
    duration : '3000',
    random: true
};

showSlide(index);
slideSetting(setting);

document.querySelector(".fa-arrow-left").addEventListener('click',function() {
    index--;
    showSlide(index);
});


document.querySelector(".fa-arrow-right").addEventListener('click',function() {
    index++;
    showSlide(index);
});

document.querySelectorAll(".arrows").forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        clearInterval(interval);
    });
});

document.querySelectorAll(".arrows").forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        slideSetting(setting);
    });
});



 function showSlide(i){
    index = i;
    if (i < 0) {
        index = slideCount -1;
    }

    if (i >= slideCount) {
        index = 0;
    }

    let images = document.querySelector(".images").setAttribute('src', slides[index].image);
}

function slideSetting(setting) {
    let prev;
    interval = setInterval(function(){
        if(setting.random) {
            do {
                index = Math.floor(Math.random() * slideCount);  
            }while(index == prev);
            prev = index;
        } else {
            if (slideCount == index+1) {
                index = -1;
            }
        }
        showSlide(index);
    },setting.duration)};