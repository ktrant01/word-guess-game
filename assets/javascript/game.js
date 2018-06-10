


var words = ["lasso", "saddle", "outlaw", "saloon"];

// <!--  Get Random Word
var randomIndex = Math.floor(Math.random()*words.length);	
var randomWord = words[randomIndex]
//  -->

var obfuscatedWord = [];
var newobfuscatedWord = [];
var word = randomWord
var worddelimited = [];
var letter = ""
var userGuess = 0;
var guessedLetter = ""
var guessesLeft = "10"
var correctGuesses = 0
var wins = 0
var losses = 0
var audio = new Audio('assets/javascript/intro.mp3');
var audio1 = new Audio('assets/javascript/ricochet.mp3');
var audio2 = new Audio('assets/javascript/s45.wav');


//Play intro music


//Obfuscate word
for (var x=0; x < word.length; x++){
    obfuscatedWord.push("_");
    }

//Delimit word
for (var x=0; x < word.length; x++){
    worddelimited.push(word[x]);
    }

//Place obfuscated word on page
document.querySelector('#counter').innerText = obfuscatedWord.join(" ");

//Diplay guessed letters
document.querySelector('#guessedLetterline').innerText = "-";

//Guesses Left Counter
    function guessesCounter(){
    guessesLeft = guessesLeft -1;
    document.querySelector('#guessesremaining').innerText = guessesLeft;
}

//

//Lose Screen
function loseScreen(){
    if (guessesLeft == 0){
        // guessesLeft == 10;
        // alert("You lose");
        document.querySelector('#winlossScreen').innerText = "You Lose";
        losses++;
        document.querySelector('#losses').innerText = losses; 
        audio2.play();
        guessesLeft = 10;
        obfuscatedWord = [];
        correctGuesses = 0;
        guessedLetter = ""
        document.querySelector('#guessedLetterline').innerText = guessedLetter;
        getrandomWord();
        // resetGame();
        
    }
}

//Win Screen
function winscreen(){
    if (correctGuesses >= word.length){
        document.querySelector('#winlossScreen').innerText = "You Win";
        wins++;
        document.querySelector('#wins').innerText = wins;
        audio1.play();
        guessesLeft = 10;
        obfuscatedWord = [];
        correctGuesses = 0;
        guessedLetter = ""
        document.querySelector('#guessedLetterline').innerText = guessedLetter;
        // alert(obfuscatedWord.join(" "));
        getrandomWord();

        // resetGame();

    }
}

//Change Music (Doesn't work, need to fix this)
function changeMusic(){
    if (obfuscatedWord == worddelimited){
        // alert('Music');
    }
}


// function resetGame(){
//     guessesLeft = 10;
//     getrandomWord();
// }

//Convert word to dashes


// <!--  Get Random Word
function getrandomWord(){
randomIndex = Math.floor(Math.random()*words.length);	
// randomWord = words[randomIndex]
word = words[randomIndex]
worddelimited = [];
obfuscatedWord = []
//  -->

//Obfuscate word
for (var x=0; x < word.length; x++){
    obfuscatedWord.push("_");
    worddelimited.push(word[x]);

    }
    document.querySelector('#counter').innerText = obfuscatedWord.join(" ");

//Delimit word
// for (var x=0; x < word.length; x++){
//     worddelimited.push(word[x]);
//     }

}




 
function guess(event){
    // Play Intro Music
    changeMusic();

    audio.play();

    event.key = letter;

    // getrandomWord();
guessesCounter();


//Check input for correct letters
for (var x=0; x < word.length; x++){
if (event.key == word[x] && event.key != obfuscatedWord[x]){
    obfuscatedWord[x] =  word[x];
    correctGuesses++;
}
}
// else {
//         newobfuscatedWord = newobfuscatedWord + "_";
// 		// console.log(" _ ");
// 	}

    // testvar = obfuscatedWord.splice(1,1, 'f')
    // languages.splice(1, 1, 'Python');
    // alert(obfuscatedWord.replaceAt(0, "f"));
    // obfuscatedWord[1] = obfuscatedWord.replace()
    // alert(obfuscatedWord);
		// console.log(word[x]);
	// }else if ()
    
    
    // else {
        // obfuscatedWord = obfuscatedWord + "_";
	// 	console.log(" _ ");
	// }

guessedLetter = guessedLetter + event.key;

// worddelimited.push(word[x])
document.querySelector('#counter').innerText = obfuscatedWord.join(" ");
document.querySelector('#guessedLetterline').innerText = guessedLetter;
winscreen();
loseScreen();
}
// guess();
document.onkeyup = guess;



	// function rockPaperScissor (event){
	// 	// var key = event.key

	// 	if (event.key == 'r'){
	// 	alert ('rock');
	// }else if (event.key == 'p'){
	// 	alert ('paper');
	// }else if (event.key == 's'){
	// 	alert ('scissor');
	// }
	// }

	// document.onkeyup = rockPaperScissor


// function guess(){
	
// 	var key = event.key;

// 	if ("m" == word[x]){
// 		alert ('apple');
// 	}else if (key == 'b'){
// 		alert ('bear');
// 	}else if (key == 'c'){
// 		alert ('camel');
// 	}else if (key == 'd'){
// 		alert ('dogecoin');
// 	}else if (key == 'e'){
// 		alert ('elephant');
// 	}
// }


// document.onkeyup = alertSomething;
// var wordIndex = word.length - 1

// document.write(word[0,4]);
	// //Math.random() returns a random number between 0 and 1
	// var a = Math.random();
	// console.log(a);

	// //random number (with decimal) between 0 and 99.99999
	// var b = Math.random()*100;
	// console.log(b)

	// //Math.floor rounds down
	// var c = Math.floor(1.5);
	// console.log(c);

	// //this returns a random INTEGER from 0 to 99 (including 0 and 99)
	// var d = Math.floor(Math.random()*100);	
	// console.log(d);

	// var toyotas = ["camry", "corolla", "supra", "celica", "avalon", "prius", "sienna"];
	
	// var len = toyotas.length;
	// console.log(len);

	// //random number between 0 and 6.9999999999
	// var ranNum = Math.random()*toyotas.length;

	// //random INTEGER between 0 and 6 (including 0 and 6)
	// var randomIndex = Math.floor(Math.random()*toyotas.length);	

	// //console logs a random element from the toyotas array
	// document.write(toyotas[randomIndex]);