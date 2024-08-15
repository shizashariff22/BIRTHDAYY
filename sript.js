document.getElementById('wish-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const wish = document.getElementById('wish').value;

    // Create a new div to hold the wish
    const wishContainer = document.createElement('div');
    wishContainer.classList.add('message');

    // Add the content to the new div
    wishContainer.innerHTML = `<h3>From ${name}</h3><p>${wish}</p>`;

    // Get the messages container
    const messagesContainer = document.querySelector('.messages'); // Make sure to query for `.messages`

    // Append the new div to the messages container
    messagesContainer.appendChild(wishContainer);

    // Clear the form after submission
    document.getElementById('wish-form').reset();
});