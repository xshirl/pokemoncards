
$(document).ready(function() {
  $("#submit").on('click', function(e) {
    e.preventDefault();
    $('#landingForm').addClass('display');
    showBoard();
    var player1 = $("#player1").val();
    console.log(player1);

    var player2 = $("#player2").val();
    console.log(player2);
    // showBoard();
  });
let treecko = {
  name: "Treecko",
  level: 10,
  speed: 10,
  type: "grass",
  moves: [],
  img: "img/treecko.png"
}

let torchic = {
  name: "Torchic",
  level:10,
  speed:6,
  type:"fire",
  moves : ["Ember", "Fire blast"],
  img: "img/torchic.png"
}

let mudkip = {
  name: "Mudkip",
  level:10,
  speed:4,
  type:"water",
  moves: ["Water gun"],
  img: "img/mudkip.png"
}
  let array = [treecko, torchic, mudkip]
let cards = shuffle(array);
  let player1 = [];
  let player2 = [];

  function showBoard() {
    let board = $(".board");
    for (let i = 0; i < 10; i++) {
    let card = $("<div class='card backCard'></div>");
    board.append(card);
  }
  let card = $('.card');

  card.on('click', function() {
    for (let i = 0; i < cards.length; i++) {
  card.css('background-image', 'url(' + cards[i].img + ')');
  if (i%2 === 0) {
    player1.push[cards[i]];
    console.log(player1);
  } else{
    player2.push[cards[i]];
    console.log(player2);
  }
}
});
   let start = "<button class='start'> Play Game</button>";
   board.append(start);
   $('.start').on('click', function() {
    $('.board').hide();
  });
}


//Taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



// function callDeck() {
// $('.backCard').on('click', function() {
//   console.log(cards[i].img);
// for (let i = 0; i < cards.length; i++) {
//   $('.backImage').attr('src', `${card[i].img}`);
// }

// });

// }


})
