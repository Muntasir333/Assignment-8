'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Photo from '@/self-learning-skills.jpg';
import Photo2 from '@/good.webp';
import Photo3 from '@/superb.png';
import { motion } from 'motion/react';


const Banner = () => {
  return (
    <section className="bg-neutral text-white min-h-[80vh] flex items-center container mx-auto rounded-lg my-10 p-10 text-center">
      <div className="container mx-auto px-5 flex flex-col-reverse md:flex-row items-center justify-between gap-10 ">

        {/* Left Content */}
         <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }} className="flex-1 space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Learn Skills <br />
            Build Your Future with <span className="text-primary">SkillSphere</span>
          </h1>

          <p className="text-gray-300 text-lg">
            Join thousands of learners and upgrade your skills with modern,
            practical and industry-ready courses.
          </p>
        <div className='flex justify-center items-center'>
          <div className="flex gap-4">
            <Link href="/course">
              <button className="btn btn-primary">
                Explore Courses
              </button>
            </Link>

            <Link href="/register">
              <button className="btn btn-outline text-white">
                Get Started
              </button>
            </Link>
          </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center flex-col items-center gap-5">
          
          <Image
            src={Photo}
            width={500}
            height={500}
            alt="banner"
            className="rounded-xl max-w-md shadow-lg"
          />
           
          <Image
            src={Photo2}
            width={500}
            height={500}
            alt="banner"
            className="rounded-xl max-w-md shadow-lg"
          />
          <Image
            src={Photo3}
            width={500}
            height={500}
            alt="banner"
            className="rounded-xl max-w-md shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;