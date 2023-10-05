const carouselContainer = document.querySelector(".carousel-container");
const carousel = document.querySelector(".carousel");
const carList = document.querySelector(".car-list");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;
const carsData = [
  { name: "Car 1", imageUrl: "car1.png" },
  { name: "Car 2", imageUrl: "car2.png" },
  { name: "Car 3", imageUrl: "car3.png" },
  // Add more cars and image URLs here
];

function showCarousel() {
  carousel.innerHTML = "";
  carsData.forEach((car, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    if (index === currentIndex) {
      slide.classList.add("active");
    }
    const img = document.createElement("img");
    img.src = car.imageUrl;
    img.alt = car.name;
    slide.appendChild(img);
    carousel.appendChild(slide);
  });
}

function showCarList() {
  carList.innerHTML = "";
  carsData.forEach((car, index) => {
    const carItem = document.createElement("div");
    carItem.classList.add("car-item");
    carItem.innerHTML = `
      <img src="${car.imageUrl}" alt="${car.name}">
      <h3>${car.name}</h3>
    `;
    carItem.addEventListener("click", () => {
      currentIndex = index;
      showCarousel();
    });
    carList.appendChild(carItem);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carsData.length;
  showCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + carsData.length) % carsData.length;
  showCarousel();
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

showCarousel();
showCarList();
