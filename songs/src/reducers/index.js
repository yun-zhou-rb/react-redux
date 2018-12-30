import {combineReducers} from 'redux';

const songsReducer = () => {
  return [
    {title: 'No scrubs', duration: '4:05'},
    {title: 'Undone – The Sweater Song', duration: '3:05'},
    {title: 'Killing Me Softly', duration: '2:31'},
    {title: 'Fantasy', duration: '1:45'},
    {title: 'No Loaded', duration: '3:03'},
    {title: 'My Sister)', duration: '2:13'},
    {title: 'All That She Wants', duration: '1:16'},
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});