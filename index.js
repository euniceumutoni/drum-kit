var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i <numberOfDrumButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function () {
   
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML); // button sound
    buttonAnimation(buttonInnerHTML); // animation

});
}

document.addEventListener("keypress", function (event){
    makeSound(event.key); //  activates sound
    buttonAnimation(event.key); //activates animation
});

function makeSound(key)  {


    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3"); //sound for each letter
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s": 
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
       
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
       
        default: console.log(buttonInnerHTML); 
            
    }
};

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 200);

}

//added key press and click so they all work together






//var audio = new Audio("sounds/tom-1.mp3");
//audio.play();
