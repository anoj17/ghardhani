import React from 'react'

interface iappProp {
   text: String
}

const Button = ( {text}: iappProp ) => {
  return (
    <button className='bg-white px-5 py-1'>{text}</button>
  )
}

export default Button