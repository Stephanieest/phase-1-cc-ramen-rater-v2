// index.js

const ramenMenu = document.getElementById('ramen-menu');
const detailImage = document.querySelector("#ramen-detail .detail-image");
const detailName = document.querySelector("#ramen-detail .name");
const detailRestaurant = document.querySelector("#ramen-detail .restaurant");
const detailRating = document.getElementById("rating-display");
const detailComment = document.getElementById("comment-display");
const newRamenForm = document.getElementById('new-ramen');


// Callbacks
const handleClick = (ramen) => {  
  detailImage.src = ramen.image;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  detailRating.textContent = ramen.rating;
  detailComment.textContent = ramen.comment;
  // Add code
};

const addSubmitListener = () => {
  newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault();}
  // Add code
  )}

const displayRamens = () => {
  fetch('http://localhost:3000/ramens')
  .then(res => res.json())
  .then(renderRamens)

const renderRamens(ramens) => {
  ramens.forEach(renderRamen)
}}

const renderRamen = (ramen) => {
  const ramenImage = document.createElement("img");
  ramenImage.src = ramen.image;
  ramenImage.alt = ramen.name;
  ramenMenu.append(ramenImage);


ramenImage.addEventListener("click", () => handleClick(ramen))


  // Add code
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
