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
    dispatch({type: 'START_LOADING'});

    const fetchData = async () => {
      try {
        const nowPlayingData = await fetchNowPlaying();
        dispatch({type: 'FETCH_NOW_PLAYING', payload: nowPlayingData});
      } catch (error) {
        console.error('Error fetching data:', error);
      }

      dispatch({type: 'END_LOADING'});
    };

    fetchData();
  }, []);

  const value = {
    nowPlaying: state.nowPlaying,
    isLoading: state.isLoading,
  };

  return (
    <CinemaContext.Provider value={value}>{children}</CinemaContext.Provider>
  );
};

export const useCinema = () => {
  const context = useContext(CinemaContext);
  return context;
};
