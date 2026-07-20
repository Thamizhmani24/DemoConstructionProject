import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"


const Navbar= () => {
  const [toggleMenu,setToggleMenu]=useState(false);
    return(
        <nav className="relative top-0 left-0 w-full flex justify-between items-center px-12 py-6 bg-slate-700 bg-opacity-50 z-20">

        <div className="h-12 w-24">
          <img src={logo} alt="ABC Construction" className="" />
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8 font-bold text-white">
          <li className="cursor-pointer hover:text-yellow-400 mt-1.5" ><a href="#our-work">OUR WORK</a></li>
          <li className="dropdown cursor-pointer hover:text-yellow-400 mt-1.5">
            <a href="#packages">PACKAGES ▾</a>
          </li> 
          <li className="cursor-pointer hover:text-yellow-400 mt-1.5"><a href="#about-us">ABOUT US</a></li>
          <li className="cursor-pointer hover:text-yellow-400 mt-1.5"><a href="#contact">CONTACT</a></li>
          <li className="cursor-pointer hover:text-yellow-400 mt-1.5"><a href="#construction-guide">CONSTRUCTION GUIDE</a></li>
          <Link to="/QuoteForm">
              <button className="ml-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded">
                GET QUOTE
              </button>
            </Link>
        </ul>
        </nav>


        {toggleMenu &&
          <nav className="block md:hidden">
          <ul className="flex flex-col  mobile_nav">
          <li className="cursor-pointer hover:text-yellow-400 mt-1.5" ><a href="#our-work">OUR WORK</a></li>
          <li className="dropdown cursor-pointer hover:text-yellow-400 mt-1.5">
            <a href="#packages">PACKAGES ▾</a>
          </li> 
          <li className="cursor-pointer hover:text-yellow-400 mt-1.5"><a href="#about-us">ABOUT US</a></li>
          <li className="cursor-pointer hover:text-yellow-400 mt-1.5"><a href="#contact">CONTACT</a></li>
          <li className="cursor-pointer hover:text-yellow-400 mt-1.5"><a href="#construction-guide">CONSTRUCTION GUIDE</a></li>
           <Link to="/QuoteForm">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 w-full h-full text-center border-b-4">
                GET QUOTE
              </button>
            </Link>
        </ul>
        </nav>
        }

        <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden"><Bars3Icon className='text-black h-5'/></button>
        

        
      </nav>
    )
}

export default Navbar;
      