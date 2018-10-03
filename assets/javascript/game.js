$(document).ready(function() {

    var Random=Math.floor(Math.random()*100+50)
    $('#randomNumber').text(Random);
    var blueNum= Math.floor(Math.random()*10+1)
    var greenNum= Math.floor(Math.random()*10+1)
    var redNum= Math.floor(Math.random()*10+1)
    var purpleNum= Math.floor(Math.random()*10+1)
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  function reset(){

    Random=Math.floor(Math.random()*100+50);
    $('#randomNumber').text(Random);
    blueNum= Math.floor(Math.random()*10+1);
    greenNum= Math.floor(Math.random()*10+1);
    redNum= Math.floor(Math.random()*10+1);
    purpleNum= Math.floor(Math.random()*10+1);
    userTotal= 0;
    $('#total').text(userTotal);
    } 

  function win(){
  alert("You win!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }

  function lose(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }

    $('#blueCrystal').on ('click', function(){
      userTotal = userTotal + blueNum;
      $('#total').text(userTotal); 

        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        }   
    })  
    $('#greenCrystal').on ('click', function(){
      userTotal = userTotal + greenNum;
      $('#total').text(userTotal); 

        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        } 
    })  
    $('#redCrystal').on ('click', function(){
      userTotal = userTotal + redNum;
      $('#total').text(userTotal);

        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        } 
    })  
    $('#purpleCrystal').on ('click', function(){
      userTotal = userTotal + purpleNum;
      $('#total').text(userTotal); 
        
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        }
    });   
  }); 