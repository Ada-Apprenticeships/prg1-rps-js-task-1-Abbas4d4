function rockPaperScissors(player1,player2) {

  //Outlines winning hands for Player1 based on player2's hand
  const Player1_WinningCircumstances = {
    rock:['scissors','lizard'], 
    paper:['rock','spock'], 
    scissors:['paper','lizard'], 
    lizard:['spock','paper'],
    spock:['scissors','rock']
  }

  //Draw condition
  if (player1 === player2) return 'draw'

  // Checks if Player 2's hand is in the list of hands Player 1 can beat. Determines winner.
  return Player1_WinningCircumstances[player1].includes(player2) ?  'player1' :  'player2';  

 
}









// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}