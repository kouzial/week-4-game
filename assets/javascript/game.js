//Select Player
//Selected player will go to id player
//Remaing characters will go to id enemies
//Select Enemie
//Enemie will go to id defender
//Click fight
//Enemy hp decrease by attack player which variable
//Player attack power increase exponentially
//Player hp decrease by counter attack which is a fix
//Is player or enemy below 0 or - hp
//If player is dead reset game
//If enemy is dead prompt player to select next enemy
//When all enemies are defeated reset game




var characters = {

	"kylo": {
		name: "Kylo Ren",
		imgSource: "assets/images/kylo-ren.jpeg",
		initHealth: "200",
		block: function () {return charBlock(this);}
		 },
	"rey": {
		name: "Rey",
		imgSource: "assets/images/rey.jpeg",
		initHealth: "200",
		block: function () {return charBlock(this);}
		 },
	"finn": {
		name: "Finn",
		imgSource: "assets/images/finn.jpeg",
		initHealth: "200",
		block: function () {return charBlock(this);}
		 },
	"luke": {
		name: "Luke Skywalker",
		imgSource: "assets/images/luke-skywalker.jpeg",
		initHealth: "200",
		block: function () {return charBlock(this);}
		 }
	
};

var charBlock = function charBlock (character) {
		var div = $("<div>").html("<p>" + character.name + "</p><img alt='" + character.name + "' src='" + character.imgSource + "' /><p>" + character.initHealth + "</p>");
		div.addClass("charBlock");
		return div;
	}





var game = {
	character: "",
	enemies: [],
	defender: "",
	charHealth: "",
	defenderHealth: "", 

}

var state = {
  chooseChar: true, //or false
  chooseDefender: false, // or true
  fight: false, //or true
  win: false, // or true
  lose: false, //or true
  totalWin: false, // or true
  changeState: function (newState) {
    for (var i in this) {
      if (i !== newState) {
        this[i] = false;
      }
      else {
        this[i] = true;
      }
    }
  }
};




$(document).ready (function () {
	switch (true) {
		case state.chooseChar:

			var i;

			for (i in characters) {
			$("#characters").append(characters[i].block());
				
			}

			$(".charBlock").on("click", function () {

				game.character = $(this);
				state.changeState(chooseDefender);
			});

			

			break;

		case state.chooseDefender:
			break;

		case state.flight:

			break;

		case state.win:

			break;

		case sate.lose:

			break;

		case state.totalWin:

			break;
	}
});






