import Image from 'next/image';
import React from 'react';
import Data from '@/data/data.json'
import { FaFire } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import Link from 'next/link';

const show = Data.slice(0,3)

const Hero = () => {
    return (
        <div className='container mx-auto space-y-6 bg-slate-200 mt-5 p-5 rounded-lg'>
            <div className='text-6xl font-bold text-center text-primary'><h2> Upgrade your skills today with our courses.</h2>
            <h2>Learn from industry Experts.</h2></div>

            <div>
                <div className='flex gap-5 items-center justify-center mt-10 mb-5 text-primary'>
                <h2 className='text-3xl font-normal text-center '>Popular Courses 
 </h2><FaFire /></div>
                <div className='grid grid-cols-3 gap-5'>
                {
                    show.map(item =>  <div className='text-center bg-white pt-5 rounded-3xl pb-5 space-y-3  hover:bg-amber-200' key={item.id}>
                    <img className='mx-auto object-cover' src={item.image} alt={item.title} width={300} height={200} />
                    <h2 className='font-bold text-xl'>{item.title}</h2>
                    <h2 className='font-bold text-xl'>{item.instructor}</h2>
                    <div className='font-bold text-xl flex items-center gap-2 justify-center flex-row'><CiStar />
                    <span>
{item.rating}</span></div>
                    <Link href={`/details/${item.id}`}>
                        <button className='btn'>View Details</button>
                    </Link>
                </div>

                     )
                }
                </div>
              

            </div>
        </div>
    );
};

export default Hero;