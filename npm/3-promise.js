console.log("Début du script");
console.log("Milieu du script");

setTimeout(() => {
    console.log("Instruction asynchrone qui arrive au bout de 5 secondes");
}, 5000)

let counter = 1;
const intervalID = setInterval(() => { 
 console.log(counter++)
    if (counter === 7) {
        clearInterval(intervalID);
    }
}, 1000);

   

console.log("Fin du script");
