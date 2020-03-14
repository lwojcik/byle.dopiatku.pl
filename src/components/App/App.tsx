import React from 'react';
import { setTranslations, setLocale } from 'react-i18nify';
import translations from '../../l18n/translations';
import Calendar from '../Calendar/Calendar';
import './App.module.scss';

const language = process.env.REACT_APP_LANGUAGE || 'en';

setTranslations(translations);
setLocale(language);

const App = () => (
  <div className="App">
    <Calendar
      year={2020}
      month={1}
      day={13}
      firstFriday={3}
    />
  </div>
);

export default App;
