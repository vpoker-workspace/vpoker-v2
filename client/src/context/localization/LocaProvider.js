import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import LocaContext from './locaContext';

const initialState = localStorage.getItem('lang') || 'en';

const LocaProvider = ({ location, children }) => {
  const [lang, setLang] = useState(initialState);

  useEffect(() => {
    const lang = new URLSearchParams(location.search).get('lang');
    lang && setLang(lang);
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);
    // eslint-disable-next-line
  }, [lang]);

  return (
    <LocaContext.Provider value={{ lang, setLang }}>
      {children}
    </LocaContext.Provider>
  );
};

export default withRouter(LocaProvider);
