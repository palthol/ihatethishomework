// Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const body = document.querySelector(`body`)
var savedMode = JSON.parse(localStorage.getItem('saveMode')) || 'light'; // Parse the mode from localStorage
body.className = savedMode; // Set the class of the body to the saved mode

function toggleMode() {
  const currentMode = body.className; 
  let newMode;
  if (currentMode === 'light') {
    newMode = 'dark';
  } else {
    newMode = 'light';
  }
  body.className = newMode;
  localStorage.setItem('saveMode', JSON.stringify(newMode));
}

// add event listener to the toggle button
toggle.addEventListener('click', toggleMode);

// Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
    const data = JSON.parse(localStorage.getItem('blogData'));
    // If no data exists, return an empty array.
    return data || [];
    }


// Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(data) {
    // If the data is not an array, log an error and return

        if (!Array.isArray(data)) {
            console.error('Data is not an array');
            return;
        }
        // Validate each post before storing
        if (!data.every(post => post.username && post.title && post.content)) {
            console.error('Invalid post data', data);
            return;
        }
        // Store the data in local storage
        localStorage.setItem('blogData', JSON.stringify(data));
      }

// ! Use the following function whenever you need to redirect to a different page
let redirectURL = '';

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
};