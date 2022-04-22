import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './Components/Pages/MainPage';
import BookDescriptionPage from './Components/Pages/BookDescriptionPage';
import TrendingBooksPage from './Components/Pages/TrendingBooksPage';

function App() {
  return (
    <div className="App">
  {/* <MainPage/>  */}
     {/* <BookDescriptionPage /> */}
     
     <TrendingBooksPage/>
    </div>
  );
}

export default App;
