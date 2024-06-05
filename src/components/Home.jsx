import React from 'react'
import heroImage from"../assets/heroImage.jpg"
import { FaArrowAltCircleRight } from "react-icons/fa";
import {Link} from "react-scroll";


const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-gray-600 to-blue-500'>
        <div  className='max-w-screen-lg flex flex-col mx-auto items-center  h-full md:flex-row '> 
            <div className='flex flex-col justify-center h-full mx-4'>
                <h2 className='text-6xl font-bold my-4 text-white'>I'm Fullstack Developer</h2>
                <p>Full Stack Developer CV In 3 Simple Steps. Choose From +32 CV Templates. Ready In 10 Min! Land Your Dream Job With One Of Our +32 Professional Templates. Create Your CV Right Away!
                    Create your professional resume in minutes | Jobseeker
                </p>
                <div>
                    <button><Link to='portfolio' smooth duration={500} className='group flex bg-yellow-500 rounded-xl px-6 py-3 my-2 justify-center items-center mt-4 cursor-auto'>
                        <h4>Portfolio </h4>
                        <span className='group-hover:rotate-90 duration-300'><FaArrowAltCircleRight/></span>
                    </Link></button>
                </div>
            </div>
            <div><img src={heroImage} alt='img' className='rounded-full w-2/3 mx-auto '/></div>
        </div>
    </div>
    
  )
}

export default Home
