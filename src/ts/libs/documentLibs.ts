const blockPageScroll = (isBlock = true): void => {
    const htmlElement = document.documentElement;
    if (isBlock) {
        htmlElement.style.overflow = "hidden";
    } else {
        htmlElement.style.overflow = "auto";
    }
};

const getChild = (parentEl: HTMLElement | null, selector: string) =>
    parentEl ? parentEl.querySelector(selector) : null;

export { blockPageScroll, getChild };
