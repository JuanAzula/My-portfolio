import { KaboomCtx } from "kaboom";

export function displayDialogue(text: string, onDisplayEnd: () => void) {
    const dialogueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");
    if (!dialogueUI || !dialogue) return;
    dialogueUI.style.display = "block";
    let index = 0;
    let currentText = "";
    const intervalRef = setInterval(() => {
        if (index < text.length) {
            currentText += text[index];
            dialogue.innerHTML = currentText;
            index++;
            return;
        }

        clearInterval(intervalRef);
    }, 1);

    const closeBtn = document.getElementById("close");

    function onCloseBtnClick() {
        onDisplayEnd();
        if (!dialogueUI || !dialogue || !closeBtn) return;
        dialogueUI.style.display = "none";
        dialogue.innerHTML = "";
        clearInterval(intervalRef);
        closeBtn.removeEventListener("click", onCloseBtnClick);
    }

    closeBtn?.addEventListener("click", onCloseBtnClick);

    addEventListener("keypress", (key) => {
        if (key.code === "Enter") {
            closeBtn?.click();
        }
    });
}

export function setCamScale(k: KaboomCtx) {
    const resizeFactor = k.width() / k.height();
    if (resizeFactor < 1) {
        k.camScale(k.vec2(1));
    } else {
        k.camScale(k.vec2(1.5));
    }
}