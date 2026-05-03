import Link from 'next/link';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center p-5 bg-neutral text-white'>
            <div className=''>
                <h2 className='text-3xl font-bold'>SkillSphere</h2>
            </div>
            <div>
                <ul className='flex justify-between items-center gap-3'>
                    <li className='font-bold'><Navlink href='/'>Home</Navlink></li>
                    <li className='font-bold'><Navlink href='/course'>Courses</Navlink></li>
                    <li className='font-bold'><Navlink href='/myprofile'>My Profile</Navlink></li>
                </ul>
            </div>
            <div className='flex justify-between items-center gap-3'>
                <FaUserCircle />
            <Link href="/login">
                    <button className='btn btn-primary'>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;