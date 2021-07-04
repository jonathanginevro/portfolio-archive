var numOne = document.getElementById("num-one")
var numTwo = document.getElementById("num-two")
var addSum = document.getElementById("add-sum")

var clearButton = document.getElementById("clear-button")
var subtractionButton = document.getElementById("subtraction-button")

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);
clearButton.addEventListener("click", clear);

function add() {

	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;

	addSum.innerHTML = one + two;
}

function clear() {
	numOne.value = ""
	numTwo.value = ""
	addSum.innerHTML = 0
}


var taskName = document.getElementById("task-name")
var taskDate = document.getElementById("task-date")
var submitButton = document.getElementById("submit-button")
var clearButton = document.getElementById("clear-table")
var taskTable = document.getElementById("task-table")
var errorMessage = document.getElementById("error-checker")
var index = 0

submitButton.addEventListener("click", checker);
clearButton.addEventListener("click", clear_table);

function submit() {
	let newRow = taskTable.insertRow(-1);

	let newCell = newRow.insertCell(0);
	let newText = document.createTextNode(taskName.value);
	newCell.appendChild(newText);

	let newCell2 = newRow.insertCell(1);
	let newText2 = document.createTextNode(taskDate.value);
	newCell2.appendChild(newText2);

	let newCell3 = newRow.insertCell(2);
	let newText3 = document.createTextNode("");
	newCell3.appendChild(newText3)

	var button = document.createElement('input');
	button.type = 'checkbox'
	
	newCell3.appendChild(button);

	clear2();
}

function clear2() {
	taskName.value = ""
	taskDate.value = null
}

function checker() {
	if (taskName.value == "" || taskDate.value == "") {
		errorMessage.innerHTML = "Invalid Submission";
	} else if (index == 9) {
		errorMessage.innerHTML = "Table Full";
	} else {
		errorMessage.innerHTML = "";
		index = index + 1
		submit();
	}
}

function clear_table() {
	while(taskTable.rows.length > 1) {
		taskTable.deleteRow(1);
	}
	index = 0
}

var board = document.getElementById("board")

var one_one = document.getElementById("one_one")
var one_two = document.getElementById("one_two")
var one_three = document.getElementById("one_three")

var two_one = document.getElementById("two_one")
var two_two = document.getElementById("two_two")
var two_three = document.getElementById("two_three")

var three_one = document.getElementById("three_one")
var three_two = document.getElementById("three_two")
var three_three = document.getElementById("three_three")

var end_message = document.getElementById("game_over")
var clear_button = document.getElementById("clear_button")

var turn = 1;

var row1 = [one_one, two_one, three_one]
var row2 = [one_two, two_two, three_two]
var row3 = [one_three, two_three, three_three]
var rows = [row1, row2, row3]

one_one.addEventListener("click", trigger);
one_two.addEventListener("click", trigger);
one_three.addEventListener("click", trigger);

two_one.addEventListener("click", trigger);
two_two.addEventListener("click", trigger);
two_three.addEventListener("click", trigger);

three_one.addEventListener("click", trigger);
three_two.addEventListener("click", trigger);
three_three.addEventListener("click", trigger);

clear_button.addEventListener("click", clear);

function trigger() {
    var squareId = this.id
    var square = document.getElementById(squareId)

    if (check_winner("X") == true) {
        turn = 3
    }

    if (turn == 1){
        if (square.innerHTML == ""){
            square.innerHTML = "X";
            turn = 2;
            game_over("X")
        }
    } else if (turn == 2) {
        if (square.innerHTML == ""){
            square.innerHTML = "O";
            turn = 1;
            game_over("O")
        }
    }
}

function game_over(winner) {

    if (check_winner(winner) == true) {
        end_message.innerHTML = winner + " wins!";
        turn = 3
    } else if (check_full() == true) {
        end_message.innerHTML = "Tie Game";
        turn = 3
    }
}

function create_board() {
    var row1 = [one_one, two_one, three_one]
    var row2 = [one_two, two_two, three_two]
    var row3 = [one_three, two_three, three_three]

    var column1 = [one_one, one_two, one_three];
    var column2 = [two_one, two_two, two_three];
    var column3 = [three_one, three_two, three_three];

    var diagonal1 = [one_one, two_two, three_three];
    var diagonal2 = [three_one, two_two, one_three];

    var board = [column1, column2, column3, diagonal1, diagonal2, row1, row2, row3];

    return board
}

function check_winner(winner) {
    var winners = create_board();
    var i = 0;

    while (i < winners.length){
        
        if (winners[i][0].innerHTML == winner && winners[i][1].innerHTML == winner && winners[i][2].innerHTML == winner) {
            return true;
        }
        i++;
    }
    return false;
}

function check_full() {
    var winners = create_board();
    var i = 0;

    while (i < winners.length){
        if (winners[i][0].innerHTML == "" || winners[i][1].innerHTML == "" || winners[i][2].innerHTML == "") {
            return false;
        }
        i++;
    }
    return true;
}

function clear() {
    var i = 0;
    turn = 1;
    end_message.innerHTML = ""

    while (i < rows.length){
        rows[i][0].innerHTML = "";
        rows[i][1].innerHTML = "";
        rows[i][2].innerHTML = "";
        i++;
    }

}