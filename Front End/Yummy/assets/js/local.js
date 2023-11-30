let data = [
    { id: 1, Name: "Magnam Tiste", Description: "Lorem, deren, trataro, filede, nerada", Photo: "../assets/imgA/favicon.png", price: "$9.95" },
    { id: 2, Name: "Tiste", Description: "Lorem, deren, trataro, filede, nerada", Photo: "../assets/imgA/favicon.png", price: "$20" }
];

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

    if (photoInput.files.length > 0) {
        var photo = `../assets/${photoInput.files[0].name}`;
        var newObj = { id: data.length + 1, Name: name, Description: description, Photo: photo, price: price };
        data.push(newObj);
        localStorage.setItem("Object", JSON.stringify(data));
        ReadAll();
        // Display success alert
        window.alert("Product added successfully");
    } else {
        // Display error alert
        window.alert("Please select a photo");
    }
}
