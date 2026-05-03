'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
        const { register, handleSubmit, formState: { errors } } = useForm();
        
        
            const handleRegister = (data) => {
            console.log(data);
            }
        
            return (
                <div className='container mx-auto min-h-[80vh] flex items-center justify-center flex-col gap-5 bg-slate-200 p-5 rounded-lg'>
                    <div className='bg-white p-5 rounded-lg'>
                        <h2 className='font-bold text-3xl mb-6'>Register your account</h2>
                    <form className='space-y-3' onSubmit={handleSubmit(handleRegister)}>
                        <fieldset className="fieldset">
          <legend className="fieldset-legend ">Name</legend>
          <input type="text" className="input" placeholder="Type your name"   {...register("name", { required: true })} />
          {errors.name && <p className="text-red-500">Name is required</p>}
        
        </fieldset>
                        <fieldset className="fieldset">
          <legend className="fieldset-legend ">Photo Url</legend>
          <input type="text" className="input" placeholder="Paste link here"   {...register("photoUrl", { required: true })} />
          {errors.photoUrl && <p className="text-red-500">Photo Url is required</p>}
        
        </fieldset>
                        <fieldset className="fieldset">
          <legend className="fieldset-legend ">E-mail</legend>
          <input type="email" className="input" placeholder="Type your E-mail"   {...register("email", { required: true })} />
          {errors.email && <p className="text-red-500">E-mail is required</p>}
        
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input type="password" className="input" placeholder="Type Password"   {...register("password", { required: true })} />
          {errors.password && <p className="text-red-500">Password is required</p>}
        
        </fieldset>
        
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-full bg-black text-white">Register</button>
                        </form>
                        <div className='text-center mt-2'>
                <p> Have an account? <Link href="/login" className="text-blue-500 hover:underline">Login</Link></p>
                </div>
                
                    </div>
                    
                </div>
            );
        };



export default Register;