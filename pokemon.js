
$(document).ready(function() {
  $("#submit").on('click', function(e) {
    e.preventDefault(); //allows landing form to disappear with one click
    $('#landingForm').addClass('display'); //landing form displays none
    showBoard(); //show card deck
    let player1 = $("#player1").val(); //value of player 1 name
    let player2 = $("#player2").val(); //value of player 2 name
  });

  // pokemon objects
let treecko = {
  name: "Treecko",
  level: 10,
  speed: 10,
  type: "grass",
  moves: "Absorb",
  img: "img/treecko.png"
}

let torchic = {
  name: "Torchic",
  level:10,
  speed:6,
  type:"fire",
  moves : "Ember",
  img: "img/torchic.png"
}

let mudkip = {
  name: "Mudkip",
  level:10,
  speed:4,
  type:"water",
  moves: "Water gun",
  img: "img/mudkip.png"
}

let beautifly = {
  name: "Beautifly",
  level:10,
  speed:5,
  type:"flying",
  moves: "Gust",
  img: "img/beautifly.png"
  }

  let ralts = {
    name: "Ralts",
    level:10,
    speed:6,
    type:"psychic",
    moves: "Psychic",
    img: "img/ralts.png"
  }

  let makuhita = {
    name: "Makuhita",
    level: 10,
    speed:3,
    type:"fighting",
    moves: "Take Down",
    img: "img/makuhita.png"
  }

  let aron = {
    name:"Aron",
    level:10,
    speed:1,
    type:"rock",
    moves:"Earthquake",
    img:"img/aron.png"
  }

  let electrike = {
    name:"Electrike",
    level:10,
    speed:8,
    type:"electric",
    moves: "Thundershock",
    img:"img/electrike.png"
  }

  let absol = {
    name:"Absol",
    level:10,
    speed:9,
    type:"dark",
    moves:"Slash",
    img: "img/absol.png"
  }

  let vibrava = {
    name:"Vibrava",
    level:10,
    speed:2,
    type:"dragon",
    moves: "Dragonbreath",
    img: "img/vibrava.png"
  }

//array of pokemon
let pokeArray = [treecko, torchic, mudkip, beautifly, ralts, makuhita, aron, electrike, absol, vibrava];
//shuffles deck of pokemon cards
let cards = shuffle(pokeArray);

  let player1pokemon = []; // player 1's team
  let player2pokemon = []; // player 2's team

  function showBoard() {
    let board = $(".board");
    for (let i = 0; i < 10; i++) {
    let card = $("<div class='card backCard'></div>"); //shows cards on screen
    board.append(card);
  }
  let newCard = $('.card'); //selects card
  newCard.one('click', function(event) { //when player clicks card, pokemon shows up
  let pokePop = pokeArray.pop();
  $(event.target).css('background-image', 'url(' + pokePop.img + ')');

  if (player1pokemon.length < 5) { //player 1 pokemon selects 5 cards, then player 2 selects remaining cards
    player1pokemon.push(pokePop); // with a click, it pushes the pokemon into player's team
  } else {
    player2pokemon.push(pokePop)
  }


});
   let start = "<button class='start'> Play Game</button>";
   board.append(start);
   $('.start').on('click', function() {
    board.hide();
    $("body").append($("<div class='game'></div>"))
    $('.game').append($("<div class='playerCard'></div>"));
    $('.game').append($("<div class='playerCard2'></div>"));
    let pokemon1 = player1pokemon.pop();
    let pokemon2 = player2pokemon.pop()
    $('.game').append($("<h1 class='pokemonName'></h1>"));
    $('.game').append($("<h1 class='pokemon2Name'></h1>"));
    $('.pokemonName').text(`${pokemon1.name}`);
    $('.pokemon2Name').text(`${pokemon2.name}`);
    $('.game').append($("<h3 class='pokemonMove'></h3>"));
    $('.game').append($("<h3 class='pokemon2Move'></h3>"));
    $('.game').append($("<progress id='health' value='100' max='100'></progress>"));
    $('.game').append($("<progress id='health2' value='100' max='100'></progress>"));
    $('.game').append($("<h1 class='wins'></h1>"));
    $('.game').append($("<h1 class='wins2'></h1>"));
    let wins = 0;
    let wins2 = 0;
    $('.wins').text(`Wins: ${wins}`);
    $('.wins2').text(`Wins: ${wins2}`);
    $('.game').append($("<h2 class='nextPokemon'></h3>"));
    $('.game').append($("<h2 class='nextPokemon2'></h3>"));
    $('.nextPokemon').text(`Next Pokemon: ${player1pokemon[player1pokemon.length-1].name}`);
    $('.nextPokemon2').text(`Next Pokemon: ${player2pokemon[player2pokemon.length-1].name}`);
    let health = document.getElementById("health")
    let health2 = document.getElementById("health2")
    $('.playerCard').css('background-image', 'url(' + pokemon1.img + ')');
    $('.playerCard2').css('background-image', 'url(' + pokemon2.img + ')');
    // $('.game').append($("<button class='fight'>Fight</button>"));
    // $('.game').append($("<button class='fight2'>Fight</button>"));
      let pokemon1HP = 100;
      let pokemon2HP = 100;
      let loss;

    // $('.fight').click(function(e) {
 // player 1 moves
      $(document).keydown(function(e) {
        if (e.keyCode === 37) {
      if(pokemon1.type === "water" && pokemon2.type === "fire") {
        $('.pokemonMove').text(`${pokemon1.moves}`);
          loss = 100;
          health2.value -= loss;
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type === "water" && pokemon2.type === "rock") {
        loss = 100;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }
      else if (pokemon1.type === 'water' && pokemon2.type === "grass") {
        loss = 25;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if(pokemon1.type === 'water' && pokemon2.type === "dragon") {
        loss = 25;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type === 'water' && pokemon2.type === "electric") {
        loss = 25;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if(pokemon1.type==="fire" && pokemon2.type === "grass") {
        loss = 100;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="fire" && pokemon2.type === "rock") {
        loss = 25;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="fire" && pokemon2.type === "water") {
        loss = 25;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if(pokemon1.type==="grass" && pokemon2.type === "water") {
        loss = 100;
       health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if(pokemon1.type==="grass" && pokemon2.type === "rock") {
        loss = 100;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="grass" && pokemon2.type === "fire") {
        loss = 25;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="grass" && pokemon2.type === "flying") {
        loss = 25;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="electric" && pokemon2.type === "flying") {
        loss = 100;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="electric" && pokemon2.type === "water") {
        loss = 100;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="psychic" && pokemon2.type === "fighting") {
        loss = 100;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="psychic" && pokemon2.type === "dark") {
        loss = 25;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="dark" && pokemon2.type === "psychic") {
        loss = 100;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="psychic" && pokemon2.type === "dark") {
        loss = 25;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }
      else if (pokemon1.type==="rock" && pokemon2.type === "flying") {
        loss = 100;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="rock" && pokemon2.type === "fire") {
        loss = 100;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="flying" && pokemon2.type === "grass") {
        loss = 100;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="flying" && pokemon2.type === "fighting") {
        loss = 100;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="flying" && pokemon2.type === "electric") {
        loss = 25;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="flying" && pokemon2.type === "rock") {
        loss = 25;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="fighting" && pokemon2.type === "rock") {
        loss = 100;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }
      else if (pokemon1.type==="fighting" && pokemon2.type === "dark") {
        loss = 100;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="fighting" && pokemon2.type === "psychic") {
        loss = 25;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="fighting" && pokemon2.type === "flying") {
        loss = 25;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else {
        loss = 50;
        health2.value -= loss;
        $('.pokemonMove').text(`${pokemon1.moves}`);
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);

      }




      // if pokemon HP is 0, change pokemon
        if (pokemon2HP <= 0) {
          // $('.nextPokemon2').text(`Next Pokemon: ${player2pokemon[player2pokemon.length-1].name}`);
          // if(player2pokemon.length - 1 === 0) {
          //   $('.nextPokemon2').text("");
          // }
          pokemon2 = player2pokemon.pop();
          wins++;
          $('.wins').text(`Wins: ${wins}`);
          $('.playerCard2').css('background-image', 'url(' + pokemon2.img + ')');
          $('.pokemon2Name').text(`${pokemon2.name}`);

          pokemon2HP = 100;
          health2.value = 100;
          if (player2pokemon.length === 0) {
            alert("Player 1 wins!");
            $('.game').hide();
            $('.playerCard').appendTo('body');
            setTimeout(function(){ $('.playerCard').addClass('winner'); }, 1000);

            // $('.game').hide();
            $("body").append("<button class='replay'>Replay </button>")
            $('.replay').on('click', function() {
              window.location.reload(true);
            })
          }
          $('.nextPokemon2').text(`Next Pokemon: ${player2pokemon[player2pokemon.length-1].name}`);
          if(player2pokemon.length - 1 === 0) {
            $('.nextPokemon2').text("");
          }
        }
      }
      });

    // $('.fight2').click(function(e) {
    $(document).keydown(function(e) {
        if (e.keyCode === 39) {
      if(pokemon2.type === "water" && pokemon1.type === "fire") {
          loss = 100;
          health.value -= loss;
          $('.pokemon2Move').text(`${pokemon2.moves}`);
          alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);

      }

      else if (pokemon2.type === "water" && pokemon1.type === "rock") {
        loss = 100;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }
      else if (pokemon2.type === 'water' && pokemon1.type === "grass") {
        loss = 25;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if(pokemon2.type === 'water' && pokemon1.type === "dragon") {
        loss = 25;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type === 'water' && pokemon1.type === "electric") {
        loss = 25;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if(pokemon2.type==="fire" && pokemon2.type === "grass") {
        loss = 100;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="fire" && pokemon1.type === "rock") {
        loss = 25;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="fire" && pokemon1.type === "water") {
        loss = 25;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if(pokemon2.type==="grass" && pokemon1.type === "water") {
        loss = 100;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if(pokemon2.type==="grass" && pokemon1.type === "rock") {
        loss = 100;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="grass" && pokemon1.type === "fire") {
        loss = 25;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="grass" && pokemon1.type === "flying") {
        loss = 25;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="electric" && pokemon1.type === "flying") {
        loss = 100;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="electric" && pokemon1.type === "water") {
        loss = 100;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="psychic" && pokemon1.type === "fighting") {
        loss = 100;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="psychic" && pokemon1.type === "dark") {
        loss = 25;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="dark" && pokemon1.type === "psychic") {
        loss = 100;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="psychic" && pokemon1.type === "dark") {
        loss = 25;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }
      else if (pokemon2.type==="rock" && pokemon1.type === "flying") {
        loss = 100;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="rock" && pokemon1.type === "fire") {
        loss = 100;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="flying" && pokemon1.type === "grass") {
        loss = 100;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="flying" && pokemon1.type === "fighting") {
        loss = 100;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="flying" && pokemon1.type === "electric") {
        loss = 25;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="flying" && pokemon1.type === "rock") {
        loss = 25;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="fighting" && pokemon1.type === "rock") {
        loss = 100;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }
      else if (pokemon2.type==="fighting" && pokemon1.type === "dark") {
        loss = 100;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="fighting" && pokemon1.type === "psychic") {
        loss = 25;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="fighting" && pokemon1.type === "flying") {
        loss = 25;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else {
        loss = 50;
        health.value -= loss;
        $('.pokemon2Move').text(`${pokemon2.moves}`);
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);;

      }



      if(pokemon1HP <= 0) {

          // $('.nextPokemon').text(`Next Pokemon: ${player1pokemon[player1pokemon.length-1].name}`);
          // if(player1pokemon.length - 1 === 0) {
          //   $('.nextPokemon').text("");
          // }
          wins2++;
          $('.wins2').text(`Wins: ${wins2}`);
          pokemon1 = player1pokemon.pop();
          $('.playerCard').css('background-image', 'url(' + pokemon1.img + ')');
          $('.pokemonName').text(`${pokemon1.name}`);
          pokemon1HP = 100;
          health.value = 100;
          if (player1pokemon.length === 0) {
            alert("Player 2 wins!");
            $('.game').hide();
            $('.playerCard2').appendTo('body');
            setTimeout(function(){ $('.playerCard2').addClass('winner'); }, 1000);
            // $('.game').hide();
             $("body").append("<button class='replay'>Replay </button>")
            $('.replay').on('click', function() {
              window.location.reload(true);
            });
          }
          $('.nextPokemon').text(`Next Pokemon: ${player1pokemon[player1pokemon.length-1].name}`);
          if(player1pokemon.length - 1 === 0) {
            $('.nextPokemon').text("");
          }
        }
      }
      });
  });





}



//Taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(pokeArray) {
  var currentIndex = pokeArray.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = pokeArray[currentIndex];
    pokeArray[currentIndex] = pokeArray[randomIndex];
    pokeArray[randomIndex] = temporaryValue;
  }

  return pokeArray;
}




})
