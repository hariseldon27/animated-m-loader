// let animateButton = document.getElementById('animate-button')
// animateButton.addEventListener('click', function () {
//     let svganim = document.getElementById("mdot");
// 	svganim.pauseAnimations();
// })

const button = window.getElemenatbyId('animate-button')
const loadingDiv = document.getElementById('loading');

button.addEventListener('click', function() {
  showSpinner();
  
})

function showSpinner() {
  loadingDiv.style.display = "flex";
}

function hideSpinner() {
  loadingDiv.style.display = "none";
}