import React from 'react'
import TagIcon from '@mui/icons-material/Tag';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const MyFooterComponent = () => {
  return (
    <footer className='mt-12 w-full text-softlightlilac pb-3 font-sec'>
        <div className="flex justify-between mx-48">
            <div className='flex softlightlilac'>
               <TagIcon color='inherit'/>
               <p className='ms-1'>(209)-747-9337</p>
            </div>
            <div className='flex softlightlilac'>
               <SendIcon color='inherit'/>
               <p className='ms-2'>a.hillstrom311@gmail.com</p>
            </div>
        </div>
        <div className="flex justify-between mx-48 mt-6">
            <div className='flex softlightlilac'>
                <LinkedInIcon/>
                <a href='https://www.linkedin.com/in/avery-hillstrom-70b3a12ba/' className='ms-1'>Avery Hillstrom</a>
            </div>
            <div className='flex softlightlilac'>
                <GitHubIcon/>
                <a href='https://github.com/SarcasticSardines' className='ms-2'>SarcasticSardines</a>
            </div>
        </div>
    </footer>
  )
}

export default MyFooterComponent
