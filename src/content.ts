const targetDiv = document.querySelectorAll<HTMLDivElement>(".Box-body")[1];
const Parentdiv = document.querySelectorAll<HTMLDivElement>(".Box")[1];

if (targetDiv) {
  // Creates a button element
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Remove readme";
  toggleButton.style.position = "absolute";
  toggleButton.style.top = "0";
  toggleButton.style.right = "0";
  toggleButton.style.border = "none";

  // Appends the button to the target div
  Parentdiv.appendChild(toggleButton);

  // handling click event
  toggleButton.addEventListener("click", toggleDivVisibility);

  function toggleDivVisibility() {
    targetDiv.style.display = targetDiv.style.display === "none" ? "block" : "none";
  }
}
