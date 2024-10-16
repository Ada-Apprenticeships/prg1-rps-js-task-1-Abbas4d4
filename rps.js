
/*
//compares options and returns winning value
function rockPaperScissors(player1, player2,same) {

   if (player1 === 'rock' && player2 === 'scissors'){
     return player1
    } else if (player1 === 'rock' && player2 === 'paper') {
      return player2
    } else if (player1 === 'rock' && player2 === 'rock') {
      return same
    } else if (player1 === 'scissors' && player2 === 'scissors'){
      return same
    } else if(player1 === 'scissors' && player2 === 'paper'){
      return player1
    } else if(player1 === 'scissors' && player2 ==='rock'){
      return player2
    } else if(player1 === 'paper' && player2 ==='scissors'){
      return player2
    } else if(player1 === 'paper' && player2 ==='paper'){
      return same
    } else if(player1 === 'paper' && player2 ==='rock'){
      return player1
    }
};


//calls functions and logs their outputs

for(let i = 0; 1 = 8; i++) {

}
console.log(rockPaperScissors('rock','scissors'));
console.log(rockPaperScissors('rock','paper','same'));
console.log(rockPaperScissors('rock','rock','same'));
console.log(rockPaperScissors('scissors','scissors','same'));
console.log(rockPaperScissors('scissors','paper'));
console.log(rockPaperScissors('scissors','rock'));
console.log(rockPaperScissors('paper','paper','same'));
console.log(rockPaperScissors('paper','scissors'));
console.log(rockPaperScissors('paper','rock'));




*/




function rockPaperScissors(player1,player2) {
   console.log(player1,player2)
}

player1_options = ['rock','paper','scissors']
player2_options = ['rock','paper','scissors']

for (let x = 0; x < player1_options.length; x++){
  for (let y = 0; y < player2_options.length; y++) {
      rockPaperScissors(player1_options[x], player2_options[y]);
  }
}

















// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}