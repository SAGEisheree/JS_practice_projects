```javascript


// new things
// queryselector  ,  forEacg  ,  click event lisener  ,  prop sending "e"  ,  currentTarget   ,  contains   ,  

let num = 0;

// queryselector allows you to select items with certain things like [by tag "h1"]
// here since we used querySelectorAll(".btn") all the buttons are now allowed to get selected with custom class names 
const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");
// above line gievs a list [button1,2,3]

// for each says for each item in this list to do something
// so the eventlisener in this foreahc applies to all buttons
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {

// e(event) can be anything.. it hold info like what was clicked

// CURRENT TARGET says do something for The element that the event listener is attached to

// in below line e.currentTarget.classList; gives a array of class names 
    const styles = e.currentTarget.classList;
// . contains checks if that thing is present or not
    if (styles.contains("decrease")) {
      num--;
    } else if (styles.contains("increase")) {
      num++;
    } else {
      num = 0;
    }

    value.textContent = num;
    if (num > 0) {
      value.style.color = "green";
    } else if (num < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }


  });
});



```