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
