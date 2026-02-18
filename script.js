// Get the count display element - using const because the element itself won't change
const countDisplay = document.getElementById('count');

// Get the Enter button - using const because the button element won't change
const increaseButton = document.getElementById('increase');

// Get the Exit button - using const because the button element won't change
const decreaseButton = document.getElementById('decrease');

// Get the Reset button - using const because the button element won't change
const resetButton = document.getElementById('reset');

// Initialize the count - using let because this value will change
let count = 0;

// When the Enter button is clicked, increase the count
increaseButton.addEventListener('click', function() {
  count = count + 1;
  countDisplay.textContent = count;
});

// When the Exit button is clicked, decrease the count
decreaseButton.addEventListener('click', function() {
  // Only decrease if count is greater than 0
  if (count > 0) {
    count = count - 1;
    countDisplay.textContent = count;
  }
});

// When the Reset button is clicked, set the count to zero
resetButton.addEventListener('click', function() {
  count = 0;
  countDisplay.textContent = count;
});
