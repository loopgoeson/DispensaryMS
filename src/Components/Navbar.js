import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
        <ul className='text-xl flex space-x-6 justify-center py-10'>
            <NavLink to="/" >Home </NavLink>
            <NavLink to="/Patient" >Patient</NavLink>
            <NavLink to="/About" >About</NavLink>
            <NavLink to="/Contact" >Contact Us</NavLink>
        </ul>
    </nav>
  )
}
export default Navbar;