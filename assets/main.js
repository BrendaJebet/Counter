const button5 = document.querySelector("#plusFive")
const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")

button5.addEventListener('click', () => {
  disp.textContent = "added 5"
  indicator.textContent = (parseInt(indicator.textContent) + 5).toString()
})

const button10 = document.querySelector("#plusTen")
const indicate = document.querySelector("#number-indicator")
const display = document.querySelector("#display-heading")

button10.addEventListener('click', () => {
  display.textContent = "added 10"
  indicate.textContent = (parseInt(indicator.textContent) + 10).toString()
})

const button15 = document.querySelector("#plusFifteen")
const indic = document.querySelector("#number-indicator")
const dip = document.querySelector("#display-heading")

button15.addEventListener('click', () => {
  dip.textContent = "added 15"
  indic.textContent = (parseInt(indicator.textContent) + 15).toString()
})

const button20 = document.querySelector("#plusTwenty")
const ind = document.querySelector("#number-indicator")
const dis = document.querySelector("#display-heading")

button20.addEventListener('click', () => {
  dis.textContent = "added 20"
  ind.textContent = (parseInt(indicator.textContent) + 20).toString()
})