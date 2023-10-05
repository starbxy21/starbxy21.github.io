document.addEventListener("DOMContentLoaded", function() {
    fetchCarPictures();
});

function fetchCarPictures() {
    // Simulate fetching car pictures from the server
    const carPictures = [
        "car1.png",
        "car2.png",
        "car3.png",
        // Add more image URLs here
    ];
    
    const carGallery = document.querySelector("#car-gallery");
    
    carPictures.forEach(function(picture) {
        const imgElement = document.createElement("img");
        imgElement.src = "car-images/" + picture;
        imgElement.alt = "Car Picture";
        
        carGallery.appendChild(imgElement);
    });
}