/*=============== SHOW & HIDDEN ===============*/
const sidebar = document.getElementById('sidebar'),
      headerToggle = document.getElementById('header-toggle'),
      sidebarClose = document.getElementById('sidebar-close')

/* Show menu */
if (headerToggle) {
    headerToggle.addEventListener('click', () => {
        sidebar.classList.add('show-sidebar')
    })
}

/* Close menu */
if (sidebarClose) {
    sidebarClose.addEventListener('click', () => {
        sidebar.classList.remove('show-sidebar')
    })
}

/*=============== EXPAND & REDUCE ===============*/
