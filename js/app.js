console.log('Hello frontend');

const buttonElement = document.getElementById('play');

// Add a handler for the 'click' event by providing a callback function.
// Whenever the button#play is clicked, a pop-up with "New game!" will appear.
buttonElement.addEventListener('click', function (event) {
    alert('New game!');
});