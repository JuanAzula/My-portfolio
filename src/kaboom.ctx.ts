import kaboom from "kaboom";

export const k = kaboom({
    global: false,
    touchToMouse: true,
    canvas: document.getElementById("canvas") as HTMLCanvasElement,
    debug: false,
    // background: [10, 700, 0],
    // width: 800,
    // height: 600,
    // scale: 1,
    // debug: true,
})