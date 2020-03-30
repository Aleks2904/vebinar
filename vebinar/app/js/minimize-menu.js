$(document).ready(function(){
    const button_minimize_EL = $('#js-header__nav-button'),      
          minimize_menu_EL = $('#js-header-nav');

    button_minimize_EL.on('click', function(){
        event.preventDefault();

        minimize_menu_EL.slideToggle();

        if ($(this).attr('aria-expanded') == 'false'){
            $(this).attr('aria-expanded', 'true');
            $(this).attr('aria-label', 'свернуть меню');
            $('body').addClass('overflow');
        } else {
            $(this).attr('aria-expanded', 'false');
            $(this).attr('aria-label','развернуть меню');
            $('body').removeClass('overflow');
        }    
    });

    $(window).resize(function(){
        const width = $(window).width();

        if (width > '1400'){
            minimize_menu_EL.show()
        }else{
            minimize_menu_EL.hide()
        }   
    });

/* поиск */

    $('#search').focus(function() {
        const width = $(window).width();

        if (width < '500'){
            $('.header__logo').addClass('hide-header');
            $('.header__basket').addClass('hide-header');
            $('#js-header__nav-button').addClass('hide-header');
        }

        if (width < '800'){
            $('.header__basket').addClass('hide-header');
            $('#js-header__nav-button').addClass('hide-header');
        }

        if (width < '1400'){
            $('.header__basket').addClass('hide-header');
        }



        $('#js-search-box-span').addClass('liners');
        $('#search').addClass('input')
    });

    $('#search').focusout(function() {
        setTimeout (function (){
            $('.header__logo').removeClass('hide-header');
            $('.header__basket').removeClass('hide-header');
            $('#js-header__nav-button').removeClass('hide-header');
        }, 1500);

        $('#js-search-box-span').removeClass('liners');
        $('#search').removeClass('input')
    });
}); 