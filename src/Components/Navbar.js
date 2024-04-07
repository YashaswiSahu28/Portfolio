import React, { useState } from 'react';
import {AiOutlineMenuUnfold} from 'react-icons/ai';


function Navbar() {
    const[isOpen, setIsOpen]= useState(false);

    const toggle= () => {
        setIsOpen(!isOpen);
    }
  return (
    <div>
        <nav className='flex flex-row justify-start fixed w-full z-20 top-0 bg-orange-100 bg-opacity-80'>
            <div className='max-w-screen-x1 block justify-start mx-auto p-2'>
                <img src='https://media.istockphoto.com/id/1294416926/photo/isolated-blue-anemone-flower-on-white-background.jpg?s=612x612&w=0&k=20&c=iOVkqJo5v32V9tjaLUIE4sHnGL0thlt6ufo8NKQVv0o=' className='h-8 ml-4' alt='LOGO'/>
            <div className='flex md:order-2'>
                <button onClick={toggle} className='inline-flex items-center p-2 w-10 h-10 justify-end text-sm
                text-gray-500 rounded-lg md:hidden focus:ring-2
                 focus:ring-gray-200'/>
                 <AiOutlineMenuUnfold className="text-orange-400 text-lg">

                 </AiOutlineMenuUnfold>


            </div>
            </div>

<div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
    isOpen? "block" : "hidden"
}`}>
    <ul className={`flex flex-col items-center p-4 md:p-0 mt-4 
    text-xl border cursor-pointer border-gray-100
    rounded-lg md:flex-row md:space-x-8 md:mt-0
     md:border-0 ${
        isOpen? 'bg-orange-100 bg-opavity-70' : ''
     }`}>
        <link spy={true} to="Home" activeClass="activeClass"></link>
        <li>
            <div className='block py-2 pl-3 pr-4 
            rounded md:p-0 hover:text-orange-600
             text-violet-700'>Home</div>
        </li>
        <link spy={true} to="Overview" activeClass="activeClass"></link>
        <li>
            <div className='block py-2 pl-3 pr-4 
            rounded md:p-0 hover:text-orange-600
             text-violet-700'>About</div>
        </li>
        <link spy={true} to="Projects" activeClass="activeClass"></link>
        <li>
            <div className='block py-2 pl-3 pr-4 
            rounded md:p-0 hover:text-orange-600
             text-violet-700'>Projects</div>
        </li>
        <link spy={true} to="Contact" activeClass="activeClass"></link>
        <li>
            <div className='block py-2 pl-3 pr-4 
            rounded m:p-0 hover:text-orange-600
             text-violet-700'>Contact</div>
        </li>
    </ul>
</div>
        </nav>
    </div>
  )
}

export default Navbar;
