// Create a variable that selects the form element
let submitButton = document.getElementById('submit');
let usernameField = document.getElementById('username');
let titleField = document.getElementById('title');
let contentField = document.getElementById('content');
let errorMessage = document.getElementById('error');
//  Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmission() {
  

// validation of form data
    if (
        usernameField.value === "" || titleField.value === "" || contentField.value === ""
    ) {
        errorMessage.style.display = "block"; // Show error message
    } else {
        errorMessage.style.display = "none"; // Hide error message

        // Read existing blog data from local storage

        let blogData = readLocalStorage();

        let newPost = {
            username: usernameField.value.trim(),
            title: titleField.value.trim(),
            content: contentField.value.trim()
        };



        blogData.push(newPost);

        storeLocalStorage(blogData); // Ensure this function correctly saves data to localStorage
        redirectPage("./blog.html"); // Redirect after saving
        console.log("no error");
    }
}
// Add an event listener to the form on submit. Call the function to handle the form submission.
// Set up the event listener for the submit button
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    handleFormSubmission();
});