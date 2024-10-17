"use client"
import { FileClock, Home, Icon, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack'
// import UsageTrack from './UsageTrack'


function SideNav() {

  
  const MenuList=[
    {
      name:"Home",
      icon:Home,
      path:'/dashboard'
    },
    {
      name:"History",
      icon:FileClock,
      path:'/dashboard/history'
    },
    {
      name:"Billing",
      icon:WalletCards,
      path:'/dashboard/billing'
    },
    {
      name:"Setting",
      icon:Settings,
      path:'/dashboard/setting'
    },
  ]

  const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])

  return (
    <div className='h-screen p-5 relative shadow-sm border bg-white'>
      <div className='flex justify-center'>
       <Image src={'/logo.svg'} alt='logo' width={120} height={120}></Image>
       </div>

       <hr className='my-5 border'></hr>
              {/* Menu */}
        <div className='mt-3'>
          {MenuList.map((menu,index)=>(
            <Link href={menu.path}>   
             <div className={`flex mb-2 gap-2 p-3 hover:bg-primary hover:text-white hover:rounded-lg hover:cursor-pointer items-center
              ${path==menu.path && 'bg-primary text-white rounded-lg'}`
            }>
              <menu.icon className='h-6 w-6'/>
              <h2 className='text-lg'>{menu.name}</h2>
            </div>
            </Link>
          ))}
        </div>
        <div className='absolute bottom-10 w-full left-0'>
          <UsageTrack/>
        </div>
    </div>
  )
}

export default SideNav