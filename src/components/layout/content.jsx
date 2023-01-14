import React from 'react'
import { RiWirelessChargingFill } from 'react-icons/ri'
import { AiOutlineFire } from 'react-icons/ai'
import { FiCompass } from 'react-icons/fi'
import Discover from '../discover'
import Trending from '../trending'
import Latest from '../latest'

export default function content() {
  return (
    <div className='py-2 px-2'>
        <div className="flex mb-3">
            <RiWirelessChargingFill className='text-red-600 text-2xl mr-2' /> 
            <span>
                Discover
            </span> 
        </div>

        <Discover />

        <div className="flex mb-3">
            <AiOutlineFire className='text-red-600 text-2xl mr-2' /> 
            <span>
                Trending
            </span> 
        </div>

        <Trending />

        <div className="flex mb-3">
            <FiCompass className='text-red-600 text-2xl mr-2' /> 
            <span>
                Latest
            </span> 
        </div>

        <Latest />
    </div>
  )
}
