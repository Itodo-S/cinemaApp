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
    const fetchData = async () => {
      const nowPlayingData = await fetchNowPlaying();
      dispatch({type: 'FETCH_NOW_PLAYING', payload: nowPlayingData});
    };

    fetchData();
  }, []);

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
