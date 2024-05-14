import React from 'react'

interface iappProp {
   text: String
}

const Button = ( {text}: iappProp ) => {
  return (
    // <button className='bg-white px-5 py-1'>{text}</button>
    // <button className="px-4 py-2 rounded-xl border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
    //     {text}
    //   </button>
    <button className="px-8 py-2 rounded-full bg-gradient-to-b from-red-800 to-red-600 text-white focus:ring-2 focus:ring-red-400 hover:shadow-xl transition duration-200">
    {text}
  </button>
  )
}

export default Button