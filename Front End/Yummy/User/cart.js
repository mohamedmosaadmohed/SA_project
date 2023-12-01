// Function to add an image to the favorites list
function addToDynamicList(photoSrc) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    // Add the photo to the favorites list
    if (!favorites.includes(photoSrc)) {
        favorites.push(photoSrc);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

// Function to load and display favorites on a different page
function loadFavorites() {
    const photoListDiv = document.getElementById('photoList');
    photoListDiv.innerHTML = ''; // Clear existing content

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    favorites.forEach(photoSrc => {
        const paragraph = document.createElement("p");

        const image = document.createElement('img');
        image.src = photoSrc;
        image.style = 'width:300px; height:300px;';

        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.onclick = function () { removeFromFavorites(photoSrc, paragraph); };

        paragraph.appendChild(image);
        paragraph.appendChild(removeButton);
        photoListDiv.appendChild(paragraph);
    });
}

// Function to remove an image from favorites
function removeFromFavorites(photoSrc, paragraphElement) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    // Find and remove the image from favorites
    const indexToRemove = favorites.indexOf(photoSrc);
    if (indexToRemove !== -1) {
        favorites.splice(indexToRemove, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    // Remove the paragraph element from the DOM
    if (paragraphElement) {
        paragraphElement.remove();
    }
}