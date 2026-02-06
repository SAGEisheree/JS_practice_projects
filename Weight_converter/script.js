
//getElement by ID gets the elemts with which we have assigned values

const input = document.getElementById("input");
const result = document.getElementById("result")



function update() {

  const value = input.value
  result.innerText = value / 1000

}

//add event lisener for the object input . so when any event is performed on that object.. the function getts triggered
input.addEventListener("input", update)