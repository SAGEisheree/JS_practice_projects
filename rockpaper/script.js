let head = document.querySelector("#head");
let tail = document.querySelector("#tail");
let userChoice  = document.querySelector("#userchoice");
let compChoice = document.querySelector("#compChoice");

let enter = document.querySelector("#enter")
let streak = document.querySelector("#streak")
let isHeads = Math.random() < 0.5;
let  a =Number(streak.number);



head.addEventListener('click',function(){
     userChoice.textContent = 'head';
});
tail.addEventListener('click',function(){
     userChoice.textContent = 'tail';
});

enter.addEventListener('click',function(){
if(isHeads) compChoice.textContent = 'head';
else compChoice.textContent = 'tail';
isHeads = Math.random() < 0.5;


if ( userChoice.textContent === compChoice.textContent){
    let currentStreak = Number(streak.textContent);
     
    streak.textContent = currentStreak + 1;
    
} 
});





