// Get reference to the display input
const display = document.getElementById("display");

// Add value to display
function append(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Calculate the expression
function calculate() {
  try {
    // Use eval to evaluate the expression (only safe in controlled apps like this)
    display.value = eval(display.value);
  } catch (err) {
    display.value = "Error";
  }
}