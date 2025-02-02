// To UpperCase()

var nickname = "Lukman";
nickname.toUpperCase()



var myName = prompt("what is your name?");
var firstChar = myName.slice(0, 1);
var UpperCaseFirsChar = firstChar.toUpperCase();
var restOfName = myName.slice(1, myName.length);
restOfName = restOfName.toLowerCase();
var capitalisedName = UpperCaseFirsChar + restOfName;
alert("Hello" + capitalisedName);