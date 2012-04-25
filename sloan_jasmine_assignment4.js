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


// Outputs

phoneNumber("770-769-7690");
emailCheck("jasmine47jamieson@gmail.com");
urlCheck("www.sandrarose.com");
upperCase("josh donlan");
separatorHasToChange("a/b/c");
numberFormat(12.75692);