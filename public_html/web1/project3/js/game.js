console.log("wait, i'm loaded");

const stage = document.querySelector("body");
const mc = document.getElementById("mc");

// Sounds
const mcMoveS = new Audio("sounds/placeholder.mp3");

mc.onclick = function() {
    this.classList.toggle("move");
    mcMoveS.play();
}

stage.addEventListener("click", function(event) {
    console.log(event.clientX + " : " + event.clientY)
    mc.style.transform = `translateX(${event.clientX-100}px) translateY(${event.clientY-92}px)`;
})
document.onkeydown = checkKeys;

function checkKeys(event) {
    
    var style = window.getComputedStyle(mc);
    var matrix = new WebKitCSSMatrix(style.transform);
    var xVal = matrix.m41;
    var yVal = matrix.m42;    
    var coords;

    //left arrow
    if(event.keyCode == "37") {
        coords = `translateX(${xVal-200}px) translateY(${yVal}px)`;
        mc.style.transform = coords;
    }
    //right arrow
    if(event.keyCode == "39") {
        coords = `translateX(${xVal+200}px) translateY(${yVal}px)`;
        mc.style.transform = coords;
    }
    //up arrow
    if(event.keyCode == "38") {
        coords = `translateX(${xVal}px) translateY(${yVal-200}px)`;
        mc.style.transform = coords;
    }
    //down arrow
    if(event.keyCode == "40") {
        coords = `translateX(${xVal}px) translateY(${yVal+200}px)`;
        mc.style.transform = coords;
    }



}

/* sun */

let sun;
function addsun(){

let sun = document.createElement("img");
sun.src = "img/sun.svg";
sun.style.width = "100px";
stage.append(sun);


// works in some windows, completely ignored in others
let w = window.innerWidth - 100;
let randoX = Math.floor((Math.random() * w) + 1);
let h = window.innerHeight - 58;
let randoY = Math.floor((Math.random() * w) + 1);

sun.style.transform = `translateX(${randoX}px) translateY(${randoY}px)`;

setTimeout (() => {
    sun.remove();
    addsun(); }, 4000);
}
addsun();

// gameloop

let characterCoordX;
let characterCoordY;
let sunCoordX;
let sunCoordY;

setInterval(() => {
  console.log("loop tick")
  characterCoordX = mc.getBoundingClientRect().x;
  characterCoordY = mc.getBoundingClientRect().y;

  //optional: move character coordinates to its center
  characterCoordX += 100; // half the width of the character
  characterCoordY += 92; // half the height of the character
  
//  not entierly sure why it can't grab the sun's coords, it looks like it's properly defined up to this point
//  bar any spelling mistakes i'm too tired to see, it all looks fine
  sunCoordX = sun.getBoundingClientRect().x;
  sunCoordY = sun.getBoundingClientRect().y;

  if(
       (characterCoordX >= sunCoordX && characterCoordX <= sunCoordX + sun.width) 
    && (characterCoordY >= sunCoordY && characterCoordY <= sunCoordY + sun.height)
    ) {
    console.log("Sun blocked!");
    sunAction();
  }  
}, 50);

const attackSound = new Audio("sounds/placeholder");
function sunAction() {

    sun.remove();
    attackSound.play();

}
