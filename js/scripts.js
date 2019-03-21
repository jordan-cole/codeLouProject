// Make an array of quotes.

var myQuotes = new Array();
myQuotes[0] = "Life without adventure would be deadly&nbspdull.";
myQuotes[1] = "Trust should be the basis for all our moral training.";
myQuotes[2] = "There is no teaching to compare with example.";

// Get a new random number between 0 and the length of the array.
var myRandom = Math.floor(Math.random()*myQuotes.length);

// Update the quote (put an id="myQuote" or whatever)
$('#randomQuote').html(myQuote[myRandom]);