           // Responsive Nav

$(document).ready(function() {
           $(".menu-icon").on("click", function() {
                 $("nav ul").toggleClass("showing");
           });
     });

     // Scrolling Effect

     $(window).on("scroll", function() {
           if($(window).scrollTop()) {
                 $('nav').addClass('black');
           }

           else {
                 $('nav').removeClass('black');
           }
     })

     // Statistics Scrolling Animation


     $(window).scroll(function() {
         var scroll = $(window).scrollTop();
         if (scroll > 1200) {
             $(".acts").addClass("animate__backInUp");
         }
     })

     $(window).scroll(function() {
         var scroll = $(window).scrollTop();
         if (scroll > 1500) {
             $(".col-sm-6").addClass("animate__backInLeft");
         }
     })


     $(window).scroll(function() {
         var scroll = $(window).scrollTop();
         if (scroll > 1500) {
             $(".location").addClass("animate__backInRight");
         }
     })


     $(window).scroll(function() {
         var scroll = $(window).scrollTop();
         if (scroll > 1550) {
             $(".fa-instagram").addClass("animate__backInUp");
         }
     })

     $(window).scroll(function() {
         var scroll = $(window).scrollTop();
         if (scroll > 1550) {
             $(".fa-whatsapp").addClass("animate__backInDown");
         }
     })

     $(window).scroll(function() {
         var scroll = $(window).scrollTop();
         if (scroll > 1550) {
             $(".fa-facebook").addClass("animate__backInUp");
         }
     })
