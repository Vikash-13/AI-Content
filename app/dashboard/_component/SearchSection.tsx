import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {


  return (
    <div className=' flex flex-col  justify-center items-center p-10 bg-gradient-to-t from-purple-500 via-purple-600 to-blue-500 text-white'>
      <h3 className='text-3xl font-bold  '>Browse All Templates</h3>
      <p>What Would You like to create today</p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-lg bg-white my-5 w-[40%]'>
          <Search className='text-primary'/>
          <input type='text' placeholder='Search...' 
          onChange={(event)=>onSearchInput(event.target.value)}
          className='bg-transparent w-full text-black outline-none'></input>
        </div>
      </div>
      </div>
  )
}

export default SearchSection