// Research data array
const researchData = [
    {
        id: 1,
        title: "Analysis of Flood Preparedness in Barangay Tugbungan",
        author: "Juan Dela Cruz",
        date: "March 2024",
        field: "STEM",
        abstract: "This study explores the level of disaster preparedness in Barangay Tugbungan, assessing flood response strategies and mitigation efforts.",
        keywords: ["flood preparedness", "disaster management", "Tugbungan", "mitigation", "response strategies"]
    },
    {
        id: 2,
        title: "The Impact of Digital Marketing Strategies on Small Business Growth",
        author: "Maria Santos",
        date: "January 2023",
        field: "ABM",
        abstract: "This research explores how digital marketing techniques, such as social media advertising and search engine optimization, influence the growth and profitability of small businesses.",
        keywords: ["digital marketing", "small business", "social media", "business growth", "marketing strategies"]
    },
    {
        id: 3,
        title: "The Role of Social Media in Shaping Political Awareness Among Senior High School Students",
        author: "Juan Dela Cruz",
        date: "March 2024",
        field: "HUMMS",
        abstract: "This study examines how social media platforms contribute to students' political awareness, engagement, and perception of governance in the modern era.",
        keywords: ["social media", "political awareness", "students", "governance", "engagement"]
    }
];

// Function to perform the search
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm === '') {
        alert('Please enter a search term');
        return;
    }

    // Store the search term and filtered results
    sessionStorage.setItem('searchTerm', searchTerm);
    
    // Filter research data based on search term
    const filteredResults = researchData.filter(research => {
        return research.title.toLowerCase().includes(searchTerm) ||
               research.author.toLowerCase().includes(searchTerm) ||
               research.field.toLowerCase().includes(searchTerm) ||
               research.abstract.toLowerCase().includes(searchTerm) ||
               research.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm));
    });

    // Store filtered results in sessionStorage
    sessionStorage.setItem('searchResults', JSON.stringify(filteredResults));

    // Redirect to results page
    window.location.href = 'results.html';
}

// Add event listener for Enter key
document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}); 