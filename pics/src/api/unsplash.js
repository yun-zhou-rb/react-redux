import axios from 'axios';

export default axios.create({
  headers: {Authorization: 'Client-ID 172e114ff41f477c6e4f2a777be77a8effeae27a7374bbc01a79d173a9b298a3'},
  baseURL: 'https://api.unsplash.com',
});
