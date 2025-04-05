import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className='min-h-[100px] p-4 bg-black flex items-center justify-between'>


        <Link to="/" className='flex items-center cursor-pointer'>
            <h1 className='text-white font-bold md:text-2xl'>SwiftCart 🛒 </h1>
        </Link>

        <div className=''>
            <Link to="/create"
            className='flex items-center justify-center bg-white text-black rounded-lg px-5 py-2 gap-1'
            >
                <p className='border border-black flex items-center justify-center rounded-lg w-5 h-5'>
                <i className="ri-add-line"></i>
                </p>
            
            <h1>Create</h1>
            </Link>
        </div>
    </section>
  )
}

export default Navbar