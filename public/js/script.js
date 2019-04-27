$('document').ready(function(){
  
  let gameDone = false;
  const tableRow = 3; 
  const tableCol = 3;
  let id = 0;
  let turn = 'X';
  var arr = [];
  matrix(tableRow,tableCol,"");

  function matrix(rows, cols, defaultValue){

    // Creates all lines:
    for(var i=0; i < rows; i++){
  
        // Creates an empty line
        arr.push([]);
        var tr = document.createElement('tr');
  
        // Adds cols to the empty line:
        arr[i].push(new Array(cols));
  
        for(var j=0; j < cols; j++){
          // Initializes:
          arr[i][j] = defaultValue;
          var td = document.createElement('td');
          td.setAttribute('id', id++)

          table.appendChild(tr);
          tr.appendChild(td);
          td.innerHTML = defaultValue;
        }
    }
  return arr;
  }

  let counter = 0;
  $('td').click(function () {
        
    //alternate color on click 
    if(counter % 2 == 0) {
        $(this).html(turn);
        $(this).css({color:"red"});
    } else {
      $(this).html(turn);
      $(this).css({color:"blue"});
    }
    changeTurn();
    checkWinner();
    counter++
});
 
  function changeTurn() {
    if(turn == 'X') {
        turn = 'O';
    } else {
        turn = 'X';
    }
}

  function checkWinner() {
    
    let zero = document.getElementById('0');
    let one = document.getElementById('1');
    let two = document.getElementById('2');
    let three = document.getElementById('3');
    let four = document.getElementById('4');
    let five = document.getElementById('5');
    let six = document.getElementById('6');
    let seven = document.getElementById('7');
    let eight = document.getElementById('8');


    if(gameDone == false) {
      if(zero.innerHTML == 'X' && one.innerHTML == 'X' && two.innerHTML == 'X'
        || zero.innerHTML == 'X' && three.innerHTML == 'X' && six.innerHTML == 'X'
        || six.innerHTML == 'X' && seven.innerHTML == 'X' && eight.innerHTML == 'X'
        || two.innerHTML == 'X' && five.innerHTML == 'X' && eight.innerHTML == 'X'
        || one.innerHTML == 'X' && four.innerHTML == 'X' && seven.innerHTML == 'X'
        || three.innerHTML == 'X' && four.innerHTML == 'X' && five.innerHTML == 'X'
        || zero.innerHTML == 'X' && four.innerHTML == 'X' && eight.innerHTML == 'X'
        || two.innerHTML == 'X' && four.innerHTML == 'X' && six.innerHTML == 'X') {
        $('#result').html('X Wins!');
        $('#result').css("display", "block");

        gameDone = true;
        } else if (zero.innerHTML == 'O' && one.innerHTML == 'O' && two.innerHTML == 'O'
        || zero.innerHTML == 'O' && three.innerHTML == 'O' && six.innerHTML == 'O'
        || six.innerHTML == 'O' && seven.innerHTML == 'O' && eight.innerHTML == 'O'
        || two.innerHTML == 'O' && five.innerHTML == 'O' && eight.innerHTML == 'O'
        || one.innerHTML == 'O' && four.innerHTML == 'O' && seven.innerHTML == 'O'
        || three.innerHTML == 'O' && four.innerHTML == 'O' && five.innerHTML == 'O'
        || zero.innerHTML == 'O' && four.innerHTML == 'O' && eight.innerHTML == 'O'
        || two.innerHTML == 'O' && four.innerHTML == 'O' && six.innerHTML == 'O') {
        $('#result').html('O Wins!');
        $('#result').css("display", "block");
          gameDone = true;
        }

        function tryAgain() {
          if(gameDone == true) {
            $('#clear').css({display:"block"});
          }
        }
    }
    tryAgain();


    //clears the table
    $('#clear').click(function () {
      history.go(0);
    })
  
  }

})