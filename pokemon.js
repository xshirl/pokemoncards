
$(document).ready(function() {
  $("#submit").on('click', function(e) {
    e.preventDefault();
    $('#landingForm').addClass('display');
    showBoard();
    let player1 = $("#player1").val();
    console.log(player1);

    let player2 = $("#player2").val();
    console.log(player2);
    // showBoard();
  });
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


let pokeArray = [treecko, torchic, mudkip, beautifly, ralts, makuhita, aron, electrike, absol, vibrava];

let cards = shuffle(pokeArray);
  let player1pokemon = [];
  let player2pokemon = [];

  function showBoard() {
    let board = $(".board");
    for (let i = 0; i < 10; i++) {
    let card = $("<div class='card backCard'></div>");
    board.append(card);
  }
  let newCard = $('.card');
  // let cards2 = [];
  // for (var i = 0; i < 10; i++) {
  //   cards2.push($('.card')[i]);
  // }
  newCard.one('click', function(event) {
    // for (let i = 0; i < pokearray.length; i++) {
  let pokePop = pokeArray.pop();
  $(event.target).css('background-image', 'url(' + pokePop.img + ')');

  if (player1pokemon.length < 5) {
    player1pokemon.push(pokePop);
  } else {
    player2pokemon.push(pokePop)
  }



  // so you set up a currentPlayer
  // initializes as currentPlayer string 'player 1'
  // push the object into the player's array
  // you then switch on the click to 'player 2'
  // and then, you have to set a method when pokeArray.length === 0, you then start the game
  // because that means, you've assigned pokemon to each player.


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
    $('.playerCard').css('background-image', 'url(' + pokemon1.img + ')');
    $('.playerCard2').css('background-image', 'url(' + pokemon2.img + ')');
    $('.game').append($("<button class='fight'>Fight</button>"));
    $('.game').append($("<button class='fight2'>Fight</button>"));
      let pokemon1HP = 100;
      let pokemon2HP = 100;
      let loss;

    $('.fight').click(function(e) {
      e.stopPropagation();
      e.preventDefault();

      if(pokemon1.type === "water" && pokemon2.type === "fire") {
          loss = 100;
            alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type === "water" && pokemon2.type === "rock") {
        loss = 100;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }
      else if (pokemon1.type === 'water' && pokemon2.type === "grass") {
        loss = 25;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if(pokemon1.type === 'water' && pokemon2.type === "dragon") {
        loss = 25;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type === 'water' && pokemon2.type === "electric") {
        loss = 25;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if(pokemon1.type==="fire" && pokemon2.type === "grass") {
        loss = 100;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="fire" && pokemon2.type === "rock") {
        loss = 25;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="fire" && pokemon2.type === "water") {
        loss = 25;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if(pokemon1.type==="grass" && pokemon2.type === "water") {
        loss = 100;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if(pokemon1.type==="grass" && pokemon2.type === "rock") {
        loss = 100;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="grass" && pokemon2.type === "fire") {
        loss = 25;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="grass" && pokemon2.type === "flying") {
        loss = 25;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="electric" && pokemon2.type === "flying") {
        loss = 100;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="electric" && pokemon2.type === "water") {
        loss = 100;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="psychic" && pokemon2.type === "fighting") {
        loss = 100;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="psychic" && pokemon2.type === "dark") {
        loss = 25;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="dark" && pokemon2.type === "psychic") {
        loss = 100;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="psychic" && pokemon2.type === "dark") {
        loss = 25;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }
      else if (pokemon1.type==="rock" && pokemon2.type === "flying") {
        loss = 100;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="rock" && pokemon2.type === "fire") {
        loss = 100;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="flying" && pokemon2.type === "grass") {
        loss = 100;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="flying" && pokemon2.type === "fighting") {
        loss = 100;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="flying" && pokemon2.type === "electric") {
        loss = 25;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="flying" && pokemon2.type === "rock") {
        loss = 25;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="fighting" && pokemon2.type === "rock") {
        loss = 100;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }
      else if (pokemon1.type==="fighting" && pokemon2.type === "dark") {
        loss = 100;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="fighting" && pokemon2.type === "psychic") {
        loss = 25;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else if (pokemon1.type==="fighting" && pokemon2.type === "flying") {
        loss = 25;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);
      }

      else {
        loss = 50;
          alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
        loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);

      }

      // alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
      //   loses ${loss} HP. ${pokemon2.name} now has ${pokemon2HP-=loss}HP.`);


// if(pokemon1.type === "water" && pokemon2.type === "fire") {
//         alert(`${pokemon1.name} uses ${pokemon1.moves}. It is super effective! ${pokemon2.name}
//         loses 100 HP. ${pokemon2.name} now has ${pokemon2HP-=100}HP.`);
//       }
//        if (player1pokemon.type === 'water' && player2pokemon.type === "grass") {
//         alert(`${pokemon1.name} uses ${pokemon1.moves}. It is not effective! ${pokemon2.name}
//         loses 25 HP. ${pokemon2.name} now has ${pokemon2HP-=25}HP.`);
//       }
//       if (pokemon1.type === "water" && pokemon2.type === "rock") {
//         alert(`${pokemon1.name} uses ${pokemon1.moves}. It is super effective! ${pokemon2.name}
//         loses 100 HP. ${pokemon2.name} now has ${pokemon2HP-=100}HP.`);
//       }

//       if (player1pokemon.type === 'water' && player2pokemon.type === "dragon") {
//         alert(`${pokemon1.name} uses ${pokemon1.moves}. It is not effective! ${pokemon2.name}
//         loses 25 HP. ${pokemon2.name} now has ${pokemon2HP-=25}HP.`);
//       }
//       if (player1pokemon.type === 'water' && player2pokemon.type === "electric") {
//         alert(`${pokemon1.name} uses ${pokemon1.moves}. It is not effective! ${pokemon2.name}
//         loses 25 HP. ${pokemon2.name} now has ${pokemon2HP-=25}HP.`);
//       } else {
//         alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
//         loses 50 HP. ${pokemon2.name} now has ${pokemon2HP-=50}HP.`);
//       }
//   if(pokemon1.type==="fire" && pokemon2.type === "grass") {
//     alert(`${pokemon1.name} uses ${pokemon1.moves}. It is super effective! ${pokemon2.name}
//         loses 100 HP. ${pokemon2.name} now has ${pokemon2HP-=100}HP.`);
//       }
//       if (pokemon1.type==="fire" && pokemon2.type === "rock") {
//         alert(`${pokemon1.name} uses ${pokemon1.moves}. It is not effective! ${pokemon2.name}
//         loses 25 HP. ${pokemon2.name} now has ${pokemon2HP-=25}HP.`);
//       }
//       if (pokemon1.type==="fire" && pokemon2.type === "water") {
//         alert(`${pokemon1.name} uses ${pokemon1.moves}. It is not effective! ${pokemon2.name}
//         loses 25 HP. ${pokemon2.name} now has ${pokemon2HP-=25}HP.`);
//       }

//   if(pokemon1.type==="grass" && pokemon2.type === "water") {
//     alert(`${pokemon1.name} uses ${pokemon1.moves}. It is super effective! ${pokemon2.name}
//         loses 100 HP. ${pokemon2.name} now has ${pokemon2HP-=100}HP.`);
//       }
//       if(pokemon1.type==="grass" && pokemon2.type === "rock") {
//     alert(`${pokemon1.name} uses ${pokemon1.moves}. It is super effective! ${pokemon2.name}
//         loses 100 HP. ${pokemon2.name} now has ${pokemon2HP-=100}HP.`);
//       }
//       if (pokemon1.type==="grass" && pokemon2.type === "fire") {
//         alert(`${pokemon1.name} uses ${pokemon1.moves}. It is not effective! ${pokemon2.name}
//         loses 25 HP. ${pokemon2.name} now has ${pokemon2HP-=25}HP.`);
//       }
//       if (pokemon1.type==="grass" && pokemon2.type === "flying") {
//         alert(`${pokemon1.name} uses ${pokemon1.moves}. It is not effective! ${pokemon2.name}
//         loses 25 HP. ${pokemon2.name} now has ${pokemon2HP-=25}HP.`);
//       }




      // if pokemon HP is 0, change pokemon
        if (pokemon2HP <= 0) {
          pokemon2 = player2pokemon.pop();
          $('.playerCard2').css('background-image', 'url(' + pokemon2.img + ')');
          pokemon2HP = 100;
          if (player2pokemon.length === 0) {
            alert("Player 1 wins!");
            $('.game').hide();
            $("body").append("<button class='replay'>Replay </button>")
            $('.replay').on('click', function() {
              window.location.reload(true);
            })
          }
        }
      });

    $('.fight2').click(function(e) {

      if(pokemon2.type === "water" && pokemon1.type === "fire") {
          loss = 100;
          alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);

      }

      else if (pokemon2.type === "water" && pokemon1.type === "rock") {
        loss = 100;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }
      else if (pokemon2.type === 'water' && pokemon1.type === "grass") {
        loss = 25;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if(pokemon2.type === 'water' && pokemon1.type === "dragon") {
        loss = 25;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type === 'water' && pokemon1.type === "electric") {
        loss = 25;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if(pokemon2.type==="fire" && pokemon2.type === "grass") {
        loss = 100;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="fire" && pokemon1.type === "rock") {
        loss = 25;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="fire" && pokemon1.type === "water") {
        loss = 25;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if(pokemon2.type==="grass" && pokemon1.type === "water") {
        loss = 100;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if(pokemon2.type==="grass" && pokemon1.type === "rock") {
        loss = 100;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="grass" && pokemon1.type === "fire") {
        loss = 25;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="grass" && pokemon1.type === "flying") {
        loss = 25;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="electric" && pokemon1.type === "flying") {
        loss = 100;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="electric" && pokemon1.type === "water") {
        loss = 100;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="psychic" && pokemon1.type === "fighting") {
        loss = 100;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="psychic" && pokemon1.type === "dark") {
        loss = 25;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="dark" && pokemon1.type === "psychic") {
        loss = 100;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="psychic" && pokemon1.type === "dark") {
        loss = 25;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }
      else if (pokemon2.type==="rock" && pokemon1.type === "flying") {
        loss = 100;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="rock" && pokemon1.type === "fire") {
        loss = 100;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="flying" && pokemon1.type === "grass") {
        loss = 100;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="flying" && pokemon1.type === "fighting") {
        loss = 100;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="flying" && pokemon1.type === "electric") {
        loss = 25;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="flying" && pokemon1.type === "rock") {
        loss = 25;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="fighting" && pokemon1.type === "rock") {
        loss = 100;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }
      else if (pokemon2.type==="fighting" && pokemon1.type === "dark") {
        loss = 100;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="fighting" && pokemon1.type === "psychic") {
        loss = 25;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else if (pokemon2.type==="fighting" && pokemon1.type === "flying") {
        loss = 25;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
      }

      else {
        loss = 50;
        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
        loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);;

      }

      // alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
      //   loses ${loss} HP. ${pokemon1.name} now has ${pokemon1HP -= loss}HP.`);
        // pokemon1HP = pokemon1HP - loss;

 //      if(pokemon2.type === "water" && pokemon1.type === "fire") {
 //        alert(`${pokemon2.name} uses ${pokemon2.moves}. It is super effective! ${pokemon1.name}
 //        loses 100 HP. ${pokemon1.name} now has ${pokemon1HP-=100}HP.`);
 //      }
 //      if (pokemon2.type === "water" && pokemon1.type === "rock") {
 //        alert(`${pokemon2.name} uses ${pokemon2.moves}. It is super effective! ${pokemon1.name}
 //        loses 100 HP. ${pokemon1.name} now has ${pokemon1HP-=100}HP.`);
 //      }
 //       if (player2pokemon.type === 'water' && player1pokemon.type === "grass") {
 //        alert(`${pokemon2.name} uses ${pokemon2.moves}. It is not effective! ${pokemon1.name}
 //        loses 25 HP. ${pokemon1.name} now has ${pokemon1HP-=25}HP.`);
 //      } if (player2pokemon.type === 'water' && player1pokemon.type === "dragon") {
 //        alert(`${pokemon2.name} uses ${pokemon2.moves}. It is not effective! ${pokemon1.name}
 //        loses 25 HP. ${pokemon1.name} now has ${pokemon1HP-=25}HP.`);
 //      }  if (player2pokemon.type === 'water' && player1pokemon.type === "electric") {
 //        alert(`${pokemon2.name} uses ${pokemon2.moves}. It is not effective! ${pokemon1.name}
 //        loses 25 HP. ${pokemon1.name} now has ${pokemon1HP-=25}HP.`);
 //      } else {
 //        alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
 //        loses 50 HP. ${pokemon1.name} now has ${pokemon1HP-=50}HP.`);
 //      }
 // if(pokemon2.type==="fire" && pokemon1.type === "grass") {
 //    alert(`${pokemon2.name} uses ${pokemon2.moves}. It is super effective! ${pokemon1.name}
 //        loses 100 HP. ${pokemon1.name} now has ${pokemon1HP-=100}HP.`);
 //      } if (pokemon2.type==="fire" && pokemon1.type === "rock") {
 //        alert(`${pokemon2.name} uses ${pokemon2.moves}. It is not effective! ${pokemon1.name}
 //        loses 25 HP. ${pokemon1.name} now has ${pokemon1HP-=25}HP.`);
 //      } if (pokemon1.type==="fire" && pokemon2.type === "water") {
 //        alert(`${pokemon2.name} uses ${pokemon2.moves}. It is not effective! ${pokemon1.name}
 //        loses 25 HP. ${pokemon1.name} now has ${pokemon1HP-=25}HP.`);
 //      }

      if(pokemon1HP <= 0) {
          pokemon1 = player1pokemon.pop();
          $('.playerCard').css('background-image', 'url(' + pokemon1.img + ')');
          pokemon1HP = 100;
          if (player1pokemon.length === 0) {
            alert("Player 2 wins!");
            $('.game').hide();
          }
        }
      });
  });



  //  $('.fight').on('click', function() {
  //   alert("hello");
  // });
     // let player1HP = 100;
     //  let player2HP = 100;
     //  let pokemon1 = player1pokemon.pop();
     //  console.log(player1pokemon.pop().img);
     //  let pokemon2 = player2pokemon.pop();
     //  console.log(player1pokemon.pop().img);
      // alert(`${pokemon1.name} uses ${pokemon1.move}. ${pokemon2} loses 50HP.`);

      // if(pokemon1.type === "water" && pokemon2.type === "fire") {
      //   alert(`${pokemon1.name} uses ${pokemon1.moves}. It is super effective! ${pokemon2.name}
      //   loses 100 HP. ${pokemon2.name} now has ${pokemon2HP-=100}HP.`);
      // }
      //  else if (player1pokemon.type === 'water' && player2pokemon.type === "grass") {
      //   alert(`${pokemon1.name} uses ${pokemon1.moves}. It is not effective! ${pokemon2.name}
      //   loses 25 HP. ${pokemon2.name} now has ${pokemon2HP-=25}HP.`);
      // } else {
      //   alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
      //   loses 50 HP. ${pokemon2.name} now has ${pokemon2HP-=50}HP.`);
      // }

      // if(pokemon2.type === "water" && pokemon1.type === "fire") {
      //   alert(`${pokemon2.name} uses ${pokemon2.moves}. It is super effective! ${pokemon1.name}
      //   loses 100 HP. ${pokemon1.name} now has ${pokemon1HP-=100}HP.`);
      // }
      //  else if (player2pokemon.type === 'water' && player1pokemon.type === "grass") {
      //   alert(`${pokemon2.name} uses ${pokemon2.moves}. It is not effective! ${pokemon1.name}
      //   loses 25 HP. ${pokemon1.name} now has ${pokemon1HP-=25}HP.`);
      // } else {
      //   alert(`${pokemon2.name} uses ${pokemon2.moves}. ${pokemon1.name}
      //   loses 50 HP. ${pokemon1.name} now has ${pokemon1HP-=50}HP.`);
      // }

      // if(pokemon1.type === "water" && pokemon2.type === "fire") {
      //   alert(`${pokemon1.name} uses ${pokemon1.moves}. It is super effective! ${pokemon2.name}
      //   loses 100 HP. ${pokemon2.name} now has ${pokemon2HP-=100}HP.`);
      // }
      //  else if (player1pokemon.type === 'water' && player2pokemon.type === "grass") {
      //   alert(`${pokemon1.name} uses ${pokemon1.moves}. It is not effective! ${pokemon2.name}
      //   loses 25 HP. ${pokemon2.name} now has ${pokemon2HP-=25}HP.`);
      // } else {
      //   alert(`${pokemon1.name} uses ${pokemon1.moves}. ${pokemon2.name}
      //   loses 50 HP. ${pokemon2.name} now has ${pokemon2HP-=50}HP.`);
      // }



      // } else if (player1pokemon.type === 'water' && player2pokemon.type === "grass") {
      //   player2HP -= 25;
      //   alert(`${player1pokemon.name} has ${player1HP}. ${player2pokemon} has ${player2HP}`)
      // } else {
      //   player2HP -=50;
      //   alert(`${player1pokemon.name} has ${player1HP}. ${player2pokemon} has ${player2HP}`)
      // }
      // if (player1HP === 0 || player2HP === 0) {
      //   $('.game').append($("<button class='next'>Next Pokemon</button>"));
      // }



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
