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
        <td><button type="button" class="btn btn-primary">Update</button></td>
        <td><button type="button" class="btn btn-danger">Delete</button></td>
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
        alert("Please select a photo");
    }
}

