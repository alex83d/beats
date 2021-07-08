const section = $("section");
const display = $(".maincontent");

let inScroll = false;

section.first().addClass("active");

const perfomTransition = sectionEq => {
    if (inScroll === false) {
        inScroll = true;
        const position = sectionEq * -100;

        display.css({
            transform: `translateY(${position}%)`
        });

    }

    section.eq(sectionEq).addClass("active").siblings().removeClass("active");

    setTimeout(() => {
        inScroll = false;
    }, 1300);
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
    console.log(deltaY);
});