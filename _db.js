let games = [
    { id: '1', title: 'Zelda, Breath of the Wild', platform: ['Switch'] },
    { id: '2', title: 'Final Fantasy 7 Remake', platform: ['PS5', 'Xbox'] },
    { id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC'] },
    { id: '4', title: 'Tomb Raider', platform: ['PS5', 'Xbox', 'PC'] },
    { id: '5', title: 'Mario Kart', platform: ['Switch'] }

];

let authors = [
    { id: '1', name: 'mario', verified: true },
    { id: '2', name: 'luigi', verified: false },
    { id: '3', name: 'yoshi', verified: true }
];

let reviews = [
    { id: '1', rating: 7, content: 'lorem ipsum blah', author_id: '1', game_id: '2' },
    { id: '2', rating: 10, content: 'lorem ipsum blah', author_id: '2', game_id: '1' },
    { id: '3', rating: 5, content: 'lorem ipsum blah', author_id: '1', game_id: '3' },
    { id: '4', rating: 8, content: 'lorem ipsum blah', author_id: '2', game_id: '4' },
    { id: '5', rating: 6, content: 'lorem ipsum blah', author_id: '3', game_id: '3' },
    { id: '6', rating: 9, content: 'lorem ipsum blah', author_id: '2', game_id: '5' },
    { id: '7', rating: 8, content: 'lorem ipsum blah', author_id: '3', game_id: '2' }
];

export default { games, reviews, authors };