var score = document.getElementById('counter');
var clickButton = document.getElementById("clicker");
var sum = 0;
var buttonReset = document.getElementById('reset');
var multicliker = document.getElementById("multi");



//
// //this function resets the game and starts at the beginning
// function reset(){
//     document.getElementById("multi").reset();
//     document.getElementById("auto").reset();
// }


//this function determines what happens when the clicker is clicked (add 1 for every click) and disables multiplier button
function clicker(){
    sum += 1;
   score.innerHTML = sum;
    if(sum >= 5){
        document.getElementById("multi").disabled = false;
    }
}

//Allows the click button to increase the HTML of the score.
clickButton.addEventListener("click", clicker);


//Resets the score and re-disables the buttons:
function resetButton() {
    var newScore = 0;
    sum = newScore;
    score.innerHTML = sum;
}
buttonReset.addEventListener('click', resetButton);

//function for the multiplier button to add 5 for each click
