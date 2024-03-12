import React from 'react'
import { movies } from "../data.jsx"



const MovieCard = () => {
  return (
    <div className='flex overflow-x-auto flex-wrap mt-5 justify-center '>
      {movies.map((movie)=> (<div key={movie.id} className='justify-start m-3  w-[13rem] rounded hover:bg-sky-700 hover:transition-shadow shadow-2xl cursor-pointer  '>
        <img src={movie.posterURL} alt="" className='rounded w-[13rem] h-[15rem]' />
        <div className='p-2 pr-1 text-justify'>
        <h1 className='font-bold'>{movie.title}</h1>
        <p>Rating: {movie.ratings}</p>
        <p className=''>{movie.description}</p>
        </div>

        </div>))}
    </div>
  )
}

export default MovieCard