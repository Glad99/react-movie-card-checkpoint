import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (item) => {
  // const FavouriteComponent= item.favouriteComponent;
  return (
    <div className='flex overflow-x-auto flex-wrap'>
        {item.movies?.length?(item.movies.map((movie, index)=>( <div key={movie.imdbID} className='justify-start m-3'>
            <img className='rounded w-[10rem] h-[15rem]' src={movie.Poster} alt='movie'/>
            {/* <div onClick={()=> item.handleFavouritesClick(movie)} className=''><FavouriteComponent/></div> */}
        </div>))
        ):(<MovieCard/>)}
    </div>
  )
}

export default MovieList