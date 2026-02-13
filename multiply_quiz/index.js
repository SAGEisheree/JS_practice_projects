
// new things - local storage 

const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input")
const scoreEl = document.getElementById("score");
const formEl = document.getElementById("form");


const userAns = input.innerText

// this line stores the variable score in the localstorage
let score = JSON.parse(localStorage.getItem("score"));
// writting score=0 in if block sets the score = 0 . when the user first uses it 
if(!score) {
  score =0;
}

scoreEl.innerText = `score: ${score}`;
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;



const correctAns = num1 * num2 

formEl.addEventListener("submit",()=>{
  const userAns = +inputEl.value;           // + chanes string to number
   if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});
// updates localstorage on every change of score 
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}