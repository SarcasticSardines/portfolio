'use client'

import React, { useRef } from 'react'
import AboutComponent from '../AboutComponent'
import CardOneComponent from '../CardOneComponent'
import { Navbar } from 'flowbite-react'
import PhishingIcon from '@mui/icons-material/Phishing';
import CardTwoComponent from '../CardTwoComponent'
import CardThreeComponent from '../CardThreeComponent'
import MyFooterComponent from '../MyFooterComponent';
import SkillsComponent from '../SkillsComponent';
import ArticleIcon from '@mui/icons-material/Article';
import Link from 'next/link'


const DisplayPage = () => {



  return (
    <div className="gradBg min-h-screen">
    {/* navbar component in DisplayPage so useRef works with no errors  */}
    {/* class="px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 min-w-full bg-mymidnightblue font-sec" */}
    {/* class="mx-auto flex flex-wrap items-center justify-between container" */}
    <Navbar className='min-w-full bg-lightmidnightblue font-sec navMarg flex justify-between text-softlightlilac mt-6'>
            <Navbar.Brand href='#' className="flex">
                <PhishingIcon fontSize='large' className=''/>
                <p className='mx-1 text-lg'>Avery Hillstrom</p>
            </Navbar.Brand>
            <Navbar.Toggle className='toggleLilac' />
      <Navbar.Collapse className="mt-1">
        <Navbar.Link className='mx-5 text-softlightlilac' as={Link} href='#aboutme'  >
          About
        </Navbar.Link>
        <Navbar.Link className='mx-5 text-softlightlilac' as={Link} href='#myskills'  >
          Skills
        </Navbar.Link>
        <Navbar.Link className='mx-5 text-softlightlilac' as={Link} href='#mywork'  >
          Work
          </Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
    <div className="flex flex-col justify-center text-softlightlilac lg:mx-[10%] mx-7 mt-28 font-main">
    {/* about section */}
    <div id='aboutme' className='py-10 my-10' >
      <AboutComponent/>
    </div>

      {/* skills */}
      <div id='myskills' className='pt-10 mt-28 lightBorder'>
        <SkillsComponent/>
      </div>

      {/* work section */}
      <div id='mywork' className='pt-32 mt-28'>
      <p className="pb-10 font-bold text-2xl font-sec">Projects</p>

      <div className="flex justify-center">
      <div className='lg:grid lg:grid-cols-3 xl:gap-56 lg:gap-32'>
        <div className='lg:mb-0 mb-20'>
          <CardOneComponent/>
        </div>
        <div className='lg:my-0 my-20'>
            <CardTwoComponent/>
        </div>
        <div>
            <CardThreeComponent/>
        </div>
      </div>
      </div>
      </div>

      <div className='mt-32 mb-20 text-center'>
        <a className='flex justify-center softlightlilac pulse' href='/pdfs/ResumeAH.pdf' target='_blank' rel='noopener noreferrer' download='ResumeAH'>
          {/* pulse wickedcss removed due to screen flickering error? */}
        <ArticleIcon fontSize='large' color='inherit' className=''/>
        <h1 className='ms-2 text-3xl font-bold font-sec'>Resume (PDF)</h1>
        </a>
      </div>
    </div>

    <div>
        <MyFooterComponent/>
    </div>

  </div>
  )
}

export default DisplayPage
