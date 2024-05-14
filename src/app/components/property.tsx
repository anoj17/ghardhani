import React from 'react'
import ktm from '../assets/kathmandu.jpeg'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";

const Property = () => {
    return (
  
        <div className='flex space-x-3 lg:w-[580px] p-2 border'>
            <div className='h-[230px] w-[270px] overflow-hidden'>
                <Image src={ktm} alt='ktm' className=' object-cover hover:scale-105 transition-all duration-700 h-[230px]' />
            </div>

            <div className=' lg:w-[270px] pr-2'>
                <div className='flex w-full items-center justify-between'>
                    <h1 className='font-bold'>CHABAHIL</h1>
                    <div>
                        <p className=' text-sm'>MONTHLY</p>
                        <h3 className='font-semi text-red-700'>RS.6,000</h3>
                    </div>
                </div>
                <p className='text-[13px]'>Managed By: ghardhani.com</p>
                <div className='py-3 mt-3 border-t border-b'>
                    <p className='text-[14px]'>3rd floor</p>
                    <p>1 Applied</p>
                </div>
                <div className='pt-2'>
                    <p className='text-[14px]'>A beautiful room at chabahil, kathmandu</p>
                    <button className='text-blue-600 justify-center group flex items-center text-[14px] font-bold'>view Details
                    <FaArrowRight size={10} className='text-blue group-hover:ml-[2px] transition-all duration-200 items-center'/>
                    </button>
                </div>
                
            </div>
        </div>

    )
}

export default Property