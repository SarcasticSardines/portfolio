'use client'
import React from 'react'
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';

const SkillsComponent = () => {
  return (
    <div className='lg:flex lg:justify-between'>
     
      <div>
        <p className='pb-10 font-bold text-2xl font-sec'>Skills</p>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 lg:gap-10 text-softlightlilac text-lg text-center">
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
        <p className='pb-10 lg:pt-0 pt-28 font-bold text-2xl font-sec'>Frameworks</p>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 lg:gap-10 text-softlightlilac text-lg text-center">
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
