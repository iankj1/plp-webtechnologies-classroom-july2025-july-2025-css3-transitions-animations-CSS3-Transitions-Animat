
// Global variable
let globalMessage = "The result is:";

// Function with parameters & return value
function addNumbers(a, b) {
  let sum = a + b; // local scope
  return sum;
}

function showSum() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  let result = addNumbers(num1, num2); // function reuse
  document.getElementById("result").innerText = `${globalMessage} ${result}`;
}

// === Part 3: Triggering CSS Animations with JS ===
const triggerBtn = document.getElementById("triggerBtn");
const triggerBox = document.getElementById("triggerBox");

triggerBtn.addEventListener("click", () => {
  // Toggle class to trigger animation
  triggerBox.classList.toggle("animate");
});
