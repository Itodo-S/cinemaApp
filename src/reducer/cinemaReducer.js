export const cinemaReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_NOW_PLAYING':
      return {...state, nowPlaying: action.payload};
    default:
      return state;
  }
};
