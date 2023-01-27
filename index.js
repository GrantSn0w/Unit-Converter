/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputTab = document.getElementById("input-btn")
const convertBtn = document.getElementById("btn")
let solution = []
let mp1 = document.getElementById("MP1")
let mp2 = document.getElementById("MP2")
let mp3 = document.getElementById("MP3")






convertBtn.addEventListener("click", function(){
    if (inputTab.value===""){
        alert("Field cannot be empty!")
        inputTab.value = [""]
    }
    else ((solution.push(inputTab.value)))
    
    let meterFeetConversion = (solution*3.281).toFixed(3)
    let feetMeterConversion = (solution/3.281).toFixed(3)
    mp1.innerHTML = `${solution} meters = ${meterFeetConversion} feets | ${solution} feets = ${feetMeterConversion} meters
    `
    let literGallonConversion = (solution*0.264).toFixed(3)
    let gallonLiterConversion = (solution/0.264).toFixed(3)
    mp2.innerHTML =`${solution} liters = ${literGallonConversion} gallons | ${solution} gallons = ${gallonLiterConversion} liters
    `
    let kilogramPoundConversion = (solution*2.204).toFixed(3)
    let poundKilogramConversion = (solution/2.204).toFixed(3)
    mp3.innerHTML =`${solution} kilos = ${kilogramPoundConversion} pounds | ${solution} pounds = ${poundKilogramConversion} kilos
    `
    inputTab.value = [""]
    solution = []
})

