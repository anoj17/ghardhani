import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full py-6 px-20 flex justify-between items-center'>
            <div className='font-bold text-2xl'>
                GHAR<span className='text-red-600'>DHANI</span>
            </div>
            <div className='flex pl-2 justify-around items-center'>
                <input type='text'
                    placeholder='search for location'
                    className='w-[300px]  rounded-tl-2xl rounded-bl-2xl rounded-tr-0 rounded-br-0 pl-2 border text-gray-700 py-2 focus:outline-none text-md'
                />
                <button className='py-2 px-4 bg-red-600 text-white rounded-tl-0 rounded-bl-0 rounded-tr-2xl rounded-br-2xl'>search</button>
            </div>
            <div>
                <button className='py-1 px-4 border hover:text-white transition-all duration-150 ease-in-out border-red-600 text-black bg-white hover:bg-red-600'>Login</button>
            </div>
        </div>
    )
}

export default Navbar