"use client"
import { useUser } from '@/lib/store/user';
import { supabaseBrowser } from '@/lib/supabase/browser'
import React, { useEffect } from 'react'

export default function SessionProvider() {

    const setUser = useUser((state)=>state.setUser)

    const readUserSession=async()=>{
        const supabase = supabaseBrowser();
        const {data} = await supabase.auth.getSession();
        setUser(data.session?.user)
    }

    useEffect(()=>{
        readUserSession();
    },[])
  return (
    <div></div>
  )
}
