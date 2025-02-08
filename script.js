// URL to fetch fake users from JsonPlaceHolder API
const apiUrl = `https://jsonplaceholder.typicode.com/users`;

// Reference to the container where user cards will be displayed
const userContainer = document.getElementById("jsonPlaceHolder");

// Asynchronous function to fetch fake users
async function fetchUsers() {

    // Fetch data from the API
    const response = await fetch(apiUrl);

    // Parse the response JSON into a JavaScript object
    const data = await response.json();

    // Print response to console
    console.log(data);

    // Iterate through each users from the response
    data.forEach(user => {

        // Create a user card for the current item
        const userCard = createUserCard(user);

        console.log(25, userCard)

        // Append the user card to the container in the DOM
        userContainer.appendChild(userCard);
    });

}

// Function to create a card element for each user
function createUserCard(user) {
    // Get user's name
    const name = user.name;
    const email = user.email;

    // Create a new div element for the user card
    const userCard = document.createElement("div");

    // Set the inner HTML of the card
    // Add a css class named "user_name"
    // Dynamically insert the user's name into the HTML
    userCard.innerHTML = `
        <div class = "user_name">${name} - ${email} </div>
    `;

    // Return the created card element
    return userCard;
}

// Call the function to fetch and display users when the script is executed
fetchUsers();
