"use client"
import Image from 'next/image'
import ppxl from '../../public/image/xl-foto.jpeg'
import instagram from "../../public/image/instagram.png"
import linkedin from "../../public/image/linkedin.png"
import github from "../../public/image/github.png"
import FlyNav from '../components/FlyNav'

export default function About() {

  return (
    <div className="bg-gradient-to-r from-purple-600 to-cyan-400 bg-anim-gradient h-screen flex items-center">
        <FlyNav></FlyNav>
        <div className='flex items-center justify-between mx-auto py-32 w-3/4 h-full'>
            <div className='w-3/5 mr-10'>
                <h1 className='text-right text-[#64E9EE] text-8xl font-extrabold'>About Me</h1>
                <p className='text-right text-white text-2xl pl-32 my-10'>A final-year computer science student at Udayana University, Indonesia.  
                    Passionate in solving problems by utilizing the latest technology.
                    Currently working on thesis. I'm also an enthusiast cat lover. Nice to know you!</p>
                <div className='flex justify-end gap-x-10'>
                    <a
                        href="https://github.com/LuqmanAristio"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Image
                            src={github}
                            alt="Instagram"
                            className='w-12'
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/luqman_aristio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Image
                            src={instagram}
                            alt="Instagram"
                            className='w-12'
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/luqmanaristio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Image
                            src={linkedin}
                            alt="Instagram"
                            className='w-12'
                        />
                    </a>
                </div>
            </div>
            <div className='w-2/5 h-full relative'>
                <Image
                    src={ppxl}
                    alt="Picture of the author"
                    className='w-full rounded-lg absolute'
                />
                <div className='bg-[#FAFDFF] w-full h-full ml-6 mt-[-1.5rem] rounded-lg'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}