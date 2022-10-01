// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT
function add() {
    var newName = prompt("What name would you like to add?")
    roster.push(newName)
}
// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array


// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript

function remove() {
    var remName = prompt("What name would you like to remove?")
    var index = roster.indexOf(remName)
    roster.splice(index)
}
//

// DISPLAY ROSTER

// Create a function called display that prints out the roster to the console.
function display() {
    console.log(roster)
}

// Start by asking if they want to use the web app
var permission = prompt("Would you like to start the roster web app?y/n")
while (action !== 'quit') {
    var action = prompt("Please select an action: add, remove, display or quit.")
    if (action === "add") {
        add()
    } else if (action === "remove") {
        remove()
    } else if (action === "display") {
        display()
    } else if (action === "quit") {
        action = "quit"
        alert("Thanks for using the Web App! Please refresh the page to start over.")
    } else {
        alert("Not recognised")
    }

}


// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
