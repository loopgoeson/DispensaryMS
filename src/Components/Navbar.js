import React from 'react'

export const Navbar = () => {
  return (
    <nav>
        <ul className='text-xl flex space-x-6 justify-center py-10'>
            <li className='cursor-pointer'>HOME</li>
            <li className='cursor-pointer'>ABOUT</li>
            <li className='cursor-pointer'>SERVICE</li>
            <li className='cursor-pointer'>PROVIDER</li>
        </ul>
    </nav>
  )
}
export default Navbar;