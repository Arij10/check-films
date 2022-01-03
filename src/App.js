
import './App.css';
import NavBar from "./componment/NavBar";
import MovieList from './componment/MovieList';
import Filter from './componment/Filter';
import Add from './componment/Add';
import {movies} from './componment/Movies';
import {useState} from 'react';

//console.log(movies);

function App() {
 const  [movieList , setmovieList]=useState (movies)
 console.log(movieList)


  


  return (
    <div className="App">
      <NavBar/>
      <Filter filter={movieList}/>
      <Add/>
      <MovieList movieList = {movieList}/>

    </div>
  );
}

export default App;
