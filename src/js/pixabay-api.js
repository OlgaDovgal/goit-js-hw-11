import axios from 'axios';
const apiKey = '51673072-147ff944173cdc3a3c30b0c98';
const apiUrl = 'https://pixabay.com/api';
export function getImagesByQuery(query) {
  return axios
    .get(apiUrl, {
      params: {
        key: apiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Помилка запиту:', error);
      throw error;
    });
}
