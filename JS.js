var score = document.getElementsByTagName("span").innerHTML;
var sum = 0;

//this function resets the game and starts at the beginning
function reset(){
    document.getElementById("multi").reset();
    document.getElementById("auto").reset();
}


//this function determines what happens when the clicker is clicked (add 1 for every click)
function clicker(){
    sum += 1;
   score.innerHTML = sum;

}
