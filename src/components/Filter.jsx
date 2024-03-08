import React from 'react'

const Filter = (props) => {
  return (
    <div className=''>
      <div className='absolute top-2 right-5'>
      <input type="text" value={props.value} onChange={(event)=> props.setSearch(event.target.value)} placeholder=' Type to search' className='text-black ' />
    </div>
    </div>
  )
}

export default Filter