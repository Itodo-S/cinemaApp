export const cinemaReducer = (state, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return {...state, isLoading: true};
    case 'END_LOADING':
      return {...state, isLoading: false};
    case 'FETCH_NOW_PLAYING':
      return {...state, nowPlaying: action.payload};
    default:
      return state;
  }
};
