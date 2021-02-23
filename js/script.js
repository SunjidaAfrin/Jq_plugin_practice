$(document).ready(function(){
	//counter
	$('.counter').counterUp({
    delay: 10,
    time: 1000
     });

});
$(document).ready(function(){
	//
	  new WOW().init();


$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,

});
$('.owl-carousel').owlCarousel({
    items:5,
    loop:true,
    margin:10,
    merge:true,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    }
});

$(".gallery").flipping_gallery({
    direction: "forward", 
    selector: "> a", 
    spacing: 10, 
    showMaximum: 5, 
    enableScroll: true,
    flipDirection: "bottom", 
    autoplay: false 
  });

var ztxt = new Ztextify(".hero-text", {
   depth: "30px",
   layers: 8,
   fade: true,
   direction: "forwards",
   event: "pointer",
   eventRotation: "35deg"
});




$(function(){

  $("#jq-tip").jqTip({

    title:"Tooltip Title",

    content:"A super tiny jQuery <b>tooltip</b> plugin to display any HTML content in a hover-triggered tooltip popup which always follows the cursor on mouse move.",

    height:'auto',

    width: 300

  });

})

});

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',

})
