import axios from 'axios';

const URL = 'http://api.giphy.com/v1/gifs/';
const KEY = 'aUhPqNQX1V9W5wSNJ9J0FOaQdvwgHH7O';

export const fetchRandomGif = async (name) => {
  const { data } = await axios.get(URL + 'random', {
    params: {
      tag: name,
      api_key: KEY
    }
   });

  return data;
};

export const fetchTrendingGifs = async () => {
  const { data } = await axios.get(URL + 'trending', {
    params: {
      limit: 4,
      api_key: KEY
    }
  });

  return data
};
