import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full py-5 px-20 flex justify-between items-center'>
            <div className='font-bold text-2xl'>
                GHAR<span className='text-red-700'>DHANI</span>
            </div>
            <div className='flex justify-around items-center'>
                <input type='text'
                    placeholder='search for location'
                    className='w-[350px] rounded-tl-2xl rounded-bl-2xl rounded-tr-0 rounded-br-0 pl-2 border text-gray-700 py-[4px] focus:outline-none'
                />
                <button className='py-[4px] px-4 border border-red-700 bg-red-700 text-white rounded-tl-0 rounded-bl-0 rounded-tr-2xl rounded-br-2xl'>search</button>
            </div>
            <div>
                <button className='py-1 px-4 border-2 hover:text-white text-red-700 transition-all duration-150 ease-in-out border-red-700 bg-white hover:bg-red-700'>Login</button>
            </div>
        </div>
    )
}

export default Navbar