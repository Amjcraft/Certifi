
/* Smooth scroll One page Nav-----------------------------------------------*/
$(document).ready(function () {
    $.extend($.scrollTo.defaults, {
        duration: 600
    });

    $('#navigation li a').each(function (index, val) {
        console.log(val);
        $(this).on('click', function (event) {
            event.preventDefault();
            $(window).scrollTo($(val.hash));
        })
        
    });


    
});
