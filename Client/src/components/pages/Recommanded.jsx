import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Recommanded = () => {
  const { currentUser } = useSelector((state) => state.user)
  const { allUser } = useSelector((state) => state.room)
  console.log(allUser)

  return (
    <div>
      <div className='w-full p-8'>
        {
          allUser.map((item) => {
            return (
              <div key={item._id} className='shadow drop-shadow-md md:w-[63rem] bg-gray-100 py-2 px-20'>
                <div className='flex px-28 justify-center items-center'>
                  <Link to={"/profile"} className="flex items-center text-black">
                    <img
                      src={currentUser.avatar}
                      alt=""
                      className="w-8 h-8 rounded-full"
                    />
                    <h1 className='ml-2'>{item.fname + " " + item.lname}</h1>
                  </Link>
                </div>
                <div className='flex space-x-10 text-[.8rem] py-4 justify-center items-center mx-auto px-10 mt-4'>
                  <div className='text-center'>
                    <h1>Mobile Number</h1>
                    <div>{item.phoneNumber}</div>
                  </div>

                  <div className='text-center'>
                    <h1>Age</h1>
                    <div>{item.age}</div>
                  </div>

                  <div className='text-center'>
                    <h1>work</h1>
                    <div>{item.work}</div>
                  </div>

                  <div className='text-center'>
                    <h1>Already have a room</h1>
                    <div>{item.book}</div>
                  </div>

                  {item.book === 'yes' &&
                    <div className='flex space-x-8'>
                      <div className='text-center'>
                        <h1>Location</h1>
                        <div>{item.location}</div>
                      </div>

                      <div className='text-center'>
                        <h1>Location</h1>
                        <div>{item.location}</div>
                      </div>
                    </div>
                  }
                </div>
                <div className='flex justify-center items-center pt-4 pb-2'>
                  <button className='bg-green-600 px-5 text-white py-2 hover:bg-green-500 rounded-md'>Add Partner</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Recommanded
