const slider = $('.shop__list').bxSlider({
    pager: false,
    controls: false

});


$('.shop__nav--left').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
});
$('.shop__nav--right').click(e => {
    e.preventDefault();
    slider.goToNextSlide();
});