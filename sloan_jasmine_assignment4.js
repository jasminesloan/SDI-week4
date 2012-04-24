// Author: Jasmine Sloan
// 04/22/2012
// Week 4 Assignment
// Libraries


// String

// Does a string follow a 123-456-7890 pattern like a phone number?

var phoneNum = 123-456-7890

var checkPhoneNum = function(phoneNumber){
	checkPhone = "";
	var number = /^\(?([0-9]{6})\)?[-. ]([0-9]{7})[-. ]([0-9]{8})$/;
	
	if(phoneNumber.test(number)){
		return(checkPhone = "Phone number " + phoneNum + " is valid.");
	}else{
		return(checkPhone = "Phone number " + phoneNum + "is invalid.");
	}
};
console.log("This is a valid phone number.")