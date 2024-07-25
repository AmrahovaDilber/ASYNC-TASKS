// Load More Posts Button:
// Initially load and display 5 posts.
// Add a "Load More" button to fetch and display the next 5 posts each time it's clicked.
// Use async/await syntax to handle the asynchronous operations.
const postContainer = document.querySelector("#postContainer");
const showMoreBtn = document.querySelector("#showMoreBtn");
let currentIndex = 0;
let perIndex = 5;
let data = [];
async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await res.json();
    getFivePost();
  } catch (error) {
    console.error(error);
  }
}

getData();

function getFivePost() {
  const my_posts = data.slice(currentIndex, currentIndex + perIndex);

  my_posts.forEach((item) => {
    postContainer.innerHTML += `
      <div class="bg-white rounded-lg text-center p-3  flex flex-col cursor-pointer border shadow-lg ">
      <h1 class='font-bold mb-2 text-xl'>${item.title}</h1>
      <p>${item.body}</p>
      </div>
      `;
  });
  currentIndex += perIndex;
}

showMoreBtn.addEventListener("click", () => {
  getFivePost();
  if (currentIndex >= data.length) {
    showMoreBtn.style.display = "none";
  }
});
getFivePost();
