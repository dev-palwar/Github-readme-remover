const targetDiv = document.querySelectorAll(".Box")[1];

if (targetDiv) {
  const toggleDivVisibility = () => {
    targetDiv.style.display =
      targetDiv.style.display === "none" ? "block" : "none";
  };

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "toggleDivVisibility") {
      toggleDivVisibility();
    }
  });
}
