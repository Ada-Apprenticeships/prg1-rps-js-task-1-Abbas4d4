function rockPaperScissors(player1,player2) {

  //States which combinations result in player1 winning
  var Player1_WinningCondition = {
    'rock':['scissors','lizard'], 
    'paper':['rock','spock'], 
    'scissors':['paper','lizard'], 
    'lizard':['spock','paper'],
    'spock':['scissors','rock']
  }

  if (player1 === player2) 
  {
    return 'draw'; 
  } 
  else 
  {
    return Player1_WinningCondition[player1].includes(player2) ?  'player1' :  'player2';  

  }
}









// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}