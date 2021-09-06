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
    
    var pageTop;
    var postPos;
    let counter = 0;

    $(window).scroll(function () {
        postPos = $(articles[counter]).offset().top - 180;
        if (counter < articles.length - 1) {
            let postAheadPos = $(articles[counter + 1]).offset().top - 180;
        } else {
            let postAheadPos = 0;
        }

        if (counter != 0) {
            let postBehindPos = $(articles[counter - 1]).offset().top - 180;
        } else {
            let postBehindPos;
        }
        
        pageTop = $('html, body').scrollTop();
        // console.log(postPos, pageTop)
        if (pageTop > postAheadPos) {
            counter = counter + 1;
        } else if (pageTop < postBehindPos) {
            counter = counter - 1;
        }

        $(articles).css({
            background:'#9c9c9c', 
            transition: 'all 1s'
        });
        $(articles[counter]).css({
            background:'#707070', 
            transition:'all 1s'
        });

    });
})


