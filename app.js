const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: true, difficulty: 1 },
      { location: "Cerulean City", completed: true, difficulty: 2 },
      { location: "Vermilion City", completed: true, difficulty: 3 },
      { location: "Celadon City", completed: true, difficulty: 4 },
      { location: "Fuchsia City", completed: true, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

  //console.dir(pokemon, { maxArrayLength: null })

  //console.log(game)

  game.difficulty = "Med"

  //console.log(game)

game.party.push(pokemon[0])

//console.log(game.party)

game.party.push(pokemon[15], pokemon[25], pokemon[62])
 

//console.log(game.party)

for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 3) {
        game.gyms[i].completed = true;

    }
}

//console.log(game.gyms)

game.party.splice(0, 1, pokemon[1])
//console.log(game.party)

game.party.forEach(pokemon => console.log(pokemon.name))

const starterPokemons = pokemon.filter(p => p.starter);
console.log("starter Pokemon:");
starterPokemons.forEach(pokemon => console.log(pokemon.name));

game.catchPokemon = function(pokemonObj) {
  game.party.push(pokemonObj);
};


game.catchPokemon = function(pokemonObj){
game.party.push(pokemonObj);
}

const pokeballItem = game.items.find(item => item.name === "pokeball");
if (pokeballItem) {
  pokeballItem.quantity;
}

for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 6) {
      game.gyms[i].completed = true;

  }
}

game.gymsstatus = function() {
  const gymTally = {
    completed: 0,
    incomplete: 0
  };
for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].completed) {
    gymTally.completed++;
  } else {
    gymTally.incomplete++;
  }
}

console.log(gymTally);
};



gyms.partycount = function() {
  return game.party.length;
};

for (let gyms of game.gyms) {
  if (gyms.difficulty < 8 
    gyms.completed = true;
  )}


console.log(game)