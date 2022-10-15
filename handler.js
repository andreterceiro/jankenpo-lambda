'use strict';

const { O_TRUNC } = require("constants");

module.exports.play = async (event) => {
  return {
    statusCode: 200,
    body: process(event.queryStringParameters.choice)
  };
};

/**
 * Return who is the winner
 * user GET parameter choice x computer random choice 
 * 
 * @param {string} userChoice A string representing the choice, like 'rock'
 *
 * @return {string} Return a string that says who is the winner
 */
function process(userChoice) {
  if (userChoice != "paper" && userChoice != "rock" && userChoice != "scissors") {
    return "Please provide your choice as GET parameter. Example: '?choice=paper' at the end of the URL"
  }
  const computerChoice = getComputerChoice();

  if ((userChoice == "paper" && computerChoice == "rock") || (userChoice == "rock" && computerChoice == "scissors") || (userChoice == "scissors" && computerChoice == "paper")) {  
    return `User win. Computer selected ${computerChoice}`;
  } else if (userChoice == computerChoice) {
    return `Draw. Computer selected ${computerChoice}`;
  } else {
    return `Computer win. Computer selected ${computerChoice}`;
  }
}

/**
 * Returns the computer choice
 * 
 * @return {string} A string representing the choice, like 'rock'
 */
function getComputerChoice() {
  const choices = ["paper", "rock", "scissors"];
  const randomComputerIndex = Math.floor(Math.random() * 3);
  return choices[randomComputerIndex];
}