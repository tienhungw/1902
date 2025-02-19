
import Navigo from "navigo";
const router = new Navigo("/", { hash: true });

import Trangchu, { Kenhdangky, Shorts } from "./script.js";

router.on("/", () => {
    Trangchu();
});
router.on("/shorts", () => {
    Shorts();
});
router.on("/feed", () => {
    Kenhdangky();
});

router.resolve();

document.addEventListener("click", (event) => {
    const button = event.target.closest("button, a");
    if (button) {
        const link = button.getAttribute("href") || button.dataset.link;
        if (link) {
            event.preventDefault();
            router.navigate(link);
        }
    }
});
