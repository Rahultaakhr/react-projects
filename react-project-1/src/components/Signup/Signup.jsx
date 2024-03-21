import React, { useState } from 'react'
import Input from '../Input/Input';
import Button from '../Button/Button';
import { auth } from '../../firebase/firebase';
import { createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const navigat = useNavigate()
   
    const [value, setValue] = useState({
        name: '',
        email: "",
        password: ""
    })

    const [error, setError] = useState("")
    const submitHandle =  () => {

        if (!value.name || !value.email || !value.password) {
            setError("please fill all field")
        } else {
             createUserWithEmailAndPassword(auth, value.email, value.password).then(async(res) => {
                console.log(res.user);
            await    updateProfile(res.user,{displayName:value.name})
                setError('')
            }).catch((error) => {
                setError("Error" + error.message)
            })
            console.log(value);
            navigat('/')

        }


    }
    return (
        <div className=' w-full h-screen bg-black text-white flex items-center justify-center'>
            <div className=' w-full max-w-80 sm:max-w-sm md:max-w-md lg:max-w-lg h-[auto] py-2 bg-purple-700 rounded-lg flex flex-col  gap-3'>
                <h1 className=' text-center font-extrabold text-[22px]'>Sign Up</h1>
                <Input placeholder='Enter your name' type='text' label='Name' className=' my-2' onChange={(e) => setValue((prev) => ({ ...prev, name: e.target.value }))} />
                <Input placeholder='Enter your email' type='email' label='Email' className=' my-2' onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))} />
                <Input placeholder='Enter your password' type='password' label='Password' className=' my-2' onChange={(e) => setValue((prev) => ({ ...prev, password: e.target.value }))} />
                <div className=' text-center'>
                    {error}
                </div>
                <Button className=' mx-auto mb-2' children='Signup' onClick={submitHandle} />
                <h1 className=' text-center'>Already have an account? <Link className=' text-[#4995e7] font-bold' to="/login">Login</Link></h1>

            </div>
        </div>
    )
}

export default Signup