'use client'
import Link from 'next/link';
import React from 'react';

import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';



const Navbar = () => {
    const router = useRouter();
    const { data: session } = authClient.useSession()

    const user = session?.user;
    return (
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center p-5 bg-neutral text-white'>
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
            {user? <div className='flex justify-between items-center gap-3'>
                <h2>Hello, {user?.name}</h2>
                {/* <Image src={user?.photoUrl || '/default-profile.png'} alt='profile' className='rounded-full w-10 h-10' width={40} height={40} /> */}
                <button className='btn btn-primary'onClick={async()=>await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/login"); // redirect to login page
    },
  },
})}>Logout</button>
           
            </div> :
             <Link href="/login">
                    <button className='btn btn-primary'>Login</button>
                </Link>}
        </div>
    );
};

export default Navbar;