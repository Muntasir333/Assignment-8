import React from 'react';
const instructor = [
  {
    "id": 1,
    "name": "John Doe",
    "role": "Web Development Expert",
    "image": "https://i.pravatar.cc/300?img=12"
  },
  {
    "id": 2,
    "name": "Sarah Khan",
    "role": "UI/UX Designer",
    "image": "https://i.pravatar.cc/300?img=47"
  },
  {
    "id": 3,
    "name": "Michael Lee",
    "role": "Data Science Instructor",
    "image": "https://i.pravatar.cc/300?img=33"
  },
  {
    "id": 4,
    "name": "Emily Watson",
    "role": "AI & ML Specialist",
    "image": "https://i.pravatar.cc/300?img=5"
  }
]

const Instructor = () => {
    return (
        <div className='mx-auto container mt-7 bg-slate-200 p-7'>
            <h2 className='font-bold text-xl text-center'>Meet Our Top Rated Instructors</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-7'>
            {instructor.map((inst) => (
              <div key={inst.id} className='text-center bg-white p-5 rounded-lg'>
                <img className='mx-auto object-cover rounded-full' src={inst.image} alt={inst.name} width={200} height={200} />
                <h3 className='text-xl font-bold mt-3'>{inst.name}</h3>
                <p className='text-gray-600'>{inst.role}</p>
              </div>
            ))}
          </div>
        </div>
    );
};

export default Instructor;