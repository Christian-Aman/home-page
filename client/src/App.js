import React from 'react';
import Date from './components/Date';
import TodayInHistory from './components/TodayInHistory';
import PictureOfTheDay from './components/PictureOfTheDay';
import QuoteOfTheDay from './components/QuoteOfTheDay';
import './App.css';

function App() {
  return (
    <div className='App'>
      <PictureOfTheDay />
      <header className='App-header'>
        <Date />
        <TodayInHistory />
        <QuoteOfTheDay />
      </header>
    </div>
  );
}

export default App;
