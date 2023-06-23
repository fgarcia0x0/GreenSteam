function game_desc_event ()
{
    const gameImageElement = document.querySelector('.card-game-image img');
    const gameTitleElement = document.querySelector('.card-game-title');
    const gameDescriptionElement = document.querySelector('.card-game-description');
    const gameDateElement = document.querySelector('.card-game-date');

    const gameId = localStorage.getItem('gameId');
    const gameImage = localStorage.getItem('gameImage');
    const gameTitle = localStorage.getItem('gameTitle');
    const gameDescription = localStorage.getItem('gameDescription');
    const gameDate = localStorage.getItem('gameDate');

    gameImageElement.src = gameImage;
    gameTitleElement.textContent = gameTitle;
    gameDateElement.textContent = gameDate;
    gameDescriptionElement.textContent = gameDescription;
    
}

document.addEventListener('DOMContentLoaded', () => {
    game_desc_event();
});