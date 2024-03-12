import React from 'react'
import { movies } from "../data.jsx"

const Hero = () => {
  return (
    <div className='w-screen h-screen bg-slate-950 flex '>
      {movies.map((movie)=> (<div key={movie.id}>
      <img className='w-screen h-screen' src={movie.posterURL} alt="" />
      </div>))}
    </div>
  )
}

export default Hero