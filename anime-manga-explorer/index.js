const btn = document.getElementById("btn");

async function fetchAnime() {
  const name = document.getElementById("search").value.trim().toLowerCase();
  try {
    const url = `https://api.jikan.moe/v4/anime?q=${name}&limit=10`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Anime not found");
    }

    const data = await res.json();

    console.log(data);

    const ctn = document.getElementById("result");
    ctn.innerHTML = "";

    data.data.forEach((anime) => {
      const animeCard = document.createElement("div");
      animeCard.classList.add("anime-card");
      animeCard.innerHTML = `
      <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
  <h3>${anime.title}</h3>
  <div class="meta-info">
    <span>Score: ${anime.score ? anime.score : "N/A"} ⭐</span>
    <span> | Eps: ${anime.episodes ? anime.episodes : "N/A"}</span>
  </div>
 
  <a href="${`https://piratexplay.cc/?s=${anime.title}`}" target="_blank" style="color: white; text-decoration: none; font-weight: bold;"> CLICK HERE TO WATCH ➔</a>
      `;

      ctn.appendChild(animeCard);
    });
  } 
  
  catch (err) {
    console.log(err);
  }
}

btn.addEventListener("click", fetchAnime);
