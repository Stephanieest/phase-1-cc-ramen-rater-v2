// index.js

const ramenMenu = document.getElementById('ramen-menu')
fetch('http://localhost:3000/ramens')
  .then(res => res.json())
  .then(renderRamens)

function renderRamens(ramens){
  ramens.forEach(renderRamen)
}

function renderRamen(ramen){
  const ramenMenuDiv = document.getElementById("ramen-menu")
  const ramenImage = document.createElement("img")
  ramenImage.src=ramen.image
  ramenMenuDiv.append(ramenImage)

  ramenImage.addEventListener("click", () => ramenHandleClick(ramen))
}





// Callbacks
const handleClick = (ramen) => {
  detailImage.src = ramen.image;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  detailComment.textContent = ramen.comment;
  detailRating.textContent = ramen.rating;
  // Add code
};



const addSubmitListener = () => {
  // Add code
}

const displayRamens = () => {
  
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
