// Smoothscroll Script...
$("nav ul li a").click(function (event) {
    const linkClicked = $(this).attr('href');
    const linkTag = this

    $('html, body').stop().animate({
        scrollTop: $(linkClicked).offset().top-180
    },1000, 'easeInQuad', function () {
        $('header nav ul li a').css({
            background:'#9c9c9c', 
            transition: 'all 1s'
        });
        $(linkTag).css({
            background:'#707070', 
            transition:'all 1s'
        }, 700);
    })
})

$(window).on('load', function () {
    var links = document.querySelectorAll('nav ul li a');
    var articles = document.getElementsByTagName('section');
    var articleHeight = [];
    for (article of articles) {
        let newElem = $(article).offset().top - 220;
        articleHeight.push(newElem);
    }
    // console.log(articleHeight)
    
    // var pageTop;
    var postPos;

    $(window).scroll(function () {

        // postPos = $(articles[0]).offset().top - 180;

        pageTop = $(window).scrollTop();
        if (pageTop >= articleHeight[0] && pageTop < articleHeight[1]) {
            $(links).css({
                background:'#9c9c9c', 
                transition: 'all 1s'
            });
            $(links[0]).css({
                background:'#707070', 
                transition: 'all 1s'
            });
        } else if (pageTop >= articleHeight[1] && pageTop < articleHeight[2]) {
            $(links).css({
                background:'#9c9c9c', 
                transition: 'all 1s'
            });
            $(links[1]).css({
                background:'#707070', 
                transition: 'all 1s'
            });
        } else if (pageTop >= articleHeight[2] && pageTop < articleHeight[3]) {
            $(links).css({
                background:'#9c9c9c', 
                transition: 'all 1s'
            });
            $(links[2]).css({
                background:'#707070', 
                transition: 'all 1s'
            });
        } else if (pageTop >= articleHeight[3] && pageTop < articleHeight[4]) {
            $(links).css({
                background:'#9c9c9c', 
                transition: 'all 1s'
            });
            $(links[3]).css({
                background:'#707070', 
                transition: 'all 1s'
            });
        } else if (pageTop >= articleHeight[4]) {
            $(links).css({
                background:'#9c9c9c', 
                transition: 'all 1s'
            });
            $(links[4]).css({
                background:'#707070', 
                transition: 'all 1s'
            });
        }
    });
})


