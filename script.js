const h2 = document.createElement("h2");
h2.textContent = "Enemies to Use Against"

document.querySelector("body").appendChild(h2);

const input = document.getElementById('myImage');

function clickAlert() {
  alert('EVERYTHING IS ON FIRE!');
}

input.addEventListener('click', clickAlert);