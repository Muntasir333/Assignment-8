import React from 'react';
import show from '@/data/data.json'
import { CiStar } from 'react-icons/ci';

const Course = () => {
    return (
        <div className='container mx-auto mt-7 bg-slate-200 p-5 rounded-lg'>
             <div className='grid grid-cols-3 gap-5'>
                            {
                                show.map(item =>  <div className='text-center bg-white pt-5 rounded-3xl pb-5 space-y-3 hover:bg-amber-200' key={item.id}>
                                <img className='mx-auto object-cover' src={item.image} alt={item.title} width={300} height={200} />
                                <h2 className='font-bold text-xl'>{item.title}</h2>
                                <h2 className='font-bold text-xl'>{item.instructor}</h2>
                                <div className='font-bold text-xl flex items-center gap-2 justify-center flex-row'><CiStar />
                                <span>
            {item.rating}</span></div>
                                <button className='btn'>View Details</button>
                            </div>
            
                                 )
                            }
                            </div>
        </div>
    );
};

export default Course;