// Add your JS here
$(window).on("load", function () {
    'use strict'

    const imageCount = $("#slider ul li").length;
    const imageWidth = $("#slider ul li img").first().width();
    const imageHeight = $("#slider ul li img").first().height();
    const totalWidth = imageWidth * imageCount + "px";

    let leftPosition = 0;
    let counter = 0;
    
    $("#slider ul").css("width", totalWidth);

    $("#next").click(function () {
        counter = counter + 1;
        if (counter >= imageCount) {
            $("#slider ul").clone().appendTo('#slider');
            $("#slider ul").css('left', imageWidth+'px');
            leftPosition = totalWidth * -1 + "px"
            $('#slider ul').last().animate({left:0}, 700, 'easeInQuad');
            $('#slider ul').first().animate({left:leftPosition}, 700, "easeInQuad", function () {
                $("#slider ul:first").remove()
            })
            counter = 0;
        } else {
            leftPosition = (counter * imageWidth * -1) + "px"
            $("#slider ul").animate({'left':leftPosition}, 700, "easeInQuad")
        }
    });

    $("#previous").click(function () {
        counter = counter - 1
        var leftMostImage = imageCount * imageWidth * -1 + "px"
        var showLeft = (imageCount - 1) * imageWidth * -1 + "px"
        if (counter < 0) {
            $("#slider ul").clone().prependTo("#slider")
            $('#slider ul:first').css('left', leftMostImage);
            $('#slider ul:last').animate({'left':(-imageCount * imageWidth * -1 + 'px')}, 700, "easeInQuad");
            $('#slider ul:first').animate({'left': showLeft}, 700, "easeInQuad", function () {
                $('#slider ul:last').remove();
            });
            counter = imageCount - 1;
        } else {
            leftPosition = (counter * imageWidth * -1) + "px";
            $("#slider ul").animate({"left":leftPosition}, 700, "easeInQuad")
        }
    })
});


