import React, { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { auth } from '../../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'


function Login() {
    const navigat = useNavigate()
    const [error, setError] = useState('')
    const [value, setValue] = useState({
        email: '',
        password: ''

    })

    const submitHandle = (e) => {

        if (!value.email || !value.password) {
            setError("please fill all field")
            return;
        }

        signInWithEmailAndPassword(auth, value.email, value.password).then(async (res) => {
            navigat('/')
            setError('')
            console.log(res.user);
        }).catch((error) => {
            setError("Error" + error.message)
        })
        console.log(value);





    }

    return (
        <div className=' w-full h-screen bg-black relative  text-white flex items-center justify-center'>
            <div className=' w-full max-w-80 sm:max-w-sm md:max-w-md lg:max-w-lg h-[auto] pb-3 bg-purple-700 rounded-lg flex flex-col  gap-3'>
                <h1 className=' text-center font-extrabold text-[22px]'>Login</h1>
                <Input placeholder='Enter your email' type='email' label='Email' className=' my-2' onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))} />
                <Input placeholder='Enter your password' type='password' label='Password' onChange={(e) => setValue((prev) => ({ ...prev, password: e.target.value }))} />
                <div className=' text-center'>{error}</div>
                <Button className=' mx-auto my-4' children='Login' onClick={submitHandle} />
                <h1 className=' text-center'>Don't have any account! <Link className=' text-[#4995e7] font-bold' to="/signup">Signup</Link></h1>

            </div>

         

        </div>
    )
}

export default Login