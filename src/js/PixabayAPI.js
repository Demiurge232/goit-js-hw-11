import axios from 'axios';

export async function PixabayAPI(query, page = 1) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '33151516-86a0165a6b4455c1503ffac76';
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${query}&image_type="photo" &orientation="horizontal" &safesearch="true"&page=${page}&per_page=40`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
