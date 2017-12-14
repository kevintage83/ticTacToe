$(document).ready(function() {
  //default player's turn to X
  var turn = "X";
  //array that stores values that we will check later for a winner
  var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
  //Default computer turn
  var computersTurn = "O";
  //keeps track if it is the computer's turn
  var gameOn = false;

  var count = 0;
  //change players turn to X and computers to O
  $("#turnX").click(function() {
    turn = "O";
    computersTurn = "X";
    $("#turnX").removeClass("btn-primary");
    $("#turnO").addClass("btn-primary");
    reset();
  });

  $("#turnO").click(function() {
    turn = "X";
    computersTurn = "O";
    $("#turnO").removeClass("btn-primary");
    $("#turnX").addClass("btn-primary");
    reset();
  });

  function computerTurn(){
    //used to break the while loop
    var taken = false;
    while(taken === false && count !==5){
      //generate computers random turn
      var computersMove = (Math.random()*10).toFixed();
      var move = $("#" + computersMove).text();
      if(move === "#"){
        $("#" + computersMove).text(computersTurn);
        taken = true;
        turns[computersMove] = computersTurn;
      }
    }
  }
  
  function playerTurn(turn, id) {
    var spotTaken = $("#" + id).text();
    if (spotTaken === "#") {
      count++;
      turns[id] = turn;
      $("#" + id).text(turn);
      winCondition(turns, turn);
      if(gameOn === false){
        computerTurn();
        winCondition(turns, computersTurn);
      }
    }
  }
  
  function winCondition(turnArray, currentTurn){
    if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (Top row across 0, 1, and 2 spots)");
    } else if (turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (Top row across 2, 4, and 6 spots)");
    } else if (turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (Top row across 0, 3, and 6 spots)");
    } else if (turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (Top row across 0, 4, and 8 spots)");
    } else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (3rd row down 1, 4, and 7 spots)");
    } else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (3rd row across 2, 5, and 8 spots)");
    } else if (turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (Middle row across 3, 4, and 5 spots)");
    } else if (turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (Bottom row across 6, 7, and 8 spots)");
    } else {
      gameOn = false;
    }
  }

  $(".tic").click(function() {
    var slot = $(this).attr("id");
    playerTurn(turn, slot);
  });
  
  function reset() {
    turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    count = 0;
    $(".tic").text("#");
    gameOn = false;
  }
});
