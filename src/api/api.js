import axios from 'axios';

const TMDB_API_KEY = 'd5fd44215eef00756a68e94999a0527d';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchNowPlaying = async () => {
  try {
    const nowPlayingResponse = await axios.get(
      `${BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}`,
    );

    const genreData = await fetchGenres(); // Fetch genre data

    // Map genre IDs to genre names for each movie
    const nowPlayingWithGenres = nowPlayingResponse.data.results.map(movie => {
      const genreNames = movie.genre_ids.map(id => {
        const genres = genreData.find(genre => genre.id === id);
        return genres ? genres.name : ''; // Return the genre name or an empty string
      });

      return {
        ...movie,
        genres: genreNames,
      };
    });

    return nowPlayingWithGenres;
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    return [];
  }
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`,
    );
    return response.data.genres;
  } catch (error) {
    console.error('Error fetching genre data:', error);
    return [];
  }
};
