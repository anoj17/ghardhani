import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const Heading = ({ path, item }) => {
    const { pathname } = useLocation()
    // {`${pathname === `findRoomPartner/${path}` ? 'underline' : ''} cursor-pointer`}

    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                isActive ? 'cursor-pointer text-sky-500 ' : 'cursor-pointer'
            }
        >
            {item}
        </NavLink>
    )
}

const RoomParther = () => {

    return (
        <div>
            {/* top section */}
            <div className='bg-black py-3 px-7 flex justify-between items-center'>
                <div className='flex space-x-3 items-center'>
                    <NavLink to='/' className='text-white font-semibold text-xl'>
                        HamroGhar
                    </NavLink>
                    <div className='py-1 px-4 bg-white rounded-md'>
                        Find your Partner
                    </div>
                </div>

                <div className='text-white flex space-x-7'>
                    <Heading path={'chat'} item='Chat' />
                    <Heading path={'recommanded'} item='Recommanded' />
                    <Heading path={'notification'} item='Notification' />
                </div>
                <div className='text-white'>
                    Welcome User
                </div>
            </div>
            <div>
                <Outlet />
            </div>

        </div>
    )
}

export default RoomParther
