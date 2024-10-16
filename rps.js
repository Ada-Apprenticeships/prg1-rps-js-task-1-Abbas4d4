
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


function check_winner(p1_pick,p2_pick) {
  console.log(p1_pick,p2_pick)
}

player1_options = ['rock','paper','scissors']
player2_options = ['rock','paper','scissors']
index = 0

for (let i = 0; i=8; i++){
  check_winner(player1_options[index],player2_options[index] )
  index += 1
}




















// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}