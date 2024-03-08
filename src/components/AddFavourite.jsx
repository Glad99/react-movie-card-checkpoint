import React from 'react'

import { BsSuitHeartFill } from "react-icons/bs";

const AddFavourite = () => {
  return (
    <div className='flex '>
        <span>Add to Favourite</span>
        <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-gray-900 text-red-600 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
    type="button"><span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"><BsSuitHeartFill /></span></button>
    </div>
  )
}

export default AddFavourite