import React from 'react';
const tips = [
  {
    id: 1,
    title: "Study Techniques",
    points: [
      "Use active recall",
      "Practice daily",
      "Teach others what you learn"
    ]
  },
  {
    id: 2,
    title: "Time Management Tips",
    points: [
      "Follow Pomodoro technique",
      "Set daily goals",
      "Avoid multitasking"
    ]
  }
];
const Tips = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 gap-6 mt-7'>
                {
                    tips.map(tip => <div key={tip.id} className='bg-slate-200 p-5 rounded-lg text-center'>
                        <h2 className='text-2xl font-bold mb-3'>{tip.title}</h2>
                        <ul className='list-disc list-inside'>
                            {tip.points.map((point, index) => (
                                <li key={index} className='mb-2'>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Tips;