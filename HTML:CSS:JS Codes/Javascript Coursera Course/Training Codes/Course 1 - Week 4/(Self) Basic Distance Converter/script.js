var myInput = document.getElementById('miles');
var submitBtn = document.getElementById('conv-dist');
var invisibleOutput = document.getElementById('output-cont').children[0]

submitBtn.addEventListener('click', function () {
    var userInput = myInput.value;
    userInput = parseFloat(userInput);
    if (!(isNaN(userInput))) {
        invisibleOutput.textContent = userInput + " miles corresponds to " + (userInput*1.60934).toFixed(2) + " kilometers";
        invisibleOutput.style.color = 'black'
    } else {
        invisibleOutput.textContent = "The input you've put in is not a valid input"
        invisibleOutput.style.color = 'black'
    }

})