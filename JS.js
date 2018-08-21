var score = document.getElementById('counter');
var clickButton = document.getElementById("clicker");
var sum = 0;
var buttonReset = document.getElementById('reset');
var multiButton = document.getElementById('multi');
var autoButton = document.getElementById("auto");
var counter = function counter() {
    sum ++;
    score.innerHTML = sum;
};

//this function determines what happens when the clicker is clicked (add 1 for every click)
//Allows the click button to increase the HTML of the score.
function clicker(){
    sum += 1;
   score.innerHTML = sum;
    if(sum >= 5){
        document.getElementById("multi").disabled = false;
    }
    if (sum >= 10){
        document.getElementById("auto").disabled = false;
    }
}

//Allows the click button to increase the HTML of the score.
clickButton.addEventListener("click", clicker);


//Resets the score and re-disables the buttons:
function resetButton() {
    var newScore = 0;
    sum = newScore;
    score.innerHTML = sum;
    document.getElementById("multi").disabled = true;
    document.getElementById("auto").disabled = true;
}


buttonReset.addEventListener('click', resetButton);

//On Click the button adds +10 to the score
function multiClick() {
    sum += 10;
    score.innerHTML = sum;
    if (sum >= 10){
        document.getElementById("auto").disabled = false;
    }
}
multiButton.addEventListener("click", multiClick);

//On click autoClicker will continuosly increases score.
function autoClicker() {
    if(sum>=10) {
        setInterval(counter, 1000);
    }

}
 autoButton.addEventListener('click', autoClicker);

