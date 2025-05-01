// Function to change the text content dynamically
document.getElementById("changeTextButton").addEventListener("click", function() {
    document.getElementById("dynamicText").textContent = "The text has been changed!";
});

// Function to modify CSS styles dynamically
document.getElementById("changeStyleButton").addEventListener("click", function() {
    const styledText = document.getElementById("styledText");
    styledText.style.color = "red";
    styledText.style.fontWeight = "bold";
});

// Function to add a new element
document.getElementById("addElementButton").addEventListener("click", function() {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new dynamically added paragraph!";
    document.getElementById("content").appendChild(newElement);
});

// Function to remove the last element
document.getElementById("removeElementButton").addEventListener("click", function() {
    const contentSection = document.getElementById("content");
    if (contentSection.lastElementChild) {
        contentSection.removeChild(contentSection.lastElementChild);
    }
});
