import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'How Long', duration: '3:19' },
    { title: 'Amaranthine', duration: '3:30' },
    { title: 'The Trooper', duration: '4:13' },
    { title: 'Fear of the Dark', duration: '7:18' },
    { title: 'Run to the Hills', duration: '3:54' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
