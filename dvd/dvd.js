const logo = document.querySelector("img")

function loop() {
    const hRange = window.innerWidth - logo.clientWidth;
    const vRange = window.innerHeight - logo.clientHeight;
    const time = performance.now()

    const x = time % hRange
    logo.style.left = `${x}px`

    requestAnimationFrame(loop)

}

loop()