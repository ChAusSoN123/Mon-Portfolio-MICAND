console.log("Script chargé !")
const titrePrincipal = document.querySelector('#main-title');
const monBouton = document.querySelector('#mon-bouton');

monBouton.addEventListener('click', () => {
  // Ce code ne s'exécute QUE si l'utilisateur clique.
  console.log('Bouton cliqué !');
    titrePrincipal.textContent = "Nouveau Titre !";
});
// ...existing code...
const themeButton = document.querySelector('#themeButton');

themeButton.addEventListener('click', () => {

  console.log('Bouton cliqué !');
  document.body.classList.toggle('dark-mode');


  if (document.body.classList.contains('dark-mode')) {
    themeButton.textContent = 'Mode Clair';
  } else {
    themeButton.textContent = 'Mode Sombre';
  }
});