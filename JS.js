<<<<<<< HEAD
var score = document.getElementsByTagName("span").innerHTML;
=======
var score = document.getElementById('counter');
var clickButton = document.getElementById("clicker");
>>>>>>> 89cc32a8314e2e7ff6a36fa768c0876e9193bd17
var sum = 0;

//
// //this function resets the game and starts at the beginning
// function reset(){
//     document.getElementById("multi").reset();
//     document.getElementById("auto").reset();
// }


//this function determines what happens when the clicker is clicked (add 1 for every click)
function clicker(){
    sum += 1;
<<<<<<< HEAD
   score.innerHTML = sum;

=======
    score.innerHTML = sum;
>>>>>>> 89cc32a8314e2e7ff6a36fa768c0876e9193bd17
}

clickButton.addEventListener("click", clicker);