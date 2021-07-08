const mesureWidth = (item) => {
    let reqItemWidth = 0;
    const screenWidth = $(window).width();
    const container = item.closest(".products__list");
    const titlesBlocks = container.find(".products__title");
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

    const textContainer = item.find(".products__container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));

    const isMobile = window.matchMedia("(max-width:768px)").matches;

    if (isMobile) {
        reqItemWidth = screenWidth - titlesWidth;
    } else {
        reqItemWidth = 500;
    }

    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingLeft - paddingRight
    }

    
};

const closeEveryItemInContainer = (container) => {
    const items = container.find(".products__item");
    const content = container.find(".products__content");

    items.removeClass("active");
    content.width(0);
}

const openItem = (item) => {
    const hiddenContent = item.find(".products__content");
    const reqWidth = mesureWidth(item);
    const textBlock = item.find(".products__container")

    item.addClass("active");
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);
}


$(".products__title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".products__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".products__list");
    
    if (itemOpened) {
        closeEveryItemInContainer(container);
    } else {
        closeEveryItemInContainer(container);
        openItem(item);
    }
    
});

$(".products__close").on("click", e => {
    e.preventDefault();

    closeEveryItemInContainer($(".products__list"));
})