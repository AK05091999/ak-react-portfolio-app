import React from 'react'
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinkes = () => {

    const socialLinkes=[
        {id:1,
        img:<ImLinkedin size={30}/>,
        name:"Linkedin",
        url:"https://www.linkedin.com"
        },

        {id:2,
        img:<FaGithub size={30}/> ,
        name:"Github",
        url:"https://github.com/AK05091999"
        },

        {
            id:3,
        img:<HiOutlineMailOpen size={30}/>,
        name:"Mail",
        url:"mailto:adinath8697@gmail.com"
        },

        {id:4,
        img:<BsFillPersonLinesFill size={30}/>,
        name:"Resume",
        url:"/resume.pdf",
        download:true
        }
    ]
  return (
    <div>
      
      <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
        {socialLinkes.map(({id,img,name,url,download})=>{
            return <li key={id} className= "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
            <a href={url} download={download} className='flex justify-between items-center w-full text-white '>
            <>
            {name}{img}
            </></a>
        </li>
        })}
        </ul>
      </div>
    </div>
  )
}

export default SocialLinkes
