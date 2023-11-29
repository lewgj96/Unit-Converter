/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const input = document.getElementById("input")
const resultLength = document.getElementById("length")
const resultVolume = document.getElementById("volume")
const resultMass = document.getElementById("mass")

function convert(){
    const inputValue = input.value
    const meterTofeet = Math.round(input.value * 3.281 * 1000) / 1000
    const feetTometer = Math.round(input.value * 0.3048 * 1000) / 1000
    const litersTogallons = Math.round(input.value * 0.264172 * 1000) / 1000
    const gallonsToliters = Math.round(input.value * 3.78541 * 1000) / 1000
    const kilosTopounds = Math.round(input.value * 2.20462 * 1000) / 1000
    const pundsTokilos = Math.round(input.value * 0.453592 * 1000) / 1000
    
    resultLength.innerHTML = `<p>${inputValue} meters = ${meterTofeet}feet | ${inputValue} feet = ${feetTometer}meters</p>` 
    resultVolume.innerHTML = `<p>${inputValue} liters = ${litersTogallons}galloons | ${inputValue} gallons = ${gallonsToliters}liters</p>` 
    resultMass.innerHTML = `<p>${inputValue} liters = ${kilosTopounds}galloons | ${inputValue} gallons = ${pundsTokilos}liters</p>`
    
}