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

const xhr = new XMLHttpRequest()

function selectValue() {
  let promise = new Promise((resolve, reject) => {
    xhr.open("GET", select.value, true)
    xhr.onload = () => resolve(xhr.responseText)
    xhr.onerror = () => reject(xhr.statusText)
    xhr.send()
  });

  promise
  .then(
    result => {
      let currencyObj = JSON.parse(result)
      for (let i = 0; i < priceAsk.length; i++) {
        priceAsk[i].innerHTML = '$' + currencyObj.ask
        hourChange[i].innerHTML = currencyObj.changes.price.hour
        dayChange[i].innerHTML = currencyObj.changes.price.day
        weekChange[i].innerHTML = currencyObj.changes.price.week
        monthChange[i].innerHTML = currencyObj.changes.price.month
      }
    },
    error => {
      console.error("Rejected: " + error)
    }
  );
}

/*var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function() {
  if (ajax.readyState == 4 && ajax.status == 200) {
    let response = ajax.responseText;
    console.log('Ajax:' + response);
  }
};
ajax.open("GET", select.value, true);
ajax.setRequestHeader("Content-type", "application/json");
ajax.send();*/



