import React from 'react'
import FlyNav from '../components/FlyNav'
import Image from 'next/image'
import projectImg from "../../public/image/project.jpg"
import resumeImg from "../../public/image/resume.webp"

const Portfolio = () => {
  return (
    <div className='bg-[#3AAFB9] h-screen relative flex items-center'>
      <FlyNav></FlyNav>
      <div className='w-3/5 h-3/4 m-auto'>
        <div className='w-full flex justify-center items-center'>
          <hr className='w-2/6 bg-white h-1'/>
          <h3 className='text-white font-bold mx-3 text-3xl'>Portfolio</h3>
          <hr className='w-2/6 bg-white h-1'/>
        </div>

        <h1 className='text-center text-7xl text-white font-extrabold my-10'>Want to see more? Here it is!</h1>
        
        <div className='w-full h-4/6 flex justify-center items-center mt-16'>
          <div className='w-2/5 mr-10 h-full bg-white rounded-xl overflow-hidden'>
            <div className='w-full h-3/4 bg-black'>
              <Image
                src={projectImg}
                alt="resume"
                className='w-full h-full object-cover object-center'
              />
            </div>
            <div className='w-full h-1/4 flex items-center justify-center'>
              <button className='border-2 border-[#3AAFB9] text-[#3AAFB9] font-medium text-lg px-20 py-2.5 rounded-md'>My Project</button>
            </div> 
          </div>
          
          <div className='w-2/5 ml-10 h-full bg-white rounded-xl overflow-hidden'>
            <div className='w-full h-3/4 bg-black'>
              <Image
                src={resumeImg}
                alt="resume"
                className='w-full h-full object-cover object-center'
              />
            </div>
            <div className='w-full h-1/4 flex items-center justify-center'>
              <button className='border-2 border-[#3AAFB9] text-[#3AAFB9] font-medium text-lg px-20 py-2.5 rounded-md'>My Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio