var prevLink = document.getElementById('previous');
var nextLink = document.getElementById('next'); 

prevLink.addEventListener('click', function (event) {
    var myImage = document.getElementById('myimage');
    var myImgSRC = myImage.src.slice(myImage.src.length - 10);

    if (myImgSRC == 'image1.jpg') {
        newPrevSRC = 'image5.jpg';
    } else {
        var currentNumImage = parseInt(myImgSRC[5])
        newPrevSRC = "image" + (currentNumImage-1) + '.jpg';
    }
    myImage.src = newPrevSRC;
})

nextLink.addEventListener('click', function (event) {
    var myImage = document.getElementById('myimage');
    var myImgSRC = myImage.src.slice(myImage.src.length - 10);

    if (myImgSRC == 'image5.jpg') {
        var newNextSRC = 'image1.jpg';
    } else {
        var currentNumImage = parseInt(myImgSRC[5])
        newNextSRC = "image" + (currentNumImage+1) + '.jpg';
    }
    myImage.src = newNextSRC;
})