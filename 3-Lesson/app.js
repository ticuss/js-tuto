/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, activePlayer,dice, prevDice , roundScore, gamePlaying ;



init();


/*function btn(){

    //do something

} // we can create an event and call it using  document.querySelector('.btn-roll').addEventListener('click', btn); the function btn() will be applied 
//when we click on the  button 

btn(); */
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
  // 1 . random number
  dice1 = Math.floor(Math.random()*6)+1; 
 // console.log(dice1);
  //dice = 6 ;
  dice2 = Math.floor(Math.random()*6)+1; 
  //2. Display result
    document.getElementById('dice-1').style.display = 'block' ;
    document.getElementById('dice-2').style.display = 'block' ;
    document.getElementById ('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById ('dice-2').src = 'dice-' + dice2 + '.png';
   
  
  //3. update the score if the dice if != 1
  if (dice === 6 && prevDice === 6){

    scores[activePlayer] =0 ;
    document.querySelector('#score-' + activePlayer).textContent = '0';
    nextPlayer();

  } 
  
  else if(dice !== 1 && dice2!==1) {
      roundScore += dice1 + dice2 ;
      //roundScore = roudsScore + dice;
      document.querySelector('#current-' + activePlayer ).textContent = roundScore;

     
}    

  else {

      nextPlayer();


          //document.querySelector('.player-0-panel').classList.remove('active');
          //document.querySelector('.player-1-panel').classList.add('active');
          
      }
      prevDice = dice ; 
    }
});

document.querySelector('.btn-hold').addEventListener('click' , function(){
    //1. Add current score to global score 
   if(gamePlaying){
    scores[activePlayer] += roundScore;

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
}

    var input = document.querySelector('.final-score').value ;

    //Undefined, 0 , NULL , "" are coerced to false // else is true 
    if(input){
        var winningScore = input ;


    } else {
        winningScore = 20;

    }
    
    if(scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.getElementById('dice-1').style.display = 'none' ;
    document.getElementById('dice-2').style.display = 'none' ;
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        gamePlaying = false ;
    } else {
        nextPlayer();
    }
    // Update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer] ;

    //check if the player won the game; 

})

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
    roundScore = 0; 

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('dice-1').style.display = 'none' ;
    document.getElementById('dice-2').style.display = 'none' ;
}

document.querySelector('.btn-new').addEventListener('click',init)

function init(){
    gamePlaying = true;
    scores = [0,0];
    activePlayer = 0 ; 
    roundScore = 0;
    document.getElementById('dice-1').style.display = 'none' ;
    document.getElementById('dice-2').style.display = 'none' ;//hide the picture in the beginning
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1 ';
    document.getElementById('name-1').textContent = 'Player 2 ';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

//document.querySelector('#current-' + activePlayer ).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>' ;
//var x = document.querySelector('#score-0').textContent ; 
//console.log(x);


