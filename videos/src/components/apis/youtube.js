import axios from 'axios';

const KEY = 'AIzaSyAc4D0FfjDDL1VwpB_YJOJQaVGJfN_33q8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'videos',
    maxResults: 5,
    key: KEY,
  },
});
