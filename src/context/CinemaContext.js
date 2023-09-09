import React, {useContext, useReducer, createContext, useEffect} from 'react';
import {cinemaReducer} from '../reducer/cinemaReducer';
import {fetchNowPlaying} from '../api/api';

const initialState = {
  nowPlaying: [],
};

const CinemaContext = createContext(initialState);

export const CinemaProvider = ({children}) => {
  const [state, dispatch] = useReducer(cinemaReducer, initialState);

  useEffect(() => {
    // Fetch now playing movies and dispatch the data
    const fetchData = async () => {
      const nowPlayingData = await fetchNowPlaying();
      dispatch({type: 'FETCH_NOW_PLAYING', payload: nowPlayingData});
    };

    fetchData();
  }, []); // Run this effect only once when the component mounts

  const value = {
    nowPlaying: state.nowPlaying,
  };

  return (
    <CinemaContext.Provider value={value}>{children}</CinemaContext.Provider>
  );
};

export const useCinema = () => {
  const context = useContext(CinemaContext);
  return context;
};
