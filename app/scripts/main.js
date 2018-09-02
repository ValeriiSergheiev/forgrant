/* *** Select menu *** */
$(document).ready(function() {
  $('#select').niceSelect();
});

/* *** Ajax *** */

const select = document.getElementById('select')
const priceAsk = document.getElementsByClassName('price-ask')
const hourChange = document.getElementsByClassName('hour-change')
const dayChange = document.getElementsByClassName('day-change')
const weekChange = document.getElementsByClassName('week-change')
const monthChange = document.getElementsByClassName('month-change')
let currencyObj = {}
let hourChangeFlag = false
let dayChangeFlag = false
let weekChangeFlag = false
let monthChangeFlag = false

const xhr = new XMLHttpRequest()

function selectValue() {
  let promise = new Promise((resolve, reject) => {
    xhr.open('GET', select.value, true)
    xhr.onload = () => resolve(xhr.responseText)
    xhr.onerror = () => reject(xhr.statusText)
    xhr.send()
  });

  promise
  .then(
    result => {
      currencyObj = JSON.parse(result)

      for (let i = 0; i < priceAsk.length; i++) {
        checkbox[i].checked = false

        priceAsk[i].innerHTML = '$' + currencyObj.ask

        currencyObj.changes.price.hour < 0 ? (hourChangeFlag = true) : (hourChangeFlag = false)
        hourChange[i].innerHTML = '<span>+</span>' + currencyObj.changes.price.hour + '$'
        hourChange[i].classList.toggle('text-red', hourChangeFlag)

        currencyObj.changes.price.day < 0 ? (dayChangeFlag = true) : (dayChangeFlag = false)
        dayChange[i].innerHTML = '<span>+</span>' + currencyObj.changes.price.day + '$'
        dayChange[i].classList.toggle('text-red', dayChangeFlag)

        currencyObj.changes.price.week < 0 ? (weekChangeFlag = true) : (weekChangeFlag = false)
        weekChange[i].innerHTML = '<span>+</span>' + currencyObj.changes.price.week + '$'
        weekChange[i].classList.toggle('text-red', weekChangeFlag)

        currencyObj.changes.price.month < 0 ? (monthChangeFlag = true) : (monthChangeFlag = false)
        monthChange[i].innerHTML = '<span>+</span>' + currencyObj.changes.price.month + '$'
        monthChange[i].classList.toggle('text-red', monthChangeFlag)
      }
    },
    error => {
      console.error('Rejected: ' + error)
    }
    );
}
/* Get data on page load */
selectValue()


const checkbox = document.getElementsByClassName('checkbox')
let checkboxChecked = []
function toggleCheck() {
  for (let i = 0; i < checkbox.length; i++) {
    checkboxChecked[i] = checkbox[i].checked
    if (checkboxChecked[i]) {
      currencyObj.changes.percent.hour < 0 ? (hourChangeFlag = true) : (hourChangeFlag = false)
      hourChange[i].innerHTML = '<span>+</span>' + currencyObj.changes.percent.hour + '%'
      hourChange[i].classList.toggle('text-red', hourChangeFlag)

      currencyObj.changes.percent.day < 0 ? (dayChangeFlag = true) : (dayChangeFlag = false)
      dayChange[i].innerHTML = '<span>+</span>' + currencyObj.changes.percent.day + '%'
      dayChange[i].classList.toggle('text-red', dayChangeFlag)

      currencyObj.changes.percent.week < 0 ? (weekChangeFlag = true) : (weekChangeFlag = false)
      weekChange[i].innerHTML = '<span>+</span>' + currencyObj.changes.percent.week + '%'
      weekChange[i].classList.toggle('text-red', weekChangeFlag)

      currencyObj.changes.percent.month < 0 ? (monthChangeFlag = true) : (monthChangeFlag = false)
      monthChange[i].innerHTML = '<span>+</span>' + currencyObj.changes.percent.month + '%'
      monthChange[i].classList.toggle('text-red', monthChangeFlag)
    } else {
      currencyObj.changes.price.hour < 0 ? (hourChangeFlag = true) : (hourChangeFlag = false)
      hourChange[i].innerHTML = '<span>+</span>' + currencyObj.changes.price.hour + '$'
      hourChange[i].classList.toggle('text-red', hourChangeFlag)

      currencyObj.changes.price.day < 0 ? (dayChangeFlag = true) : (dayChangeFlag = false)
      dayChange[i].innerHTML = '<span>+</span>' + currencyObj.changes.price.day + '$'
      dayChange[i].classList.toggle('text-red', dayChangeFlag)

      currencyObj.changes.price.week < 0 ? (weekChangeFlag = true) : (weekChangeFlag = false)
      weekChange[i].innerHTML = '<span>+</span>' + currencyObj.changes.price.week + '$'
      weekChange[i].classList.toggle('text-red', weekChangeFlag)

      currencyObj.changes.price.month < 0 ? (monthChangeFlag = true) : (monthChangeFlag = false)
      monthChange[i].innerHTML = '<span>+</span>' + currencyObj.changes.price.month + '$'
      monthChange[i].classList.toggle('text-red', monthChangeFlag)
    }
  }
}

