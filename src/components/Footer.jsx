import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='flex justify-between flex-col mt-10 p-5 bg-black'>
      <div className='flex ml-10'>
      <h1 className="text-3xl font-bold mr-[10rem] lg:mr-[20rem] ">
          M<span className="text-amber-500 ">O</span>V
        </h1>
        <div className='flex justify-between gap-[5rem] lg:gap-[10rem] mr-20 tracking-wider'>
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
          <p className="tracking-wider">Copyright © 2024 MOV</p>
          <div className="flex mt-5 gap-5">
          <BsInstagram />
          <FaXTwitter />
          <FaSquareFacebook />
          </div>
        </div>
    </div>
  )
}

export default Footer