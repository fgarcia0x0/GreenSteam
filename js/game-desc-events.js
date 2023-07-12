function game_desc_event ()
{
    // const gameImageElement = document.querySelector('.card-game-image img');
    // const gameTitleElement = document.querySelector('.card-game-title');
    // const gameDescriptionElement = document.querySelector('.card-game-description');
    // const gameDateElement = document.querySelector('.card-game-date');

    // const gameImage = localStorage.getItem('gameImage');
    // const gameTitle = localStorage.getItem('gameTitle');
    // const gameDescription = localStorage.getItem('gameDescription');
    // const gameDate = localStorage.getItem('gameDate');

    // gameImageElement.src = gameImage;
    // gameTitleElement.textContent = gameTitle;
    // gameDateElement.textContent = gameDate;
    // gameDescriptionElement.textContent = gameDescription;
    const gameData = JSON.parse(localStorage.getItem('gameData'));
    console.log(gameData);

    if (gameData) {
        const gameImageElement = document.querySelector('.card-game-image img');
        const gameTitleElement = document.querySelector('.card-game-title');
        const gameDescriptionElement = document.querySelector('.card-game-description');
        const gameDateElement = document.querySelector('.card-game-date');

        const gameId = gameData.gameId;
        const gameImage = gameData.gameImage;
        const gameTitle = gameData.gameTitle;
        const gameDescription = gameData.gameDescription;
        const gameDate = gameData.gameDate;

        gameImageElement.src = gameImage;
        gameTitleElement.textContent = gameTitle;
        gameDateElement.textContent = gameDate;
        gameDescriptionElement.textContent = gameDescription;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    game_desc_event();
});