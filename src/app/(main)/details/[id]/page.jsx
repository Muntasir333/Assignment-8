import React from 'react';
import data from '@/data/data.json';
import Link from 'next/link';

const Details = async({ params }) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
    const { id } = await params;
const course = data.find(course => course.id === parseInt(id));
    return (
        <div>
            {course && (
                <div className='flex justify-center items-center flex-col  bg-slate-200 rounded-3xl p-5 space-y-3 mt-5 container mx-auto'>
                    <img className='mx-auto object-cover' src={course.image} alt={course.title} width={300} height={200} />
                    <h1 className='font-bold text-xl'>{course.title}</h1>
                    <p className='font-bold text-xl'>{course.description}</p>
                    <p className='font-bold text-xl'>Duration: {course.duration}</p>
                    <p className='font-bold text-xl'>Level: {course.level}</p>
                    <p className='font-bold text-xl'>Rating: {course.rating}</p>
                    <p className='text-center text-xl'>Details: {course.details}</p>
                    <Link href="/" className='btn btn-primary mt-5'>Go Back Home</Link>
                </div>
            )}
        </div>
    );
};

export default Details;