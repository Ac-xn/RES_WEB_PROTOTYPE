document.addEventListener('DOMContentLoaded', function() {
    // Get search results from sessionStorage
    const searchResults = JSON.parse(sessionStorage.getItem('searchResults')) || [];
    const searchTerm = sessionStorage.getItem('searchTerm') || '';

    // Update search input with the search term
    document.getElementById('searchQuery').value = searchTerm;

    // Get the results container
    const resultsContainer = document.querySelector('.results-container');

    // Clear existing results
    resultsContainer.innerHTML = '';

    // Add the heading
    const heading = document.createElement('h2');
    heading.textContent = `Search Results for "${searchTerm}"`;
    resultsContainer.appendChild(heading);

    if (searchResults.length === 0) {
        // Display no results message
        const noResults = document.createElement('div');
        noResults.className = 'no-results-message';
        noResults.innerHTML = 'No research papers found matching your search.';
        resultsContainer.appendChild(noResults);
    } else {
        // Display each result
        searchResults.forEach(research => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <h3><a href="research-detail.html" onclick="viewResearch(${research.id})">${research.title}</a></h3>
                <p>Author: ${research.author}</p>
                <p>Published: ${research.date}</p>
                <p>Field: ${research.field}</p>
                <p>${research.abstract}</p>
                <a href="#" class="download-link" onclick="viewResearch(${research.id}); return false;">View PDF</a>
            `;
            resultsContainer.appendChild(resultItem);
        });
    }

    // Add event listener for Enter key in search box
    document.getElementById('searchQuery').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performNewSearch();
        }
    });
});

// Function to perform new search from results page
function performNewSearch() {
    const searchTerm = document.getElementById('searchQuery').value.trim().toLowerCase();
    
    if (searchTerm === '') {
        alert('Please enter a search term');
        return;
    }

    // Filter research data based on new search term
    const filteredResults = researchData.filter(research => {
        return research.title.toLowerCase().includes(searchTerm) ||
               research.author.toLowerCase().includes(searchTerm) ||
               research.field.toLowerCase().includes(searchTerm) ||
               research.abstract.toLowerCase().includes(searchTerm) ||
               research.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm));
    });

    // Store new results in sessionStorage
    sessionStorage.setItem('searchTerm', searchTerm);
    sessionStorage.setItem('searchResults', JSON.stringify(filteredResults));

    // Update the results container
    const resultsContainer = document.querySelector('.results-container');
    resultsContainer.innerHTML = '';

    // Add the heading
    const heading = document.createElement('h2');
    heading.textContent = `Search Results for "${searchTerm}"`;
    resultsContainer.appendChild(heading);

    if (filteredResults.length === 0) {
        // Display no results message
        const noResults = document.createElement('div');
        noResults.className = 'no-results-message';
        noResults.innerHTML = 'No research papers found matching your search.';
        resultsContainer.appendChild(noResults);
    } else {
        // Display each result
        filteredResults.forEach(research => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <h3><a href="research-detail.html" onclick="viewResearch(${research.id})">${research.title}</a></h3>
                <p>Author: ${research.author}</p>
                <p>Published: ${research.date}</p>
                <p>Field: ${research.field}</p>
                <p>${research.abstract}</p>
                <a href="#" class="download-link" onclick="viewResearch(${research.id}); return false;">View PDF</a>
            `;
            resultsContainer.appendChild(resultItem);
        });
    }
}

// Function to store research data and redirect to detail page
function viewResearch(id) {
    // Get the research data from search results
    const searchResults = JSON.parse(sessionStorage.getItem('searchResults')) || [];
    const research = searchResults.find(r => r.id === id);
    
    if (research) {
        // Store the selected research data
        sessionStorage.setItem('researchData', JSON.stringify(research));
        window.location.href = 'research-detail.html';
    }
}

