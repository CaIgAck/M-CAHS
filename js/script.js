document.querySelector('.active').onclick = function () {
    let active = document.querySelector('.sub-menu');
    active.style.display = 'block';

};
document.querySelector('.close-menu').onclick = function () {
    let active = document.querySelector('.sub-menu');
    active.style.display = 'none';
    
};




$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },

    }
})
