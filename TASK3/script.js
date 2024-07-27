// Post Details Page:

// Create a clickable list of post titles.
// When a title is clicked, fetch and display the details of that post on a new page or modal.
// Include comments related to the post by fetching from the /comments?postId={postId} endpoint.
//Biz Postdan title-i gotururuk./comments?postId=num yazib ise commentleri goturmeliyik


const postTitles = document.querySelector("#postTitles");
let data = [];

// Function for fetching data
async function fetchTitles() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await res.json();
  createTitles();
  console.log(data);
}


// Function which created titles
function createTitles() {
    postTitles.innerHTML = ''; // Clear existing content
    data.forEach((item) => {
      postTitles.innerHTML += `
        <a href=""  class='text-blue-500 underline' target="_blank">${item.title}</a><br>
      `;
    });
}
  


// THE FUNCTION WHICH STARTS IN INITIAL LOAD
function startUi() {
    fetchTitles();
  }
  startUi();