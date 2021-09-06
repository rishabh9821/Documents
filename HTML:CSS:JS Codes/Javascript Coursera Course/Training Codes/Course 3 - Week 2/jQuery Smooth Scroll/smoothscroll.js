// Smoothscroll Script...
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
    var articles = document.getElementsByTagName('section');
    var links = $("nav ul li a")
    
    console.log(articles)

    var pageTop;
    var postPos;
    let counter = 0;

    $(window).scroll(function () {
        
        postPos = $(articles[counter]).offset().top - 180;
        pageTop = $('html, body').scrollTop();
        

        

        if (counter < articles.length - 1) {
            var postAheadPos = $(articles[counter + 1]).offset().top - 180;
        } else {
            var postAheadPos = 0;
        }

        if (counter != 0) {
            var postBehindPos = $(articles[counter - 1]).offset().top - 180;
        } else {
            var postBehindPos = -9999;
        }
        
        
        
        if (pageTop > postAheadPos && counter < articles.length - 1 ) {
            counter = counter + 1;
        } else if (pageTop <= postBehindPos) {
            console.log(postBehindPos, pageTop)
            counter = counter - 1;
        }

        $(links).css({
            background:'#9c9c9c', 
            transition: 'all 1s'
        });
        $(links[counter]).css({
            background:'#707070', 
            transition:'all 1s'
        });

    });
})


