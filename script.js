// Get references to the textarea, button, and result area elements
const textArea = document.getElementById('textArea');
const submitButton = document.getElementById('submitButton');
const resultArea = document.getElementById('resultArea');
const loadingIndicator = document.getElementById('loadingIndicator');
const errorMessage = document.getElementById('errorMessage');
const clearButton = document.getElementById('clearButton');
const copyButton = document.getElementById('copyButton');
const shareButton = document.getElementById('shareButton');
const shareLink = document.getElementById('shareLink');
const shareLinkContainer = document.getElementById('shareLinkContainer');
const shareLinkButton = document.getElementById('shareLinkButton');
const shareLinkInput = document.getElementById('shareLinkInput');
const shareLinkCopyButton = document.getElementById('shareLinkCopyButton');
const shareLinkCloseButton = document.getElementById('shareLinkCloseButton');
const shareLinkText = document.getElementById('shareLinkText');
const shareLinkTextContainer = document.getElementById('shareLinkTextContainer');
const shareLinkTextInput = document.getElementById('shareLinkTextInput');
const shareLinkTextCopyButton = document.getElementById('shareLinkTextCopyButton');
const shareLinkTextCloseButton = document.getElementById('shareLinkTextCloseButton');
// Add an event listener to the button that calls a function named analyzeSentiment when clicked
submitButton.addEventListener('click', analyzeSentiment);
// Add an event listener to the clear button that clears the textarea and result area when clicked
clearButton.addEventListener('click', clearTextArea);
// Add an event listener to the copy button that copies the result area text when clicked
copyButton.addEventListener('click', copyResult);
// Add an event listener to the share button that shows the share link when clicked
shareButton.addEventListener('click', showShareLink);
// Add an event listener to the share link button that shows the share link input when clicked
shareLinkButton.addEventListener('click', showShareLinkInput);
// Add an event listener to the share link copy button that copies the share link when clicked
shareLinkCopyButton.addEventListener('click', copyShareLink);
// Add an event listener to the share link close button that hides the share link when clicked
shareLinkCloseButton.addEventListener('click', hideShareLink);
// Add an event listener to the share link text button that shows the share link text input when clicked
shareLinkTextButton.addEventListener('click', showShareLinkTextInput);
// Add an event listener to the share link text copy button that copies the share link text when clicked
shareLinkTextCopyButton.addEventListener('click', copyShareLinkText);
// Add an event listener to the share link text close button that hides the share link text when clicked
shareLinkTextCloseButton.addEventListener('click', hideShareLinkText);
// Function to analyze sentiment
async function analyzeSentiment() {
    // Clear previous results and show loading indicator
    resultArea.innerHTML = '';
    loadingIndicator.style.display = 'block';
    errorMessage.style.display = 'none';

    // Get the text from the textarea
    const text = textArea.value;

    // Check if the textarea is empty
    if (text.trim() === '') {
        loadingIndicator.style.display = 'none';
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = 'Please enter some text to analyze.';
        return;
    }

    try {
        // Send a POST request to the sentiment analysis API
        const response = await fetch('https://api.example.com/sentiment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });

        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON response
        const data = await response.json();

        // Hide loading indicator
        loadingIndicator.style.display = 'none';

        // Display the result in the result area
        resultArea.innerHTML = `Sentiment: ${data.sentiment} <br> Score: ${data.score}`;
    } catch (error) {
        // Hide loading indicator and show error message
        loadingIndicator.style.display = 'none';
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = `Error: ${error.message}`;
    }
}
// Function to clear the textarea and result area
function clearTextArea() {
    textArea.value = '';
    resultArea.innerHTML = '';
    errorMessage.style.display = 'none';
}
// Function to copy the result area text to clipboard
function copyResult() {
    const resultText = resultArea.innerText;
    if (resultText) {
        navigator.clipboard.writeText(resultText).then(() => {
            alert('Result copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    } else {
        alert('No result to copy!');
    }
}
// Function to show the share link
function showShareLink() {
    shareLinkContainer.style.display = 'block';
    shareLinkInput.value = window.location.href;
}
// Function to copy the share link to clipboard
function copyShareLink() {
    const shareLink = shareLinkInput.value;
    navigator.clipboard.writeText(shareLink).then(() => {
        alert('Share link copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
// Function to hide the share link
function hideShareLink() {
    shareLinkContainer.style.display = 'none';
}
// Function to show the share link text input
function showShareLinkTextInput() {
    shareLinkTextContainer.style.display = 'block';
    shareLinkTextInput.value = resultArea.innerText;
}
// Function to copy the share link text to clipboard
function copyShareLinkText() {
    const shareLinkText = shareLinkTextInput.value;
    navigator.clipboard.writeText(shareLinkText).then(() => {
        alert('Share link text copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
// Function to hide the share link text
function hideShareLinkText() {
    shareLinkTextContainer.style.display = 'none';
}
// Function to show the share link text
function showShareLinkText() {
    shareLinkTextContainer.style.display = 'block';
    shareLinkTextInput.value = resultArea.innerText;
}
// Function to copy the share link text to clipboard
function copyShareLinkText() {
    const shareLinkText = shareLinkTextInput.value;
    navigator.clipboard.writeText(shareLinkText).then(() => {
        alert('Share link text copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
function analyzeSentiment() {
    console.log("Button clicked!");
    // We'll add the logic later
}