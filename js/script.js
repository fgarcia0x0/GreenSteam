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

    modeToggleBtn.addEventListener('click', () => {
        var root = document.documentElement;
        var isDarkMode = root.classList.contains('dark-mode');
        
        if (isDarkMode) {
            icon.className = 'fas fa-moon';
            root.classList.remove('dark-mode');
            contentBody.classList.remove('carousel-dark');
            contentBody.classList.remove('dark-mode');
            cardGame.classList.remove('dark-mode');
        } else {
            icon.className = 'fas fa-sun';
            root.classList.add('dark-mode');
            contentBody.classList.add('carousel-dark');
            contentBody.classList.add('dark-mode');
            cardGame.classList.add('dark-mode');
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

function redirectToGame (gameId)
{
    window.location.href = '../game-page-desc.html?id=' + gameId;
}

document.addEventListener('DOMContentLoaded', () => {
    create_tab_active_event('.full-tab-menu li');
    create_tab_active_event('.gs-tab-menu li');
    create_toggle_theme_event();
    create_slide_carousel_event();
});