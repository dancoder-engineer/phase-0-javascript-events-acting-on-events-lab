// Your code here
let dodger = document.getElementById('dodger');
dodger.style.backgroundColor="#FF69B4";
let leftNumbers = parseInt(dodger.style.left.replace("px", ""));
let howFast = 5;

function moveDodgerLeft() { 
    leftNumbers -= 5
    dodger.style.left = `${leftNumbers}px`; }

function moveDodgerRight() { 
    leftNumbers += 5
    dodger.style.left = `${leftNumbers}px`; }

document.addEventListener("keydown", function(e) {
    //console.log(leftNumbers);
    if (e.key === 'ArrowRight') { 
        moveDodgerLeft(); 
    }
    if (e.key === 'ArrowLeft') { 
        moveDodgerRight();
    }
  });
