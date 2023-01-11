import React from 'react'
import { RiWirelessChargingFill } from 'react-icons/ri'
import Discover from '../discover'

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
    </div>
  )
}
