
$(document).ready(() => {
  let player1; // value of player 1 name
  let player2; // value of player 2 name

  function getUsername1() {
    player1 = $('#player1').val(); // value of player 1 name
    if (player1 === '') { // if no entry, sets default to player 1
      player1 = 'Player 1';
    }
    return player1;
  }

  function getUsername2() {
    player2 = $('#player2').val(); // value of player 2 name
    if (player2 === '') { //sets default to player 2
      player2 = 'Player 2';
    }
    return player2;
  }

  $('#submit').on('click', (e) => {
    e.preventDefault(); // allows landing form to disappear with one click
    $('#landingForm').addClass('display'); // landing form displays none
    showBoard(); // show card deck
    getUsername1();
    getUsername2();
  });

  // pokemon objects
  const treecko = {
    name: 'Treecko',
    level: 10,
    speed: 10,
    type: 'grass',
    moves: 'Absorb',
    img: 'img/treecko.png',
  };

  const torchic = {
    name: 'Torchic',
    level: 10,
    speed: 6,
    type: 'fire',
    moves: 'Ember',
    img: 'img/torchic.png',
  };

  const mudkip = {
    name: 'Mudkip',
    level: 10,
    speed: 4,
    type: 'water',
    moves: 'Water gun',
    img: 'img/mudkip.png',
  };

  const beautifly = {
    name: 'Beautifly',
    level: 10,
    speed: 5,
    type: 'flying',
    moves: 'Gust',
    img: 'img/beautifly.png',
  };

  const ralts = {
    name: 'Ralts',
    level: 10,
    speed: 6,
    type: 'psychic',
    moves: 'Psychic',
    img: 'img/ralts.png',
  };

  const makuhita = {
    name: 'Makuhita',
    level: 10,
    speed: 3,
    type: 'fighting',
    moves: 'Take Down',
    img: 'img/makuhita.png',
  };

  const aron = {
    name: 'Aron',
    level: 10,
    speed: 1,
    type: 'rock',
    moves: 'Earthquake',
    img: 'img/aron.png',
  };

  const electrike = {
    name: 'Electrike',
    level: 10,
    speed: 8,
    type: 'electric',
    moves: 'Thundershock',
    img: 'img/electrike.png',
  };

  const absol = {
    name: 'Absol',
    level: 10,
    speed: 9,
    type: 'dark',
    moves: 'Slash',
    img: 'img/absol.png',
  };

  const vibrava = {
    name: 'Vibrava',
    level: 10,
    speed: 2,
    type: 'dragon',
    moves: 'Dragonbreath',
    img: 'img/vibrava.png',
  };

  // array of pokemon
  const pokeArray = [treecko, torchic, mudkip, beautifly, ralts, makuhita, aron, electrike, absol, vibrava];
  // shuffles deck of pokemon cards
  const cards = shuffle(pokeArray);

  const player1pokemon = []; // player 1's team
  const player2pokemon = []; // player 2's team

  function showBoard() {
    const board = $('.board');
    for (let i = 0; i < 10; i++) {
      const card = $("<div class='card backCard'></div>"); // shows cards on screen
      board.append(card);
    }
    const newCard = $('.card'); // selects card
    newCard.one('click', (event) => { // when player clicks card, pokemon shows up
      const pokePop = pokeArray.pop();
      $(event.target).css('background-image', `url(${pokePop.img})`);

      if (player1pokemon.length < 5) { // player 1 pokemon selects 5 cards, then player 2 selects remaining cards
        player1pokemon.push(pokePop); // with a click, it pushes the pokemon into player's team
      } else {
        player2pokemon.push(pokePop); // pushes pokemon in player 2's team
      }
    });
    const start = "<button class='start'> Play Game</button>";
    board.append(start);
    $('.start').on('click', () => {
      board.hide();
      $('body').append($("<div class='game'></div>"));
      $('.game').append($("<div class='playerCard'></div>")); //appends player 1's pokemon onto board
      $('.game').append($("<div class='playerCard2'></div>")); // appends player 2's pokemon onto board
      let pokemon1 = player1pokemon.pop(); // pops last pokemon out so last pokemon is seen on board
      let pokemon2 = player2pokemon.pop(); // pops last pokemon out
      $('.game').append($("<h1 class='pokemonName'></h1>")); // puts name on board
      $('.game').append($("<h1 class='pokemon2Name'></h1>")); // puts name on board
      $('.pokemonName').text(`${pokemon1.name}`);
      $('.pokemon2Name').text(`${pokemon2.name}`);
      $('.game').append($("<h3 class='pokemonMove'></h3>")); // puts move on board
      $('.game').append($("<h3 class='pokemon2Move'></h3>")); // puts move on board
      $('.game').append($("<progress id='health' value='100' max='100'></progress>")); // puts hp bar on board
      $('.game').append($("<progress id='health2' value='100' max='100'></progress>")); // puts hp bar on board
      $('.game').append($("<h1 class='wins'></h1>")); // puts number of wins on board
      $('.game').append($("<h1 class='wins2'></h1>")); // puts number of wins on board
      let wins = 0; //sets starting wins to zero
      let wins2 = 0;
      $('.wins').text(`Wins: ${wins}`); //sets wins to 0 on board
      $('.wins2').text(`Wins: ${wins2}`);
      $('.game').append($("<h2 class='nextPokemon'></h3>")); //puts next pokemon text on board
      $('.game').append($("<h2 class='nextPokemon2'></h3>"));
      $('.nextPokemon').text(`Next Pokemon: ${player1pokemon[player1pokemon.length - 1].name}`);
      $('.nextPokemon2').text(`Next Pokemon: ${player2pokemon[player2pokemon.length - 1].name}`);
      const health = document.getElementById('health');
      const health2 = document.getElementById('health2');
      $('.playerCard').css('background-image', `url(${pokemon1.img})`); //puts pokemon image on card
      $('.playerCard2').css('background-image', `url(${pokemon2.img})`);
      // $('.game').append($("<button class='fight'>Fight</button>"));
      // $('.game').append($("<button class='fight2'>Fight</button>"));
      let pokemon1HP = 100; // sets initial HP to 100
      let pokemon2HP = 100;
      let loss;
      alert("Player 1, press LEFT key to move, Player 2, press RIGHT key to move.")
      // $('.fight').click(function(e) {
      // player 1 moves
      $(document).keydown((e) => {
        if (e.keyCode === 37) { // press left key to move
          if (pokemon1.type === 'water' && pokemon2.type === 'fire') {
            $('.pokemonMove').text(`${pokemon1.moves}`);
            loss = 100;
            health2.value -= loss;
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'water' && pokemon2.type === 'rock') {
            loss = 100;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'water' && pokemon2.type === 'grass') {
            loss = 25;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'water' && pokemon2.type === 'dragon') {
            loss = 25;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'water' && pokemon2.type === 'electric') {
            loss = 25;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'fire' && pokemon2.type === 'grass') {
            loss = 100;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'fire' && pokemon2.type === 'rock') {
            loss = 25;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'fire' && pokemon2.type === 'water') {
            loss = 25;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'grass' && pokemon2.type === 'water') {
            loss = 100;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'grass' && pokemon2.type === 'rock') {
            loss = 100;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'grass' && pokemon2.type === 'fire') {
            loss = 25;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'grass' && pokemon2.type === 'flying') {
            loss = 25;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'electric' && pokemon2.type === 'flying') {
            loss = 100;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'electric' && pokemon2.type === 'water') {
            loss = 100;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'psychic' && pokemon2.type === 'fighting') {
            loss = 100;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'psychic' && pokemon2.type === 'dark') {
            loss = 25;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'dark' && pokemon2.type === 'psychic') {
            loss = 100;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'psychic' && pokemon2.type === 'dark') {
            loss = 25;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'rock' && pokemon2.type === 'flying') {
            loss = 100;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'rock' && pokemon2.type === 'fire') {
            loss = 100;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'flying' && pokemon2.type === 'grass') {
            loss = 100;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'flying' && pokemon2.type === 'fighting') {
            loss = 100;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'flying' && pokemon2.type === 'electric') {
            loss = 25;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'flying' && pokemon2.type === 'rock') {
            loss = 25;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'fighting' && pokemon2.type === 'rock') {
            loss = 100;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'fighting' && pokemon2.type === 'dark') {
            loss = 100;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'fighting' && pokemon2.type === 'psychic') {
            loss = 25;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else if (pokemon1.type === 'fighting' && pokemon2.type === 'flying') {
            loss = 25;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          } else {
            loss = 50;
            health2.value -= loss;
            $('.pokemonMove').text(`${pokemon1.moves}`);
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP -= loss}HP.`);
          }


          // if pokemon HP is 0, change pokemon
          if (pokemon2HP <= 0) {

            pokemon2 = player2pokemon.pop(); // if pokemon faints, let next pokemon appear on screen
            wins++;
            $('.wins').text(`Wins: ${wins}`); //changes wins to plus 1.
            $('.playerCard2').css('background-image', `url(${pokemon2.img})`); // lets next pokemon appear
            $('.pokemon2Name').text(`${pokemon2.name}`); // changes pokemon name

            pokemon2HP = 100; // resets pokemon HP
            health2.value = 100; // resets pokemon HP


            if (player2pokemon.length === 0) {
              getUsername1(); // returns winner name
              alert(`${player1} wins!`);
              $('.game').hide(); //hides cards and text
              $('.playerCard').appendTo('body'); // appends winning pokemon on screen
              setTimeout(() => { $('.playerCard').addClass('winner'); }, 1000); //adds css transition to winning pokemon
              $('body').append("<button class='replay'>Replay </button>"); // adds replay button to screen
              $('body').append("<h2 class='winner1'></h2>"); // adds winner name to screen
              $('.winner1').text(`Winner: ${player1}`);
              $('.replay').on('click', () => { // resets game
                window.location.reload(true);
              });
            }
            $('.nextPokemon2').text(`Next Pokemon: ${player2pokemon[player2pokemon.length - 1].name}`); // next pokemon is the last pokemon in array
            if (player2pokemon.length - 1 === 0) { //if last pokemon, no text for next pokemon
              $('.nextPokemon2').text('');
            }
          }
        }
      });

      $(document).keydown((e) => {
        if (e.keyCode === 39) { // press right key to move
          if (pokemon2.type === 'water' && pokemon1.type === 'fire') {
            loss = 100;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'water' && pokemon1.type === 'rock') {
            loss = 100;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'water' && pokemon1.type === 'grass') {
            loss = 25;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'water' && pokemon1.type === 'dragon') {
            loss = 25;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'water' && pokemon1.type === 'electric') {
            loss = 25;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'fire' && pokemon2.type === 'grass') {
            loss = 100;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'fire' && pokemon1.type === 'rock') {
            loss = 25;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'fire' && pokemon1.type === 'water') {
            loss = 25;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'grass' && pokemon1.type === 'water') {
            loss = 100;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'grass' && pokemon1.type === 'rock') {
            loss = 100;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'grass' && pokemon1.type === 'fire') {
            loss = 25;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'grass' && pokemon1.type === 'flying') {
            loss = 25;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'electric' && pokemon1.type === 'flying') {
            loss = 100;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'electric' && pokemon1.type === 'water') {
            loss = 100;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'psychic' && pokemon1.type === 'fighting') {
            loss = 100;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'psychic' && pokemon1.type === 'dark') {
            loss = 25;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'dark' && pokemon1.type === 'psychic') {
            loss = 100;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'psychic' && pokemon1.type === 'dark') {
            loss = 25;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'rock' && pokemon1.type === 'flying') {
            loss = 100;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'rock' && pokemon1.type === 'fire') {
            loss = 100;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'flying' && pokemon1.type === 'grass') {
            loss = 100;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'flying' && pokemon1.type === 'fighting') {
            loss = 100;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'flying' && pokemon1.type === 'electric') {
            loss = 25;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'flying' && pokemon1.type === 'rock') {
            loss = 25;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'fighting' && pokemon1.type === 'rock') {
            loss = 100;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'fighting' && pokemon1.type === 'dark') {
            loss = 100;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'fighting' && pokemon1.type === 'psychic') {
            loss = 25;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else if (pokemon2.type === 'fighting' && pokemon1.type === 'flying') {
            loss = 25;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          } else {
            loss = 50;
            health.value -= loss;
            $('.pokemon2Move').text(`${pokemon2.moves}`);
            alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
          }


          if (pokemon1HP <= 0) {
            wins2++; // if pokemon faints, add win to player
            $('.wins2').text(`Wins: ${wins2}`);
            pokemon1 = player1pokemon.pop(); // pops out last pokemon in array
            $('.playerCard').css('background-image', `url(${pokemon1.img})`); // changes pokemon card
            $('.pokemonName').text(`${pokemon1.name}`); // changes pokemon name
            pokemon1HP = 100; //resets pokemon hp
            health.value = 100;
            getUsername2(); // returns user's name
            if (player1pokemon.length === 0) {
              alert(`${player2} wins!`);
              $('.game').hide();
              $('.playerCard2').appendTo('body');
              setTimeout(() => { $('.playerCard2').addClass('winner'); }, 1000); //adds winner pokemon on screen with css transition
              $('body').append("<button class='replay'>Replay </button>"); //adds replay button
              $('body').append("<h2 class='winner2'></h2>");
              $('.winner2').text(`Winner: ${player2}`);
              $('.replay').on('click', () => { //resets game
                window.location.reload(true);
              });
            }
            $('.nextPokemon').text(`Next Pokemon: ${player1pokemon[player1pokemon.length - 1].name}`); //sets next pokemon text to last pokemon in array
            if (player1pokemon.length - 1 === 0) { // if no more pokemon in array, sets text to ''
              $('.nextPokemon').text('');
            }
          }
        }
      });
    });
  }


  // Taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(pokeArray) {
    let currentIndex = pokeArray.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
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
});
