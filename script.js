const GITHUB_API_URL = 'https://api.github.com/users/Peobadaro';

async function fetchGitHubData() {
    try {
        const response = await fetch(GITHUB_API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Update the DOM with the fetched data
        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('name').textContent = data.name || 'Pedro Badaró';
        document.getElementById('username').textContent = `@${data.login}`;
        document.getElementById('repos').textContent = data.public_repos;
        document.getElementById('followers').textContent = data.followers;
        document.getElementById('following').textContent = data.following;
        document.getElementById('profile-link').href = data.html_url;
        
    } catch (error) {
        console.error('Error fetching GitHub data:', error);
        document.getElementById('name').textContent = 'Erro ao carregar dados';
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', fetchGitHubData); 