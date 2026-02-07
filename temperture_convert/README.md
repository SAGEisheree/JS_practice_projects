```javascript

// things to learn 
// event.target    switch case   tofixed  



// Note.. this code has 3 multiple inputs unlike weight ocnverter which has only one 

// check html for some info


const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event) {

// the + converts the string to number. 
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celsius":
    // to fixed converts 24.992892389 to 24.99
      kelvinEl.value = (currentValue + 273.32).toFixed(2);
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
      break;
    case "kelvin":
      celsiusEl.value = (currentValue - 273.32).toFixed(2);
      fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}

```