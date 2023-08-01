// function trackActivity(activity) {
//   // Here, you can perform various actions to track the user's activity.
//   // For this example, we will log the activity to the console.
//   console.log(`User activity: ${activity}`);
// }
import { tohit } from 'capture.js';

// Now you can use myFunction in this file
//myFunction();

document.getElementById("nextPageBtn").addEventListener("click", () => {
  // Track 'Next Page' button click activity
  trackActivity('Clicked next Page button');
  // Redirect to the details.html page
  window.location.href = "details.html";
  tohit(nextPageBtn)
});

document.getElementById("aboutBtn").addEventListener("click", () => {
  // Track 'About Section' button click activity
  trackActivity('Clicked About Section button');
  // Redirect to the about.html page
  window.location.href = "about.html";
  tohit(aboutBtn)
});



// Add the click event data to the clickData array
clickData.push(data);

// Store the updated clickData back in localStorage
localStorage.setItem("clickData", JSON.stringify(clickData));

// Display the click event data in the console
console.log("Activity happened:", data);

const clickData = JSON.parse(localStorage.getItem("clickData"));
console.log("Click history:", clickData);
// // Retrieve the click count from local storage if available
// let clickCount = parseInt(localStorage.getItem("clickCount")) || 0;

// // Function to handle button clicks and change color after 3 clicks
// function handleButtonClick() {
//   clickCount++;
//   console.log(`Button clicked ${clickCount} time(s).`);

//   // Check if the click count is equal to 3
//   if (clickCount === 3) {
//     // Change the button color to yellow
//     const button = document.getElementById("nextPageBtn");
//     button.style.backgroundColor = "yellow";
//     console.log("Button color changed to yellow.");
//   }

//   // Store the updated click count in local storage
//   localStorage.setItem("clickCount", clickCount);
// }

// // Add the click event listener to the button
// document.getElementById("nextPageBtn").addEventListener("click", handleButtonClick);

// Add a global click event listener to count clicks across the whole webpage
document.addEventListener("click", () => {
  clickCount++;
  console.log(`Click count across the webpage: ${clickCount}`);
  localStorage.setItem("clickCount", clickCount);

  // Check if the click count is equal to 3
  if (clickCount === 3) {
    // Change the button color to yellow
    const button = document.getElementById("nextPageBtn");
    button.style.backgroundColor = "yellow";
    console.log("Button color changed to yellow.");
  }
});



function trackActivity(activity) {
  // Get the current timestamp
  const timestamp = new Date().toISOString();

  // Get the existing activity data from local storage or initialize an empty array if it doesn't exist
  const existingActivityData = JSON.parse(localStorage.getItem('activityData')) || [];

  // Push the new activity data to the array
  existingActivityData.push({ timestamp, activity });

  // Store the updated activity data in local storage
  localStorage.setItem('activityData', JSON.stringify(existingActivityData));

  // Here, you can perform various actions to track the user's activity.
  // For this example, we will log the activity to the console.
  console.log(`User activity: ${activity}`);
}

function prepareDataToSend() {
  // Retrieve the click count from local storage if available
  let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;

  // Retrieve the user ID from local storage
  const userId = localStorage.getItem('userId');

  // Retrieve the activity data from local storage
  const activityData = JSON.parse(localStorage.getItem('activityData')) || [];

  // Prepare the data object to send to the server
  const dataToSend = {
    userId,
    clickCount,
    activityData,
  };

  return dataToSend;
}

prepareDataToSend()
// Function to send data to the server
// async function sendDataToServer(data) {
//   try {
//     const response = await fetch('https://your-server-endpoint', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     const responseData = await response.json();
//     console.log('Server response:', responseData);
//   } catch (error) {
//     console.error('Error sending data to the server:', error);
//   }
// }


// Example usage: Whenever you want to send the data to the server (e.g., before page navigation)
// const dataToSend = prepareDataToSend();
// sendDataToServer(dataToSend);











