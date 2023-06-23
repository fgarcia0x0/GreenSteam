function game_desc_event ()
{
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');

    const gameImage = document.querySelector('.card-game-image img');
    const gameTitle = document.querySelector('.card-game-title');
    const gameDescription = document.querySelector('.card-game-description');
    const gameDate = document.querySelector('.card-game-date');

    switch (gameId) 
    {
        case '1':
            gameImage.src = '../assets/covers/the-last-of-us-cover.svg';
            gameTitle.textContent = 'THE LAST OF US';
            gameDescription.textContent = 'The Last of Us é um jogo de ação e aventura que apresenta uma história emocionante em um mundo devastado por uma pandemia. O protagonista, Joel, é contratado para tirar uma garota, Ellie, de uma zona de quarentena militar e essa simples tarefa se transforma em uma jornada brutal através do país. O jogo já ganhou mais de 200 prêmios de Jogo do Ano. Baixe via torrent o Jogo The Last of Us Part I completo para PC.';
            gameDate.textContent = 'Data de Lançamento: 28 mar 2023';
            break;
        case '2':
            gameImage.src = '../assets/covers/red-dead2-cover.svg';
            gameTitle.textContent = 'RED DEAD REDEMPTION 2';
            gameDescription.textContent = 'Estados Unidos, 1899. Arthur Morgan e a gangue Van der Linde são bandidos em fuga. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. Conforme divisões internas profundas ameaçam despedaçar a gangue, Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue que o criou. Baixe via torrent o Jogo Red Dead Redemption 2 completo para PC.';
            gameDate.textContent = 'Data de Lançamento: 5 dez 2019';
            break;
        case '3':
            gameImage.src = '../assets/covers/horizon-cover.svg';
            gameTitle.textContent = 'HORIZON ZERO DAWN';
            gameDescription.textContent = 'Viva a experiência de Aloy dos Nora em sua busca lendária para desvendar os mistérios de um mundo controlado por Máquinas mortais.Exilada da sua tribo, esta jovem caçadora luta para desvendar seu passado, descobrir seu destino… e deter uma catástrofe futura.Lance ataques táticos devastadores contra Máquinas e também tribos rivais, enquanto explora um mundo aberto cheio de vida selvagem e perigos.Horizon Zero Dawn™ é um RPG de aventura e ação vencedor de vários prêmios – e esta Edição Completa inclui a expansão The Frozen Wilds, com novos territórios e novas habilidades, armas e Máquinas.';
            gameDate.textContent = 'Data de Lançamento: 7 ago 2020';
            break;
        case '4':
            gameImage.src = '../assets/covers/assassins-creed-valhalla-cover.svg';
            gameTitle.textContent = 'ASSASSINS CREED VALHALLA';
            gameDescription.textContent = 'Em Assassin’s Creed Valhalla, parta numa missão épica em busca de glória na pele de Eivor, uma lenda viking. Explore a Inglaterra durante a Idade das Trevas e ataque seus inimigos, crie seu povoado e aumente seu poder político. Lidere incursões viking épicas contra fortalezas e soldados saxões e distribua o saque pelo seu povo. Equipe-se com uma arma poderosa em cada mão e sinta na pele o estilo de combate visceral dos vikings. Coloque-se à prova com a série de inimigos mais variada já vista em Assassin’s Creed.';
            gameDate.textContent = 'Data de Lançamento: 10 nov 2020';
            break;
        case '5':
            gameImage.src = '../assets/covers/hogwarts-cover.svg';
            gameTitle.textContent = 'HOGWARTS LEGACY'
            gameDescription.textContent = 'Entre no universo mágico dos livros de Harry Potter e desfrute de uma emocionante jornada por locais familiares e novos enquanto explora e descobre animais fantásticos. Personalize seu personagem, crie poções, domine o lançamento de feitiços e aprimore suas habilidades para se tornar o bruxo que sempre quis ser. Baixe via torrent o Jogo Hogwarts Legacy Deluxe Edition completo para PC.'
            gameDate.textContent = 'Data de Lançamento: 10 fev 2023';
            break;
        case '6':
            gameImage.src = '../assets/covers/re4-remake-cover.svg';
            gameTitle.textContent = 'RESIDENT EVIL 4 REMAKE';
            gameDescription.textContent = 'Ambientado seis anos após a catástrofe biológica em Raccoon City, o jogo segue a jornada de Leon S. Kennedy, um dos poucos sobreviventes do incidente, que segue em busca da filha do presidente que foi sequestrada. O caminho o leva a uma vila europeia isolada, onde ele descobre que algo terrível e misterioso está afetando seus habitantes. Baixe via torrent o Jogo Resident Evil 4 Remake completo para PC.';
            gameDate.textContent = 'Data de Lançamento: 24 mar 2023';
            break;
        default:
            break;

    }
}

document.addEventListener('DOMContentLoaded', () => {
    game_desc_event();
});