const input = document.getElementById("input");
const result = document.getElementById("result")

function update(){

  const value= input.value
  result.innerText = value/1000

}

input.addEventListener("input",update)