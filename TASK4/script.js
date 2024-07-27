// JSONPlaceholder API:
// Fetching Posts and Comments:
// Fetch a list of posts and then for each post,
//fetch its comments.Display the posts along with their comments.

const postContainer = document.querySelector("#postContainer");

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  createPostsUI(data);
  console.log(data);
}

function createPostsUI(data) {
  postContainer.innerHTML = "";
  data.forEach(async (item) => {
    postContainer.innerHTML += `
      <div class="flex flex-col gap-y-2 border-b py-2" id="post-${item.id}">
        <p class='font-bold text-xl'><span>Comment-title: </span>${item.title}</p>
        <p class='font-normal text-md text-gray-500'><span>Description: </span>${item.body}</p>
        <div id="commentsContainer-${item.id}" class="pl-2 bg-gray-100 flex flex-col mb-2 border"></div>
      </div>
    `;
    await getComment(item.id);
  });
}

async function getComment(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  const data2 = await response.json();
  createCommentsUi(data2, postId);
  console.log(data2);
}

function createCommentsUi(data2, postId) {
  const commentsContainer = document.querySelector(`#commentsContainer-${postId}`);
  commentsContainer.innerHTML = ""; // Clear previous comments if any
  data2.forEach((comment) => {
    commentsContainer.innerHTML += `
      <div class="flex flex-col mb-2 border">
        <p><strong>${comment.name}</strong> (${comment.email})</p>
        <p>${comment.body}</p>
      </div>
    `;
  });
}

getPosts();
