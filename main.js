// Sample data for demonstration purposes
const researchArchive = [
    { title: "Flood Preparedness in Barangay Tugbungan", description: "An assessment report focused on flood disaster mitigation and response strategies." },
    { title: "Analysis of Philippine Sea Biodiversity", description: "Research on the impact of climate change on marine biodiversity in Philippine waters." },
    { title: "Digital Archive Development for ADZU", description: "A study on creating an accessible research archive for ADZU students and faculty." },
    { title: "Impact of Social Media on Youth Mental Health", description: "Examining the effects of social media on mental health among adolescents." }
];

// Event listener for the search button
document.getElementById("searchButton").addEventListener("click", function() {
    const searchInput = document.getElementById("searchQuery").value.toLowerCase();
    const resultsContainer = document.getElementById("results");

    // Clear previous results
    resultsContainer.innerHTML = "<h3>Search Results</h3>";

    // Filter results
    const filteredResults = researchArchive.filter(item => {
        return searchInput === "" || item.title.toLowerCase().includes(searchInput);
    });

    // Display results
    if (filteredResults.length > 0) {
        filteredResults.forEach(item => {
            const resultItem = document.createElement("div");
            resultItem.className = "result-item";
            resultItem.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML += "<p>No results found. Try a different keyword.</p>";
    }
});

// Event listener for the upload button
document.getElementById("uploadButton").addEventListener("click", function() {
    uploadFile();
});

// Upload file function (simulated, as backend isn't connected)
function uploadFile() {
    const fileInput = document.getElementById("fileUpload");
    if (fileInput.files.length === 0) {
        alert("Please select a file to upload.");
    } else {
        alert("File uploaded successfully!");
        // Here, you would normally send the file to a server.
    }
}

// Notification after 30 minutes
setTimeout(() => {
    alert("Give feedback to the website!");
}, 1800000); // 1800000 ms = 30 minutes

// Function to validate login and redirect if successful
function validateLogin() {
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    const validDomain = "@adzu.edu.ph";

    if (emailInput === "" || passwordInput === "") {
        alert("Please enter both email and password.");
        return;
    }

    if (!emailInput.endsWith(validDomain)) {
        alert("Only ADZU emails are allowed.");
        return;
    }

    // Simulate successful login and store login status
    alert("Login successful!");
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", emailInput);
  
    // Hide the login section and show the upload section
    document.getElementById("login-section").style.display = "none";
    document.getElementById("upload-section").style.display = "block";
}

function validateLogin() {
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    const validDomain = "@adzu.edu.ph";
  
    if (emailInput === "" || passwordInput === "") {
        alert("Please enter both email and password.");
        return;
    }
  
    if (!emailInput.endsWith(validDomain)) {
        alert("Only ADZU emails are allowed.");
        return;
    }
  
    // Simulate successful login and store login status
    alert("Login successful!");
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", emailInput);
  
    // Redirect to the main website (index.html)
    window.location.href = "index.html";
  }
  
