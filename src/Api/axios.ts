// Web
import axios from 'axios';

// const localUrl = 'http://localhost:5001/mock-bd87d/us-central1/api/';
const productionUrl = 'https://us-central1-mock-bd87d.cloudfunctions.net/api';

const instance = axios.create({
  baseURL: productionUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default instance;
