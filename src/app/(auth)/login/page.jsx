'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleLogin = (data) => {
    console.log(data);
    }

    return (
        <div className='container mx-auto min-h-[80vh] flex items-center justify-center flex-col gap-5 bg-slate-200 p-5 rounded-lg'>
            <div className='bg-white p-5 rounded-lg'>
                <h2 className='font-bold text-3xl mb-6'>Login your account</h2>
            <form className='space-y-3' onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset">
  <legend className="fieldset-legend ">E-mail</legend>
  <input type="email" className="input" placeholder="Type your E-mail"   {...register("email", { required: true })} />
  {errors.email && <p className="text-red-500">E-mail is required</p>}

</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="password" className="input" placeholder="Type password"   {...register("password", { required: true })} />
  {errors.password && <p className="text-red-500">Password is required</p>}

</fieldset>

<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-full bg-black text-white">Login</button>
                </form>
            <div className='text-center mt-2'>
                <p>Dont have an account? <Link href="/register" className="text-blue-500 hover:underline">Register</Link></p>
                </div>
            </div>
            
        </div>
    );
};


export default Login;