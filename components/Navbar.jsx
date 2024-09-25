import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-3 flex-wrap justify-around'>
      <h1 className='text-lg font-bold'>Todo App</h1>
      <ul className='flex gap-[40px] text-m'>
        <li className='mx-2'>Home</li>
        <li className='mx-2'>Products</li>
        <li className='mx-2'>About</li>
        <li className='mx-2'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
