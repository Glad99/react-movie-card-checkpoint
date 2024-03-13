import React from 'react'
import { movies } from "../data.jsx"



const MovieCard = () => {

  return (
    <div className='flex overflow-x-auto flex-wrap mt-5 justify-center '>
      {movies.map((movie)=> (<div key={movie.id} className='justify-start m-3  w-[13rem] rounded  hover:transition-shadow transition duration-300 ease-in-out hover:scale-110 shadow-2xl  hover:shadow-3xl hover:shadow-slate-600 mb-10  '>
        <img src={movie.posterURL} alt="" className='rounded w-[13rem] h-[15rem]' />
        <div className='p-2 pr-1 text-justify'>
        <h1 className='font-bold'>{movie.title}</h1>
        <p>Rating: {movie.ratings}</p>
        <p className=''>{movie.description}</p>
        </div>
        <div className='flex items-center justify-center'>
        <a href={movie.trailerURL}> <button className='bg-indigo-300   rounded-md w-full  ml-2 mr-2 p-2 pl-3 pr-3 cursor-pointer mb-3 '>Play</button></a>
        </div>

        </div>))}
    </div>
  )
}

export default MovieCard