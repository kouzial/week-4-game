// GLOBAL VARIABLES
//-----------------------------------------------

// Arrays and Variables for holding data


// Game counters

var totalWin= 0;

var totalLoss= 0;

var totalScore;

var numberResult;
// FUNCTIONS
//-----------------------------------------------


function Generate() {

totalScore = 0;

numberResult = Math.floor(Math.random() * 100 +1);

$("#winloss").html(numberResult.toFixed(0));

		$( "#greencrystal").val(10);
		$( "#yellowcrystal").val(7);
		$( "#whitecrystal").val(5);	
		$( "#violetcrystal").val(2);

$("button").click(function() {

var value = parseInt($(this).val());

totalScore = value + totalScore; 

$("#number").html(totalScore);
comparison();
});

function comparison () {

	if ( totalScore == numberResult) {

		alert("You win!");
		totalWin++;
		$("#totalWin").html(totalWin);
		Generate();
		$("#number").html(0);

	}
	else if (totalScore>numberResult){
		alert("You lose!")
		totalLoss++;
		$("#totalLoss").html(totalLoss);
		Generate();
		$("#number").html(0);

	}
}


};










// MAIN PROCESS
//-----------------------------------------------

Generate();


