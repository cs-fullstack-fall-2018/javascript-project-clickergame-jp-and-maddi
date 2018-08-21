var score = 0;

//this function resets the game and starts at the beginning
function reset(){
    document.getElementById("multi").reset();
    document.getElementById("auto").reset();
}


//this function determines what happens when the clicker is clicked (add 1 for every click)
function clicker(){
    var sum = 0;
    sum += 1;
    score = sum;
}
