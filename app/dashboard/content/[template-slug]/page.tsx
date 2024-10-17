"use client"
import React, { useContext, useState } from 'react'
import FormSection from './_component/FormSection'
import OutputSection from './_component/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_component/TemplateListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'

interface PROPS{ 
  params:{
    'template-slug':string
  }
}

function CreatNewContent(props:PROPS) {
  
  
  const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);

  const [loading,setLoading]=useState(false );

  const [aiOutput,setAiOutput]=useState<string>('');

  const {user}=useUser();
  const router=useRouter();
  const {totalUsage,setTotalUsage}=useContext(TotalUsageContext);
  const {UpdateCreditUsage,setUpdateCreditUsage}=useContext(UpdateCreditUsageContext);

  /**
   * use to generate content from AI
   * @param FormData 
   * @returns 
   */

  const GenerateAiContent=async(FormData:any)=>{
    if(totalUsage>=10000){
      console.log("please upgrade");
      router.push ('/dashboard/billing');
      return ;
    }
    setLoading(true);
    const SelectedPrompt=selectedTemplate?.aiPrompt;
    const FinalAiPropmt=JSON.stringify(FormData)+", "+SelectedPrompt;
    const result=await chatSession.sendMessage(FinalAiPropmt);
    // console.log(result.response.text());
    setAiOutput(result?.response.text());


    await SaveInDb(JSON.stringify(FormData),selectedTemplate?.slug, result?.response.text())
    setLoading(false);

    setUpdateCreditUsage(Date.now())
  }
  const SaveInDb=async(formData:any ,slug:any,aiResp:string )=>{
    const result=await db.insert(AIOutput).values({
      formData:formData,
      templateSlug:slug,
      aiResponse:aiResp,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD/MM/YYYY'),
    })
  }


  return (
    <div className='p-5 '>
      <Link href={"/dashboard"}>
      <Button className='secondary'><ArrowLeft/>Back</Button>
      </Link>
   <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
      {/* form section */}
        <FormSection selectedTemplate={selectedTemplate}
        userFormInput={(v:any)=>
          GenerateAiContent(v)}
          loading={loading} />
      {/* output section */}
      <div className='col-span-2'>
        <OutputSection aiOutput={aiOutput}/>
      </div>
    </div>
    </div>
  )
}

export default CreatNewContent