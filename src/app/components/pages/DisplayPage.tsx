import React, { useRef } from 'react'
import AboutComponent from '../AboutComponent'
import CardOneComponent from '../CardOneComponent'
import { Footer, Navbar } from 'flowbite-react'
import PhishingIcon from '@mui/icons-material/Phishing';
import CardTwoComponent from '../CardTwoComponent'
import CardThreeComponent from '../CardThreeComponent'
import MyFooterComponent from '../MyFooterComponent';
import SkillsComponent from '../SkillsComponent';
import ArticleIcon from '@mui/icons-material/Article';


const DisplayPage = () => {
    const refOne = useRef<HTMLDivElement | null>(null);
    const refTwo = useRef<HTMLDivElement | null>(null);
    const refThree = useRef<HTMLDivElement | null>(null);



  return (
    <div className="bg-mymidnightblue min-h-screen">
    {/* navbar component in DisplayPage so useRef works with no errors  */}
    <Navbar className='min-w-full bg-mymidnightblue font-sec'>
        <div className=' w-full flex justify-between text-softlightlilac mt-6'>
            <div className="flex">
                <PhishingIcon fontSize='large' className=''/>
                <p className='mx-1 mt-2'>Avery Hillstrom</p>
            </div>
            <div className="flex mt-2">
                <button className='mx-10' onClick={() => refOne.current?.scrollIntoView({behavior: 'smooth'})}>
                    About
                </button>
                <button className='mx-10' onClick={() => refTwo.current?.scrollIntoView({behavior: 'smooth'})}>
                    Skills
                </button>
                <button  className='ml-10' onClick={() => refThree.current?.scrollIntoView({behavior: 'smooth'})}>
                    Work
                </button>
            </div>
        </div>
    </Navbar>
    <div className="flex flex-col justify-center text-softlightlilac mx-48 mt-28 font-main">
    {/* about section */}
    <div ref={refOne} className='my-20' >
      <AboutComponent/>
    </div>

      {/* skills */}
      <div ref={refTwo} className=' mt-36'>
        <SkillsComponent/>
      </div>

      {/* work section */}
      <div className="flex justify-center">
      <div ref={refThree} className='grid grid-cols-3 gap-56 mt-60'>
        <div>
          <CardOneComponent/>
        </div>
        <div>
            <CardTwoComponent/>
        </div>
        <div>
            <CardThreeComponent/>
        </div>
      </div>
      </div>

      <div className='mt-28 mb-16 text-center'>
        <a className='flex justify-center softlightlilac' href='/ResumeAH.pdf' target='_blank' download>
            {/* download not working? will redo in 2nd draft */}
        <ArticleIcon fontSize='large' color='inherit'/>
        <h1 className='ms-2 text-3xl font-bold'>Resume (PDF)</h1>
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
