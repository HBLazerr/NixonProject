http://jsfiddle.net/9CDtE/4/
georgeButton.onmouseover = function(event){
    this.style.left = Math.random() * 800 + "px"
    this.style.top = Math.random() * 300 + "px"
}

window.oncontextmenu = (event) => {
    event.preventDefault();
  }

function playSound(sike) {
    var sound = document.getElementById(sike);
    sound.play();
}

//An object that moves around the page using clientX and clientY
vote.mouseover = function(event){

    let voteCoords = this.getBoundingClientRect();

    let buttonCoords = {
        top: event.clientY - voteCoords.top,
        left: event.clientX - voteCoords.left
    }

    if(buttonCoords.top < 0){
        buttonCoords.top = 0;
    }
    if(buttonCoords.left < 0){
        buttonCoords.left = 0;
    }
    
    if(buttonCoords.left + georgeButton.clientWidth > vote.clientWidth){
        buttonCoords.top = vote.clientWidth - georgeButton.clientWidth
    }
    if(buttonCoords.top + georgeButton.clientHeight > vote.clientHeight){
        buttonCoords.top = vote.clientHeight - georgeButton.clientHeight
    }

    georgeButton.style.left = buttonCoords.left+'px'
    georgeButton.style.top = buttonCoords.top+'px'
}

document.getElementById("georgeButton").addEventListener("click", function() {
    for(i = 0; i < 7; i++){
        var here = document.getElementById("here")
        here.innerHTML += "<p><b>VOTE FOR NIXON INSTEAD</b></p>"
    }
  });