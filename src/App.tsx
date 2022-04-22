import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './Components/Pages/MainPage';
import BookDescriptionPage from './Components/Pages/BookDescriptionPage';
import TrendingBooksPage from './Components/Pages/TrendingBooksPage';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<MainPage/>}></Route>
        <Route  path='/explore' element={<TrendingBooksPage/>}></Route>
        <Route  path='/explore/bookdetails' element={<BookDescriptionPage />}></Route>
      </Routes>
  
     {/*  */}
     
    </div>

  );
}

export default App;
