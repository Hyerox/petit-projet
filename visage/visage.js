document.getElementById('showFaces').addEventListener('click', function() {
    const facesContainer = document.getElementById('facesContainer');
    facesContainer.style.display = 'block';

    const images = ['./yoyo.jpg', './nico.jpg', 'loukachov.jpg', 'marius.jpg'];  // Liste des images

    // Générer plusieurs visages
    for (let i = 0; i < 50; i++) {
        const face = document.createElement('div');
        face.classList.add('face');
        
        // Positionnement aléatoire
        face.style.top = Math.random() * 100 + 'vh';
        face.style.left = Math.random() * 100 + 'vw';
        
        // Sélectionner une image aléatoire
        const randomImage = images[Math.floor(Math.random() * images.length)];
        face.style.backgroundImage = `url(${randomImage})`;
        
        // Ajouter un délai aléatoire à l'animation
        face.style.animationDelay = Math.random() * 5 + 's';
        
        facesContainer.appendChild(face);
    }

    // Cacher le bouton
    this.style.display = 'none';
});
