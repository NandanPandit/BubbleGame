var bubble = "";

function createBubble() {
    for(let i = 1; i<= 126; i++){
        let randomNumber = Math.floor(Math.random()*10);
        bubble += `<div class="bubbleCircle">${randomNumber}</div>`;
    }
    document.querySelector(".bubble").innerHTML = bubble;
}

//timer counting
function runTime() {
    let myTime = 5;
   let runTimer =  setInterval(function(){
        
        if (myTime>0) {
            myTime--;
            document.querySelector("#Time").textContent = myTime;
        }
        else{
            clearInterval(runTimer); //stop timer when time is zero (0)
            document.querySelector(".bubble").innerHTML =`<h1 style = "margin: 30vh">Game Over</h1>`;
        }
    },1000)
}
//heading match random number
var randomNumber;
function matchRandomNumber() {
    randomNumber = Math.floor(Math.random()*10);
    document.querySelector("#matchTheNumber").innerHTML = randomNumber;
}
//increase score by 10;
var ScoreValue = 0;
function increaseScore() {
    ScoreValue += 10;
    document.querySelector("#incrScore").textContent = ScoreValue;
    
}
//matching value then increase score value; 
document.querySelector(".bubble").addEventListener("click",function(allDetails){
    let matchingNumber = Number(allDetails.target.textContent);
    //check random number and bubbling number is equl.
    if (matchingNumber === randomNumber) {
        increaseScore();
        matchRandomNumber();
    }
})



createBubble();
runTime();
matchRandomNumber();