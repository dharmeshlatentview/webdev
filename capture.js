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
    localStorage.setItem("userId", userId);
    //const userId = localStorage.getItem("userId");
    console.log("User ID:", userId);
}
  
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
    console.log('User IP address from IP info website:', ipAddress);
    }

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

// Set the user ID cookie when the page loads
setUserIdCookie();
// Call the trackIpAddress() function when the page loads
trackIpAddress();

// Call the functions and store the information in localStorage when the page loads
window.onload = function() {
    const userId = localStorage.getItem("userId");
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

    // Combine all the information in a single JSON structure
    const activityData = {
        userId: userId,
        ipAddress: ipAddress,
        browserInfo: browserInfo,
        screenDimensions: screenDimensions,
        systemInfo: systemInfo,
        timestamp: new Date().toISOString(),
    };

    // Display the JSON structure in the console
    console.log("Activity Data in Json format:", activityData);
};

export function tohit(button_name) {
// Get existing click data from localStorage or initialize an empty array
    let clickData = JSON.parse(localStorage.getItem("clickData")) || [];

    // Collect information about the click event
    const userId = localStorage.getItem("userId");
    const ipAddress = getIpAddress();
    const browserInfo = getBrowserInfo();
    const screenDimensions = getScreenDimensions();
    const systemInfo = getSystemInfo();
    const timestamp = new Date().toISOString();

    // Create an object representing the current click event
    const data = {
    userId: userId,
    ipAddress: ipAddress,
    browserInfo: browserInfo,
    eventhappeed: button_name,
    screenDimensions: screenDimensions,
    systemInfo: systemInfo,
    timestamp: timestamp,}
};
