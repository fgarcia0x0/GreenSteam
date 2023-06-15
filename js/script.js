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

document.addEventListener('DOMContentLoaded', () => {
    create_tab_active_event();
    create_toggle_theme_event();
});