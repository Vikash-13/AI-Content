import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'
export interface TEMPLATE{
  name: string,
  icon: string,
  category: string,
  slug: string,
  aiPrompt: string
  desc: string
  form?:FORM[]
};

export interface FORM{
  label:string,
  field:string,
  name:string,
  required?:boolean
};


function TemplateListSection({userSearchInput}:any) {

  const [templateList,settemplatelist]=useState(Templates)
  
  useEffect(()=>{
    if(userSearchInput){
      const filterdate=Templates.filter(item=>item.name.toLowerCase().includes(userSearchInput.toLowerCase()))
      settemplatelist(filterdate);
    }else{
      settemplatelist(Templates);
    }
  },[userSearchInput])

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
        {templateList.map((item:TEMPLATE,index:Number)=>(
         <TemplateCard {...item}/>
        ))}
    </div>
  )}

export default TemplateListSection