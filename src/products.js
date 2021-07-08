const mesureWidth = () => {
    return 500;
}

const closeEveryItemInContainer = (container) => {
    const items = container.find(".products__item");
    const content = container.find(".products__content");

    items.removeClass("active");
    content.width(0);
}

const openItem = item => {
    const hiddenContent = item.find(".products__content");
    const reqWidth = mesureWidth();

    item.addClass("active");
    hiddenContent.width(reqWidth);
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