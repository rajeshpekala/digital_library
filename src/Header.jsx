import React from 'react';
import { LOGO_URL } from './constants';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
        <div className ="flex justify-between border border-solid border-white bg-black">

            <div>
             <img className ="w-20  " src = {LOGO_URL}  alt='logo'/>
             </div>
             <div className='flex items-center '>
                <ul className ="flex p-3 text-2xl font-bold ">
           <li className ="flex p-3 text-white hover:scale-110 duration-200" > <Link to = "/">Home</Link> </li>
            <li className ="flex p-3 text-white hover:scale-110 duration-200"><Link to = "/contact">Contact Us</Link></li>
            <li className ="flex p-3 text-white hover:scale-110 duration-200 "><Link to = "/about">About Us</Link></li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Header;