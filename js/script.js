$(window).on("load", function(){
    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

})

$(document).ready(function() {
    $('#slides').superslides({
        animation: "fade",
        play: 5000,
        pagination: false
    });
    var typed = new Typed(".typed", {
        strings: ["Student.", "IT Professional.", "Systems Engineer."],
        typeSpeed: 70,
        loop: true,
        startDelat: 1000,
        showCursor: false
    });

    $(".owl-carousel").owlCarousel( {
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });

     

    var skillsTopOffset = $(".skillsSection").offset().top;
    
    $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: "easeInOout",
                barColor: "#FFF",
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find(".percent").text(Math.round(percent));
                }
            });
        }
    }); 

    var $nav = $("#navigation");
    var navBottomOffset = $("#navigation").offset().bottom;
    $(document).scroll(function() {
        if(window.pageYOffset > skillsTopOffset) {
           
           console.log("fire")
           $nav.toggleClass("alt-Nav"); 
        }
        
        
        
    
    });

    $(".fancybox-media").fancybox({
        openEffect : "none",
        closeEffect : "none",
        helpers : {
            media : {}
        }
    });

    $("[data-fancybox").fancybox();

   
    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    $("#navigation #smoothScroll li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({scrollTop: targetPosition - 50 }, "slow");
    });   
});






