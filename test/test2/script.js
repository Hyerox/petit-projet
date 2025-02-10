const text = document.querySelector('.dynamic-shadow')
let angle = 0

function animateShadow() {
  const x = Math.sin(angle) * 10
  const y = Math.cos(angle) * 10
  text.style.textShadow = `${x}px ${y}px 10px rgba(0, 0, 0, 0.5)`
  angle += 0.05
  requestAnimationFrame(animateShadow)
}

animateShadow()
