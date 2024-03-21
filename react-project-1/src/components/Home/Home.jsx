import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase/firebase'



export default function Home() {
    const navigat=useNavigate()

    const [userName, setUserName] = useState("")
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          setUserName(user.displayName)
          navigat('/')

        }
  
      })
  
    }, [])
  
  

//    console.log(...props);
  


    return (
        <div className=' flex flex-col w-full h-screen relative items-center justify-center'>
            <div className=' flex flex-col  lg:w-[500px] rounded-lg items-center gap-4'>
                <Link to='/login'><button className='  bg-purple-600 rounded-md w-32 py-3 text-white text-[20px]'>Login</button></Link>
                <Link to='/signup'><button className=' bg-purple-600 rounded-md w-32 py-3 text-white text-[20px]'>Signup</button></Link>
                <h1>{userName? `Welcome-${userName}`:"Login Please"}</h1>
            </div>

            <div className=' absolute w-full z-[-10]'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZ-nMX5VKnAclI5FBTJrAZ0TgxKX7c-h2DQ&usqp=CAU" className=' w-full h-screen' alt="" /></div>



        </div>
    )
}
