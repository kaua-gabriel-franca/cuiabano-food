$(document).ready(function(){
    $('mobile_btn').on('click', function(){
        $('"mobile_menu').toggleClass('atctive')
        $('"mobile_menu').find('i').toggleClass('fa-x')
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scrool', function(){
        const header = $('header');
        const scroolPosition = $(window).scroolTop() - header.outerHeight();
        let activeSectionIndex = 0;
        
        if(scroolPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i){
            const section = $(this);
            const sectinTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if(scroolPosition >= sectionTop && scroolPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            } 
        })
        navItems.removeClass ('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

});