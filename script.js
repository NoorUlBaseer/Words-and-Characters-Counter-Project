const textInput = document.getElementById('textInput'); // Get the text input element
const charCount = document.getElementById('charCount'); // Get the character count element
const wordCount = document.getElementById('wordCount'); // Get the word count element
const sentenceCount = document.getElementById('sentenceCount'); // Get the sentence count element
const paragraphCount = document.getElementById('paragraphCount'); // Get the paragraph count element
const spaceCount = document.getElementById('spaceCount'); // Get the space count element
const letterCount = document.getElementById('letterCount'); // Get the letter count element
const digitCount = document.getElementById('digitCount'); // Get the digit count element
const specialCharCount = document.getElementById('specialCharCount'); // Get the special character count element
const themeSwitch = document.getElementById('themeSwitch'); // Get the theme switch element
const settingsIcon = document.getElementById('settingsIcon'); // Get the settings icon element
const body = document.body; // Get the body element

textInput.addEventListener('input', () => { // Listen for input event on the text input element
  const text = textInput.value; // Get the value of the text input element

  charCount.textContent = text.length; // Count the number of characters

  // Count the number of words
  // Trim the text to remove leading and trailing white spaces, split the text by one or more white spaces, and get the length of the resulting array
  wordCount.textContent = text.trim() === '' ? 0 : text.trim().split(/\s+/).length; 
  
  // Count the number of sentences
  // Split the text by one or more sentence-ending punctuation marks (. ! ?), filter out empty strings, and get the length of the resulting array
  sentenceCount.textContent = text.split(/[.!?]+/).filter(Boolean).length;
  
  // Count the number of paragraphs
  // Split the text by one or more newline characters, filter out empty strings, and get the length of the resulting
  paragraphCount.textContent = text.split(/\n+/).filter(Boolean).length;

  // Count the number of spaces
  // Match all white spaces and get the length of the resulting array or default to an empty array if there are no white spaces
  spaceCount.textContent = (text.match(/\s/g) || []).length;
  
  // Count the number of letters
  // Match all alphabetic characters both in uppercase and lowercase and get the length of the resulting array or default to an empty array if there are no letters
  letterCount.textContent = (text.match(/[a-zA-Z]/g) || []).length;
  
  // Count the number of digits
  // Match all digits and get the length of the resulting array or default to an empty array if there are no digits
  digitCount.textContent = (text.match(/\d/g) || []).length;
  
  // Count the number of special characters
  // Match all non-alphanumeric characters and white spaces and get the length of the resulting array or default to an empty array if there are no special characters
  specialCharCount.textContent = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;
});

function toggleSettingsMenu() { // Function to toggle the settings menu
  themeSwitch.style.display = themeSwitch.style.display === 'block' ? 'none' : 'block';
}

function setTheme(mode) { // Function to set the theme
  if (mode === 'light') {
    body.classList.replace('dark-mode', 'light-mode');
  } 
  else {
    body.classList.replace('light-mode', 'dark-mode');
  }
  
  themeSwitch.style.display = 'none';
}

document.addEventListener('click', (event) => { // Listner event for closeing the settings menu when clicking outside of it
  if (!themeSwitch.contains(event.target) && event.target !== settingsIcon) {
    themeSwitch.style.display = 'none';
  }
});
