var cards = [
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'H7',
    'H8',
    'H9',
    'HT',
    'HJ',
    'HQ',
    'HK',
    'HA',
    'S2',
    'S3',
    'S4',
    'S5',
    'S6',
    'S7',
    'S8',
    'S9',
    'ST',
    'SJ',
    'SQ',
    'SK',
    'SA',
    'D2',
    'D3',
    'D4',
    'D5',
    'D6',
    'D7',
    'D8',
    'D9',
    'DT',
    'DJ',
    'DQ',
    'DK',
    'DA',
    'C2',
    'C3',
    'C4',
    'C5',
    'C6',
    'C7',
    'C8',
    'C9',
    'CT',
    'CJ',
    'CQ',
    'CK',
    'CA',];
var players = [
    {name: 'Player 1', cardOne: '', cardTwo: ''}, 
    {name: 'Player 2', cardOne: '', cardTwo: ''}, 
    {name: 'Player 3', cardOne: '', cardTwo: ''}, 
    {name: 'Player 4', cardOne: '', cardTwo: ''}, 
    {name: 'Player 5', cardOne: '', cardTwo: ''}, 
    {name: 'Player 6', cardOne: '', cardTwo: ''},
    {name: 'Player 7', cardOne: '', cardTwo: ''},
    {name: 'Player 8', cardOne: '', cardTwo: ''},
    {name: 'Player 9', cardOne: '', cardTwo: ''}
];

function generateRandomNumber(randomNumber){
    randomNumber = Math.floor(Math.random() * (cards.length - 1));
    return randomNumber;
}

function dealHoleCards(){
    players.forEach(function(player){
        let randomNumber = generateRandomNumber();
        player.cardOne = cards[randomNumber];
        cards.splice(randomNumber, 1);

        randomNumber = generateRandomNumber();
        player.cardTwo = cards[randomNumber];
        cards.splice(randomNumber, 1);       
    })
    console.log(players);
};

function dealFlop(){
    let flop = [];

    while (flop.length <= 2){
        let randomNumber = generateRandomNumber();       
        flop.push(cards[randomNumber]);
        cards.splice(randomNumber, 1);
    }
    
    console.log(flop);
};

function dealTurn(){
    let randomNumber =  generateRandomNumber();
    let turn = cards[randomNumber];
    cards.splice(randomNumber, 1);
    console.log(turn);
};

function dealRiver(){
    let randomNumber = generateRandomNumber();
    let river = cards[randomNumber];
    cards.splice(randomNumber, 1);
    console.log(river);
};