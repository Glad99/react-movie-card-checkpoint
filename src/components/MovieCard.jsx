import React from 'react'
import { movies } from "../data.jsx"



const MovieCard = () => {
  const handleClick =(()=>{

  })
  return (
    <div className='flex overflow-x-auto flex-wrap mt-5 justify-center '>
      {movies.map((movie)=> (<div key={movie.id} className='justify-start m-3  w-[13rem] rounded  hover:transition-shadow transition duration-300 ease-in-out hover:scale-110 shadow-2xl cursor-pointer hover:shadow-3xl hover:shadow-slate-600   '>
        <img src={movie.posterURL} alt="" className='rounded w-[13rem] h-[15rem]' />
        <div className='p-2 pr-1 text-justify'>
        <h1 className='font-bold'>{movie.title}</h1>
        <p>Rating: {movie.ratings}</p>
        <p className=''>{movie.description}</p>
        </div>
        <div className='flex items-center justify-center'>
        <button className='bg-red-700 rounded-md p-2 pl-3 pr-3 cursor-pointer'>Play</button>
        </div>

        </div>))}
    </div>
  )
}

export default MovieCard