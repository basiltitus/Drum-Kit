for(var i=0;i<7;++i)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    fncheck(this.innerHTML);
    fnanimaion(this.innerHTML);
  });
}


document.addEventListener("keypress",function(){
fncheck(event.key);
fnanimaion(event.key);
});

function fncheck(ch){
  console.log(ch);
switch(ch){
  case "w":  var music="sounds/crash.mp3";
  break;
  case "a":  var music="sounds/kick-bass.mp3";
  break;
  case "s":  var music="sounds/snare.mp3";
  break;
  case "d":  var music="sounds/tom-1.mp3";
  break;
  case "j":  var music="sounds/tom-2.mp3";
  break;
  case "k":  var music="sounds/tom-3.mp3";
  break;
  case "l":  var music="sounds/tom-4.mp3";
  break;
}
var audio = new Audio(music);
audio.play();
}
function fnanimaion(key){
var activebtn=document.querySelector("."+key);
activebtn.classList.add(".pressed");
console.log(activebtn.classList);
//setTimeout(function(){ activebtn.classList.remove(".pressed");}, 3000);
}
