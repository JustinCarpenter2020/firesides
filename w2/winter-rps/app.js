let choices = ["rock", "paper", "scissors", "lizard", "spock"]
let wins = 0
let losses = 0
let ties = 0
// let winConditions = {
//   rock: "scissors",
//   paper: "rock",
//   scissors: "paper"
// }

let winConditions = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"]
}

function draw(){
  document.getElementById("score-table").innerHTML = `<p>
 Wins : ${wins} - Losses: ${losses} - Ties : ${ties}
  </p>`
  // document.getElementById()
}

//throw this in just one draw function when you go to set it up
function draw2(cChoice, pChoice){
  document.getElementById("play-zone").innerHTML = `
  <p>Player : ${pChoice}</p>
  <p>Comp : ${cChoice}</p>
  `
}


function play(input){
  // console.log(input)
  //hard coding comp choice is a good way to start out to test your logic
  // let compChoice = "paper"
  let compChoice = compRandChoice()
  console.log(compChoice, "comp choice", input, "playerchoice");
  //#region 
  // if(input == compChoice){
  //   console.log("Tie!")
  //   ties++
  // }else if( input == 'scissors'){
  //   if(compChoice == "paper"){
  //     console.log("you win")
  //     wins++
  //   }else {
  //     console.log("you lose")
  //     losses++
  //   }
  // } else if ( input == 'paper'){
  //   if(compChoice == "rock"){
  //     console.log("you win")
  //     wins++
  //   }else {
  //     console.log("you lose")
  //     losses++
  //   }
  // }else if ( input == 'rock'){
  //   if(compChoice == "scissors"){
  //     console.log("you win")
  //     wins++
  //   }else {
  //     console.log("you lose")
  //     losses++
  //   }
  // }
  //#endregion


  // if(input == compChoice){
  //     console.log("Tie!")
  //     ties++
  //   }else if(winConditions[input] == compChoice){
  //     console.log("you win")
  //     wins++
  //   }else {
  //     console.log("you lose")
  //      losses++
  //   }

  //TERNARY
  // WHAT TO EVAL ? if truthy : if falsy
  // input == compChoice ? ties++ : winConditions[input] == compChoice ? wins++ : losses++
// console.log(winConditions[input]);
  input == compChoice ? ties++ : winConditions[input].includes(compChoice) ? wins++ : losses++

  // input == compChoice ? ties++ : winConditions[input].some(e=> e == compChoice) ? wins++ : losses++




  draw()
  //draw function without passing the choices to display
  //then pass to function to display to user

  draw2(compChoice, input)
}

function compRandChoice(){
  return choices[Math.floor(Math.random()* choices.length)]
}

draw()