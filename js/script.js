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

document.addEventListener('DOMContentLoaded', () => {
    create_tab_active_event();
});