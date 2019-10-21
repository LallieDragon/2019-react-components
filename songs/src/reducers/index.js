import { combineReducers } from 'redux';

const songReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'No Diggity', duration: '3:05' },
    { title: 'All Star', duration: '1:45' },
    { title: 'I Want It That Way', duration: '2:55' }
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === "SELECT_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectSong: selectedSongReducer
});
