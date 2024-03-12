import React from 'react'


const Footer = () => {
  return (
    <div className='flex justify-between flex-col mt-10 p-5 bg-black'>
      <div className='flex justify-between'>
      <h1 className="text-3xl font-bold ">
          M<span className="text-amber-500 ">O</span>V
        </h1>
        <div className='flex justify-between gap-16 mr-20'>
          <div>
            <h1>Company</h1>
            <p>Home</p>
            <p>About</p>
            <p>Careers</p>
            <p>Patners</p>
          </div>
          <div>
            <h1>Support</h1>
            <p>Finding Help</p>
            <p>Support Library</p>
            <p>Contacts</p>
            <p>Blog</p>
          </div>
          <div>
          <h1>Watch</h1>
          <p>What to Watch</p>
          <p>Collections</p>
          </div>
        </div>
        </div>
        <div className='flex flex-col justify-center items-center m-5 '>
          <p>Copyright © 2024 MOV</p>
          <div>
            <i>react icons</i>
          </div>
        </div>
    </div>
  )
}

export default Footer