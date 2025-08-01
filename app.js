// Load all dog breeds and add to the dropdown
async function loadBreeds() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();

    const breeds = Object.keys(data.message);
    const select = document.getElementById('breedSelect');

    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed;
      option.textContent = breed;
      select.appendChild(option);
    });
  } catch (error) {
    console.error('Error loading breeds:', error);
  }
}

// Show a random dog image of the selected breed
async function showDogImage() {
  const breed = document.getElementById('breedSelect').value;
  const imageDiv = document.getElementById('dogImage');

  if (!breed) {
    alert('Please select a breed first!');
    return;
  }

  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const data = await response.json();

    imageDiv.innerHTML = `<img src="${data.message}" alt="${breed}" width="300">`;
  } catch (error) {
    console.error('Error fetching dog image:', error);
    imageDiv.innerHTML = `<p>Something went wrong. Try again.</p>`;
  }
}

// Call loadBreeds when the page loads
window.addEventListener('DOMContentLoaded', loadBreeds);
