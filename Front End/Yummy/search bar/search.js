let products = {
    data: [
      {
        productName: "Chicken and vegetables",
        category: "Topwear",
        price: "30",
        image: "menu-item-1.png",
      },
      {
        productName: "salat and hot sause",
        category: "Bottomwear",
        price: "49",
        image: "menu-item-2.png",
      },
      {
        productName: "spagetti with nuts",
        category: "Watch",
        price: "99",
        image: "menu-item-3.png",
      },
      {
        productName: "salat with onions and olives",
        category: "Topwear",
        price: "29",
        image: "menu-item-4.png",
      },
      {
        productName: "meat with sause",
        category: "Jacket",
        price: "129",
        image: "menu-item-5.png",
      },
      {
        productName: "salat with mozzarella cheese",
        category: "Bottomwear",
        price: "89",
        image: "menu-item-6.png",
      },
      {
        productName: "meat with motatos",
        category: "Jacket",
        price: "189",
        image: "hero.png",
      },
      {
        productName: "steak",
        category: "Bottomwear",
        price: "49",
        image: "bg-hero.jpg",
      },
      {
        productName: "steak with fruits",
        category: "Bottomwear",
        price: "49",
        image: "about-4.jpg",
      },

    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }


  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  let initialProducts = products.data.slice();

// ... (your existing code)

// Search button click
document.getElementById("search").addEventListener("click", () => {
  // Initializations
  let searchInput = document.getElementById("search-input").value.trim().toUpperCase();
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  // If search input is empty
  if (searchInput === "") {
    filterProduct("all"); // Display all products again
    return;
  }

  // Loop through all elements
  elements.forEach((element, index) => {
    // Check if text includes the search value
    if (element.innerText.toUpperCase().includes(searchInput)) {
      // Display matching card
      cards[index].classList.remove("hide");
    } else {
      // Hide others
      cards[index].classList.add("hide");
    }
  });
});

// Clear search input and display all products again
document.getElementById("search-input").addEventListener("input", () => {
  let searchInput = document.getElementById("search-input").value.trim().toUpperCase();

  if (searchInput === "") {
    filterProduct("all"); // Display all products again
  }
});
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };