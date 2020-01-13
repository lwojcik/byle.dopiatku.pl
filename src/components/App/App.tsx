import React from 'react';
import Calendar from '../Calendar/Calendar';
import './App.module.scss';

const App = () => {
  return (
    <div className="App">
      <Calendar
        year={2020}
        month={1}
        day={13}
        firstFriday={3}
      />
    </div>
  );
}

export default App;
