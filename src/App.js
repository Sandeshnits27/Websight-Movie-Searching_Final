import './App.css';
import React, { useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import { SearchBar } from './components/SearchBar/searchbarmy';
import Loginpage from './components/Loginpage/loginpage';


function App() {
  const [results, setResults] = useState([]);
  return (
    
    <div className="App">
      
      <p> 
        
        <h1>😎Movie Dekhle Bhai😎 
          
        <div className="search-bar-container">
        <SearchBar />
           </div>

        </h1>
        
       
      </p>
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path= "movies/login" element={<Loginpage/>}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>

        
    </div>
  );
}

export default App;
