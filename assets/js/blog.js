document.addEventListener('DOMContentLoaded', () => {
  // Select the main element and back button
  const mainElement = document.getElementById('mainElement');
  const backButton = document.getElementById('back');

  // Function to build an element and append it to the DOM
  function buildElement(tag, text, className) {
    // Create the element
    const element = document.createElement(tag);

    // Set the text content
    element.textContent = text;

    // Add the class name
    if (className) {
      element.className = className;
    }

    // Return the element
    return element;
  }

  // Function to handle the case where there are no blog posts to display
  function noPosts() {
    console.log('No posts to display');
    // Create a message element
    const message = buildElement('p', 'No Blog posts yet...', '');
    mainElement.appendChild(message);
  }

  // Function to render the list of blog posts if they exist. If not, call the noPosts function.
  const renderBlogList = function () {
    // Read existing blog data from local storage
    const blogData = readLocalStorage();

    // Check if blogData is an array
    if (!Array.isArray(blogData)) {
      console.error('Data is not an array');
      noPosts();
      return;
    }

    // Check if there are any posts
    if (blogData.length === 0) {
      noPosts();
      return;
    }

    // Validate each post
    if (!blogData.every(post => post.username && post.title && post.content)) {
      console.error('Invalid post data', blogData);
      noPosts();
      return;
    }

    // If there are posts, render them
    blogData.forEach(post => {
      // Create a container element for each post
      const container = buildElement('article', '', 'card');

      // Create and append the title element
      const titleElement = buildElement('h2', post.title, '');
      container.appendChild(titleElement);

      // Create and append the content element
      const contentElement = buildElement('blockquote', post.content, '');
      container.appendChild(contentElement);

      // Create and append the User element
      const userElement = buildElement('p', `posted by: ${post.username}`, '');
      container.appendChild(userElement);

      // Append the post container to the main element
      mainElement.appendChild(container);
    });
  };

  // Call the `renderBlogList` function
  renderBlogList();

  // Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
  backButton.addEventListener('click', () => {
    redirectPage('index.html');
  });
});