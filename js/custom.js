/*global $, document, window*/

$(document).ready(function () {
    
    'use strict';
    
    // Caching
    
    var colorLi = $('.color-option ul li'),
        
        scrollButton = $('.scroll-top');
    
    $('.carousel').carousel({
       
        interval: 5000
        
    });
    
    // Show Color Option
    
    $('.option-box .gear-check').click(function () {
        
        $('.option-box .color-option').fadeToggle(500);
        
    });
    
    // Change Color From Option Box
    
    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#b208d1").end()
        .eq(2).css("backgroundColor", "#289e20").end()
        .eq(3).css("backgroundColor", "#0895D1").end();
    
    colorLi.click(function () {
        
        $('link[href*="theme"]').attr('href', $(this).attr('data-value'));
        
    });
    
    // Scroll Top Element
    
    $(window).scroll(function () {
        
        // $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();  If condition
        
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
            
        }
        
    });
    
    // Click On Button To Scroll Top
    
    scrollButton.click(function () {
        
        $('html,body').animate({scrollTop : 0}, 600);
        
    });
    
});

//Loading Screen 

$(window).on('load', function () {
    
    'use strict';
    
    // Loading Elements
    
    $('.loading .spinner').fadeOut(2000, function () {
        
        // Show The Scroll
            
        $('body').css('overflow', 'auto');
        
        $(this).parent().fadeOut(1000, function () {
            
            
            // Remove Loading From HTML Code
            
            $(this).remove();
            
        });
        
    });
    
});