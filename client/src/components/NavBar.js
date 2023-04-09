import { useState } from 'react';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai'
import {BiShoppingBag} from 'react-icons/bi'

const NavBar = ({ menu,logo, handleMenu}) => {
  return ( <div className="flex w-full justify-between items-center h-20 px-4 mb-10 ">
    <div>
      <h1 onClick={handleMenu} className={logo ? 'hidden' : 'block'}>L.O.N.D.O.N.</h1>

    </div>
    <ul className='hidden md:flex'>
      <li>Home</li>
      <li>About</li>
      <li>Search</li>
      <li>Book</li>
    </ul>
    <div className='hidden md:flex  items-center gap-3'>
     <BsPerson size={25}/>
     <BiShoppingBag size={20}/>
    </div>
    {/* mobile humburger */}
    <div onClick={handleMenu} className='md:hidden z-10'>
    {menu ? <AiOutlineClose className='text-black' size={25}/> : <HiOutlineMenuAlt4 size={30}/>}
    </div>
     {/* mobile menu */}
    <div onClick={handleMenu} className={menu ? 'absolute  left-0 top-0 w-full text-black bg-gray-100/90 px-4 py-7 flex flex-col justify-center items-center' : 'absolute left-[-100%]'}>
      <ul className='flex flex-col w-full items-center '>
        <h1>L.O.N.D.O.N.</h1>
        <li>Home</li>
        <li>About</li>
        <li>Search</li>
        <li>Book</li>
      </ul>
      <div className='flex flex-col w-full items-center gap-3'>
     <BsPerson size={25}/>
     <BiShoppingBag size={25}/>
    </div>
    </div>
  </div> );
}
 
export default NavBar;