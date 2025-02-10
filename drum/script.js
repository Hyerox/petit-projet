window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  console.log(audio)
  if (!audio) return
  audio.currentTime = 0 // Reset audio position to start
  audio.play()
})
