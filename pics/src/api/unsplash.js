import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID wuK_R4PkPE4RWRaP3_31FLMKkCcnIAN8HtStaPqlPww',
  },
});
