'use client'

import React from 'react'
import TagIcon from '@mui/icons-material/Tag';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const MyFooterComponent = () => {
  return (
    <footer className='mt-12 w-full text-softlightlilac pb-4 font-sec'>
        <div className="grid grid-cols-1 lg:flex lg:justify-between lg:mx-[5%] mx-3">
            <div className='flex softlightlilac lg:my-0 my-1'>
               <TagIcon color='inherit'/>
               <p className='ms-1'>(209)-747-9337</p>
            </div>
            <div className='flex softlightlilac lg:my-0 my-1'>
               <SendIcon color='inherit'/>
               <p className='ms-2'>a.hillstrom311@gmail.com</p>
            </div>
        
            <div className='flex softlightlilac lg:my-0 my-1'>
                <LinkedInIcon/>
                <a href='https://www.linkedin.com/in/avery-hillstrom-70b3a12ba/' target='blank' className='ms-1'>Avery Hillstrom</a>
            </div>
            <div className='flex softlightlilac lg:my-0 my-1'>
                <GitHubIcon/>
                <a href='https://github.com/SarcasticSardines' target='blank' className='ms-2'>SarcasticSardines</a>
            </div>
        </div>
    </footer>
  )
}

export default MyFooterComponent
