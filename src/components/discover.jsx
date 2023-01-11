import React from 'react'

import videos from '../data/discover.json'

import { BsPeople } from 'react-icons/bs'


export default function discover() {

  return (
    <div className='flex flex-wrap justify-start md:justify-center py-2'>
        {
            videos.map((video, index)=>(
                <div className='pr-2.5 py-2'>
                    <img 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                     alt={video.title}
                     className='h-auto w-full max-w-[full] md:max-w-[290px] rounded-md'
                    />
                   
                    <div className="flex flex-col px-2 mt-1">
                        <div className="flex justify-between text-xs text-gray-400">
                            <span className='flex'>
                               <BsPeople className='text-base mr-1 text-red-600'/> {video.watch} watching now
                            </span>
                            <span>
                                {video.time} hour ago
                            </span>
                        </div>
                        
                        <span className='font-bold'>
                         {video.title}
                        </span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
