var score = document.getElementById('counter');
var clickButton = document.getElementById("clicker");
var sum = 0;
var buttonReset = document.getElementById('reset');
var multiButton = document.getElementById('multi');




//
// //this function resets the game and starts at the beginning
// function reset(){
//     document.getElementById("multi").reset();
//     document.getElementById("auto").reset();
// }


//this function determines what happens when the clicker is clicked (add 1 for every click)
//Allows the click button to increase the HTML of the score.
function clicker(){
    sum += 1;
   score.innerHTML = sum;
}

clickButton.addEventListener("click", clicker);


/*=============================================
===============================================*/


//Resets the score and re-disables the buttons:
function resetButton() {
    var newScore = 0;
    sum = newScore;
    score.innerHTML = sum;
}
buttonReset.addEventListener('click', resetButton);

/*=============================================
===============================================*/

//On Click the button adds +10 to the score
function multiClick() {
    sum += 10;
    score.innerHTML = sum;
}
multiButton.addEventListener("click", multiClick);


