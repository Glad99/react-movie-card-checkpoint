import React, {useEffect, useState} from 'react'
import './App.css'
import MovieList from './components/MovieList'
import Filter from './components/Filter'
import AddFavourite from './components/AddFavourite'


function App() {
  const [movies, setMovies]= useState([])
  const [search, setSearch] = useState("")
    

  const getMovie = async ()=>{
    const url = `http://www.omdbapi.com/?s=${search}&apikey=b46ab77a` 


    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
    
  }

  useEffect(()=>{
    getMovie(search);
  }, [search])

  
  return (
    <div className='w-screen p-5 mov mt-4'>
    <div className='mo'>
      <Filter search = {search} setSearch ={setSearch}/>
      <MovieList movies={movies} favouriteComponent={AddFavourite}/>
    </div>
    </div>
  )
}

export default App
