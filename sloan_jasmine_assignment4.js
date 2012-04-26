// Author: Jasmine Sloan
// 04/22/2012
// Week 4 Assignment
// Libraries



// String

// Does a string follow a 123-456-7890 pattern like a phone number?

var phoneNumber = function (phoneNum) {
        var checkPhone = phoneNum;
        var number = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
        if (number.test(checkPhone)) { 
            var numberCheck = checkPhone.replace(number, "($1) $2-$3");
            
console.log("Valid phone number."); 
    } else {
     return console.log("Invalid phone number."); 
     }
}
   

// Does a string follow an aaa@bbb.ccc pattern like an email address?


function emailCheck(address) {
    var checkEmail = address
    var email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
 	if (email.test(checkEmail)) {
        console.log("Email address is valid.");
    } else {
        console.log("Email address is invalid.");
    }
}


// Is the string a URL? (Does it start with http: or https:?)

function urlCheck(seeURL) {
    var checkURL = seeURL
   
    var option = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

    var start = option.test(urlCheck);
    
    console.log("This is a " + start + " url.");
    
    if (checkURL.charAt(4) == "s") {
        console.log("This is a https url");
    }
    if (checkURL.charAt(4) == ":") {
        console.log("This is a http url");
    }
}


// Title-case a string (split into words, then uppercase the first letter of each word.
		
function upperCase(makeUpper) {


    String.prototype.toProperCase = function () {
		return this.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    makeUpper.toProperCase();
    console.log(makeUpper.toProperCase());
}


//Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

function separatorHasToChange(firstChange) {
     
    if (firstChange) {
        return console.log("a," + "b," + "c,");
    }
}



//Number


//Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10

function numberFormat(numberDecimal) {
    var decimal = numberDecimal
    decimal.toFixed(2)
    return console.log(decimal.toFixed(2));
}


// Fuzzy-match a number: is the number above or below a number within a certain percent?


// Find the number of hours or days difference between two dates.

var day = function(yyyy, mm, dd) {
	var presentDay = new Date();
	var futureDay = new Date (yyyy, (mm-1), dd);
	var minutes = (futureDay - presentDay)/60000;
	var hours = minutes / 60
	var days = Math.floor(hours/24); 
console.log("There are " + days + " days until Jordan's 7th birthday party!"); 

};


// Given a string version of a number such as "42", return the value as an actual Number, such as 42.

var version = function(string){ 
	var answer = Number(string);
	
console.log('Insert: "' + string + '"');
	return answer;
	
};

// Make-up: Flowchart for Assignment 3; I need credit for the entire Week 3 assignment. My biggest problem was the flowchart.

// Arrays

// Find the smallest value in an array that is greater than a given number

var value = function(j){
	var array = [8, 18, 21, 26, 22, 15, 74, 47];
	var min = Math.max.apply(Math, array);
	
for (i=0; i < array.length; i++) {
	if (array[i] > j) {
		if (array[i] < min) {
			min = array[i];
			};
		};
	};
	console.log("The smallest number in the array: [" + array + "] greater than " + j + " is: " + min);
	
};


// Find the total value of just the numbers in an array, even if some of the items are not numbers.


var total = function(h, i, j, k, l, m, n, o, p){
	var array = [h, i, j, k, l, m, n, o, p];
	var value = 0
for (i=0; i < array.length; i++) {
	if (typeof array[i] == 'number') {
		total += array[i];	
		};
	};
	console.log("The total value of the numbers in the array [" + array + "] is:" + value);

};


// Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].

var sortedArray = function(key){
	var array = [{key:2}, {key:3}, {key:1}];
	
console.log(array.sort(function(a, b) {return a.key - b.key}));

};


// Outputs

phoneNumber("770-769-7690");
emailCheck("jasmine47jamieson@gmail.com");
urlCheck("www.sandrarose.com");
upperCase("josh donlan");
separatorHasToChange("a/b/c");
numberFormat(12.75692);
day(2012, 05, 05);
version(42);
value(8);
total(12, 16, 2, 6, 3, 10, 26, 8, 0);
sortedArray();

