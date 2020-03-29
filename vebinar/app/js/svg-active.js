$(function(){
    const itemFooter = $('.js-item-footer'),
           svgFooter = $('.js-svg-footer'),
           svgNone = $('.js-svg-none')

    itemFooter.hover(function(){             
        svgFooter.addClass("svg-active");
        svgNone.addClass("svg-no-active");      
    },function(){           
        svgFooter.removeClass("svg-active");
        svgNone.removeClass("svg-no-active");           
    });
});