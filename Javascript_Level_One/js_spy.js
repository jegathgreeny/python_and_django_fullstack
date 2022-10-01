var f_name = prompt("Hello and Welcome. Enter your first name:");
var l_name = prompt("Enter your last name:");
var age = prompt("How old are you?");
var height = prompt("How tall are you in centimeters?");
var pet_name = prompt("What is the name of your pet?");
alert("Thank you so much for the information.");

if (f_name[0] === l_name[0]) {
    if (age < 25) {
        if (170 < height < 190) {
            if (pet_name[pet_name.length - 1] === 'y') {
                console.log("Welcome boss! You've passed the spy test");
            }
            else {
                console.log("nothin")
            }
            
        }
    }
}