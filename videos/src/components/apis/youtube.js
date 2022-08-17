import axios from 'axios';
import { KEY } from './KEY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'videos',
    maxResults: 5,
    key: KEY,
  },
});
