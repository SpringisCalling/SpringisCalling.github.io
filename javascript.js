// Get the element with the typing class
const typing = document.querySelector(".typing");

// Get the text content of the element
const text = typing.textContent;

// Set the initial text to an empty string
typing.textContent = "";

// Define a variable to store the cursor element
let cursor = document.createElement("span");

// Set the cursor element style
cursor.style.borderRight = "0.2rem solid #fff";
cursor.style.animation = "blink 0.5s step-end infinite alternate";

// Append the cursor element to the typing element
typing.appendChild(cursor);

// Define a function to type the next character
function type(index) {
  // If the index is less than the length of the text
  if (index < text.length) {
    // Create a new span element for the next character
    let span = document.createElement("span");
    // Set the span element text to the next character
    span.textContent = text[index];
    // Set the span element style
    span.style.color = "#fff";
    span.style.background = "#000";
    span.style.padding = "0.5rem";
    // Insert the span element before the cursor element
    typing.insertBefore(span, cursor);
    // Increment the index
    index++;
    // Call the function again after a random delay, passing the new index
    setTimeout(function() {
      type(index);
    }, Math.random() * 200);
  }
}

// Call the function to start the typing effect, passing 0