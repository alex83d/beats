const section = $("section");
const display = $(".maincontent");

let inScroll = false;

section.first().addClass("active");

const perfomTransition = sectionEq => {
    if (inScroll === false) {
        inScroll = true;
        const position = sectionEq * -100;

        const currentSection = section.eq(sectionEq);
        const menuTheme = currentSection.attr("data-sidemenu-theme");
        const sideMenu = $(".fixed-menu");
        
        if (menuTheme === "white") {
            sideMenu.addClass("fixed-menu--light");

        } else {
            sideMenu.removeClass("fixed-menu--light");
        }

        display.css({
            transform: `translateY(${position}%)`
        });


        section.eq(sectionEq).addClass("active").siblings().removeClass("active");

    

        setTimeout(() => {
            inScroll = false;
            sideMenu
              .find(".fixed-menu__item")
              .eq(sectionEq)
              .addClass("fixed-menu__item--active")
              .siblings()
              .removeClass("fixed-menu__item--active");  
    
        }, 1300);

    }

   
}

const scrollViewport = direction => {
    const activeSection = section.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === "next" && nextSection.length) {
        perfomTransition(nextSection.index());
    }

    if (direction === "prev" && prevSection.length) {
        perfomTransition(prevSection.index());
    }
}

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY; //величина смещения.

    if (deltaY > 0) {
        //next
        scrollViewport("next");
    }

    if (deltaY < 0) {
        //prev
        scrollViewport("prev");
    }
});

$(window).on("keydown", e => {
    const tagName = e.target.tagName.toLowerCase();
    if(tagName != "input" && tagName != "textarea") {
        switch (e.keyCode) {
            case 38: //prev
            scrollViewport("prev");
                break;
            case 40: //next
            scrollViewport("next");
                break;
        }
    }


});

$("[data-scroll-to]").click( e => { 
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);

    perfomTransition(reqSection.index());
    
});