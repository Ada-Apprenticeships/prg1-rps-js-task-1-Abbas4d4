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
    /*Player1_WinningCondition[player1].includes(player2) ?  return 'player1' :  return 'player2'*/
    if(Player1_WinningCondition[player1].includes(player2))
      return 'player1';
    else
      return 'player2';
 
  }
 

 var players_options = ['rock','paper','scissors','lizard','spock']

 //loops through all combinations between players from given list(25)
 for (let x = 0; x <  players_options.length; x++){   
   for (let y = 0; y <  players_options.length; y++) {
      var result = rockPaperScissors(players_options[x], players_options[y]);
   }
 }
}









// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}