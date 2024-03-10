import React from 'react'

const MovieList = (item) => {
  const FavouriteComponent= item.favouriteComponent;
  return (
    <div className='flex overflow-x-auto flex-nowrap mt-5 '>
        {item.movies.map((movie, index)=> <div key={movie.imdbID} className='justify-start m-3'>
            <img className='rounded' src={movie.Poster} alt='movie'/>
            <div onClick={()=> item.handleFavouritesClick(movie)} className=''><FavouriteComponent/></div>
        </div>)}
    </div>
  )
}

export default MovieList