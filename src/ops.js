const section = $("section");
const display = $(".maincontent");
const sideMenu = $(".fixed-menu");
const menuItems = sideMenu.find(".fixed-menu__item");

let mobileDetect = new MobileDetect(window.navigator.userAgent);
const ismobile = mobileDetect.mobile();

let inScroll = false;

section.first().addClass("active");

const countSectionPosition = sectionEq => {
    const position = sectionEq * -100;

    if (isNaN(position)) {
        console.error("передано не верное значение в countSectionPosition");
        return 0;
    }

    return position;
};

const changeMenuThemeForSection = sectionEq => {
    const currentSection = section.eq(sectionEq);
    const menuTheme = currentSection.attr("data-sidemenu-theme");
    const activeClass = "fixed-menu--light";


    if (menuTheme === "white") {
        sideMenu.addClass(activeClass);

    } else {
        sideMenu.removeClass(activeClass);
    }
};

const resetActiveClassForItem = (items, itemEq, activeClass) => {
    items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
}

const perfomTransition = sectionEq => {
    if (inScroll) return;
    const transitionOver = 1000;
    const mouseInertionOver = 300;
        inScroll = true;
        const position = countSectionPosition(sectionEq);

        changeMenuThemeForSection(sectionEq);

        display.css({
            transform: `translateY(${position}%)`
        });

        resetActiveClassForItem(section, sectionEq, "active");

        setTimeout(() => {
            inScroll = false;
            resetActiveClassForItem(menuItems, sectionEq, "fixed-menu__item--active");
        }, transitionOver + mouseInertionOver);

    


};

const viewportScroller = () => {
    const activeSection = section.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    return {
        next() {
            if (nextSection.length) {
                perfomTransition(nextSection.index());
            }

        },
        prev(){
            if (prevSection.length) {
                perfomTransition(prevSection.index());
            }
            
        },
    }; 

   
};

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY; //величина смещения.
    const scroller = viewportScroller();

 

    if (deltaY > 0) {
        //next
        scroller.next();
    }

    if (deltaY < 0) {
        //prev
        scroller.prev();
    }
});

$(window).on("keydown", e => {
    const tagName = e.target.tagName.toLowerCase();
    const userTypingInInputs = tagName === "input" || tagName === "textarea";
    const scroller = viewportScroller();

    if (userTypingInInputs) return;
        switch (e.keyCode) {
            case 38: //prev
                scroller.prev();
                break;
            case 40: //next
                scroller.next();
                break;
        
    }


});

$(".wrapper").on("touchmove", e => e.preventDefault());

$("[data-scroll-to]").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);

    perfomTransition(reqSection.index());

});

if (ismobile) {
    $("body").swipe({
        swipe: function (
            event,
            direction,
        ) {
    
            const scroller = viewportScroller();
            let scrollDirection = "";
    
            if(direction === "up") scrollDirection = "next";
            if(direction === "down") scrollDirection = "prev";
            scroller[scrollDirection]();
        },
    });

}

