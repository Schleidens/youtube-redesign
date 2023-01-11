import React from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'
import { IoMdNotificationsOutline } from 'react-icons/io'

export default function navbar() {
  return (
    <div className='dark flex justify-between px-2 py-4 top-0 sticky w-full border-b border-gray-700'>
        <AiFillYoutube className='text-red-600 text-2xl' />

        <input type="text" className='bg-transparent outline-none w-full text-center' placeholder='Type to search' />

        <div className="flex text-xl">
            <div className="flex">
            <AiOutlinePlusCircle className='mx-1.5' />
            <CgMenuGridO className='mx-1.5' />
            <IoMdNotificationsOutline className='mx-1.5' />
            </div>
            
            <div className="ml-4">
            <a href="https://github.com/Schleidens" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/53914451?v=4" className='h-auto w-12 rounded-lg' alt="" />
            </a>
            </div>
        </div>
    </div>
  )
}
