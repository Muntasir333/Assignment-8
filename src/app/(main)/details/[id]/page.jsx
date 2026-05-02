import React from 'react';
import data from '@/data/data.json';

const Details = async({ params }) => {
    const { id } = await params;
const course = data.find(course => course.id === parseInt(id));
    return (
        <div>
            {course && (
                <div className='flex justify-center items-center flex-col'>
                    <img className='mx-auto object-cover' src={course.image} alt={course.title} width={300} height={200} />
                    <h1>{course.title}</h1>
                    <p>{course.description}</p>
                    <p>Duration: {course.duration}</p>
                    <p>Level: {course.level}</p>
                    <p>Rating: {course.rating}</p>
                </div>
            )}
        </div>
    );
};

export default Details;