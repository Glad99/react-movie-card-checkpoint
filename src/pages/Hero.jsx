import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const [current, setCurrent] = useState()
  const handleClick = () => {
    setCurrent()
  }
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-slate-500 to-slate-800  flex '>
      <div className="flex flex-col justify-center items-center m-5 mt-[10rem] gap-5 w-screen">
      <h1 className="text-8xl font-bold">Hello, Welcome!</h1>
      <p className="text-xl">Need something to watch? Here are combinations of movies for your easy Search. </p>
      <button className="bg-orange-500 p-3 pl-5 pr-5 text-xl rounded-3xl mt-10 animate-pulse">Start</button>
      <div className="mt-10 bg-white text-slate-700 rounded-full animate-bounce p-2">
      <FaArrowDown />
      </div>
      </div>
      
    </div>
  )
}

export default Hero