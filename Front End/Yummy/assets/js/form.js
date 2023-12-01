/*function Read() {
    // Retrieve existing data from localStorage
    var existingData = JSON.parse(localStorage.getItem("Object")) || [];
  
    // Assuming you have an element with id "displayArea" to display the data
    var displayArea = document.getElementById("displayArea");
  
    // Clear the existing content in the display area
    displayArea.innerHTML ="";
  
    // Iterate through the existing data and update the UI
    existingData.forEach(function(item) {
        var div = document.createElement("div");
        div.innerHTML = "Name: " + item.Name + ", Comment: " + item.comment;
        displayArea.appendChild(div);
    });
  }*/
  function Read(imageUrl) {
    // Retrieve existing data from localStorage
    var existingData = JSON.parse(localStorage.getItem("Object")) || [];
  
    // Assuming you have an element with class "swiper-wrapper" to display the testimonials
    var swiperWrapper = document.querySelector(".swiper-wrapper");
  
    // Clear the existing content in the swiper wrapper
    swiperWrapper.innerHTML = "";
  
    // Iterate through the existing data and update the UI for each testimonial
    existingData.forEach(function (testimonial) {
      var testimonialSlide = document.createElement("div");
      testimonialSlide.className = "swiper-slide";
  
      var testimonialItem = document.createElement("div");
      testimonialItem.className = "testimonial-item";
  
      var row = document.createElement("div");
      row.className = "row gy-4 justify-content-center";
  
      var col1 = document.createElement("div");
      col1.className = "col-lg-6";
  
      var testimonialContent = document.createElement("div");
      testimonialContent.className = "testimonial-content";
  
      var quoteIconLeft = document.createElement("i");
      quoteIconLeft.className = "bi bi-quote quote-icon-left";
  
      var quoteIconRight = document.createElement("i");
      quoteIconRight.className = "bi bi-quote quote-icon-right";
  
      var testimonialText = document.createElement("p");
      testimonialText.innerHTML = "<i class='bi bi-quote quote-icon-left'></i> " + testimonial.comment + " <i class='bi bi-quote quote-icon-right'></i>";
  
      var testimonialAuthor = document.createElement("h3");
      testimonialAuthor.innerHTML = testimonial.namec;
  
      var testimonialRole = document.createElement("h4");
      testimonialRole.innerHTML = "Role Goes Here"; // Replace with actual role if available
  
      var starsDiv = document.createElement("div");
      starsDiv.className = "stars";
  
      for (var i = 0; i < 5; i++) {
        var starIcon = document.createElement("i");
        starIcon.className = "bi bi-star-fill";
        starsDiv.appendChild(starIcon);
      }
  
      testimonialContent.appendChild(quoteIconLeft);
      testimonialContent.appendChild(testimonialText);
      testimonialContent.appendChild(quoteIconRight);
      testimonialContent.appendChild(testimonialAuthor);
      testimonialContent.appendChild(testimonialRole);
      testimonialContent.appendChild(starsDiv);
  
      col1.appendChild(testimonialContent);
  
      var col2 = document.createElement("div");
      col2.className = "col-lg-2 text-center";
  
      var testimonialImg = document.createElement("img");
      testimonialImg.src = imageUrl; // Use the provided image URL
      testimonialImg.className = "img-fluid testimonial-img";
      testimonialImg.alt = "";
  
      col2.appendChild(testimonialImg);
  
      row.appendChild(col1);
      row.appendChild(col2);
  
      testimonialItem.appendChild(row);
      testimonialSlide.appendChild(testimonialItem);
  
      swiperWrapper.appendChild(testimonialSlide);
    });
  }
  
  
  // Call Read() when the page loads to initially display any existing data
  Read();
  
  function Add() {
    var namec = document.getElementById("namec").value;
    var comment = document.getElementById("comment").value;
  
    // Retrieve existing data from localStorage
    var existingData = JSON.parse(localStorage.getItem("Object")) || [];
  
    // Create a new object with the provided data
    var newObj = { namec: namec, comment: comment };
  
    // Add the new object to existing data
    existingData.push(newObj);
  
    // Store the updated array back in localStorage
    localStorage.setItem("Object", JSON.stringify(existingData));
  
    // Call your function to read and display all data (assuming you have it)
    Read();
  }