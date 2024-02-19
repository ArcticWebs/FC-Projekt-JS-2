const currency = document.querySelector("#currency");
const url = "http://api.nbp.pl/api/exchangerates/rates/a/";
const plnValue = document.querySelector("#plnValue");
const amount = document.querySelector("#amount");
const recalcBtn = document.querySelector("#recalculate");

recalcBtn.addEventListener("click", () => {
  fetch(url + currency.value)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.rates[0].mid);

      const plnAmount = amount.value * data.rates[0].mid;
      plnValue.innerText = plnAmount + " PLN";

      console.log(plnAmount);
    })
    .catch((err) => console.error(err));
});
