
//Define the symbols
//Spin the reels
    /* For each reel 
        * Randomly choose one imposter from the list.
    * Store the chosen symbols in an array */
//Display the result
   /* Show the three imposter to the player.*/
//Check for winnings
    /* If all three symbols match → Jackpot and play imposter sound.
    * Else if any two symbols match → Small Win and play among us sound.
    * Else → No win, try again.*/
//Handle credits 
    /* Start with 1000 credits.
    * Subtract 5/50 credit each time the player spins.
    * Add credits back if they win..different amounts for jackpot vs small win.*/
//Repeat
    /* Wait for the player to press "Spin" again.
    * Go back to Step 2.*/

//Justin Joshi helped with foundation of js code and i was able to work off what we started


let imposter = document.querySelector(".imposter")
let slots = document.querySelector(".slots")
let slot1 = document.querySelector(".slot1")
let slot2 = document.querySelector(".slot2")
let slot3 = document.querySelector(".slot3")

//sounds to be played on win
let jackpotSound = new Audio('among-us-role-reveal-sound-effect-359833 copy.mp3');
let smallWinSound = new Audio('among-us-accelerate-echo-337660.mp3');

//  the icons for reels

let crewmate = [
    'img/BlackTopHat.png',
    'img/BrownTexas.png',
    'img/GreenBanana.png',
    'img/GreenCop.png',
    'img/LightBlueFloor.png',
    'img/OrangeDoc.png',
    'img/PinkBaby.png',
    'img/Purple.png',
    'img/RedChef.png',
    'img/Blue.png',
    'img/WhiteBoat.png',
    'img/YellowKing.png'
]


// Spin the Reels

function spinSlots() {
    

    const slot1Res = crewmate[Math.floor(Math.random() * crewmate.length)];
    const slot2Res = crewmate[Math.floor(Math.random() * crewmate.length)];
    const slot3Res = crewmate[Math.floor(Math.random() * crewmate.length)];
    document.querySelector(".slots").style.backgroundImage = "url('')";
    document.querySelector('.slots').innerHTML = ''
    document.querySelector('.slots').innerHTML = `
    <div class="slot1"><img src="${slot1Res}"></div>
    <div class="slot2"><img src="${slot2Res}"></div>
    <div class="slot3"><img src="${slot3Res}"></div>`


    console.log(slot1Res, slot2Res, slot3Res)
    
// conditionals for jackpot
    if (slot1Res === slot2Res && slot2Res == slot3Res) {
        console.log('JACKPOT')
        jackpotSound.play();
        document.querySelector(".slots").style.backgroundImage = "url('img/divbkgnd.png')";
        document.querySelector(".slots").style.backgroundSize = "cover";
        document.querySelector(".slots").style.backgroundPosition = "center";
        credits += 5000
    }

    else if (slot1Res === slot2Res || slot2Res === slot3Res || slot1Res === slot3Res) {
        console.log('Small Win')
        smallWinSound.play();
        credits += 50
       
    }
    else {
        return "Try Again!"
    }
}



/// coin functions
let creditsSelector = document.querySelector('.credits')
let credits = 1000
creditsSelector.innerText = `${credits}`


document.querySelector('.fiveSPIN').addEventListener('click', fiveSPIN)
function fiveSPIN() {
if (credits >= 5){
    credits -= 5
    creditsSelector.innerText = `${credits}`
    console.log(credits)
    spinSlots(5)

}
else 

document.querySelector('.credits').innerText = "Sorry Out Of Credit"

}


document.querySelector('.FIFTYspin').addEventListener('click', FIFTYspin)
function FIFTYspin() {

if (credits >= 50){
    credits -= 50
    creditsSelector.innerText = `${credits}`
    console.log(credits)
    spinSlots(50)
}
else 

document.querySelector('.credits').innerText = "Sorry NOT enough Credit"

}






