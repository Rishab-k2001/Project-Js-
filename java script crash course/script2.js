// challenge 1 your age and days

function AgeIndays() {
  var names = prompt("What is your name");
  var birthyear = prompt("What Year You Were Born?");
  var ageindayss = (2022 - birthyear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    names + " You are " + ageindayss + " Days old."
  );
  h1.setAttribute("id", "AgeIndays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("AgeIndays").remove();
}

// challenge2 Chicken gen
function Chickengen() {
  const hitSound = new Audio("blackjack_assets/bruh.mp3");

  var image = document.createElement("img");
  var div = document.getElementById("Chicken-flex-gen");
  image.src = "https://media.giphy.com/media/cO8dkx8Z0aeV6qmeQ7/giphy.gif";

  div.appendChild(image);
  hitSound.play();
}

//challenge-3 rock paper scissor

function rpsGame(yourChoice) {

  console.log(yourChoice);
  var humanChoice, botChoice;

  humanChoice = yourChoice;
  botChoice = numberToChoice(randTorpsInt());
  humanChoice = yourChoice.id; //.id becz it goona give the id of YOURCHOICE Like rock its id is rock
  console.log("Yourchoice :", yourChoice.id);
  console.log("ComputerChoice :", botChoice);
  result = decideWinner(humanChoice, botChoice);
  console.log(result);
  message = finalMessage(result);
  console.log(message);

  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randTorpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ["rock", "paper", "scissor"][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { scissor: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissor: 0 },
    scissor: { paper: 1, scissor: 0.5, rock: 0 },
  };

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You Lost ! ", color: "red" };
    
   
  }

  else if (yourScore === 0.5) {
    return { message: "It's a Tie !", color: "blue" };
  } else {
    return { message: "You Win !", color: "green" };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissor: document.getElementById("scissor").src,
  };

  // lets remove all the images

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissor").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imageDatabase[humanImageChoice] +
    "' height =150 width =150 style =' box-shadow: 1px 1px 30px 20px rgba(34, 3, 214, 0.76)'>";
  messageDiv.innerHTML =
    "<h1 style = 'color: " +
    finalMessage["color"] +
    "; font-size : 100px; padding:30px; '>" +
    finalMessage["message"] +
    "</h1>";
  botDiv.innerHTML =
    "<img src ='" +
    imageDatabase[botImageChoice] +
    "'height =150 width=150 style='box-shadow: 1px 1px 30px 20px rgba(242,5,5,1)'>";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}
//challenge 4 change color

var all_buttons = document.getElementsByTagName("button");
console.log(all_buttons);

var copyAllbuttons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllbuttons.push(all_buttons[i].classList[1]);
}
console.log(copyAllbuttons);

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === "red") {
    buttonsRed();
  } else if (buttonThingy.value === "green") {
    buttonsGreen();
  } else if (buttonThingy.value === "reset") {
    buttonReset();
  } else if (buttonThingy.value === "random") {
    randomColors();
  } else if (buttonThingy.value === "blue") {
    buttonsBlue();
  }
}

function buttonsRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}
function buttonsGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}
function buttonsBlue() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-primary");
  }
}

function buttonReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllbuttons[i]);
  }
}

function randomColors() {
  let colorChoices = [
    "btn-primary",
    "btn-danger",
    "btn-success",
    "btn-warning",
    "btn-info",
    "btn-dark",
  ];

  for (let i = 0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 6);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(colorChoices[randomNumber]);
  }
}

//Challenge 5 BlackJack

let blackjackGame = {
  'You': { scoreSpan: "#your-blackjack-result", div: "#your-box", score: 0 },
  'Dealer': {scoreSpan: "#dealer-blackjack-result", div: "#dealer-box",'score': 0,},
  'cards': ['2','3','4','5','6','7','8','9','10','K','Q','J','A'],
  'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'Q':10,'J':10,'A':[1,11]}
};

const YOU = blackjackGame["You"];
const DEALER = blackjackGame["Dealer"];

const hitSound = new Audio("blackjack_assets/cardfx1.mp3");
const winSound = new Audio("blackjack_assets/welldone.mp3");
const lostSound = new Audio("blackjack_assets/lost gaya.mp3");

document.querySelector("#blackjack-hit-button").addEventListener("click", blackjackHit); // doing instead of onclick in html file
document.querySelector("#blackjack-stand-button").addEventListener("click", dealerLogic);
document.querySelector("#blackjack-deal-button").addEventListener("click", blackjackDeal);
function blackjackHit() {
  let card = randomCard();
  console.log(card);

  showCard(card,YOU);
  updateScore(card,YOU);
  console.log(YOU['score']);
  showScore(YOU);
  
}
function randomCard(){
  let randomIndex = Math.floor(Math.random()*13);
  return blackjackGame['cards'][randomIndex];
}

function showCard(card,activePlayer) {
  if(activePlayer['score']<=21){

  
  let cardImage = document.createElement("img");
  cardImage.src = `blackjack_assets/images/${card}.png`;
  cardImage.style.resize = "both";

  document.querySelector(activePlayer["div"]).appendChild(cardImage);
  hitSound.play();
  }
}

function blackjackDeal() {
  let winner = computeWinner();
  showResult(winner);
  
  let yourImages = document.querySelector("#your-box").querySelectorAll("img");

  for (i = 0; i < yourImages.length; i++) {
    yourImages[i].remove();
  }
  let dealerImages = document.querySelector("#dealer-box").querySelectorAll("img");
  for (i = 0; i < dealerImages.length; i++) {
    dealerImages[i].remove();
  }
  YOU['score']=0;
  DEALER['score']=0;
  document.querySelector('#your-blackjack-result').textContent = 0;
  document.querySelector('#dealer-blackjack-result').textContent = 0;

  document.querySelector('#your-blackjack-result').style.color='white';
  document.querySelector('#dealer-blackjack-result').style.color='white';

  
}

function updateScore(card,activePlayer){
  if(card==='A'){
    // if adding 11 keeps me below 21 add 11 otherwise, add 1
    if(activePlayer['score']+blackjackGame['cardsMap'][card][1]<=21){
      activePlayer['score']+=blackjackGame['cardsMap'][card][1];
    }
    else{
      activePlayer['score']+=blackjackGame['cardsMap'][card][0];
    }
  }
  else{
    activePlayer['score']+= blackjackGame['cardsMap'][card];
  }
}

function showScore(activePlayer){
  if(activePlayer['score']>21){
    document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
  document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
}
else{
  document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
  

}
}

function dealerLogic(){

  let card = randomCard();
  showCard(card,DEALER);
  updateScore(card,DEALER);
  showScore(DEALER);
}

// helps us compute winner and who just won

function computeWinner(){

  let winner;

  if(YOU['score']<=21){
    // condition heigher score than dealer or when dealer bust but you're 21 or under
    if(YOU['score']>DEALER['score'] || DEALER['score']>21){
      console.log('You Won!');
      winner = YOU;
    }
    else if(YOU['score']<DEALER['score']){
      console.log('You Lost');
      winner = DEALER;
    }
    else if(YOU['score']===DEALER['score']){
      console.log('Draw !');

    }
    // when user bust but dealer dosen't

    else if(YOU['score']>21 && DEALER['score']<=21){
      console.log('You Lost!');
      winner = DEALER;
    }
    // when you and dealer both bust 
    else if(YOU['score']>21 && DEALER['score']>21){
      console.log('Draw !');

    }
    console.log('Winner is',winner);

    return winner;
  }
}

function showResult(winner){
  let message , messageColor;

  if(winner === YOU){
    message = 'You Win!';
    messageColor = 'green';
    winSound.play();
  }
  else if(winner === DEALER){
    message = 'You Lost!';
    messageColor = 'red';
  lostSound.play();
  }
  else{
    message = 'Draw!';
    messageColor='Blue';
  }
  document.querySelector('#blackjack-result').textContent= message;
  document.querySelector('#blackjack-result').style.color=messageColor;

}