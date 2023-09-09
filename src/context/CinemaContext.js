import React, {useContext, useReducer, createContext} from 'react';

const initialState = {
  nowPlaying: [],
};

const CinemaContext = createContext(initialState);

export const CinemaProvider = ({children}) => {
  //   const [state, dispatch] = useReducer(_, initialState);

  const value = {
    nowPlaying: [],
  };

  return (
    <CinemaContext.Provider value={value}>{children}</CinemaContext.Provider>
  );
};

export const useCinema = () => {
  const context = useContext(CinemaContext);
  return context;
};
