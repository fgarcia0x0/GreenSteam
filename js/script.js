function create_tab_active_event()
{
    var tabMenus = document.querySelectorAll('.tab-menu li, .full-tab-menu li');
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

    modeToggleBtn.addEventListener('click', () => {
        var root = document.documentElement;
        var isDarkMode = root.classList.contains('dark-mode');

        if (isDarkMode) {
            icon.className = 'fas fa-moon';
            root.classList.remove('dark-mode');
        } else {
            icon.className = 'fas fa-sun';
            root.classList.add('dark-mode');
        }
    });
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

document.addEventListener('DOMContentLoaded', () => {
    create_tab_active_event();
    create_toggle_theme_event();
    create_header_sticky();
});