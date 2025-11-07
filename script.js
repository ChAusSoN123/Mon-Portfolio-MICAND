console.log("Script chargé !")
const titrePrincipal = document.querySelector('#main-title');
const monBouton = document.querySelector('#mon-bouton');

monBouton.addEventListener('click', () => {
  // Ce code ne s'exécute QUE si l'utilisateur clique.
  console.log('Bouton cliqué !');
    titrePrincipal.textContent = "Nouveau Titre !";
});
