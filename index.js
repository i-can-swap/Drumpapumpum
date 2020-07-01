var btns = document.querySelectorAll(".drum");

//Detecting Key Press
document.addEventListener("keydown",function(event){
   awazDo(event.key);
   buttonAnimation(event.key);
   })

 //Detecting Button Press
for(var i=0; i<btns.length; i++){
     btns[i].addEventListener("click",function(){
     awazDo(this.innerHTML);   
     buttonAnimation(this.innerHTML);
     });
}

//Function to map events to sounds
function awazDo(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;

            case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

            case "s":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
                    
            case "d":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;

            case "j":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;

            case "k":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;

            case "l":
                    var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    break;

            default:
                console.log(k);
    }
}

function buttonAnimation(currentKey){
 var activeButton = document.querySelector("."+currentKey);
 activeButton.classList.add("pressed");
 setTimeout(function(){
    activeButton.classList.remove("pressed");
 },100);
 
}
