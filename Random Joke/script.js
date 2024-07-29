//This api give us randomJoke
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";
const jokeElement = document.querySelector("#joke"); 
const randomBtn = document.querySelector("#randomBtn");

async function getJoke() {
  const response = await fetch(url);
    const data = await response.json();
    console.log(data)
  const jokeText = data.joke;
  createJokeUI(jokeText);
}

randomBtn.addEventListener("click", getJoke);

function createJokeUI(jokeText) {
  jokeElement.innerHTML = ""; 
  jokeElement.innerHTML += `<p
        class="text-[18px] line-clamp-2 tracking font-semibold text-white text-center h-[120px]">
      ${jokeText}
      </p>
    `;
}

getJoke();
