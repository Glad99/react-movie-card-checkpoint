import React, {useEffect, useState} from 'react'
import './App.css'
import MovieList from './components/MovieList'
import Filter from './components/Filter'
import Hero from './components/Hero'
import Footer from './components/Footer'


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
    <div className="">
      <Hero/>
      <div className="flex justify-between items-center bg-black absolute top-0 w-[98%]  m-3 h-[3.5rem] pl-3 pr-3 rounded ">
        <h1 className="text-3xl font-bold ">
          M<span className="text-amber-500 ">O</span>V
        </h1>
<select name="Category" id="movie" form="movieform" className='text-black'>
  <option value="category">Category</option>
  <option value="action">Action</option>
  <option value="romance">Romance</option>
  <option value="comedy">Comedy</option>
</select>
        
        <div className='flex justify-between gap-5 lg:gap-10 lg:mr-[2rem]'>
        <p>Home</p>
        <p>About</p>
        <p>Blog</p>
        <p>Contact</p>
        <p>Sign In</p>
        <p className='bg-orange-300 p-1 rounded-md '>Sign Up</p>
        </div>
      </div>
      <div className='flex justify-between items-center ml-4 mr-4  lg:mr-[3.3rem] lg:ml-[3.3rem] mt-2 p-3'>
      <h1 className='text-xl font-bold '>Movies</h1>
      <Filter search={search} setSearch={setSearch} />
      </div>
      <div>
        <MovieList movies={movies} />
      </div>
      <Footer/>
    </div>
  );
}

export default App
