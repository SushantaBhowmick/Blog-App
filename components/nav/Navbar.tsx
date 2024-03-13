"use client"

import Link from 'next/link'
import React from 'react'
import { ModeToggle } from '../ModeToggle'
import LoginForm from './LoginForm'
import { useUser } from '@/lib/store/user'
import Profile from '../Profile'

const Navbar = () => {

  const user = useUser((state)=>state.user)

  return (
    <nav className='flex items-center justify-between'>
       <div className='group'>
       <Link href={'/'} className='text-2xl font-bold'>
            DailyBlog
        </Link>
        <div className="h-1 w-0 group-hover:w-full transition-all bg-green-500 rounded-md"></div>
       </div>
       <div className='flex gap-3 items-center'>
       <ModeToggle />
     {
      user?.id ? <Profile/>: <LoginForm />
     }
       </div>
    </nav>
  )
}

export default Navbar