
// create game variables and computer options
		var cGuess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		var won = 0;
		var lost = 0;
		var chances = 15;
		var guesses = []

// Create random number generator to pick a letter selection at random
		var computerChoice = cGuess[Math.floor(Math.random() * cGuess.length)];
	document.onkeyup = function(guess) {
			var userGuess = [guess.key];
			guesses[guesses.length] ="" + userGuess;
		
		if (guess.keyCode >= 65 && guess.keyCode <= 90){
			if((userGuess) == (computerChoice)){
					 won++;
					 chances = 15;
					 guesses = [];
					 computerChoice = cGuess[Math.floor(Math.random() * cGuess.length)];
			 
				}
				else {chances = chances - 1
					if(chances === 0){
						lost++;
						chances = 9;
					}
				}

		var html =
		"<h1>The Psychic Game</h1><h2> Which Letter Am I thinking of?</h2>" +
		"<p>Won: " + won + "</p>" +
		"<p>Lost: " + lost + "</p>" +
		"<p>Chances: " + chances + "</p>" +
		"<p>Your Guesses: " + guesses + "</p>";
						
		document.querySelector("#game").innerHTML = html;
		}
	
	}
