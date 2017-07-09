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
    'CA',
];

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

function deal(){
    players.forEach(function(player){
        let randomNumber = Math.floor(Math.random() * (cards.length - 1));
        cards.splice(randomNumber, 1);

        let randomNumber2 = Math.floor(Math.random() * (cards.length - 1));
        cards.splice(randomNumber2, 1);

        player.cardOne = cards[randomNumber];
        player.cardTwo = cards[randomNumber2];
    })
    console.log(players);
};