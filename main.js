$(document).ready(function () {
    $('.product_list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows:false,
        autoplay:true
    });
});

$(document).ready(function () {
    $('.shop_categories').slick({
        arrows:false,
        dots:true,
        dotsClass:'slick-dots',
        autoplay:true
      });

});