// JavaScript code for IP address tracking
async function getIpAddress() {
  try {
    const response = await fetch('https://ipinfo.io/json');
    const data = await response.json();
    return data.ip || 'Unknown';
  } catch (error) {
    console.error('Error fetching IP address:', error);
    return 'Unknown';
  }
}

async function trackIpAddress() {
  const ipAddress = await getIpAddress();
  console.log('User IP address:', ipAddress);
}

// Call the trackIpAddress() function when the page loads
trackIpAddress();

// Function to get user browser information
function getBrowserInfo() {
  const browserInfo = {
    browserName: navigator.appName,
    browserVersion: navigator.appVersion,
    userAgent: navigator.userAgent,
  };
  return browserInfo;
}

// Function to get screen dimensions
function getScreenDimensions() {
  const screenDimensions = {
    screenWidth: screen.width,
    screenHeight: screen.height,
    screenAvailWidth: screen.availWidth,
    screenAvailHeight: screen.availHeight,
  };
  return screenDimensions;
}

// Function to get user system information
function getSystemInfo() {
  const systemInfo = {
    osName: navigator.platform,
    language: navigator.language,
    cookieEnabled: navigator.cookieEnabled,
    online: navigator.onLine,
    doNotTrack: navigator.doNotTrack,
    connectionType: navigator.connection ? navigator.connection.effectiveType : 'Unknown',
  };
  return systemInfo;
}


// Call the functions and store the information in localStorage when the page loads
window.onload = function() {
  const ipAddress = getIpAddress();
  const browserInfo = getBrowserInfo();
  const screenDimensions = getScreenDimensions();
  const systemInfo = getSystemInfo();

  localStorage.setItem("userIpAddress", ipAddress);
  localStorage.setItem("browserInfo", JSON.stringify(browserInfo));
  localStorage.setItem("screenDimensions", JSON.stringify(screenDimensions));
  localStorage.setItem("systemInfo", JSON.stringify(systemInfo));

  console.log('User IP address:', ipAddress);
  console.log('Browser Information:', browserInfo);
  console.log('Screen Dimensions:', screenDimensions);
  console.log('System Information:', systemInfo);
};


// JavaScript code for capturing user ID cookie and tracking activity
function generateUserId() {
  // Generate a random user ID (you can use a more sophisticated method for this in a real application)
  return 'user_' + Math.random().toString(36).substr(2, 9);
}

function setUserIdCookie() {
  const userId = generateUserId();
  document.cookie = `user_id=${userId}; max-age=2592000; path=/;`;
  // Set the cookie with the name 'user_id', valid for 30 days (30 days * 24 hours * 60 minutes * 60 seconds = 2592000 seconds)
  // The cookie is accessible from the entire website (path=/)
}

function trackActivity(activity) {
  // Here, you can perform various actions to track the user's activity.
  // For this example, we will log the activity to the console.
  console.log(`User activity: ${activity}`);
}

document.getElementById("nextPageBtn").addEventListener("click", () => {
  // Track 'Next Page' button click activity
  trackActivity('Clicked Next Page button');
  // Redirect to the details.html page
  window.location.href = "details.html";
});

document.getElementById("aboutBtn").addEventListener("click", () => {
  // Track 'About Section' button click activity
  trackActivity('Clicked About Section button');
  // Redirect to the about.html page
  window.location.href = "about.html";
});

// Set the user ID cookie when the page loads
setUserIdCookie();

// Retrieve the click count from local storage if available
let clickCount = parseInt(localStorage.getItem("clickCount")) || 0;

// Function to handle button clicks and change color after 3 clicks
function handleButtonClick() {
  clickCount++;
  console.log(`Button clicked ${clickCount} time(s).`);

  // Check if the click count is equal to 3
  if (clickCount === 3) {
    // Change the button color to yellow
    const button = document.getElementById("nextPageBtn");
    button.style.backgroundColor = "yellow";
    console.log("Button color changed to yellow.");
  }

  // Store the updated click count in local storage
  localStorage.setItem("clickCount", clickCount);
}

// Add the click event listener to the button
document.getElementById("nextPageBtn").addEventListener("click", handleButtonClick);

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



function setUserIdCookie() {
  const userId = generateUserId();
  document.cookie = `user_id=${userId}; max-age=2592000; path=/;`;
  // Set the cookie with the name 'user_id', valid for 30 days (30 days * 24 hours * 60 minutes * 60 seconds = 2592000 seconds)
  // The cookie is accessible from the entire website (path=/)

  // Store the user ID in localStorage
  localStorage.setItem("userId", userId);
}

// Retrieve the user ID from localStorage
const userId = localStorage.getItem("userId");
console.log("User ID:", userId);









