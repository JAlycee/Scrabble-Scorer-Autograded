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

const vowels = ['a', 'e', 'i','o','u'];

for (let i = 0; i <word.length; i++) {
   if (vowels.has(word[i])) {
      totalScore += 3;
   } else {
      totalScore += 1;
   }
}
return totalScore;
}

let scrabbleScorer;

const scoringAlgorithms = [
   {
      name: "Simple Score",
      description: "Each letter is worth 1 point.",
      scoringFunction: simpleScorer,
      },
      {
         name: "Bonus Vowels",
         description: "Vowels are 3 pts, consonants are 1 pt.",
         scoringFunction: vowelBonusScorer,
      },
      {
         name: "Scrabble",
         description: "The traditional Scrabble scoring method.", 
         scoringFunction: oldScrabbleScorer,
      }
];

function scorerPrompt() {
   console.log("Scoring Options:");
   for (let i = 0; i <scoringAlgorithms.length; i++) {
      let algorithm = scoringAlgorithms[i];
      console.log(`${i} ${algorithm.name}: ${algorithm.description}`);
   }
}
let selectedOption = input.question("Select a scoring method 0, 1, 2.");
if (selectedOption>= 0 && selectedOption <= 2) {
   return scoringAlgorithms[selectedOption];
} else {
   console.log("Invalid input.Please enter a number between 0 and 2.");
   return totalScore;
}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
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
