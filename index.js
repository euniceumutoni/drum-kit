
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i <numberOfDrumButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert ("I got clicked!");                              //pop up on page when clicked
    
    this.style.color = "white";                            // changes the clicked drums white
    
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();                                          //adds sound to the drums when clicked




    
});

}
