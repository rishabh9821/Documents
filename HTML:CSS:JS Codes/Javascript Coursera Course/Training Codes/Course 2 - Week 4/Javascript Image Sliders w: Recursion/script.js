var contentHolder = document.querySelector('#slider-wrapper ul');
var sliderDiv = document.querySelector('#slider-wrapper');
var nextButton = document.querySelector('#next');
var prevButton = document.querySelector('#prev');
var autoButton = document.querySelector('#auto');
var counter = 0;
var imageTags = document.querySelector('#slider-wrapper ul li');
var imageWidth = imageTags.offsetWidth;
var numImages = contentHolder.offsetWidth / imageWidth;
var start = false;


nextButton.addEventListener('click', function () {
    if (counter < (numImages - 1)) {
        let contentHolder = document.querySelector('#slider-wrapper ul')
        counter = counter + 1;
        let newLeftPos = (counter * imageWidth * -1) + "px";
        contentHolder.style.left  = newLeftPos;
    } else {
        counter = counter + 1;
        let cloneHolder = contentHolder.cloneNode(true);
        cloneHolder.style.left = imageWidth + 'px'
        sliderDiv.appendChild(cloneHolder)
        contentHolder.style.left = (counter * imageWidth * -1) + "px";
        setTimeout(function () {
            cloneHolder.style.left = (0 * imageWidth * -1) + "px";
        
            let firstHolder = document.querySelector('#slider-wrapper ul');
            firstHolder.remove()
            counter = 0;
        }, 50)
        
    }
});

prevButton.addEventListener('click', function () {
    if (counter > 0) {
        let contentHolder = document.querySelector('#slider-wrapper ul')
        counter = counter - 1;
        let newLeftPos = (counter * imageWidth * -1) + "px";
        contentHolder.style.left = newLeftPos;
    } else {
        counter = counter - 1;
        let cloneHolder = contentHolder.cloneNode(true);
        cloneHolder.style.left = (imageWidth * numImages * -1) + 'px'
        sliderDiv.prepend(cloneHolder)
        contentHolder.style.left = (imageWidth) + "px"
        setTimeout(function () {
            cloneHolder.style.left = ((numImages - 1) * imageWidth * -1) + "px";
            let secondHolder = document.querySelectorAll('#slider-wrapper ul')[1];
            secondHolder.remove()
            counter = numImages;
        }, 50)
        counter = numImages - 1
    }  
});

function addSlide(counter) {
    console.log(counter);
    
        if (counter < (numImages - 1)) {
            setTimeout(function () {
                let contentHolder = document.querySelector('#slider-wrapper ul')
                counter = counter + 1;
                let newLeftPos = (counter * imageWidth * -1) + "px";
                contentHolder.style.left  = newLeftPos;
                addSlide(counter)
            }, 5000);
        } else {
            setTimeout(function () {
                counter = counter + 1;
                let cloneHolder = contentHolder.cloneNode(true);
                cloneHolder.style.left = imageWidth + 'px'
                sliderDiv.appendChild(cloneHolder)
                contentHolder.style.left = (counter * imageWidth * -1) + "px";
                setTimeout(function () {
                    cloneHolder.style.left = (0 * imageWidth * -1) + "px";
                
                    let firstHolder = document.querySelector('#slider-wrapper ul');
                    firstHolder.remove()
                    counter = 0;
                }, 50)
                addSlide(counter)
            }, 5000)
            
            
        }
    }

addSlide(counter)
