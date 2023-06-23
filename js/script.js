function create_tab_active_event(event_tag)
{
    var tabMenus = document.querySelectorAll(event_tag);
    tabMenus.forEach(tab =>
    {
        tab.addEventListener('click', () => 
        {
            tabMenus.forEach(tab => {
                tab.classList.remove('active');
            });

            tab.classList.add('active');
        });
    });
}

function create_toggle_theme_event()
{
    var modeToggleBtn = document.getElementById('theme-toggle');
    var icon = document.getElementById('theme-toggle-icon');
    var contentBody = document.getElementById('content-body');
    var cardGame = document.getElementById('card-game');
    var panelGame = document.getElementById('card-panel');
    var cardGameTitle = document.querySelector('.card-game-title');
    var pairTitles = document.querySelectorAll('.pair-title');
    var pairInfos = document.querySelectorAll('.pair-info');

    modeToggleBtn.addEventListener('click', () => {
        var root = document.documentElement;
        var isDarkMode = root.classList.contains('dark-mode');
        
        if (isDarkMode) {
            icon.className = 'fas fa-moon';
            root.classList.remove('dark-mode');
            contentBody.classList.remove('carousel-dark');
            contentBody.classList.remove('dark-mode');
            cardGame.classList.remove('dark-mode');
            panelGame.classList.remove('dark-mode');
            cardGameTitle.classList.remove('dark-mode');
            pairTitles.forEach(title => title.classList.remove('dark-mode'));
            pairInfos.forEach(info => info.classList.remove('dark-mode'));
        } else {
            icon.className = 'fas fa-sun';
            root.classList.add('dark-mode');
            contentBody.classList.add('carousel-dark');
            contentBody.classList.add('dark-mode');
            cardGame.classList.add('dark-mode');
            panelGame.classList.add('dark-mode');
            cardGameTitle.classList.add('dark-mode');
            pairTitles.forEach(title => title.classList.add('dark-mode'));
            pairInfos.forEach(info => info.classList.add('dark-mode'));
        }
    });
}

function create_slide_carousel_event () 
{
    var carouselIndicators = document.querySelectorAll('.carousel-custom-indicators button');
    var carousel = document.getElementById('carouselExampleIndicators');

    carousel.addEventListener('slide.bs.carousel', function (event) {
        var activeIndex = event.to;
        
        carouselIndicators.forEach( function (indicator, index) {
            if(index == activeIndex) 
                indicator.classList.add('active');
            else
                indicator.classList.remove('active');
        })
    })
}

function create_header_sticky()
{
    window.onscroll = () => {
        // Get the page header
        var page_header = document.getElementById("gs_page_header");
        
        // Get the offset position of the header
        var sticky = page_header.offsetTop;

        if (window.scrollY > sticky)
            page_header.classList.add("gs-sticky");
        else
            page_header.classList.remove("gs-sticky");
    };
}

create_header_sticky();

const imageMapping =
{
    '1': 'the-last-of-us',
    '2': 'red-dead2',
    '3': 'horizon',
    '4': 'assassins-creed-valhalla',
    '5': 'hogwarts',
    '6': 're4-remake'
};

const dateMapping =
{
    '1': '28 mar 2023',
    '2': '5 dez 2019',
    '3': '7 ago 2020',
    '4': '10 nov 2020',
    '5': '10 fev 2023',
    '6': '24 mar 2023',
}

function redirectToGame (card)
{
    const gameId = card.getAttribute('data-id');
    const gameImage = '../assets/covers/' + imageMapping[gameId] + '-cover.svg';
    const gameTitle = card.querySelector('.gs-card-text h1').textContent;
    const gameDescription = card.querySelector('.gs-card-text p').textContent;
    const gameDate = 'Data de Lançamento: ' + dateMapping[gameId];

    localStorage.setItem('gameId', gameId);
    localStorage.setItem('gameImage', gameImage);
    localStorage.setItem('gameTitle', gameTitle);
    localStorage.setItem('gameDescription', gameDescription);
    localStorage.setItem('gameDate', gameDate);

    window.location.href = '../game-page-desc.html';
}

document.addEventListener('DOMContentLoaded', () => {
    create_tab_active_event('.full-tab-menu li');
    create_tab_active_event('.gs-tab-menu li');
    create_toggle_theme_event();
    create_slide_carousel_event();
});