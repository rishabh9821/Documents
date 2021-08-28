var allTabs = document.querySelectorAll("#tabs > ul > li > a");
for (tab of allTabs) {  // can do allTabs.forEach(function) instead
    tab.addEventListener('click', function (event) {
        event.preventDefault();

        for (tabRemove of allTabs) {
            tabRemove.classList.remove('active');
        }
        this.className = "active"
        var thisTab = this.getAttribute('href');
        var thisContent = document.querySelector(thisTab);

        var oldContent = document.querySelector('.visible');
        oldContent.className = 'visuallyhidden';
        oldContent.addEventListener('transitionend', function () {
            oldContent.className = 'hidden';
            thisContent.classList = 'visible visuallyhidden';
            console.log(thisContent)
            setTimeout(function () {
                thisContent.classList.remove('visuallyhidden');
            }, 20);
        }, {capture:false, once:true, passive:false});
        // once means that this event listener is then deleted. Will not go through infinite loop!

        
    })
};
