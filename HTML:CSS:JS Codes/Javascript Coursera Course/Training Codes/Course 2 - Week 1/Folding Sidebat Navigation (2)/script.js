(function () {
    function hideSubmenus() {
        var links = document.querySelectorAll('li ul');
        for (link of links) {
            link.className = 'hide-menu';
        }
    }

    hideSubmenus()
    var linkHolders = document.querySelectorAll('.menulink');
    for (menuLinks of linkHolders) {
        menuLinks.addEventListener('click',function (event) {
            event.preventDefault();
            var thisMenu = this.parentNode.querySelector('ul')
            var allMenus = document.querySelectorAll('aside nav ul li ul');
            if (thisMenu.classList.contains('hide-menu')) {
                hideSubmenus()
                thisMenu.className = 'show-menu'
            } else {
                thisMenu.className = 'hide-menu'
            }
        })
    }
} ())