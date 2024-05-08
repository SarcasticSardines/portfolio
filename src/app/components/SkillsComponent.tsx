'use client'
import React from 'react'
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';

const SkillsComponent = () => {
  return (
    <div className='flex justify-between'>
     
      <div>
        <p className='mb-5 font-bold text-2xl'>Skills</p>
        <div className="grid grid-cols-3 gap-16 softlightlilac">
            {/* <HtmlIcon fontSize='large'/>
            <CssIcon fontSize='large'/>
            <JavascriptIcon fontSize='large'/> */}
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>C#</p>

        </div>
      </div>
      <div>
        <p className='mb-5 font-bold text-2xl'>Frameworks</p>
        <div className="grid grid-cols-3 gap-16 text-lg">
            <p>Bootstrap</p>
            <p>Tailwind CSS</p>
            <p>Dotnet 7</p>
            <p>React</p>
            <p>NextJS</p>
        </div>
      </div>
        
    </div>
  )
}

export default SkillsComponent
