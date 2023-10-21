/**
 * Creates a Bootstrap img with the submitted image URL
 * @param {string} imageUrl - The URL of the submitted image
 * @param {string} topText - The text needed to be added to the top of the image
 * @param {string} bottomText - The text needed for the bottom of the image
 * @returns {HTMLDivElement} - The created Bootstrap img element
 */

function createMemeImg(imageUrl, topText, bottomText) {
  if (imageUrl === '') return;

  const memeDiv = document.createElement("div");
  memeDiv.className = "position-relative col-lg-4 col-md-6 mx-auto";

  const img = document.createElement("img");
  img.className = "rounded mx-auto d-block";
  img.style.width = "400px";
  img.style.height = "400px";
  img.src = imageUrl;

  const topTextPtag = document.createElement("p");
  topTextPtag.innerText = topText;
  topTextPtag.className = "position-absolute start-50 translate-middle-x text-light fs-1 impact-font";

  const bottomTextPtag = document.createElement("p");
  bottomTextPtag.textContent = bottomText;
  bottomTextPtag.className = 'position-absolute bottom-0 start-50 translate-middle-x text-light fs-1 impact-font';

  memeDiv.appendChild(topTextPtag);
  memeDiv.appendChild(bottomTextPtag);
  memeDiv.appendChild(img);

  addBtnOnHover(memeDiv);

  return memeDiv;
}


// TODO: add delete btn to image on hover

/**
 * Add a hover effect and "X" (delete) button to image containers
 *
 * @param {HTMLDivElement} memeDiv - The image container to add the hover and button
 */

function addBtnOnHover(memeDiv) {
  const deleteBtn = document.createElement("button");

  deleteBtn.className = "position-absolute top-0 end-0 btn btn-danger btn-sm fw-bold rounded-pill d-none";
  deleteBtn.innerText = "X";
  deleteBtn.style.width = '2rem';
  deleteBtn.style.height = '2rem';
  deleteBtn.style.transform = "translate(-100%, 25%)";
  deleteBtn.style.transition = 'opacity .3s';

  memeDiv.addEventListener("mouseenter", () => {
    deleteBtn.classList.remove("d-none");
  });

  memeDiv.addEventListener("mouseleave", () => {
    deleteBtn.classList.add("d-none");
  });

  memeDiv.appendChild(deleteBtn);
}

// TODO: add deletion function

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
  const topText = form.elements.topTextInput.value;
  const bottomText = form.elements.bottomTextInput.value;

  const memeImg = createMemeImg(imageUrl, topText, bottomText);

  const memeContainer = document.getElementById("memeStorage");
  memeContainer.appendChild(memeImg);

  form.reset();
}


// Attach the form submission event handler
const form = document.getElementById("memeForm");
form.addEventListener("submit", handleFormSubmit);