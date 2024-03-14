"use client"
import { cn } from '@/lib/utils';
import { PersonIcon, ReaderIcon } from '@radix-ui/react-icons'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Navlinks() {

    const pathName = usePathname();

    const links =[
        {
            href:"/dashboard",
            text:"dashborad",
            Icon:ReaderIcon
        },
        {
            href:"/dashboard/user",
            text:"user",
            Icon:PersonIcon
        },
    ];


  return (
    <div className='flex items-center gap-5 border-b pb-2'>
        {
            links.map((link,i)=>{
                const Icon = link.Icon
                return <Link href={link.href} key={i} 
                className={cn("flex items-center gap-1 hover:underline transition-all",{"text-green-500 ":pathName===link.href})}>
                    <Icon /> / {link.text}
                </Link>
            })
        }
    </div>
  )
}
