import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './Components/Pages/MainPage';
import BookDescriptionPage from './Components/Pages/BookDescriptionPage';

function App() {
  return (
    <div className="App">
    <MainPage/> 
     <BookDescriptionPage />
    </div>
  );
}

export default App;
