import axios from 'axios';

const ApiSeries = axios.create({
  baseURL: 'https://api.themoviedb.org/3', 
  headers: {
    Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_URL,
  },
});

export default ApiSeries;
