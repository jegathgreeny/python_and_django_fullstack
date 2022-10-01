// Function excersies

// Problem 1: Sleeping in

function sleepIn(weekday, vacation) {
    return (!weekday || vacation)
}


// Problem 2: Monkey trouble

function monkeyTrouble(asmile, bsmile) {
    return (asmile && bsmile) || (!asmile && !bsmile)
}

// Problem 3 : String times

function stringTimes(str, n) {
    var returnStr = ""
    var i = 0
    while (i < n) {
        returnStr += str
        i++
    }
    return returnStr
}

// Problem 4 : Lucky sum

function luckySum(a, b, c) {
    var sum = 0
    if (a === 13) {
        return sum = 0
    } else if (b === 13) {
        return sum = a
    } else if (c === 13) {
        return sum = a + b
    } else {
        return sum = a + b + c
    }

}

// Problem 5 : Caught speeding

function caughtSpeeding(speed, brithday) {
    if (brithday) {
        speed -= 5
    } if (speed <= 60) {
        return 0
    } if (60 < speed < 80) {
        return 1
    } else {
        return 2
    }
}

// Problem 6 : Make Bricks (Bonus)

function makeBricks(small, big, goal) {
    return goal%5 >= 0 && goal%5 - small <= 0 && small + 5*big >= goal
}
