// Fetch the breed list on page load
fetch('https://dog.ceo/api/breeds/list/all')
  .then(res => res.json())
  .then(data => {
    const breeds = Object.keys(data.message);
    const select = document.getElementById('breedSelect');

    // Add each breed to the dropdown
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed;
      option.textContent = breed;
      select.appendChild(option);
    });
  })
  .catch(err => console.error('Error fetching breeds:', err));

// Function to show dog image
function showDogImage() {
  const breed = document.getElementById('breedSelect').value;
  if (!breed) {
    alert('Please select a breed first!');
    return;
  }

  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('dogImage').innerHTML = `
        <img src="${data.message}" alt="${breed}">
      `;
    })
    .catch(err => console.error('Error fetching dog image:', err));
}