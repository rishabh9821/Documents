// Wish List Variables
var destNameInput = document.getElementById('dest-name');
var destLocInput = document.getElementById('dest-location');
var destPhotoUrl = document.getElementById('dest-photo');
var destDescInput = document.getElementById('dest-desc');
var submitButton = document.getElementById('click');

// Div where item will be placed

var wishListDiv = document.getElementById('wishlist-holder');

// Create Event Listener for submission

submitButton.addEventListener('click', function (event) {
   event.preventDefault();
   //Getting all inputted values

   let destInput = destNameInput.value;
   let locInput = destLocInput.value;
   let photoInput = destPhotoUrl.value;
   let descInput = destDescInput.value;



   // Creating elements for each new element


   var destName = document.createElement('h1');
   destName.textContent = destInput;
   

   var locName = document.createElement('h2');
   locName.textContent = locInput;
   
   

   var photoUrl = document.createElement('img');
   photoUrl.style.width = '300px';
   photoUrl.src = photoInput;
   

   var descrip = document.createElement('p');
   descrip.textContent = descInput;
   
   

   // First Removing all previous children from wishListDiv

   while (wishListDiv.hasChildNodes()) {
        wishListDiv.removeChild(wishListDiv.lastChild);
    }
            

   // Then adding all new children
   wishListDiv.appendChild(destName);
   wishListDiv.appendChild(locName);
   wishListDiv.appendChild(photoUrl);
   wishListDiv.appendChild(descrip);
   wishListDiv.style.backgroundColor = '#CBC3E3'





})