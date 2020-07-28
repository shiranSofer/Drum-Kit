

document.querySelectorAll(".drum").forEach(clickHandler);
document.addEventListener("keydown", keyDownandler);

function clickHandler(item) {
  item.addEventListener("click", function() {
    playSound(item.innerHTML);
    buttonAnimation(item.innerHTML);
  });
}

function keyDownandler(event) {
  playSound(event.key);
  buttonAnimation(event.key);
}

function playSound(key) {
  var audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    default: console.log(key + " is not a key");
  }

  if(audio != null)
    audio.play();
}

function buttonAnimation(key) {
  if(document.querySelector("." + key)) {
    document.querySelector("." + key).classList.add("pressed");

    setTimeout(function() {
      document.querySelector("." + key).classList.remove("pressed");
    }, 100);
  }
}
