/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const lengthEl = document.getElementById("length-conversion")
const volumeEl = document.getElementById("volume-conversion")
const massEl = document.getElementById("mass-conversion")



lengthEl.innerHTML = "length goes here"
volumeEl.innerHTML = "volume goes here"
massEl.innerHTML = "mass goes here"

inputBtn.addEventListener("click", function() {
    renderLength(Number(inputEl.value))
    renderVolume(Number(inputEl.value))
    renderMass(Number(inputEl.value))
    
})


function renderLength(integer) {
    const lengthRatio = 3.281
    let metresToFeet = integer * lengthRatio
    let feetToMetres = integer / lengthRatio
    
    lengthEl.innerHTML = `${integer} metres = ${metresToFeet.toFixed(2)} feet | ${integer} feet = ${feetToMetres.toFixed(2)} metres`
}

function renderVolume(integer) {
    const volumeRatio = 0.264
    let litresToGallons = integer * volumeRatio
    let gallonsToLitres = integer / volumeRatio
    
    volumeEl.innerHTML = `${integer} litres = ${litresToGallons.toFixed(2)} gallons | ${integer} gallons = ${gallonsToLitres.toFixed(2)} litres`
}

function renderMass(integer) {
    const massRatio = 2.204
    let kilosToPounds = integer * massRatio
    let poundsToKilos = integer / massRatio
    
    massEl.innerHTML = `${integer} kilos = ${kilosToPounds.toFixed(2)} pounds | ${integer} pounds = ${poundsToKilos.toFixed(2)} kilos`
}


// function renderElement(integer, ratio) {
//     let converted1 = integer * ratio
//     let converted2 = integer / ratio
    
//     lengthEl.innerHTML = `${integer} metres = ${metresToFeet.toFixed(2)} feet | ${integer} feet = ${feetToMetres.toFixed(2)} metres`
    
// }




// input from user taken
// list with all 6 conversions 
// render each line using indexing (probably)


inputEl.addEventListener("input", function(){
  let width = Math.max(117, (this.value.length + 1) * 35);

  // Set the width of the input element
  this.style.width = width + 'px';
})