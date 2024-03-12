import React from 'react'

const Filter = (props) => {
  return (
    <div className=''>
      <div className='right-5'>
      <input type="text" value={props.value} onChange={(event)=> props.setSearch(event.target.value)} placeholder=' Find Movies' className='text-black rounded-3xl h-9 w-[25rem]  ' />
    </div>
    </div>
  )
}

export default Filter