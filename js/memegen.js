/**
 * Creates a Bootstrap img with the submitted image URL
 * @param {string} imageUrl - The URL of the submitted image
 * @returns {HTMLDivElement} - The created Bootstrap img element
 */

/*
  TODO: Add topText and bottomText to image
  TODO: make sure that they are positioned correctly on the image
*/

function createMemeImg(imageUrl, topText, bottomText) {
  const div = document.createElement("div");
  div.className = "";
  const img = document.createElement("img");
  img.className = "rounded mx-auto d-block";
  img.src = imageUrl;

  return img;
}

// TODO: add deletion function on hover over image

/**
 * Handles the form submission by creating a meme image and adding it to container
 * Clears form after submission
 *
 * @param {Event} event - The form submission event
 *
 */

function handleFormSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("memeForm");
  const imageUrl = form.elements.urlInput.value;
  const topText = form.elements.topTextInput;
  const bottomText = form.elements.bottomTextInput;

  const memeImg = createMemeImg(imageUrl, topText, bottomText);

  const memeContainer = document.getElementById("memeStorage");
  memeContainer.appendChild(memeImg);

  form.reset();
}


// Attach the form submission event handler
const form = document.getElementById("memeForm");
form.addEventListener("submit", handleFormSubmit);