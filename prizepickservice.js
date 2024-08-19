const axios = require('axios');

const API_BASE_URL = 'https://api.prizepicks.com/'; // Replace with the actual base URL

async function fetchPlayerStats() {
    try {
        const response = await axios.get(`${API_BASE_URL}/v1/players`);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching player stats:', error);
    }
}

fetchPlayerStats();
