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

    // Retrieve existing data from localStorage
    var existingData = JSON.parse(localStorage.getItem("Object")) || [];

    if (photoInput.files.length > 0) {
        var photo = `../assets/img/menu/${photoInput.files[0].name}`;
        var newObj = { id: existingData.length + 1, Name: name, Description: description, Photo: photo, price: price };

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
    var cardContainer = document.getElementById("menuContainer");
    var cardsHTML = "";

    Objectdata.map(record => {
        cardsHTML += `
            <div class="col-lg-4 menu-item">
                <div class="menu-img-container">
                    <a href="item${record.id}.html"><img src="${record.Photo}" class="menu-img img-fluid" alt="Product Photo"></a>
                    <div class="info">
                        <h4>${record.Name}</h4>
                        <p class="ingredients">${record.Description}</p>
                        <p class="price">${record.price}</p>
                    </div>
                </div>
            </div><!-- Menu Item -->
        `;
    });

    cardContainer.innerHTML = cardsHTML;
    
}

 ReadAllcards();
    
   
  

