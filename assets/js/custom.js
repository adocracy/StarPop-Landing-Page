jQuery(document).ready(function($){
    "use strict"; 
    if($(window).height() > 428) {
        $('.homeoverlay').css('height', $(window).height());
    }

// menu fixed

    var offset = $(window).height();
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('#fixed-nav').addClass('fixed');
        } else {
            jQuery('#fixed-nav').removeClass('fixed');
            }
        });

// menu fixed

// google map inject start
    
    $('#map-trigger').on('click', function(){
        if($('#mapbar').hasClass('mapbar-expand')){
            $('#mapbar').removeClass('mapbar-expand');
        } else {
            $('#mapbar').addClass('mapbar-expand');
        }
        
        $('#map-trigger').toggleClass('click');

    })

    $('#mapbar iframe').height($('#question').height());

// google map inject end


// CSS3 Animation Trigger

//all effects class list
var effects = ['flipInX', 'flipInY', 'fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'fadeInUpBig', 'fadeInDownBig', 'fadeInLeftBig', 'fadeInRightBig', 'slideInDown', 'slideInLeft', 'slideInRight', 'bounceIn', 'bounceInUp', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'rotateIn', 'rotateInUpLeft', 'rotateInDownLeft', 'rotateInUpRight', 'rotateInDownRight', 'lightSpeedIn', 'rollIn'];
var lastScrollTop = 0;


jQuery(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
        jQuery.each(effects, function(index, effect ){

        jQuery('.'+ effect +'Trigger').each(function(){ //action for the class or id

        var contentPos = jQuery(this).offset().top; //distance between the content from top
        var topOfWindow = jQuery(window).scrollTop(); //the actual position of your screen

            if (contentPos < topOfWindow+800 ) {                    
                jQuery(this).addClass(effect); //add the class to the content
            }//else {
            //  jQuery(this).removeClass(effect);

            // }
        });
        // */
        });

  }
});

// CSS3 Amination Trigger


// smoothscroll
        $('.scroll').on('click',function (e) {
            e.preventDefault();
            $('html, body').stop().animate({
                'scrollTop': $($(this).attr('href')).offset().top
            }, 500, 'swing', function () {});
        });
// smoothscroll

//nicescroll start

    $("html").niceScroll({
        styler:"fb",
        cursorcolor :"#44d2bc",
        cursorborder : "0px",
        cursoropacitymin : 0.3,
        //bouncescroll : true,
        spacebarenabled : true,
        scrollspeed : 40,
        mousescrollstep : 45,
        zindex : 99999,
        cursorborderradius : 0,
        cursorwidth : 10,
        enabletranslate3d : false,
        //smoothscroll : false
        hidecursordelay : 150
    });

