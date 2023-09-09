import axios from 'axios';

const TMDB_API_KEY = 'd5fd44215eef00756a68e94999a0527d';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchNowPlaying = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}`,
    );

    return response.data.results;
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    return [];
  }
};
