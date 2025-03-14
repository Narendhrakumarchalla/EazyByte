import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <header className='flex justify-between py-5 px-4 items-center'>
        <Link to={'/'} className="flex items-center gap-1">
          <h3 className="font-bold text-3xl ml-10">EazyByte</h3>
        </Link>
        <label className='flex gap-1 border rounded-full py-2 px-6 justify-center items-center border-gray-300 '>
          <input type='seach' className='outline-0 ring-offset-1' placeholder='Search here.....' />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>

        </label>
        <Link to={'/login'} className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
          </div>
      </Link>
    </header>
  )
}

export default Navbar