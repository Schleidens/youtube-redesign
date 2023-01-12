import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FiCompass } from 'react-icons/fi'
import  { AiOutlineFire } from 'react-icons/ai'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { BsCollectionPlay } from 'react-icons/bs'
import { RxCounterClockwiseClock } from 'react-icons/rx'
import { RxClock } from 'react-icons/rx'
import { BsHeart } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { RiErrorWarningLine } from 'react-icons/ri'

export default function sidebar() {
  return (
    <div className='hidden sm:block dark fixed left-0 h-screen px-4 py-4 text-xl border-r border-gray-700 w-14'>
        <RxHamburgerMenu className='hover:text-red-600 easy-in duration-300'/>

        <div className="flex flex-col my-8">
            <FiCompass className='my-1.5 hover:text-red-600 easy-in duration-300' />
            <AiOutlineFire className='my-1.5 hover:text-red-600 easy-in duration-300' />
            <AiOutlinePlayCircle className='my-1.5 hover:text-red-600 easy-in duration-300' />
        </div>

        <div className="flex flex-col my-4">
            <BsCollectionPlay className='my-1.5 hover:text-red-600 easy-in duration-300' />
            <RxCounterClockwiseClock className='my-1.5 hover:text-red-600 easy-in duration-300' />
            <RxClock className='my-1.5 hover:text-red-600 easy-in duration-300' />
            <BsHeart className='my-1.5 hover:text-red-600 easy-in duration-300' />
        </div>

        <div className="flex flex-col bottom-0 absolute mb-6 easy-in duration-300">
            <FiSettings className='my-1.5 hover:text-red-600 easy-in duration-300' />
            <RiErrorWarningLine className='my-1.5 hover:text-red-600 easy-in duration-300' />
        </div>
    </div>
  )
}
