var player1 = "x";
var player2 = "O";
var player = 1;

function choice(id)
{
  if(player == 1) {
    document.getElementById(id).innerHTML = player1;
    player = 2;
  }
  else if(player == 2) {
    document.getElementById(id).innerHTML = player2;
    player = 1;
  }
  document.getElementById(id).onclick = function() { return false; };

}
