import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
const links = [
    {id: 1, link:"home"},
    {id: 2, link:"about"},
    {id: 3, link:"portfolio"},
    {id: 4, link:"experience"},
    {id: 5, link:"contact"}

];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div className='text-5xl font-signature'>Adinath</div>
        <ul className='hidden md:flex'>
            {links.map(({id,link})=>{

                return <li  className='px-4 cursor-pointer font-medium capitalize text-gray-500 hover:scale-105 duration-200' key={id}>
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
            })}
            
        </ul>
        <div onClick={()=> setNav(!nav)} className='px-4 md:hidden cursor-pointer z-10 text-gray-500'>
            
            {nav ? <FaTimes size={30}/> :  <FaBars size={30} />}
            
        </div>

        {nav && (<ul className='flex text-gray-400 justify-center items-center flex-col absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-600'>
        {links.map(({id,link})=>{

        return <li  className='text-4xl capitalize px-4 py-6 cursor-pointer' key={id}>
                    <Link to={link} onClick={()=> setNav(!nav)} smooth duration={500}>{link}</Link>
                </li>
    })}     
         
        </ul>)}
    </div>
  )
}

export default Navbar
