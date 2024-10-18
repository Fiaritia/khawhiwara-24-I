import axios from 'axios';

// Appel API pour récupérer des données
export const fetchData = async () => {
    try {
        const response = await axios.get('/api/data');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
