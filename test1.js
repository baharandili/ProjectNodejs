{{
function getLetterRankWords(str) {
var letterRanks = {};
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
for (var i = 0; i < alphabet.length; i++) {
letterRanks[ i+1 ] = alphabet[i];
}

var results = {};

var gobbleString = function(str, remainingStr, posToConsider) {
if (remainingStr === "") {
results[str] = true;
return;
}

if (posToConsider === 2 && remainingStr.length >= 2) {
var nextTwoNum = parseInt( remainingStr[0] + remainingStr[1], 10 );
var letter = letterRanks[ nextTwoNum ];
if (letter) {
gobbleString(str + letter, remainingStr.substring(2), 1);
if (remainingStr.length >= 2) {
gobbleString(str + letter, remainingStr.substring(2), 2);
}
}
} else {
var letter = letterRanks[ parseInt(remainingStr[0], 10) ];
if (letter) {
gobbleString(str + letter, remainingStr.substring(1), 1);
if (remainingStr.length >= 2) {
gobbleString(str + letter, remainingStr.substring(1), 2);
}
}
}
}

gobbleString("", str, 1);
if (str.length >= 2) {
gobbleString("", str, 2);
}

return Object.keys(results);
}
getLetterRankWords('1123');
}}