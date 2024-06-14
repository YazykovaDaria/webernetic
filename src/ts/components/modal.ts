import { getChild, blockPageScroll } from "../libs/documentLibs";

const MODAL_SELECTOR = ".js-modal";
const MODAL_CONTENT_SELECTOR = ".js-modal-content";
const MODAL_CLOSE_SELECTOR = ".js-modal-close";
const MODAL_BODY_SELECTOR = ".js-modal-body";

const CSS_CLASSES = {
    visibleModal: "modal--visible",
};

const modalEl: HTMLElement | null = document.querySelector(MODAL_SELECTOR);
const contentBoxEl: Element | null = getChild(modalEl, MODAL_CONTENT_SELECTOR);
const closeEl: Element | null = getChild(modalEl, MODAL_CLOSE_SELECTOR);

const closeModal = (): void => {
    modalEl?.classList.remove(CSS_CLASSES.visibleModal);
    blockPageScroll(false);
};

const closeOnBgClick = (e: Event) => {
    const target = e.target as HTMLElement;
    const isModalBody = target?.closest(MODAL_BODY_SELECTOR);

    if (!isModalBody) {
        closeModal();
    }
};

const openModal = (content: string) => {
    if (contentBoxEl) {
        contentBoxEl.innerHTML = content;

        modalEl?.classList.add(CSS_CLASSES.visibleModal);
        blockPageScroll();
    } else {
        console.error("content not found");
    }
};

const goModal = (content: string) => {
    if (!modalEl) return;

    openModal(content);

    closeEl?.addEventListener("click", closeModal);
    modalEl.addEventListener("click", closeOnBgClick);
};

export default goModal;
