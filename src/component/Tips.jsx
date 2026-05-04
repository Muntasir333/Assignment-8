'use client';
import React from 'react';
import { motion } from "motion/react";
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
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-7'>
                {
                    tips.map(tip => <div key={tip.id} className='bg-slate-200 p-5 rounded-lg text-center'>
                        <h2 className='text-2xl font-bold mb-3'>{tip.title}</h2>
                        <ul className='list-disc list-inside'>
                            {tip.points.map((point, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 1.5, duration: 0.5 }}
                                    className='mb-2'
                                >
                                    {point}
                                </motion.li>
                            ))}
                        </ul>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Tips;