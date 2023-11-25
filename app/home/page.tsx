"use client"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import profilePic from '../../public/image/profile.png'
import circleBg from '../../public/image/circle.png'
import TypingEffect from '../components/TypeEffect'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Project', href: '#' },
  { name: 'Resume', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white h-screen flex flex-col">
      <header className="h-20">
        <nav className="flex items-center justify-between p-8 lg:px-64 md:px-12 sm:6" aria-label="Global">
          <div className="flex lg:flex-1">
            <h3 className="-m-1.5 p-1.5 tracking-wide font-bold italic text[#0010] text-3xl space-x-8">Ur <span className='text-light-blue'>Friendly</span> Engineer</h3>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-20">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-lg font-medium leading-6 text[#0010]">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 lg:px-64 flex-1 flex">
        <div className="w-3/6 h-full">
          <div className='flex justify-center h-full flex-col'>
            <h3 className='font-semibold text-4xl'>Hello I’m</h3>
            <h1 className='font-extrabold text-6xl text-light-blue my-8'>Luqman Aristio</h1>
            <TypingEffect></TypingEffect>
            <p className='text-lg my-6'>I'm an engineer who love to crafts innovative solutions to tackle technological challenges. 
              I believe that in an increasingly connected world, code is the language that empowers us to shape the future</p>
            <div>
              <button className='px-12 py-3 bg-dark-blue text-white font-medium border-2 border-dark-blue rounded hover:bg-[#106168]'>My Project</button>
              <button className='px-14 ml-5 py-3 font-medium rounded border-2 border-slate-500 text-slate-800'>Contact</button>
            </div>
          </div>
        </div>
        <div className='w-3/6 h-full ml-5 flex justify-center relative'>
            <Image
              src={circleBg}
              alt="Circle"
              className='object-contain'
            />
            <Image
              src={profilePic}
              alt="Picture of the author"
              className='absolute bottom-0 w-3/4'
            />
        </div>
      </div>
    </div>
  )
}