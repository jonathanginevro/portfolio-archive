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