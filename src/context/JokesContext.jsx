import React, {createContext, useState, useEffect} from 'react';

import api from '../config/api';

export const JokesContext = createContext();

export const JokesProvider = props => {
  const [categories, setCategories] = useState([]);
  const [currentJoke, setCurrentjoke] = useState(null);

  const getCategories = () => {
    (async () => {
      try {
        let response = await api.get('/categories');
        setCategories(response.data);
      } catch (e) {
        setCategories(['error']);
      }
    })();
  };

  const getRandomJoke = category => {
    (async () => {
      try {
        let response = await api.get(`/random?category=${category}`);
        setCurrentjoke(response.data.value);
        const laughAudio = document.getElementById('laugh');
        laughAudio.play();
      } catch (error) {
        setCurrentjoke('error');
      }
    })();
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <JokesContext.Provider
      value={{
        jokesContext: {currentJoke, categories, getCategories, getRandomJoke},
      }}
    >
      {props.children}
    </JokesContext.Provider>
  );
};
