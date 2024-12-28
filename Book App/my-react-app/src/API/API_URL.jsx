import axios from 'axios';
const BASE_URL = 'https://archive.org/';

export const API_URL = async (query, page = 1, rows = 50) => {
  try {
    const response = await axios.get(`${BASE_URL}advancedsearch.php`, {
      params: {
        q: query,
        output: 'json',
        rows: rows,
        page: page,
        fl: ['identifier', 'title', 'creator', 'description', 'year', 'mediatype'],
      }
    });
    return response.data.response.docs;
  } catch (error) {
    console.error('Error searching Internet Archive:', error);
    return [];
  }
};

// export const getItemMetadata = async (identifier) => {
//   try {
//     const response = await axios.get(`${BASE_URL}metadata/${identifier}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching item metadata:', error);
//     return null;
//   }
// };