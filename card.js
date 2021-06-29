const poker = require("poker-hands");

// create deck of 52 cards
function createDeck() {
  var suits = ["H", "C", "D", "S"];
  var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];

  var deck = [];

  for (var suitCount = 0; suitCount < 4; suitCount++) {
    for (var rankCount = 0; rankCount < 13; rankCount++) {
      deck.push(ranks[rankCount] + suits[suitCount]);
    }
  }
  return deck;
}

// shuffle the cards
function shuffleDeck(deck) {
  for (var i = 0; i < 52; i++) {
    var tmp = deck[i];
    var randomPos = Math.floor(Math.random() * 52);
    deck[i] = deck[randomPos];
    deck[randomPos] = tmp;
  }
}

var testDeck = createDeck();
shuffleDeck(testDeck);

// form array of first 5 cards
var fiveCardHand = testDeck.splice(0, 5);

// convert the 5 card array to string separated by space
var fiveCardHandString = fiveCardHand.join(" ");

// determine strongest poker hand
if (poker.hasRoyalFlush(fiveCardHandString)) {
  console.log("The strongest poker hand is Royal Flush.");
} else if (poker.hasStraightFlush(fiveCardHandString)) {
  console.log("The strongest poker hand is Straight Flush.");
} else if (poker.hasFourOfAKind(fiveCardHandString)) {
  console.log("The strongest poker hand is Four Of A Kind.");
} else if (poker.hasFullHouse(fiveCardHandString)) {
  console.log("The strongest poker hand is Full House.");
} else if (poker.hasFlush(fiveCardHandString)) {
  console.log("The strongest poker hand is Flush.");
} else if (poker.hasStraight(fiveCardHandString)) {
  console.log("The strongest poker hand is Straight.");
} else if (poker.hasThreeOfAKind(fiveCardHandString)) {
  console.log("The strongest poker hand is Three Of A Kind.");
} else if (poker.hasTwoPairs(fiveCardHandString)) {
  console.log("The strongest poker hand is Two Pairs.");
} else if (poker.hasPair(fiveCardHandString)) {
  console.log("The strongest poker hand is One Pair.");
} else {
  console.log("The strongest poker hand is High Card.");
}
