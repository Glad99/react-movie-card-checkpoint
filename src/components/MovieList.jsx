import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (item) => {
  return (
    <div className='flex overflow-x-auto flex-wrap mt-5 justify-center'>
        {item.movies?.length?(item.movies.map((movie, index)=>( <div key={movie.imdbID} className='justify-start m-3  w-[13rem] rounded  hover:transition-shadow transition duration-300 ease-in-out hover:scale-110 shadow-2xl cursor-pointer hover:shadow-3xl hover:shadow-slate-600'>
            <img className='rounded w-[13rem] h-[15rem]' src={movie.Poster} alt='movie'/>
            <div className='p-2 pr-1 text-justify'>
        <h1 className='font-bold'>{movie.Title}</h1>
        <div className='flex items-center justify-center'>
        <button className='bg-red-700 rounded-md p-2 pl-3 pr-3 cursor-pointer'>Play</button>
        </div>
        </div>
        </div>))
        ):(<MovieCard/>)}
    </div>
  )
}

export default MovieList