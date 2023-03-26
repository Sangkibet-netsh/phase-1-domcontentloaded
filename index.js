// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    // const elem = document.getElementById(text)//displays the initial text in the index.html file
    const elem = document.querySelector("#text")//replaces the text in the index.html
    elem.textContent = "This is really cool!"
    console.log(elem);
  });
  
//   console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//   );