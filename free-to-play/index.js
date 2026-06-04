const ctn = document.getElementById('games-container');

async function fetchGames() {
  try {
    
    const proxy = 'https://corsproxy.io/?'; 
    const real = encodeURIComponent('https://www.freetogame.com/api/games');

    const res = await fetch(proxy + real);
    
    if (!res.ok) {
      throw new Error('Games not found');
    }

    const games = await res.json(); 

    console.log(games);
    
    ctn.innerHTML = '';

    games.forEach(game => {
      const gameCard = document.createElement('div');
      gameCard.classList.add('game-card');
      
      gameCard.innerHTML = `
        <img src="${game.thumbnail}" alt="${game.title}">
        <div class="game-info">
            <h3>${game.title}</h3>
            <p style="font-size: 0.9rem; margin-bottom: 10px;">${game.short_description}</p>
            <p style="margin-bottom: 15px;"><span class="badge">${game.platform}</span></p>
            <a href="${game.game_url}" target="_blank" style="color: #00d2ff; text-decoration: none; font-weight: bold;">Play Now ➔</a>
        </div>
      `;
      
      ctn.appendChild(gameCard);
    });
  } 
  catch (err) {
    console.error("Error fetching games:", err);
    ctn.innerHTML = '<p>Failed to load games. Check the console for details!</p>';
  }
}

fetchGames();