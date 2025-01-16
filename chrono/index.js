// npx tailwindcss -i ./input.css -o ./output.css --watch

let timerInterval;
let tempsEcoule = 0;
const timerDisplay = document.getElementById("timer")
const startButton = document.getElementById("startButton") 
const pauseButton = document.getElementById("pauseButton") 
const stopButton = document.getElementById("stopButton") 

startButton.addEventListener("click", startChrono);
pauseButton.addEventListener("click", pauseChrono);
stopButton.addEventListener("click", stopChrono);

function startChrono() {
    startButton.removeEventListener("click", startChrono);
    startButton.classList.add('hidden');
    pauseButton.classList.remove('hidden');
    stopButton.classList.remove("hidden");
    
    
    timerInterval = setInterval(() => {
    tempsEcoule++;
    console.log(tempsEcoule);
    updateTimerDisplay();
    }, 1000);
}

function pauseChrono() {
    clearInterval(timerInterval);
    startButton.addEventListener('click', startChrono);
    startButton.classList.remove('hidden');
    pauseButton.classList.add('hidden')
}

function stopChrono() {
    clearInterval(timerInterval);
    tempsEcoule = 0;
    updateTimerDisplay();
    startButton.addEventListener("click", startChrono);
    startButton.classList.remove("hidden");
    pauseButton.classList.add("hidden");
    stopButton.classList.add("hidden");

}

function updateTimerDisplay() {
    const heure = String(Math.floor(tempsEcoule / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((tempsEcoule % 3600) / 60)).padStart(2, "0");
    const secondes = String(tempsEcoule % 60).padStart(2, "0");
    timerDisplay.textContent = `${heure}:${minutes}:${secondes}`
}




// // function pour ne pas à avoir à appuyer sur le bouton pour lancer le js //
// function addEnterKeyListener(id) {
//     document.getElementById(id).addEventListener("keydown", function(event) {
//         if (event.key === "Enter") {
//             check();
//         }
//     });
// }
// addEnterKeyListener("");
