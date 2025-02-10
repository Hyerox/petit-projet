const inputs = document.querySelectorAll("input");
const label = document.querySelectorAll("label")

inputs.forEach(input => {
    // Vérification des limites à l'entrée
    input.addEventListener("input", function () {
        const valeur = parseFloat(input.value);
        if (valeur > parseFloat(input.max)) {
            let erreur = document.createElement("p");
            erreur.innerHTML = "Valeur incorrecte. La valeur maximale est " + input.max + ".";
            erreur.style.color = "red";
            if (!input.nextElementSibling || input.nextElementSibling.tagName !== "P") {
                input.parentNode.insertBefore(erreur, input.nextSibling);
            }
        } else {
            if (input.nextElementSibling && input.nextElementSibling.tagName === "P") {
                input.nextElementSibling.remove();
            }
        }
    });

    // Événement sur la touche Enter
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            stockage(input);
        }
    });
});

function stockage(input) {
    const inputValue = input.value;
    const labelValue = label.value;
    console.log(`${input.parentNode.value}:${inputValue}`);
}
