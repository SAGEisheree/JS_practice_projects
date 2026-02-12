```javascript
// new things.. thing.value is used for text input things like where we have to enter input
// thing.innerText is used for <span id="thing"><span> . it is not a input box.  just output box.

const bill = document.getElementById("bill")
const tip = document.getElementById("tip")
const calculate = document.getElementById("calculate")
const total = document.getElementById("total")

function calTotal(){
    const billValue = bill.value;
    const tipValue = tip.value;
    const totalValue = billValue*(1+tipValue / 100);
    total.innerText = totalValue.toFixed(2);
}


calculate.addEventListener("click",calTotal);
```