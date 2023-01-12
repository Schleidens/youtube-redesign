import React from 'react'
import { RiWirelessChargingFill } from 'react-icons/ri'
import { AiOutlineFire } from 'react-icons/ai'
import Discover from '../discover'
import Trending from '../trending'

export default function content() {
  return (
    <div className='py-2 px-2'>
        <div className="flex">
            <RiWirelessChargingFill className='text-red-600 text-2xl mr-2' /> 
            <span>
                Discover
            </span> 
        </div>

        <Discover />

        <div className="flex">
            <AiOutlineFire className='text-red-600 text-2xl mr-2' /> 
            <span>
                Trending
            </span> 
        </div>

        <Trending />
    </div>
  )
}
