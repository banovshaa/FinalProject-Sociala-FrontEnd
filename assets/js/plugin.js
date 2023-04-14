$(document).ready(function(){
    $('.users-slider').slick({
        dots: false,
        arrows:false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    $('.shop-slider').slick({
        dots: true,
        arrows:true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    $('.single-product-image').slick({
      slidesToShow: 1,
      arrows: true,
      fade: true,
      draggable: false,
      swipe: false,
      asNavFor: ".multiple-product-image"
    });
    $('.multiple-product-image').slick({
      vertical: true,
      infinite:true,
      autoplay: true,
      autoplaySpeed:8000,
      slidesToShow: 4,
      arrows: false,
      asNavFor:".single-product-image",
      focusOnSelect:true
    });
    $(".sb-range-slider").slider({
        range: true,
        min: 0,
        max: 753,
        values: [80, 320],
        slide: function(event, ui) {
            $("#amount").val("£" + ui.values[0] + " - £" + ui.values[1]);
        }
    });
    $("#amount").val("£" + $(".sb-range-slider").slider("values", 0) +
        " - £" + $(".sb-range-slider").slider("values", 1));   
});