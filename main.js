var cards = 
[
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
    'HE',
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
    'SE',
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
    'DE',
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
    'CE',
];

var players = [
    {Name: 'Player 1', cardOne: '', cardTwo: ''}, 
    {Name: 'Player 2', cardOne: '', cardTwo: ''}, 
    {Name: 'Player 3', cardOne: '', cardTwo: ''}, 
    {Name: 'Player 4', cardOne: '', cardTwo: ''}, 
    {Name: 'Player 5', cardOne: '', cardTwo: ''}, 
    {Name: 'Player 6', cardOne: '', cardTwo: ''}
    ];

function deal(){
    players.forEach(function(){
        let randomNumber = Math.random(Math.floor(Math.random() * cards.length))
        this.cardOne = cards[randomNumber];
        this.cardTwo = cards[randomNumber];
    })
};

console.log(players)