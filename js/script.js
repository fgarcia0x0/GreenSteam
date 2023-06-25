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

function OnThemeChanged(theme)
{
    let root = document.documentElement;
    let icon = document.getElementById('theme-toggle-icon');
    let contentBody = document.getElementById('content-body');
    let cardGame = document.getElementById('card-game');
    let panelGame = document.getElementById('card-panel');
    let cardGameTitle = document.querySelector('.card-game-title');
    let pairTitles = document.querySelectorAll('.pair-title');
    let pairInfos = document.querySelectorAll('.pair-info');

    if (theme == 'dark') 
    {
        icon.className = 'fas fa-moon';
        root.classList.remove('dark-mode');
        contentBody.classList.remove('carousel-dark');
        contentBody.classList.remove('dark-mode');
        cardGame.classList.remove('dark-mode');
        panelGame.classList.remove('dark-mode');
        cardGameTitle.classList.remove('dark-mode');
        pairTitles.forEach(title => title.classList.remove('dark-mode'));
        pairInfos.forEach(info => info.classList.remove('dark-mode'));
    } 
    else
    {
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
}

function create_toggle_theme_event()
{
    let modeToggleBtn = document.getElementById('theme-toggle');
    
    // Check theme preference from localStorage on page load
    window.addEventListener('load', () => 
    {
        let theme = localStorage.getItem('theme');

        if (theme === 'dark')
            OnThemeChanged('dark');
        else
            OnThemeChanged('light');
    });

    window.addEventListener('unload', () => {
        let root = document.documentElement;
        let isDarkMode = root.classList.contains('dark-mode');
        localStorage.setItem("theme", isDarkMode ? "light" : "dark");
    });

    modeToggleBtn.addEventListener('click', () => {
        let root = document.documentElement;
        let isDarkMode = root.classList.contains('dark-mode');

        if (isDarkMode)
            OnThemeChanged('dark');
        else
            OnThemeChanged('light');
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
    '3': 'street-fighter6',
    '4': 'assassins-creed-valhalla',
    '5': 'hogwarts',
    '6': 're4-remake',
    '7': 'f1-22',
    '8': 'forza-horizon5',
    '9': 'moto-gp23',
    '10': 'wrc10',
    '11': 'sprint-car',
    '12': 'airport-simulator19',
    '13': 'barista-simulator',
    '14': 'bus-simulator21',
    '15': 'dealership-simulator',
    '16': 'metro-simulator2'
};

const dateMapping =
{
    '1': '28 mar 2023',
    '2': '5 dez 2019',
    '3': '7 ago 2020',
    '4': '10 nov 2020',
    '5': '10 fev 2023',
    '6': '24 mar 2023',
    '7': '1 jul 2022',
    '8': '9 nov 2021',
    '9': '8 jun 2023',
    '10': '2 set 2021',
    '11': '21 fev 2020',
    '12': '31 mai 2018',
    '13': '20 mai 2023',
    '14': '7 set 2021',
    '15': '2 jun 2023',
    '16': '14 jun 2023'
}

function redirectToGame (card)
{
    const gameId = card.getAttribute('data-id');
    const gameImage = './assets/covers/' + imageMapping[gameId] + '-cover.svg';
    const gameTitle = card.querySelector('.gs-card-text h1').textContent;
    const gameDescription = card.querySelector('.gs-card-text p').textContent;
    const gameDate = 'Data de Lançamento: ' + dateMapping[gameId];

    localStorage.setItem('gameId', gameId);
    localStorage.setItem('gameImage', gameImage);
    localStorage.setItem('gameTitle', gameTitle);
    localStorage.setItem('gameDescription', gameDescription);
    localStorage.setItem('gameDate', gameDate);

    window.location.href = './game-page-desc.html';
}

document.addEventListener('DOMContentLoaded', () => {
    create_tab_active_event('.full-tab-menu li');
    create_tab_active_event('.gs-tab-menu li');
    create_toggle_theme_event();
    create_slide_carousel_event();
});