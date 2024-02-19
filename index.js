const currency = document.querySelector("#currency");
const url = "https://api.nbp.pl/api/exchangerates/rates/a/";
const plnValue = document.querySelector("#plnValue");
const amount = document.querySelector("#amount");
const recalcForm = document.querySelector("#recalculate");
const counterBox = document.querySelector("#counter-box");

recalcForm.addEventListener("submit", (event) => {
  event.preventDefault();

  fetch(url + currency.value)
    .then((response) => response.json())
    .then((data) => {
      const plnAmount = amount.value * data.rates[0].mid;
      plnValue.innerText = plnAmount.toFixed(2) + " PLN";
    })
    .catch((err) => console.error(err));
});
