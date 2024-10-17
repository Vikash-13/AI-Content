// import { Search } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import SignOutButton from './SignOut'
// import { SignOutButton } from '@clerk/nextjs'
function Header() {
  return (
    <div className='p-3 shadow-sm border-b-2 flex bg-white'>
  <div className='w-full flex justify-between items-center'>
    <div className='flex justify-start'>
      <Image src={'/logo.svg'} alt='logo' width={120} height={120}></Image>
    </div>
    <h2 className='hidden bg-blue-600  p-1 rounded-lg text-sm text-white md:flex text-center'>
      Join Membership just with 9.99$/Month🔥
    </h2>
  </div>
  <div>
    <SignOutButton/>
  </div>
</div>

  )
}

export default Header