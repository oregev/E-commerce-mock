// Web
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/mock-bd87d/us-central1/api/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default instance;
