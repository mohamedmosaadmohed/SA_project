function ReadAll() {
    var storedData = localStorage.getItem("Object");
    var Objectdata = storedData ? JSON.parse(storedData) : [];
    var table = document.querySelector(".data_table");
    var element = "";
    Objectdata.map(record => (
        element += `<tr>
        <td>${record.id}</td> 
        <td>${record.Name}</td>
        <td>${record.Description}</td>
        <td><img src="${record.Photo}" alt="Product Photo" style="width: 40px;"></td>
        <td>${record.price}</td>
        <td>${record.category}</td>
        <td><button type="button" class="btn btn-primary" onclick={update(${record.id})}>Update</button></td>
        <td><button type="button" class="btn btn-danger" onclick={Delete(${record.id})}>Delete</button></td>
    </tr>`
    ))
    table.innerHTML = element;
} 

function Add() {
    var name = document.getElementById("nameInput").value;
    var description = document.getElementById("descriptionInput").value;
    var photoInput = document.getElementById("inputPhoto");
    var price = document.getElementById("priceInput").value;
    var category = document.getElementById("categoryInput").value;

    // Retrieve existing data from localStorage
    var existingData = JSON.parse(localStorage.getItem("Object")) || [];

    if (photoInput.files.length > 0) {
        var photo = `../assets/img/menu/${photoInput.files[0].name}`;
        var newObj = { id: existingData.length + 1, Name: name, Description: description, Photo: photo, price: price, category: category  };

        // Add the new data to existing data
        existingData.push(newObj);

        // Store the updated array back in localStorage
        localStorage.setItem("Object", JSON.stringify(existingData));
        alert("Product added successfully");
        
        ReadAll();
        
        location.href = "tables-general.html";

    } else {
        alert("Not added");
    }
}


function update(id) {
    var existingData = JSON.parse(localStorage.getItem("Object")) || [];
    var recordToUpdate = existingData.find(record => record.id === id);

    if (recordToUpdate) {
        // Prompt the user for updated information
        var newName = prompt("Enter updated name:", recordToUpdate.Name);
        var newDescription = prompt("Enter updated description:", recordToUpdate.Description);
        var newPrice = prompt("Enter updated price:", recordToUpdate.price);

        // Ask if the user wants to update the photo
        var updatePhoto = confirm("Do you want to update the photo?");
        var newPhoto;
        if (updatePhoto) {
            // Get the new photo URL
            newPhoto = prompt("Enter updated photo URL:", recordToUpdate.Photo);
        }

        // Ask if the user wants to update the category
        var updateCategory = confirm("Do you want to update the category?");
        var newCategory;
        if (updateCategory) {
            // Get the new category
            newCategory = prompt("Enter category (breakfast, lunch, dinner):", recordToUpdate.category);
            // Validate the new category
            while (!["breakfast", "lunch", "dinner"].includes(newCategory.toLowerCase())) {
                newCategory = prompt("Invalid category. Enter category (breakfast, lunch, dinner):", recordToUpdate.category);
            }
        }

        // Update the record with the new information
        recordToUpdate.Name = newName || recordToUpdate.Name;
        recordToUpdate.Description = newDescription || recordToUpdate.Description;
        recordToUpdate.price = newPrice || recordToUpdate.price;
        recordToUpdate.Photo = newPhoto || recordToUpdate.Photo;
        recordToUpdate.category = newCategory || recordToUpdate.category;

        // Store the updated array back in localStorage
        localStorage.setItem("Object", JSON.stringify(existingData));

        // Refresh the view
        ReadAll();
    } else {
        alert("Product not found for update.");
    }
}



function Delete(id) {
    var confirmation = confirm("Are you sure you want to delete this product?");
    
    if (confirmation) {
        // Retrieve existing data from localStorage
        var existingData = JSON.parse(localStorage.getItem("Object")) || [];

        // Filter out the record with the specified ID
        var updatedData = existingData.filter(record => record.id !== id);

        // Store the updated array back in localStorage
        localStorage.setItem("Object", JSON.stringify(updatedData));
        ReadAll();
    }
}



function ReadAllcards() {
    var storedData = localStorage.getItem("Object");
    var Objectdata = storedData ? JSON.parse(storedData) : [];

    Objectdata.forEach(record => {
        var categoryValue = record.category;
        var cardContainer = document.getElementById(categoryValue);
        var allContainer = document.getElementById('all')
        if (cardContainer) {
           
            
            var cardsHTML = `
                <div class="col-lg-4 menu-item">
                    <div class="menu-img-container">
                        <img src="${record.Photo}" class="menu-img img-fluid" alt="Product Photo"></a>
                        <div class="info">
                            <h4>${record.Name}</h4>
                            <p class="ingredients">${record.Description}</p>
                            <p class="price">${record.price}</p>
                            <a href="cart.html" target="_blank"><button onclick="addToDynamicList('${record.Photo}')">Add to Cart</button> </a>
                        </div>
                    </div>
                </div><!-- Menu Item -->
            `;

            cardContainer.innerHTML += cardsHTML;
            allContainer.innerHTML += cardsHTML;
        } 
    });
    
    
    

    
}


ReadAllcards();
    
   
  

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
