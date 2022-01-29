// let animateButton = document.getElementById('animate-button')
// animateButton.addEventListener('click', function () {
//     let svganim = document.getElementById("mdot");
// 	svganim.pauseAnimations();
// })

const button = document.getElementById('animate-button')
const loadingDiv = document.getElementById('loading');

button.addEventListener('click', function() {
  showSpinner();
  console.log("click")
})

function showSpinner() {
  loadingDiv.style.display = "block";
  insertAnimation()
}

function hideSpinner() {
  loadingDiv.style.display = "none";
}

function insertAnimation(){
    loadingDiv.innerHTML =   

}
var svg = 'http://www.w3.org/2000/svg';
        this.elt = document.createElementNS(svg,'line');
        this.elt.setAttributeNS(null,'stroke','green');
        this.elt.setAttributeNS(null,'stroke-width','3');
        this.elt.setAttributeNS(null,'stroke-opacity','0.5');
        Display().appendChild( this.elt );
