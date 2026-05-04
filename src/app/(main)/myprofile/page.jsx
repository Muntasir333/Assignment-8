'use client';
import React, { useState } from 'react';

 import { authClient } from "@/lib/auth-client"
 import { toast } from "react-toastify";



const Profile = () => {

    const [show, setShow] = useState("");
    const [name, setName] = useState("");

    const handleChangeEmail = async (e) => {
    e.preventDefault();

    const { data, error } = await authClient.changeEmail({
      newEmail: show,
    });
    const { data: userData, error: userError } = await authClient.updateUser({
     name: name,
    });
    if (userData) {
      toast.success("Name change successful!");
    }   
    if (userError) {
      userError.message && toast.error(userError.message);
      return;
    }   

    if (data) {
      toast.success("Email change successful! Please check your new email to verify the change.");
    }   
    if (error) {
      error.message && toast.error(error.message);
      return;
    }}
    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl font-bold text-center mt-10'>My Profile</h1>
            <p className='text-center mt-5'>This is the profile page. You can view and edit your profile information here.</p>
      
            <form onSubmit={handleChangeEmail} className='max-w-md mx-auto mt-10 bg-slate-200 p-5 rounded-lg'>
                <fieldset className="fieldset">
          <legend className="fieldset-legend ">Name</legend>
          <input type="text" className="input w-full" placeholder="Type your name"  name='name'  onChange={(e) => setName(e.target.value)} />
         
        </fieldset>
         <fieldset className="fieldset">
          <legend className="fieldset-legend ">E-mail</legend>
          <input type="email" className="input w-full" placeholder="Type your E-mail"  name='email'  onChange={(e) => setShow(e.target.value)} />
         
        </fieldset>
         <button className="btn btn-primary w-full mt-5" type='submit'>
          Update Info
        </button>

            </form>
        </div>
    );
};

export default Profile;