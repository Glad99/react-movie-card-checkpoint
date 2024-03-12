import { IoSearch } from "react-icons/io5";

const Filter = (props) => {
  return (
    <div className=''>
      <div className='right-5 relative'>
      <input type="text" value={props.value} onChange={(event)=> props.setSearch(event.target.value)} placeholder=' Find Movies' className='text-black rounded-3xl h-9 w-[25rem] pl-[2rem]'/>
      <div className="absolute top-3 ml-3 text-slate-500 ">
      <IoSearch />
      </div>
    </div>
    </div>
  )
}

export default Filter