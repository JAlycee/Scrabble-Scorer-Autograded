// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};
function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";

	for (let i = 0; i < word.length; i++) {

	 for (const pointValue in oldPointStructure) {

	   if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }

	  }
	}
	return letterPoints;
 }

function passingOldScorer(scoreFunction, word) {
let score = scoreFunction(word);
console.log(score);
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble! Enter a word: ");

   word = word.toLowerCase();

   let result = oldScrabbleScorer(word);

   console.log(`Points for '${result}':`);
};

function simpleScorer(word) {
   word = word.toLowerCase();
   let totalScore = 0;
   for (let i = 0; i <word.length; i++) {
      totalScore += 1;
   }
   return totalScore;
}

function vowelBonusScorer(word) {
word = word.toLowerCase();

let totalScore = 0;

const vowels = (['a', 'e', 'i','o','u']);

for (let i = 0; i <word.length; i++) {
   if (vowels.includes(word[i])) {
      totalScore += 3;
   } else {
      totalScore += 1;
   }
}
return totalScore;
}

const newPointStructure = transform(oldPointStructure);
//Call new point structure
function scrabbleScorer(word) {
   word = word.toUpperCase();
   let totalScore = 0;

   for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (letter.toLowerCase() in newPointStructure) {
         totalScore += newPointStructure[letter.toLowerCase()];
      }
   }
   return totalScore;
};

const scoringAlgorithms = [
   {
      description: "Each letter is worth 1 point.",
      name: "Simple Score",
      scorerFunction: simpleScorer,
   },
   {
      description: "Vowels are 3 pts, consonants are 1 pt.",
      name: "Bonus Vowels",
      scorerFunction: vowelBonusScorer,
   },
   {
   description: "The traditional Scrabble scoring method.", 
   name: "Scrabble",
   scorerFunction: scrabbleScorer,
   },
];

function scorerPrompt() {
   console.log("Scoring Options:");
   for (let i = 0; i <scoringAlgorithms.length; i++) {
      let algorithm = scoringAlgorithms[i];
      console.log(`${i} ${scoringAlgorithm[i].name}: ${scoringAlgorithm[i].description}`);
   }
}
let selectedOption = Number(input.question("Select a scoring method 0, 1, 2."));

if (selectedOption>= 0 && selectedOption <= 2) {
   let word = input.question("Enter a word to score: ");
   let selectedAlgorithm = scoringAlgorithms[selectedOption];
   let score = selectedAlgorithm.scorerFunction(word);
   console.log(`Score for '${word}' using ${selectedAlgorithm.name}: ${score}`);
} else {
   console.log("Invalid input. Please enter a number between 0 and 2.");
   }

function transform(oldPointStructure) {
const newPointStructure = {}
/*
'A': 1, 'E': 1, 'I':1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
'D': 2, 'G': 2,
'B': 3, 'C': 3, 'M': 3, 'P': 3,
'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
'K': 5,
'J': 8, 'X': 8,
'Q': 10, 'Z': 10
};*/
// Iterate through oldPointStructure then use values to create key-value pairs in the
for (const pointValue in oldPointStructure) {
   const letters = oldPointStructure[pointValue];

   for (const letter of letters) {
   newPointStructure[letter.toLowerCase()] = Number(pointValue);
   }
}
// Move the return statement here
return newPointStructure;
}



function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
