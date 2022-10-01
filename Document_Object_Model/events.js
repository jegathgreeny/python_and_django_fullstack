// Get the document object model.

var headOne = document.querySelector('#one')
var headTwo = document.querySelector('#two')
var headThree = document.querySelector('#three')

// Hover

headOne.addEventListener('mouseover', function () {
    headOne.textContent = "Mouse currently over";
    headOne.style.color = 'red';
})

headOne.addEventListener('mouseout', function () {
    headOne.textContent = "Mouse Not on me";
    headOne.style.color = 'grey';
})

// On click

headTwo.addEventListener('click', function () {
    headTwo.textContent = "clicked on";
    headTwo.style.color = 'orange';
})

// Double click

headThree.addEventListener('dblclick', function () {
    headThree.textContent = "Double clicked!";
    headThree.style.color = 'yellow';
})