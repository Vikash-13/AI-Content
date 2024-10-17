"use client"
import React, { useState } from 'react'
import SearchSection from './_component/SearchSection'
import TemplateListSection from './_component/TemplateListSection'

function Dashboard() {

  const [userSearchInput,setuserSearchInput]=useState<string>()
  return (
    <div>
      <SearchSection onSearchInput={(value:string)=>setuserSearchInput(value)}/>
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  )
}

export default Dashboard