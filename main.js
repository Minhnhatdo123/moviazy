import { moviaRegistry } from "./src/movia.js";
import { modals } from "./movia.setup.js";

console.log("modals:", modals);
console.log("registry:", moviaRegistry);

document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open-movia]");
    if (!btn) return;

    const id = btn.dataset.openMovia;
    const movia = moviaRegistry.get(id);
    if (!movia) {
        console.warn(`No movia found with id ${id}`);
        return;}
    movia.open();
});

