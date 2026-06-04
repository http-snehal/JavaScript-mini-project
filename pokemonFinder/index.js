const btn = document.getElementById('btn');


async function fetchPokemon() {

  try {
  const input = document.getElementById('input').value.trim().toLowerCase();
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
  const data = await res.json();

  if(!res.ok) {
    throw new Error('Pokemon not found');
  }
  console.log(data);
  const pokemonImg = document.getElementById('pokemon');
  pokemonImg.src = data.sprites.front_default;
  pokemonImg.alt = data.name;
  pokemonImg.style.display = 'block';
  pokemonImg.style.width = '200px';
}
catch(err) {
  console.log(err);
}

}



btn.addEventListener('click', fetchPokemon);
