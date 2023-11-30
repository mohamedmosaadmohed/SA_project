function submitForm() {
    alert('Payment successful!');
    return false; 
}

function isValidCardNumber(cardNumber) {
    return /\d{4} \d{4} \d{4} \d{4}/.test(cardNumber);
}

function isValidPhoneNumber(phoneNumber) {
    return /^[0-9]{10,}$/i.test(phoneNumber);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidNameOnCard(nameOnCard) {
    return /^[a-zA-Z\s]+$/.test(nameOnCard);
}

function submitForm() {
    var cardNumber = document.getElementById('cardNumber').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;
    var nameOnCard = document.getElementById('nameOnCard').value;

    document.getElementById('cardNumberError').innerHTML = "";
    document.getElementById('phoneNumberError').innerHTML = "";
    document.getElementById('email').innerHTML = "";
    document.getElementById('nameOnCardError').innerHTML = "";

    var isValid = true;

    if (!isValidCardNumber(cardNumber)) {
        document.getElementById('cardNumberError').innerHTML = "Invalid card number";
        isValid = false;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
        document.getElementById('phoneNumberError').innerHTML = "Invalid phone number";
        isValid = false;
    }

    if (!isValidEmail(email)) {
        document.getElementById('emailError').innerHTML = "Invalid email address";
        isValid = false;
    }

    if (!isValidNameOnCard(nameOnCard)) {
        document.getElementById('nameOnCardError').innerHTML = "Invalid name on card";
        isValid = false;
    }

    if (isValid) {
        alert('Payment successful!');
    }

    return isValid;
}


// Order Summary Functions
function updateTotalPrice() {
    var totalPrice = 0;
    var orderList = document.getElementById('orderList').getElementsByTagName('li');
    for (var i = 0; i < orderList.length; i++) {
        var price = parseFloat(orderList[i].getAttribute('data-price'));
        var quantity = parseInt(orderList[i].getAttribute('data-quantity'));
        totalPrice += price * quantity;
    }
    document.getElementById('totalPrice').innerHTML = '$' + totalPrice.toFixed(2);
}

function decreaseQuantity(itemId) {
    var quantityElement = document.getElementById('quantity' + itemId);
    var currentQuantity = parseInt(quantityElement.innerHTML);
    if (currentQuantity > 1) {
        quantityElement.innerHTML = currentQuantity - 1;
        updateTotalPrice();
    }
}

function increaseQuantity(itemId) {
    var quantityElement = document.getElementById('quantity' + itemId);
    var currentQuantity = parseInt(quantityElement.innerHTML);
    quantityElement.innerHTML = currentQuantity + 1;
    updateTotalPrice();
}

function removeItem(itemId) {
    var item = document.getElementById(itemId);
    item.parentNode.removeChild(item);
    updateTotalPrice();
}

// Initial total price calculation
updateTotalPrice();