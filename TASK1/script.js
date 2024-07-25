// Fetch and Display Posts:
// Use fetch to get a list of posts from the JSONPlaceholder API (/posts endpoint).
// Display the titles and bodies of the posts on a webpage.
// Implement error handling to display a message if the fetch fails.



const title = document.querySelector("#title");
const body = document.querySelector("body");

// 'https://jsonplaceholder.typicode.com/posts' //WE WILL USE THIS JSON PLACEHOLDERAPI
async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  
    // Ensure the DOM elements are correctly referenced
    const title = document.getElementById('title');
    const body = document.getElementById('body');
  
    for (let i = 0; i < data.length; i++) {
      title.innerHTML += `
        <p class="mb-2">${data[i].title}</p>
      `;
  
      body.innerHTML += `
        <p class="mb-2">${data[i].body}</p>
      `;
    }
  }
  fetchData();
  